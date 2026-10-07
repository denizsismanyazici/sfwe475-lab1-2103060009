# Lab 2 Notes

## 1. What can the program do while `await fetch(...)` is waiting?

after we send a fetch() the program is not frozed since await only pauses the one function it's inside. So there could be other requests, other code can keep going or button clicks etc. in the web app works. (everything else basically)

## 2. Why is the parallel version faster?
One by one waits for wach request before starting the next. Parallel starts the requests right away, without waiting. The waits overlap, so the total waiting time is the wait that is the longest.
