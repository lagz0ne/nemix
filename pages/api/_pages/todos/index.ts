import { wrap } from "~/lib/wrapper";
import * as store from "~/store";

export default wrap({
  loader: async () => {
    return { todos: store.get() };
  },
  add: async ({ req }) => {
    const body = req.body;
    store.push(body.todo);

    return;
  },
});
