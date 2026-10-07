# Reflection

1. What is the difference between a 404 and a 500? (Strand 1)
    4xx status codes show client-side error while 5xx codes means the server failed. So 404 means the requested page or resource cannot be found while 500 means server crash.
2. Why does TypeScript strict mode reject tasks.find(...) as a Task return type? (Strand 3)
    its because find sometimes didnt find anything and gave undefined, so the return type cnt be just Task it should have undeefined also.
3. Why do we work on a branch instead of committing to main? (Strand 4)
    Main should be the working version. When I work on a branch even if I make mistakes its ok.
# Lab 2 Reflection

## 1. Why does await only pause the function it's inside, not the whole program?

await only pauses the function its inside, so the rest of the program can keep running while fetch is waiting. when the answer comes back the function continues from the line after await.

## 2. Why didn't TypeScript complain when fetchTodo said it returns a Task?

typescript only checks the code before it runs, it cant see what the server will really send. so it just trusted the label and we only saw the problem at runtime when done printed undefined.

## 3. What's the difference between parse() and safeParse(), and why did createTask use safeParse?

parse() crashes the program if the data is wrong, safeParse() doesnt crash, it just tells us if the data is good or bad. createTask used safeParse so it can return ok true or ok false instead of crashing.
