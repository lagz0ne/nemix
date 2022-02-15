const todos: string[] = ["1", "2", "3"];

export function get() {
  return todos;
}

export function push(todo: string) {
  todos.push(todo);
}

export function edit(index: number, todo: string) {
  if (todos.at(index)) {
    todos[index] = todo;
  }
}

export function del(index: number) {
  delete todos[index];
}