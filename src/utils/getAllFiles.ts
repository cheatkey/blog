import fs from "fs/promises";
import path from "path";

export const getAllFiles = async (
  dirPath: string,
  arrayOfFiles: string[] = []
): Promise<string[]> => {
  const files = await fs.readdir(dirPath, { withFileTypes: true });

  for (const file of files) {
    const filePath = path.join(dirPath, file.name);
    if (file.isDirectory()) {
      arrayOfFiles = await getAllFiles(filePath, arrayOfFiles);
    } else {
      arrayOfFiles.push(filePath);
    }
  }

  return arrayOfFiles;
};
