import { wrap } from "nemix/wrapper";
import * as store from "~/store";

export default wrap({
  loader: async ({req}) => {
    const { id } = req.query;

    return { todo: store.get(id as string) as store.Todo };
  },

});
