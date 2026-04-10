import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../lib/db";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/options";
import { Prisma } from "@prisma/client";

interface CreateTaskBody {
  title: string;
  assigned_by?: string;
  description?: string;
  category?: string;
  priority?: "Low" | "Medium" | "High";
  tags?: string[];
  due_date?: string;
}

export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if ((!session?.user as any).id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const search = searchParams.get("search") || "";
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "5");
    const skip = (page - 1) * limit;

    const where: Prisma.TaskWhereInput = {
      user_id: (session.user as any).id,
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
    console.error("GET ERROR:", error);
    return NextResponse.json(
      { error: "Failed to fetch tasks" },
      { status: 500 },
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if ((!session?.user as any).id) {
      return NextResponse.json(
        { error: "Please login first" },
        { status: 401 },
      );
    }

    const body: CreateTaskBody = await request.json();

    const task = await prisma.task.create({
      data: {
        title: body.title,
        assigned_by: body.assigned_by || "",
        description: body.description || "",
        category: body.category || "General",
        priority: body.priority || "Low",
        tags: body.tags || [],
        due_date: body.due_date ? new Date(body.due_date) : null,
        user_id: (session.user as any).id, 
      },
    });

    return NextResponse.json({ success: true, task }, { status: 201 });
  } catch (error) {
    const err = error as Error;
    console.error("POST ERROR:", err.message);
    return NextResponse.json(
      { error: "Failed to create task" },
      { status: 500 },
    );
  }
}
