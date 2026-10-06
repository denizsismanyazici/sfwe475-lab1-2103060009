import { fetchTodo } from "./api";
import { addTask, findTask, type Task } from "./tasks";

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
  console.log(todo);
}

main();
