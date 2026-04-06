// components/TaskCard.js
import React from "react";

const TaskCard = ({
  task,
  onEdit,
  onComplete,
  onDelete,
  formatDate,
  categoryColors,
  priorityColors,
  tagColors,
}) => {
  return (
    <div className="group flex flex-col md:flex-row bg-surface-container-low mb-10 rounded-[24px] overflow-hidden transition-all duration-300 hover:shadow-2xl hover:bg-surface-container-lowest border border-outline-variant/10">
      {/* LEFT SIDE: Image Section */}
      <div className="w-full md:w-80 h-64 md:h-auto relative overflow-hidden bg-slate-900">
        <img
          alt={task.title}
          className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 ${
            task.is_completed ? "grayscale opacity-50" : "opacity-70"
          }`}
          src={
            task.image_url ||
            "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=2072&auto=format&fit=crop"
          }
        />

        {/* Overlays on Image */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#131b2e]/80 via-transparent to-transparent"></div>

        {/* Status Badge */}
        <div className="absolute top-4 left-4">
          <span
            className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-tighter ${
              task.is_completed
                ? "bg-green-100 text-green-700"
                : "bg-pink-100 text-pink-600"
            }`}
          >
            {task.is_completed ? "Completed" : "Admin"}
          </span>
        </div>

        {/* Category Badge on Image */}
        <div className="absolute bottom-4 left-4">
          <span
            className={`${categoryColors[task.category?.toLowerCase()] || "bg-primary text-white"} px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest`}
          >
            {task.category}
          </span>
        </div>
      </div>

      {/* RIGHT SIDE: Content Section */}
      <div className="flex-1 p-8 md:p-10 flex flex-col">
        {/* Header: Title and Date */}
        <div className="flex justify-between items-start mb-4">
          <h3
            className={`text-3xl font-extrabold tracking-tighter leading-tight max-w-[75%] ${
              task.is_completed
                ? "line-through text-gray-400"
                : "text-on-surface"
            }`}
          >
            {task.title}
          </h3>
          <span className="text-primary font-bold text-sm whitespace-nowrap">
            {formatDate(task.due_date)}
          </span>
        </div>

        {/* Assigned Info */}
        <div className="flex items-center gap-2 mb-6">
          <div className="w-6 h-6 rounded-full bg-surface-dim flex items-center justify-center">
            <span className="material-symbols-outlined text-[14px]">
              person
            </span>
          </div>
          <p className="text-sm font-medium text-on-surface-variant">
            Assigned by:{" "}
            <span className="font-bold text-on-surface">
              {task.assigned_by || "Unknown"}
            </span>
          </p>
        </div>

        {/* Priorities and Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          <span
            className={`${priorityColors[task.priority?.toLowerCase()] || "bg-slate-100 text-slate-600"} px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border border-black/5`}
          >
            Priority {task.priority || "Low"}
          </span>
          {task.tags?.map((tag, index) => (
            <span
              key={index}
              className={`${tagColors[index % tagColors.length]} px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border border-black/5`}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Description */}
        <p
          className={`text-sm leading-relaxed mb-8 line-clamp-3 ${
            task.is_completed ? "text-gray-400" : "text-on-surface-variant/80"
          }`}
        >
          {task.description ||
            "No additional description provided for this priority task."}
        </p>

        {/* Resource Link */}
        {task.link_url && (
          <a
            href={task.link_url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary text-[10px] font-black tracking-widest uppercase hover:underline mb-8"
          >
            DOCUMENTATION LINK
            <span className="material-symbols-outlined text-[14px]">
              open_in_new
            </span>
          </a>
        )}

        {/* Footer Actions - Matches Button UI from Image */}
        <div className="mt-auto pt-8 border-t border-outline-variant/10 flex flex-wrap items-center justify-between gap-4">
          <div className="flex gap-3">
            <button
              onClick={() => onEdit(task)}
              className="px-8 py-2.5 bg-primary text-white rounded-xl text-xs font-black uppercase tracking-widest hover:brightness-110 active:scale-95 transition-all shadow-lg shadow-primary/20"
            >
              Update
            </button>
            {!task.is_completed && (
              <button
                onClick={() => onComplete(task.id)}
                className="px-8 py-2.5 bg-indigo-50 text-indigo-600 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-indigo-100 active:scale-95 transition-all"
              >
                Complete
              </button>
            )}
          </div>

          <button
            onClick={() => onDelete(task.id)}
            className="flex items-center gap-2 px-4 py-2.5 bg-red-50 text-red-600 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-red-100 active:scale-95 transition-all"
          >
            <span className="material-symbols-outlined text-[18px]">
              delete
            </span>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
