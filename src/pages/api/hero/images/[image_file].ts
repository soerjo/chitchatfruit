// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";
import nc from "next-connect";

const getImages = nc({});
getImages.get(async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { image_file } = req.query;

    const filePath = path.resolve(".", `public/images/carousel/${image_file}`);

    const imageBuffer = fs.readFileSync(filePath);

    res.setHeader("Content-Type", "image/jpg");
    res.send(imageBuffer);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ status: 500, message: "server error!" });
  }
});

export default getImages;
