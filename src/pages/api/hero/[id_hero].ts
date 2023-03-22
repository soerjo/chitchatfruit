// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { readFile, writeFile } from "@/lib/readFileJson.lib";

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
    case "PUT": {
      try {
        const heroIndex = req.query["id_hero"];

        const data = await readFile<Array<dataHeroInterface>>(
          "hero.constant.json"
        );

        const editedData = data.filter(
          (d) => d.position === Number(heroIndex)
        )[0];

        if (!editedData) {
          return res
            .status(404)
            .json({ status: 404, message: "product not found!" });
        }

        const newData = data.map((ar) => {
          if (ar.position === 4) {
            return {
              position: Number(heroIndex),
              alt: "",
              name: "",
              src: "",
              created_at: new Date(editedData.created_at),
              updated_at: new Date(),
            };
          }

          return ar;
        });

        writeFile("hero.constant.json", newData);

        return res
          .status(200)
          .json({ status: 200, message: "success", data: data });
      } catch (error) {
        console.error(error);
        return res.status(500).json({ status: 500, message: "server error!" });
      }
    }

    case "DELETE": {
      try {
        const heroIndex = req.query["id_hero"];
        const data = await readFile<Array<dataHeroInterface>>(
          "hero.constant.json"
        );

        const newData = data.filter((d) => d.position !== Number(heroIndex));

        writeFile("hero.constant.json", newData);

        return res.status(204).json({ status: 204, message: "success" });
      } catch (error) {
        console.error(error);
        return res.status(500).json({ status: 500, message: "server error!" });
      }
    }

    default:
      return res.status(404).json({ error: "not found!" });
  }
}
