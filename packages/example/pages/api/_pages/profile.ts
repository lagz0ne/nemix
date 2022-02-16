import { wrap } from "nemix/wrapper";

export default wrap({
  loader: async () => {
    return {"hello": "world"};
  }
});
