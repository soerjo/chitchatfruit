// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { serialize } from "cookie";
import { randomUUID } from "crypto";
import { readFile, writeFile } from "../../lib/readFileJson.lib";

interface dataInterface {
  TOKEN: string;
  USER: string;
  PASSWORD: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { username, password } = req.body;
  const data = await readFile<dataInterface>("user.constant.json");

  if (data && username != data.USER && password != data.PASSWORD) {
    return res.status(400).json({ error: "username and password is wrong" });
  }

  data.TOKEN = randomUUID().replaceAll("-", "");

  writeFile("user.constant.json", data);

  res.setHeader(
    "Set-Cookie",
    serialize("token", data.TOKEN, {
      path: "/",
      httpOnly: true,
      maxAge: 60 * 60 * 5,
    })
  );

  res.status(200).json({ username: data.USER, token: data.TOKEN });
}
