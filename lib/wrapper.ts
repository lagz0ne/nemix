import type { NextApiRequest, NextApiResponse } from "next";

type JSONValue =
  | string
  | number
  | boolean
  | { [x: string]: JSONValue }
  | Array<JSONValue>;

type Callback = ({ req }: { req: NextApiRequest }) => Promise<JSONValue | void | undefined>;

type Operations = {
  [key: string]: Callback;
  loader: Callback;
};

type Wrapper = {
  (operations: Operations): (
    req: NextApiRequest,
    res: NextApiResponse<any>
  ) => Promise<void>;
};

const wrap: Wrapper = (operations) => {
  const ops = Object.keys(operations);
  const opsString = ops.join(" | ");
  console.log(opsString);

  return async (req, res) => {
    const opHeader = req.headers["op"];

    if (!opHeader) {
      res.status(400).json({ error: "op header needs to be specified" });
      return;
    }

    if (Array.isArray(opHeader)) {
      res.status(400).json({ error: "accepts only one op header" });
      return;
    }

    if (!operations[opHeader]) {
      res.status(400).json({
        error: `Loader ${operations[opHeader]} cannot be found. Choose one of those [${opsString}]`,
      });
      return;
    }

    try {
      const jsonValue = await operations[opHeader]({ req });

      if (jsonValue) {
        res.status(200).json(jsonValue);
      } else {
        res.status(200).send(null);
      }
      return;
    } catch (e) {
      console.error(e);
      res.status(500).json({ error: e });
      return;
    }
  };
};

export { wrap };
