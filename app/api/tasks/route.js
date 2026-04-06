import { NextResponse } from "next/server";
import prisma from "../../../lib/db";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const search = searchParams.get("search") || "";
    const page = parseInt(searchParams.get("page")) || 1;
    const limit = parseInt(searchParams.get("limit")) || 5;
    const skip = (page - 1) * limit;

    const where =
      search.trim().length >= 2
        ? {
            OR: [
              { title: { contains: search, mode: "insensitive" } },
              { description: { contains: search, mode: "insensitive" } },
              { category: { contains: search, mode: "insensitive" } },
              { assigned_by: { contains: search, mode: "insensitive" } },
              { tags: { has: search } },
            ],
          }
        : {};
        
    const tasks = await prisma.task.findMany({
      where: where,
      skip: skip,
      take: limit,
      orderBy: { createdAt: "desc" },
    });

    // 3. Get the COUNT of tasks that match that filter
    const totalCount = await prisma.task.count({ where: where });

    const totalPages = Math.ceil(totalCount / limit);

    return NextResponse.json(
      {
        success: true,
        tasks,
        pagination: {
          total: totalCount,
          page,
          limit,
          totalPages: totalPages || 1,
        },
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error fetching tasks:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch tasks" },
      { status: 500 },
    );
  }
}

export async function POST(request) {
  try {
    const contentType = request.headers.get("content-type");

    let data;

    if (contentType?.includes("application/json")) {
      // Handle JSON request
      const body = await request.json();
      data = {
        title: body.title,
        assigned_by: body.assigned_by,
        description: body.description,
        category: body.category || "General",
        due_date: body.due_date ? new Date(body.due_date) : null,
        link_url: body.link_url,
        image_url: body.image_url,
        is_completed: false,
        priority: body.priority || "low",
        tags: body.tags || [],
      };
    } else {
      // Handle FormData request (backward compatibility)
      const formData = await request.formData();
      data = {
        title: formData.get("title"),
        assigned_by: formData.get("assigned_by"),
        description: formData.get("description"),
        category: formData.get("category") || "General",
        due_date: formData.get("due_date")
          ? new Date(formData.get("due_date"))
          : null,
        link_url: formData.get("link_url"),
        image_url: formData.get("image_url"),
        is_completed: false,
        priority: formData.get("priority") || "low",
        tags: formData.getAll("tags") || [],
      };
    }

    // Save to Database
    const task = await prisma.task.create({
      data,
    });

    return NextResponse.json({ success: true, task }, { status: 201 });
  } catch (error) {
    console.error("Error creating task:", error);
    return NextResponse.json(
      { success: false, error: "Failed to create task" },
      { status: 500 },
    );
  }
}
