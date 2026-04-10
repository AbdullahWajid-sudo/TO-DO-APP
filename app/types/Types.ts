export type Task = {
  id: string;
  title: string;
  description: string;
  assigned_by: string;
  category: string;
  image_url: string;
  link_url: string;
  due_date: string;
  tags: string[];
  priority: string;
  is_completed?: boolean;
};

export type NewTask = Omit<Task, "id">;

export type FormFields = Omit<NewTask, "tags" | "priority" | "is_completed">;

export type TaskCardProps = {
  task: Task;
  onEdit: (task: Task) => void;
  onComplete: (taskId: string) => void;
  onDelete: (taskId: string) => void;
  formatDate: (dateString: string) => string;
  categoryColors: Record<string, string>;
  priorityColors: Record<string, string>;
  tagColors: string[];
};

export type TaskFormProps = {
  initialData?: Task;
  onSubmit: (data: NewTask) => void;
  submitButtonText?: string;
  isEditMode?: boolean;
};

export type TaskModalProps = {
  isOpen: boolean;
  onClose: () => void;
  task?: Task | null;
  onSubmit: (formData: NewTask) => Promise<void>;
};
