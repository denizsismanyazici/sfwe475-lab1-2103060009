import { TodoSchema, type Todo } from "./schemas";

export async function fetchTodo(id: number): Promise<Todo | null> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 3000);

  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${id}`,
      { signal: controller.signal }
    );

    if (!response.ok) {
      console.error(`Server error: ${response.status} for todo ${id}`);
      return null;
    }

    const data: unknown = await response.json();
    const parsed = TodoSchema.safeParse(data);

    if (!parsed.success) {
      console.error(`Bad data for todo ${id}:`, parsed.error.issues);
      return null;
    }

    return parsed.data;
  } catch (error) {
    console.error(`Request failed or timed out for todo ${id}:`, error);
    return null;
  } finally {
    clearTimeout(timer);
  }
}

export async function fetchTodosOneByOne(ids: number[]) {
  const results = [];
  for (const id of ids) {
    results.push(await fetchTodo(id));
  }
  return results;
}

export async function fetchTodos(ids: number[]) {
  return Promise.all(ids.map((id) => fetchTodo(id)));
}
