// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { readFile, writeFile } from "@/lib/readFileJson.lib";
import { randomUUID } from "crypto";
import multer from "multer";
import nc from "next-connect";
import path from "path";

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
    destination: "./public/images/product",
    filename: (req, file, cb) => {
      console.log({ file });
      const extname = path.extname(file.originalname);
      const filename = `${new Date().getTime()}${extname}`;
      return cb(null, filename);
    },
  }),
});

const uploadMiddleware = upload.single("gambar");

const handlerNext = nc({
  onError: (err, req, res: NextApiResponse, next) => {
    console.error(err);
    res.status(500).end("Something broke!");
  },
  onNoMatch: (req, res: NextApiResponse) => {
    res.status(404).end("Page is not found");
  },
})
  .use(uploadMiddleware)
  .get(async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const data = await readFile<Array<dataProductInterface>>(
        "product.constant.json"
      );

      return res
        .status(200)
        .json({ status: 200, message: "success", data: data });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ status: 500, message: "server error!" });
    }
  })
  .post(
    async (
      req: NextApiRequest & { [key: string]: any },
      res: NextApiResponse
    ) => {
      try {
        const file = req?.file;
        const arrPath = String(file?.path).split("/");

        const data = await readFile<Array<dataProductInterface>>(
          "product.constant.json"
        );

        const newData: dataProductInterface = {
          index: randomUUID().replaceAll("-", ""),
          title: req.body?.title,
          type: req.body?.type,
          description: req.body?.description,
          price: req.body?.price,
          src: `${process.env.FE_URL}/api/product/images/${
            arrPath[arrPath.length - 1]
          }`,
          created_at: new Date(),
          updated_at: new Date(),
        };

        data.push(newData);

        writeFile("product.constant.json", data);

        return res
          .status(201)
          .json({ status: 201, message: "success", data: newData });
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
