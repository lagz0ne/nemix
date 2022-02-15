import { wrap } from "~/lib/wrapper";
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
    console.log(param.id);

    store.del(param.id);
    return;
  }
});
