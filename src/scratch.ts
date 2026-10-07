import { TaskSchema } from "./schemas";

const valid = { id: 1, title: "Read", done: false };
const missingField = { id: 2, done: true };
const wrongType = { id: 3, title: "Write", done: "yes" };

for (const candidate of [valid, missingField, wrongType]) {
  const result = TaskSchema.safeParse(candidate);
  console.log(result.success, result.success ? "" : result.error.issues);
}

const emptyTitle = { id: 4, title: "", done: false };
const negativeId = { id: -1, title: "Run", done: false };

for (const candidate of [emptyTitle, negativeId]) {
  const result = TaskSchema.safeParse(candidate);
  console.log(result.success, result.success ? "" : result.error.issues);
}

import { CreateTaskSchema } from "./schemas";

console.log(CreateTaskSchema.safeParse({ title: "Buy milk" }).success);
console.log(CreateTaskSchema.safeParse({ title: "" }).success);
