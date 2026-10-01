STRAND 1 //

3. Method: GET
Status code: 200 OK
Content-Type response header: application/json; charset=utf-8
Body : {
  "userId": 1,
  "id": 1,
  "title": "delectus aut autem",
  "completed": false
}
4. 404 Not Found, 4xx family, a client error occured.
5. Scheme: https
    Host: sonplaceholder.typicode.com
    Path: /todos/99999
6. The query string is userId=1. It filters the todos so ony the ones with the userId=1 shows up.
7. I searched hsk podcast on YT. The difference between them is GET asks server for something, like /todos/1. POST sends data to the server and asks it to do something with it. YouTube sent the thing I searched to the server so it could find videos related to the search.
8. Its written max-age=43200. Its safe for browser to cache since the data doesnt say no-store and its not private. Pragma says no-cache but Cache-control is the newer header so browser will follow that over no-cache.

STRAND 2 //

