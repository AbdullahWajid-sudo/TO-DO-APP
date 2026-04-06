"use client";

import { useState } from "react";

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

export default function TaskForm({
  initialData = null,
  onSubmit,
  submitButtonText = "Submit",
  isEditMode = false,
}) {
  const [tags, setTags] = useState(initialData?.tags || []);
  const [customTagInput, setCustomTagInput] = useState("");
  const [selectedPriority, setSelectedPriority] = useState(
    initialData?.priority?.toLowerCase() || "low",
  );
  const [formData, setFormData] = useState({
    title: initialData?.title || "",
    description: initialData?.description || "",
    assigned_by: initialData?.assigned_by || "",
    category: initialData?.category || "General",
    image_url: initialData?.image_url || "",
    link_url: initialData?.link_url || "",
    due_date: initialData?.due_date ? initialData.due_date.split("T")[0] : "",
  });

  const handlePriorityChange = (e) => {
    const priority = e.target.value;
    setSelectedPriority(priority);

    // Add priority tag if not already in tags
    const priorityTag = `Priority ${priority.charAt(0).toUpperCase() + priority.slice(1)}`;
    if (!tags.includes(priorityTag)) {
      // Remove any existing priority tag first
      const filteredTags = tags.filter((tag) => !tag.startsWith("Priority "));
      setTags([...filteredTags, priorityTag]);
    }
  };

  const handleAddCustomTag = () => {
    if (customTagInput.trim() && !tags.includes(customTagInput.trim())) {
      setTags([...tags, customTagInput.trim()]);
      setCustomTagInput("");
    }
  };

  const handleRemoveTag = (tagToRemove) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await onSubmit({
      ...formData,
      tags,
      priority:
        selectedPriority.charAt(0).toUpperCase() + selectedPriority.slice(1),
    });
  };

  return (
    <form className="space-y-10 bg-container" onSubmit={handleSubmit}>
      <div className="space-y-3">
        <label className="block font-manrope uppercase tracking-[0.05em] text-[0.6875rem] font-bold text-slate-500">
          Task Title
        </label>
        <input
          className="w-full bg-surface-container-low border-none rounded-lg p-4 text-on-surface placeholder-slate-400 font-medium text-lg"
          placeholder="e.g. Q4 Editorial Strategy Review"
          type="text"
          name="title"
          value={formData.title}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="space-y-3">
        <label className="block font-manrope uppercase tracking-[0.05em] text-[0.6875rem] font-bold text-slate-500">
          Description
        </label>
        <textarea
          className="w-full bg-surface-container-low border-none rounded-lg p-4 text-on-surface placeholder-slate-400 font-medium min-h-[120px] resize-none"
          placeholder="Describe the task requirements and objectives..."
          name="description"
          value={formData.description}
          onChange={handleInputChange}
        ></textarea>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-3">
          <label className="block font-manrope uppercase tracking-[0.05em] text-[0.6875rem] font-bold text-slate-500">
            Assigned By
          </label>
          
          <div className="relative">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-[20px]">
              person
            </span>
            <input
              className="w-full bg-surface-container-low border-none rounded-lg p-4 pl-12 text-on-surface placeholder-slate-400"
              placeholder="Team Member Name"
              type="text"
              name="assigned_by"
              value={formData.assigned_by}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="space-y-3">
          <label className="block font-manrope uppercase tracking-[0.05em] text-[0.6875rem] font-bold text-slate-500">
            Category
          </label>
          <div className="relative ">
            <select
              className="w-full bg-surface-container-low border-none rounded-lg p-4 appearance-none text-on-surface font-medium cursor-pointer"
              name="category"
              value={formData.category}
              onChange={handleInputChange}
            >
              <option>General</option>
              <option>Admin</option>
              <option>Web</option>
              <option>Android</option>
            </select>
            <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
              expand_more
            </span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-3">
          <label className="block font-manrope uppercase tracking-[0.05em] text-[0.6875rem] font-bold text-slate-500">
            Image URL
          </label>
          <div className="relative">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-[20px]">
              image
            </span>
            <input
              className="w-full bg-surface-container-low border-none rounded-lg p-4 pl-12 text-on-surface placeholder-slate-400"
              placeholder="image url"
              type="url"
              name="image_url"
              value={formData.image_url}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="space-y-3">
          <label className="block font-manrope uppercase tracking-[0.05em] text-[0.6875rem] font-bold text-slate-500">
            Priority
          </label>
          <div className="relative">
            <select
              className="w-full bg-surface-container-low border-none rounded-lg p-4 appearance-none text-on-surface font-medium cursor-pointer"
              name="priority"
              value={selectedPriority}
              onChange={handlePriorityChange}
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
            <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
              expand_more
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-3">
          <label className="block font-manrope uppercase tracking-[0.05em] text-[0.6875rem] font-bold text-slate-500">
            Due Date
          </label>
          <div className="relative">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-[20px]">
              calendar_today
            </span>
            <input
              className="w-full bg-surface-container-low border-none rounded-lg p-4 pl-12 text-on-surface"
              type="date"
              name="due_date"
              value={formData.due_date}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="space-y-3">
          <label className="block font-manrope uppercase tracking-[0.05em] text-[0.6875rem] font-bold text-slate-500">
            Link URL
          </label>
          <div className="relative">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-[20px]">
              link
            </span>
            <input
              className="w-full bg-surface-container-low border-none rounded-lg p-4 pl-12 text-on-surface placeholder-slate-400"
              placeholder="https://resource.com"
              type="url"
              name="link_url"
              value={formData.link_url}
              onChange={handleInputChange}
            />
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <label className="block font-manrope uppercase tracking-[0.05em] text-[0.6875rem] font-bold text-slate-500">
          Custom Tags
        </label>
        <div className="flex gap-2">
          <div className="relative flex-1">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-[20px]">
              label
            </span>
            <input
              className="w-full bg-surface-container-low border-none rounded-lg p-4 pl-12 text-on-surface placeholder-slate-400"
              placeholder="Enter new tag..."
              type="text"
              value={customTagInput}
              onChange={(e) => setCustomTagInput(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  handleAddCustomTag();
                }
              }}
            />
          </div>
          <button
            className="bg-primary hover:bg-primary-container text-white px-6 rounded-lg transition-colors flex items-center justify-center"
            type="button"
            onClick={handleAddCustomTag}
          >
            <span className="material-symbols-outlined">add</span>
          </button>
        </div>
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-3 pt-3">
            {tags.map((tag, index) => (
              <span
                key={index}
                className={`px-4 py-1.5 rounded-full text-[0.6875rem] font-bold font-manrope uppercase tracking-wider flex items-center gap-2 ${
                  tag.startsWith("Priority ")
                    ? "bg-secondary-fixed text-on-secondary-fixed-variant"
                    : tagColors[index % tagColors.length]
                }`}
              >
                {tag}
                <button
                  type="button"
                  onClick={() => handleRemoveTag(tag)}
                  className="hover:opacity-70 transition-opacity"
                >
                  <span className="material-symbols-outlined text-[16px]">
                    close
                  </span>
                </button>
              </span>
            ))}
          </div>
        )}
      </div>

      <div className="flex flex-col sm:flex-row gap-4 pt-8 border-t border-outline-variant/20">
        <button
          className="flex-1 bg-gradient-to-r from-primary to-primary-container text-white font-bold py-4 px-8 rounded-lg transition-all hover:brightness-110 active:scale-95 duration-200"
          type="submit"
        >
          {submitButtonText}
        </button>
      </div>
    </form>
  );
}
