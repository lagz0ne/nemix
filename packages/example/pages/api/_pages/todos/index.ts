import { wrap } from "nemix/wrapper";
import * as store from "~/store";

export default wrap({
  loader: async () => {
    return { todos: store.get() as store.Todo[] };
  },
  add: async ({ req }) => {
    const body = req.body;
    store.push(body.todo);

    return;
  },
  remove: async ({req}) => {
    const param = req.body;

    store.del(param.id);
    return;
  }
});
