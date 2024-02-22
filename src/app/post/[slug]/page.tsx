import { POST_PATH } from "@/constants";
import path from "path";
import fs from "fs/promises";
import { Suspense } from "react";

import { compileMDX } from "next-mdx-remote/rsc";
import _ from "lodash-es";

const components = {
  h1: (props: any) => (
    <h1 {...props} className="text-white">
      {props.children}
    </h1>
  ),
  Special: () => <h1 className="text-red-800">Special</h1>,
};

export const generateStaticParams = async () => {
  const getAllFiles = async (
    dirPath: string,
    arrayOfFiles: string[] = []
  ): Promise<string[]> => {
    const files = await fs.readdir(dirPath, { withFileTypes: true });

    for (const file of files) {
      if (file.isDirectory()) {
        arrayOfFiles = await getAllFiles(
          path.join(dirPath, file.name),
          arrayOfFiles
        );
      } else {
        arrayOfFiles.push(path.join(dirPath, file.name));
      }
    }
    return arrayOfFiles;
  };

  const files = await getAllFiles(POST_PATH);

  const result = _.chain(files)
    .map((v) => path.basename(v))
    .filter((v) => v.endsWith(".mdx"))
    .map((v) => v.replace(".mdx", ""))
    .map((v) => ({ slug: v }))
    .value();

  console.log("result:", result);
  return result;
};

interface PostPageProps {
  params: { slug: string };
}
const PostPage = async ({ params }: PostPageProps) => {
  const { slug } = params;
  console.log("slug:", slug);
  const markdown = await fs.readFile(
    path.join(POST_PATH, `${slug}.mdx`),
    "utf8"
  );

  const { content, frontmatter } = await compileMDX<{ title: string }>({
    source: markdown,
    options: {
      parseFrontmatter: true,
    },
    components,
  });

  console.log(frontmatter);

  return (
    <Suspense fallback={<>Loading...</>}>
      <h1 className="text-black dark:text-white">
        제목은 {frontmatter.title} 입니다.
      </h1>

      <div>{content}</div>
    </Suspense>
  );
};

export default PostPage;
