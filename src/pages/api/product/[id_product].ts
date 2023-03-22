// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { readFile, writeFile } from "@/lib/readFileJson.lib";
import { randomUUID } from "crypto";

interface dataProductInterface {
  index: string;
  title: string;
  src?: string;
  type?: string;
  description?: string;
  price: number;
  updated_at: Date;
  created_at: Date;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "PUT": {
      try {
        const productIndex = req.query["id_product"];

        const data = await readFile<Array<dataProductInterface>>(
          "product.constant.json"
        );

        const editedData = data.filter((d) => d.index === productIndex)[0];

        if (!editedData) {
          return res
            .status(404)
            .json({ status: 404, message: "product not found!" });
        }

        const newData = data.map((ar) => {
          if (ar.index === productIndex) {
            return {
              index: ar.index,
              title: req.body?.title || ar.title,
              type: req.body?.type || ar.type,
              description: req.body?.description || ar.description,
              price: req.body?.price || ar.price,
              // src: req.body?.index,
              created_at: ar.created_at,
              updated_at: new Date(),
            };
          }

          return ar;
        });

        writeFile("product.constant.json", newData);

        return res.status(200).json({ status: 200, message: "success" });
      } catch (error) {
        console.error(error);
        return res.status(500).json({ status: 500, message: "server error!" });
      }
    }

    case "DELETE": {
      try {
        const productIndex = req.query["id_product"];

        const data = await readFile<Array<dataProductInterface>>(
          "product.constant.json"
        );

        const newData = data.filter((d) => d.index !== productIndex);

        writeFile("product.constant.json", newData);

        return res.status(204).json({ status: 204, message: "success" });
      } catch (error) {
        console.error(error);
        return res.status(500).json({ status: 500, message: "server error!" });
      }
    }

    default:
      return res.status(400).json({ error: "username and password is wrong" });
  }
}
