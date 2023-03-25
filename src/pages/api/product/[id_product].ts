// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import fs from "fs";
import path from "path";
import nc from "next-connect";
import multer from "multer";

import type { NextApiRequest, NextApiResponse } from "next";
import { readFile, writeFile } from "@/lib/readFileJson.lib";

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

const upload = multer({
  storage: multer.diskStorage({
    destination: "./public/images/carousel",
    filename: (req, file, cb) => {
      // console.log({ file });
      const extname = path.extname(file.originalname);
      const filename = `${new Date().getTime()}${extname}`;
      return cb(null, filename);
    },
  }),
});

const uploadMiddleware = upload.single("gambar");

const handlerNext = nc();
handlerNext.use(uploadMiddleware);
handlerNext.put(
  async (
    req: NextApiRequest & { [key: string]: any },
    res: NextApiResponse
  ) => {
    try {
      const productIndex = req.query["id_product"];
      const file = req?.file;

      const data = await readFile<Array<dataProductInterface>>(
        "hero.constant.json"
      );

      const editedData = data.filter((d) => d.index === productIndex)[0];

      if (!editedData) {
        return res
          .status(404)
          .json({ status: 404, message: "product not found!" });
      }

      const newData = data.map((ar) => {
        if (ar.index === productIndex) {
          const arrPath = String(file?.path).split("/");
          const lastSrc = String(ar.src).split("/");

          file &&
            fs.unlinkSync(
              `./public/images/product/${lastSrc[lastSrc.length - 1]}`
            );

          return {
            index: ar.index,
            title: req.body?.title || ar.title,
            type: req.body?.type || ar.type,
            description: req.body?.description || ar.description,
            price: req.body?.price || ar.price,
            src: file
              ? `${process.env.FE_URL}/api/product/images/${
                  arrPath[arrPath.length - 1]
                }`
              : ar.src,
            updated_at: new Date(),
            created_at: ar.created_at,
          };
        }

        return ar;
      });

      writeFile("hero.constant.json", newData);

      return res.status(200).json({ status: 200, message: "success" });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ status: 500, message: "server error!" });
    }
  }
);

handlerNext.delete(async (req: NextApiRequest, res: NextApiResponse) => {
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
});
