export async function fetchTodo(id: number) {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${id}`
    );

    // the server answered, but with an error status (like 404)
    if (!response.ok) {
      console.error(`Server error: ${response.status} for todo ${id}`);
      return null;
    }

    const data = await response.json();
    return data;
  } catch (error) {
    // the request never got an answer (no internet, wrong address, etc.)
    console.error(`Network error while fetching todo ${id}:`, error);
    return null;
  }
}
