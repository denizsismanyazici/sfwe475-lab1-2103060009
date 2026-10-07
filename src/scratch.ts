import { TaskSchema } from "./schemas";

const valid = { id: 1, title: "Read", done: false };
const missingField = { id: 2, done: true };
const wrongType = { id: 3, title: "Write", done: "yes" };

for (const candidate of [valid, missingField, wrongType]) {
  const result = TaskSchema.safeParse(candidate);
  console.log(result.success, result.success ? "" : result.error.issues);
}
