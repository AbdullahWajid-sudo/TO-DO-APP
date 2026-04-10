"use client";

import { useState, JSX } from "react";
import TaskForm from "./TaskForm";
import { NewTask, TaskModalProps } from "../types/Types";

export default function TaskModal({
  isOpen,
  onClose,
  task = null,
  onSubmit,
}: TaskModalProps): JSX.Element | null {
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (data: NewTask) => {
    setLoading(true);
    try {
      await onSubmit(data);
      onClose();
    } catch (error) {
      console.error("Error submitting task:", error);
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative bg-surface-container-lowest rounded-2xl shadow-2xl max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 z-10 bg-surface-container-lowest border-b border-outline-variant/20 px-8 py-6 rounded-t-2xl">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-headline text-3xl font-extrabold tracking-tight text-on-surface">
                {task ? "Update Task" : "New Architectural Task"}
              </h2>
              <p className="text-on-surface-variant mt-2 text-lg">
                {task
                  ? "Modify the task details and update the parameters for your team's success."
                  : "Craft the next milestone in your editorial workflow. Detail the parameters and set the foundation for your team's success."}
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-surface-container-low rounded-full transition-colors"
            >
              <span className="material-symbols-outlined text-[24px] text-on-surface-variant">
                close
              </span>
            </button>
          </div>
        </div>
        <div className="p-8">
          {loading ? (
            <div className="flex items-center justify-center py-12">
              <p className="text-on-surface-variant">Loading...</p>
            </div>
          ) : (
            <TaskForm
              initialData={task}
              onSubmit={handleSubmit}
              submitButtonText={task ? "Update Task" : "Add Task"}
              isEditMode={!!task}
            />
          )}
        </div>
      </div>
    </div>
  );
}
