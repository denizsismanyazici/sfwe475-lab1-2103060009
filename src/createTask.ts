import { CreateTaskSchema } from "./schemas";

export function createTask(payload: unknown) {
  const result = CreateTaskSchema.safeParse(payload);

  if (!result.success) {
    return { ok: false as const, error: result.error.flatten() };
  }

  return { ok: true as const, task: result.data };
}

export function createTasks(payload: unknown) {
  if (!Array.isArray(payload)) {
    return { ok: false as const, error: "Payload must be a list" };
  }

  const succeeded = [];
  const failed = [];

  for (const [index, item] of payload.entries()) {
    const result = createTask(item);
    if (result.ok) {
      succeeded.push({ index, task: result.task });
    } else {
      failed.push({ index, error: result.error.fieldErrors });
    }
  }

  return { ok: true as const, succeeded, failed };
}
