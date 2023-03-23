import nc from "next-connect";
import fs from "fs";
import multer from "multer";
import path from "path";
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

const upload = multer({
  storage: multer.diskStorage({
    destination: "./public/images/carousel",
    filename: (req, file, cb) => {
      console.log({ file });
      const extname = path.extname(file.originalname);
      const filename = `${new Date().getTime()}${extname}`;
      return cb(null, filename);
    },
  }),
});

const uploadMiddleware = upload.single("gambar");

const handlerNext = nc()
  .use(uploadMiddleware)
  .put(
    async (
      req: NextApiRequest & { [key: string]: any },
      res: NextApiResponse
    ) => {
      try {
        const heroIndex = req.query["id_hero"];
        const file = req?.file;
        const is_active = req.body["is_active"] === "true" ? true : false;

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
          if (ar.position === Number(heroIndex)) {
            const arrPath = String(file?.path).split("/");
            arrPath.shift();

            file && fs.unlinkSync(`./public${ar.src}`);

            return {
              position: Number(heroIndex),
              alt: file ? String(file?.originalname).split(".")[0] : ar.alt,
              name: file ? String(file?.originalname).split(".")[0] : ar.name,
              src: file ? `/${arrPath.join("/")}` : ar.src,
              is_active: is_active,
              created_at: new Date(editedData.created_at),
              updated_at: new Date(),
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

export default handlerNext;

export const config = {
  api: {
    bodyParser: false,
  },
};
