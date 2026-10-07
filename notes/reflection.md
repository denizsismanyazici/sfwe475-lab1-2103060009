# Reflection

1. What is the difference between a 404 and a 500? (Strand 1)
    4xx status codes show client-side error while 5xx codes means the server failed. So 404 means the requested page or resource cannot be found while 500 means server crash.
2. Why does TypeScript strict mode reject tasks.find(...) as a Task return type? (Strand 3)
    its because find sometimes didnt find anything and gave undefined, so the return type cnt be just Task it should have undeefined also.
3. Why do we work on a branch instead of committing to main? (Strand 4)
    Main should be the working version. When I work on a branch even if I make mistakes its ok.