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
    case "GET": {
      const data = await readFile<Array<dataProductInterface>>(
        "product.constant.json"
      );

      return res
        .status(200)
        .json({ status: 200, message: "success", data: data });
    }

    case "POST": {
      try {
        const newData: dataProductInterface = {
          index: randomUUID().replaceAll("-", ""),
          title: req.body?.title,
          type: req.body?.type,
          description: req.body?.description,
          price: req.body?.price,
          // src: req.body?.index,
          created_at: new Date(),
          updated_at: new Date(),
        };
        const data = await readFile<Array<dataProductInterface>>(
          "product.constant.json"
        );

        data.push(newData);

        writeFile("user.constant.json", data);

        return res
          .status(201)
          .json({ status: 201, message: "success", data: newData });
      } catch (error) {
        console.error(error);
        return res.status(500).json({ status: 500, message: "server error!" });
      }
    }

    default:
      return res.status(404).json({ status: 404, message: "not found!" });
  }
}
