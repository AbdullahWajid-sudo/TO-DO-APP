"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import TaskModal from "../components/TaskModal";
import TaskCard from "../components/TaskCard";

const tagColors = [
  "bg-tertiary-fixed text-on-tertiary-fixed-variant",
  "bg-blue-100 text-blue-800",
  "bg-green-100 text-green-800",
  "bg-purple-100 text-purple-800",
  "bg-pink-100 text-pink-800",
  "bg-yellow-100 text-yellow-800",
  "bg-indigo-100 text-indigo-800",
  "bg-red-100 text-red-800",
  "bg-orange-100 text-orange-800",
  "bg-teal-100 text-teal-800",
];

export default function Page() {
  const router = useRouter();
  const [tasks, setTasks] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  useEffect(() => {
    const fetchTasks = async () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth", // 'smooth' for a nice slide, 'instant' for a fast jump
      });
      setLoading(true);
      try {
        const response = await fetch(
          `/api/tasks?page=${page}&limit=5&search=${debouncedSearch}`,
        );
        const data = await response.json();
        if (data.success) {
          setTasks(data.tasks);
          setTotalPages(data.pagination.totalPages);
        }
      } catch (error) {
        console.error("Error fetching tasks:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchTasks();
  }, [page, debouncedSearch]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchTerm);
      setPage(1); // Reset to page 1 when searching
    }, 500);

    return () => clearTimeout(timer);
  }, [searchTerm]);

  const filterTasks = tasks.filter((task) => {
    if (filter === "completed") return task.is_completed === true;
    if (filter === "in-process") return task.is_completed === false;
    return true;
  });

  const openAddModal = () => {
    setSelectedTask(null);
    setIsModalOpen(true);
  };

  // Open modal for EDIT
  const openEditModal = (task) => {
    setSelectedTask(task);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  //

  const handleComplete = async (taskId) => {
    try {
      const response = await fetch(`/api/tasks/${taskId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ is_completed: true }),
      });

      if (response.ok) {
        // Update the task in the list
        setTasks(
          tasks.map((task) =>
            task.id === taskId ? { ...task, is_completed: true } : task,
          ),
        );
        router.refresh();
      }
    } catch (error) {
      console.error("Error completing task:", error);
    }
  };

  const handleDelete = async (taskId) => {
    try {
      const response = await fetch(`/api/tasks/${taskId}`, {
        method: "DELETE",
      });

      if (response.ok) {
        // Remove the task from the list
        setTasks(tasks.filter((task) => task.id !== taskId));
        router.refresh();
      }
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  const handleSubmit = async (formData) => {
    try {
      if (selectedTask) {
        // Update existing task
        const response = await fetch(`/api/tasks/${selectedTask.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          const data = await response.json();
          setTasks(
            tasks.map((task) =>
              task.id === selectedTask.id ? data.task : task,
            ),
          );
          router.refresh();
        }
      } else {
        // Add new task
        const response = await fetch("/api/tasks", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          const data = await response.json();
          setTasks([data.task, ...tasks]);
          router.refresh();
        }
      }
    } catch (error) {
      console.error("Error submitting task:", error);
    }
  };

  const activeTasks = tasks.filter((t) => !t.is_completed).length;
  const dueToday = tasks.filter((t) => {
    if (!t.due_date) return false;
    const today = new Date().toDateString();
    return new Date(t.due_date).toDateString() === today;
  }).length;

  const formatDate = (date) => {
    if (!date) return "No due date";
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    }).format(new Date(date));
  };

  const categoryColors = {
    web: "bg-web text-white",
    general: "bg-general text-white",
    admin: "bg-admin text-white",
    android: "bg-android text-white",
  };

  const priorityColors = {
    low: "bg-surface-container-high text-on-surface-variant",
    medium: "bg-secondary-fixed text-on-secondary-fixed-variant",
    high: "bg-error-container text-on-error-container",
  };

  return (
    <>
      <main className="flex-1 px-8 md:px-16 pt-8 pb-20 bg-surface-container text-on-surface mt-16">
        {loading && (
          <div className="absolute inset-0 z-[100] flex flex-col items-center justify-center bg-white/60 backdrop-blur-sm rounded-2xl">
            {/* High-visibility Spinner */}
            <div className="relative h-12 w-12">
              {/* Background Ring */}
              <div className="absolute inset-0 rounded-full border-4 border-slate-200"></div>
              {/* Animated Top Ring (Using Indigo if brand-shopify fails) */}
              <div className="absolute inset-0 animate-spin rounded-full border-4 border-t-indigo-600 border-r-transparent border-b-transparent border-l-transparent"></div>
            </div>
            <p className="mt-4 text-xs font-bold tracking-widest text-slate-500 uppercase animate-pulse">
              Updating Tasks...
            </p>
          </div>
        )}
        <header className="max-w-7xl mx-auto mb-4">
          <p className="font-manrope uppercase tracking-widest text-[0.6875rem] font-bold text-primary mb-2">
            WORKSPACE OVERVIEW
          </p>
          <h1 className="text-5xl md:text-6xl font-bold text-on-surface tracking-tighter mb-6 leading-none">
            Focus on the <br />
            Significant.
          </h1>
          <div className="h-1 w-24 bg-primary mb-6"></div>
          <div className="flex flex-wrap gap-4 items-center">
            <button
              onClick={openAddModal}
              className="bg-primary text-white px-4 py-1.5 cursor-pointer rounded-full text-[0.6875rem] font-bold tracking-widest uppercase hover:opacity-90 transition-opacity flex items-center gap-2"
            >
              <span className="material-symbols-outlined text-[18px]">add</span>
              Add New Task
            </button>
          </div>
          <div className="flex flex-wrap gap-4 mt-4 items-center">
            <span className="bg-secondary-fixed text-on-secondary-fixed-variant px-4 py-1.5 rounded-full text-[0.6875rem] font-bold tracking-widest uppercase">
              {activeTasks} ACTIVE TASKS
            </span>
            <span className="bg-surface-container-high text-on-surface-variant px-4 py-1.5 rounded-full text-[0.6875rem] font-bold tracking-widest uppercase">
              {dueToday} DUE TODAY
            </span>
          </div>
        </header>

        <section className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-4">
            <h2 className="font-manrope text-4xl font-bold tracking-tight">
              Current Priorities
            </h2>
          </div>
          <div className="relative w-full max-w-full mb-6">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
              search
            </span>
            <input
              type="text"
              placeholder="Search tasks, categories, or tags..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-xl focus:ring-2 focus:ring-brand-shopify outline-none transition-all"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                ✕
              </button>
            )}
          </div>
          <div className="flex gap-4 mb-8 border-b border-gray-300">
            {["all", "in-process", "completed"].map((tab) => (
              <button
                key={tab}
                onClick={() => setFilter(tab)}
                className={`pb-2 px-1 capitalize text-sm font-medium transition-all ${
                  filter === tab
                    ? "border-b-2 border-brand-shopify text-brand-shopify"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                {tab.replace("-", " ")}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 ">
            <div
              className={`${loading ? "opacity-50" : "opacity-100"} transition-opacity duration-300`}
            >
              {filterTasks.map((task) => (
                <TaskCard
                  key={task.id}
                  task={task}
                  onEdit={openEditModal}
                  onComplete={handleComplete}
                  onDelete={handleDelete}
                  formatDate={formatDate}
                  categoryColors={categoryColors}
                  priorityColors={priorityColors}
                  tagColors={tagColors}
                />
              ))}

              {tasks.length === 0 && (
                <div className="text-center py-20 bg-surface-container-lowest rounded-2xl border-2 border-dashed border-outline-variant/20">
                  <p className="text-on-surface-variant font-medium">
                    No tasks found. Start by adding one!
                  </p>
                  <button
                    onClick={openAddModal}
                    className="inline-block mt-4 bg-primary text-white px-6 py-2 rounded-full text-sm font-bold hover:opacity-90 transition-opacity"
                  >
                    + Add New Task
                  </button>
                </div>
              )}
            </div>
            <div className="flex justify-between items-center gap-5.5 md:justify-end  ">
              <button
                disabled={page <= 1}
                onClick={() => {
                  setPage((prev) => prev - 1);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="flex items-center gap-2 px-6 py-2 bg-white border border-slate-300 rounded-xl text-xs text-slate-500 font-bold hover:bg-slate-50 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
              >
                <span className="material-symbols-outlined text-base">
                  chevron_left
                </span>
                <span>Previous</span>
              </button>

              <span className="text-base font-manrope text-xs text-on-surface">
                Page {page} of {totalPages}
              </span>

              <button
                disabled={page >= totalPages}
                onClick={() => {
                  setPage((prev) => prev + 1);
                  window.scrollTo({ top: 0, behavior: "smooth" }); // Adds a smooth scroll to the top
                }}
                className="flex items-center gap-2 px-6 py-2 bg-white border border-slate-300 rounded-xl text-xs text-slate-500 font-bold hover:bg-slate-50 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
              >
                <span>Next</span>
                <span className="material-symbols-outlined text-base">
                  chevron_right
                </span>
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Task Modal */}
      <TaskModal
        isOpen={isModalOpen}
        onClose={closeModal}
        task={selectedTask}
        onSubmit={handleSubmit}
      />
    </>
  );
}
