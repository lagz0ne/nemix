import crypto from "crypto";

function getId() {
  return crypto.randomBytes(8).toString("hex");
}

export type Todo = {
  id: string,
  value: string
}

let todos: Todo[] = [];

export function get(id?: string) {
  if (id === undefined) return todos;
  return todos.find(todo => todo.id === id);
}

export function push(todo: string) {
  todos.push({id: getId(), value: todo});
}

export function edit(id: string, todo: string) {
  todos[todos.findIndex(todo => todo.id === id)] = { id, value: todo}
}

export function del(id: string) {
  todos = todos.filter(todo => todo.id !== id)
}