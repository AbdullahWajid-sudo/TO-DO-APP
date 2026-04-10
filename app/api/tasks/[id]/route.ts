import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../lib/db";

interface RouteParams {
  params: Promise<{ id: string }>;
}


interface UpdateTaskBody {
  title?: string;
  description?: string;
  assigned_by?: string;
  category?: string;
  priority?: string;
  tags?: string[];
  due_date?: string;
  image_url?: string;
  link_url?: string;
}

interface PatchTaskBody {
  is_completed: boolean;
}

export async function GET(request: NextRequest, { params }: RouteParams) {
  try {
    const { id } = await params;
    const task = await prisma.task.findUnique({
      where: { id },
    });

    if (!task) {
      return NextResponse.json(
        { success: false, error: "Task not found" },
        { status: 404 },
      );
    }

    return NextResponse.json({ success: true, task }, { status: 200 });
  } catch (error) {
    console.error("Error fetching task:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch task" },
      { status: 500 },
    );
  }
}

export async function PUT(request: NextRequest, { params }: RouteParams) {
  try {
    const { id } = await params;
    const body: UpdateTaskBody = await request.json();

    const {
      title,
      description,
      assigned_by,
      category,
      priority,
      tags,
      due_date,
      image_url,
      link_url,
    } = body;

    const task = await prisma.task.update({
      where: { id },
      data: {
        title,
        description,
        assigned_by,
        category,
        priority,
        tags,
        due_date: due_date ? new Date(due_date) : null,
        image_url,
        link_url,
      },
    });

    return NextResponse.json({ success: true, task }, { status: 200 });
  } catch (error) {
    console.error("Error updating task:", error);
    return NextResponse.json(
      { success: false, error: "Failed to update task" },
      { status: 500 },
    );
  }
}

export async function PATCH(request: NextRequest, { params }: RouteParams) {
  try {
    const { id } = await params;
    const body: PatchTaskBody = await request.json();
    const { is_completed } = body;

    const task = await prisma.task.update({
      where: { id },
      data: { is_completed },
    });

    return NextResponse.json({ success: true, task }, { status: 200 });
  } catch (error) {
    console.error("Error updating task:", error);
    return NextResponse.json(
      { success: false, error: "Failed to update task" },
      { status: 500 },
    );
  }
}

export async function DELETE(request: NextRequest, { params }: RouteParams) {
  try {
    const { id } = await params;

    await prisma.task.delete({
      where: { id },
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Error deleting task:", error);
    return NextResponse.json(
      { success: false, error: "Failed to delete task" },
      { status: 500 },
    );
  }
}
