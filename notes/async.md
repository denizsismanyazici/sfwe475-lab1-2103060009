# Lab 2 Notes

## 1. What can the program do while `await fetch(...)` is waiting?

While `await fetch(...)` waits for the server, only the function it is inside (`fetchTodo`, and `main`, which awaits it) is paused. The rest of the program keeps running. You can see it in my output: the Lab 1 lines ("Read Chapter 1", "No task found with id 99") printed before the to-do arrived. When the answer comes back, the function continues from the line after `await`.
