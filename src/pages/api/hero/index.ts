// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { readFile, writeFile } from "@/lib/readFileJson.lib";
import { randomUUID } from "crypto";

interface dataHeroInterface {
  position: number;
  name: string;
  src: string;
  alt: string;
  updated_at: Date;
  created_at: Date;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "GET": {
      const data = await readFile<Array<dataHeroInterface>>(
        "hero.constant.json"
      );

      return res
        .status(200)
        .json({ status: 200, message: "success", data: data });
    }

    case "POST": {
      try {
        const data = await readFile<Array<dataHeroInterface>>(
          "hero.constant.json"
        );

        writeFile("user.constant.json", data);

        return res.status(201).json({ status: 201, message: "success" });
      } catch (error) {
        console.error(error);
        return res.status(500).json({ status: 500, message: "server error!" });
      }
    }

    default:
      return res.status(400).json({ error: "username and password is wrong" });
  }
}
