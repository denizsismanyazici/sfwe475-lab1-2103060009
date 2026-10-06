# Lab 2 Notes

## 1. What can the program do while `await fetch(...)` is waiting?

after we send a fetch() the program is not freezed since await only pauses the one function it's inside. So there could be other requests, other code can keep going or button clicks etc. in the web app works. (everything else basically)
