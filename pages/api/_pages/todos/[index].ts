import { wrap } from "~/lib/wrapper";
import * as store from "~/store";

export default wrap({
  loader: async ({req}) => {
    const { index } = req.query;
    console.log(index, ~~index, store.get()[~~index]);
    return { todo: store.get()[~~index] };
  }
});
