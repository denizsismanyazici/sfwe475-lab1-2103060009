import { addTask, findTask, type Task } from "./tasks";

let tasks: Task[] = [];
tasks = addTask(tasks, "Read Chapter 1");

function printTask(id: number): void {
  const task = findTask(tasks, id);
  if (task) {
    console.log(task.title);
  } else {
    console.log(`No task found with id ${id}`);
  }
}

printTask(1);
printTask(99);
