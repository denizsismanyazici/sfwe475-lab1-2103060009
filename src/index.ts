import { createTask } from "./createTask";
import { fetchTodo, fetchTodos, fetchTodosOneByOne } from "./api";
import { addTask, findTask } from "./tasks";
import type { Task } from "./schemas";

let tasks: Task[] = [];
tasks = addTask(tasks, "Read Chapter 1");

function printTask(id: number): void {
  const result = findTask(tasks, id);
  // have to check ok first, otherwise TypeScript won't let me use result.task
  if (result.ok) {
    console.log(result.task.title);
  } else {
    console.log(result.error);
  }
}

printTask(1);
printTask(99);

async function main() {
  const todo = await fetchTodo(1);
  console.log(todo?.completed);

  const ids = [1, 2, 3, 4, 5];

  console.time("one by one");
  await fetchTodosOneByOne(ids);
  console.timeEnd("one by one");

  console.time("parallel");
  await fetchTodos(ids);
  console.timeEnd("parallel");
}

main();

function printCreateResult(payload: unknown): void {
  const result = createTask(payload);
  if (result.ok) {
    console.log("Created task:", result.task);
  } else {
    console.log("Could not create task:", result.error.fieldErrors);
  }
}

printCreateResult({ title: "Buy milk", dueDate: "2026-10-10" });
printCreateResult({ dueDate: "2026-10-10" });
printCreateResult({ title: 123 });
