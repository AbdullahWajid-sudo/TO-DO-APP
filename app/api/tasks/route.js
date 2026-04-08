import { NextResponse } from "next/server";
import prisma from "../../../lib/db";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/options";

export async function GET(request) {
  try {
    // 1. Get the session to know WHO is asking
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const search = searchParams.get("search") || "";
    const page = parseInt(searchParams.get("page")) || 1;
    const limit = parseInt(searchParams.get("limit")) || 5;
    const skip = (page - 1) * limit;

    // 2. Add user_id to the 'where' clause so I only see MY tasks
    const where = {
      user_id: session.user.id, // THE SECURITY LOCK
      ...(search.trim().length >= 2
        ? {
            OR: [
              { title: { contains: search, mode: "insensitive" } },
              { description: { contains: search, mode: "insensitive" } },
              { category: { contains: search, mode: "insensitive" } },
              { assigned_by: { contains: search, mode: "insensitive" } },
            ],
          }
        : {}),
    };

    const [tasks, totalCount] = await Promise.all([
      prisma.task.findMany({
        where,
        skip,
        take: limit,
        orderBy: { createdAt: "desc" },
      }),
      prisma.task.count({ where }),
    ]);

    const totalPages = Math.ceil(totalCount / limit);

    return NextResponse.json({
      success: true,
      tasks,
      pagination: {
        total: totalCount,
        page,
        limit,
        totalPages: totalPages || 1,
      },
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch tasks" },
      { status: 500 },
    );
  }
}

export async function POST(request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json(
        { error: "Please login first" },
        { status: 401 },
      );
    }

    const body = await request.json(); // Assuming JSON for modern React use

    const task = await prisma.task.create({
      data: {
        title: body.title,
        assigned_by: body.assigned_by,
        description: body.description,
        category: body.category || "General",
        priority: body.priority || "Low",
        tags: body.tags || [],
        due_date: body.due_date ? new Date(body.due_date) : null,
        // ✅ Automatically link the task to the logged-in user
        user_id: session.user.id,
      },
    });

    return NextResponse.json({ success: true, task }, { status: 201 });
  } catch (error) {
    console.error("POST ERROR:", error.message);
    return NextResponse.json(
      { error: "Failed to create task" },
      { status: 500 },
    );
  }
}
