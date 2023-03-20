import path from "path";
import { readFileSync, writeFileSync } from "fs";

const constantDir = path.join(process.cwd());

export const readFile = async <T>(filename: string): Promise<T> => {
  try {
    const CONSTANT = readFileSync(
      constantDir + "/src/constants/" + filename,
      "utf-8"
    );
    return JSON.parse(CONSTANT);
  } catch (error) {
    console.error(error);
    return {} as T;
  }
};

export const writeFile = async (filename: string, data: any) => {
  try {
    writeFileSync(
      constantDir + "/src/constants/" + filename,
      JSON.stringify(data)
    );
  } catch (error) {
    console.error(error);
  }
};