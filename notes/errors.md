"devDependencies": {
  "tsx": "^4.23.15",
  "typescript": "^7.0.2"
}
The ^ means it can update to newer minor and patch versions but not a new major one, so nothing suddenly breaks.
These numbers show the version of the things you use. Major is big changes that can break things, minor is new features, patch is small bug fixes.


Challenge of Strand 2
 nodule_modules is left out of GIT bcs they are huge anybody can just run npm install since there is a list of what people would need also.


 STRAND 3//

 error 1: any[] is an empty list and we didnt say what goes inside.
 error 2: task has no type same issue again.
 error 3: title doesnt have a type.
 error 4: the new task doesnt match the Task shape so the wjole liest is wrong.
 error 5: it has quotes, when you write true or false you dont use quotes.
 error 6: if nothing is a match it gives undefined, the function always gives back a Task. we should add or empty.
 error 7: due date has ? and when its undrfinrd we get error.