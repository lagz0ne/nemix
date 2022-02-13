import { wrap } from "~/lib/wrapper";

const todos: string[] = ["1", "2", "3"];

export default wrap({
  loader: async () => {
    return { todos };
  },
  add: async ({ req }) => {
    const body = req.body;
    todos.push(body.todo);
    console.log(body, todos);

    return;
  },
});
