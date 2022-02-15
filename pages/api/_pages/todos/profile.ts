import { wrap } from "~/lib/wrapper";

export default wrap({
  loader: async () => {
    return {"hello": "world"};
  }
});
