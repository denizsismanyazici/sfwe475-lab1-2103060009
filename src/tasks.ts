import type { Task } from "./schemas";

export function addTask(tasks: Task[], title: string): Task[] {
  const id = tasks.length + 1;
  return [...tasks, { id, title, done: false }];
}

// either we found it (ok: true) or we didn't (ok: false)
export type FindResult = { ok: true; task: Task } | { ok: false; error: string };

export function findTask(tasks: Task[], id: number): FindResult {
  const task = tasks.find((t) => t.id === id);
  if (task === undefined) {
    return { ok: false, error: `No task found with id ${id}` };
  }
  return { ok: true, task: task };
}

export function daysUntilDue(task: Task): number | null {
  if (task.dueDate === undefined) {
    return null;
  }
  const due = new Date(task.dueDate);
  return Math.ceil((due.getTime() - Date.now()) / 86_400_000);
}

// flips done for the task with this id, makes a new list
export function toggleTask(tasks: Task[], id: number): Task[] {
  const newTasks: Task[] = [];
  for (const t of tasks) {
    if (t.id === id) {
      newTasks.push({ id: t.id, title: t.title, done: !t.done, dueDate: t.dueDate });
    } else {
      newTasks.push(t);
    }
  }
  return newTasks;
}

export type TaskFilter = "all" | "done" | "open";

// gives back only the tasks that match the filter
export function filterTasks(tasks: Task[], filter: TaskFilter): Task[] {
  if (filter === "all") {
    return tasks;
  }
  const result: Task[] = [];
  for (const t of tasks) {
    if (filter === "done" && t.done === true) {
      result.push(t);
    }
    if (filter === "open" && t.done === false) {
      result.push(t);
    }
  }
  return result;
}
