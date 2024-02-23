import { POST_PATH } from "@/constants";
import path from "path";
import fs from "fs/promises";
import { Suspense } from "react";

import { MDXRemoteProps, compileMDX } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { codeHighlightOption } from "./utils/codeHighlight";
import rehypePrettyCode from "rehype-pretty-code";
import _ from "lodash-es";
import "@/style/codeBlock.css";

const components: MDXRemoteProps["components"] = {
  h1: (props) => (
    <h1
      className="text-3xl leading-10 font-bold text-post-header mt-6 tracking-tight"
      {...props}
    />
  ),
  h2: (props) => (
    <h2
      className={`text-2xl leading-10 font-bold text-post-header mt-6 tracking-tight`}
      {...props}
    />
  ),
  h3: (props) => (
    <h3
      className={`text-lg leading-10 font-bold text-post-header mt-6 tracking-tight`}
      {...props}
    />
  ),
  p: (props) => (
    <p
      className={`text-base leading-8 font-normal text-post-paragraph tracking-normal my-2 break-keep`}
      {...props}
    />
  ),
  strong: (props) => (
    <strong
      className={`text-base leading-8 font-bold text-post-header tracking-normal`}
      {...props}
    />
  ),
  a: (props) => (
    <a className={`font-medium text-sky-600 items-baseline`} {...props} />
  ),
  ol: (props) => <ol className={`pl-5 font-medium list-decimal`} {...props} />,
  ul: (props) => <ul className={`pl-5 list-disc`} {...props} />,
  li: (props) => (
    <li
      className={`text-base font-normal text-post-paragraph tracking-normal my-2 break-keep`}
      {...props}
    />
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
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [[rehypePrettyCode as any, codeHighlightOption]],
      },
    },
    components,
  });

  console.log("content:", content);

  console.log(frontmatter);

  return (
    <Suspense fallback={<>Loading...</>}>
      <div>
        <h1 className="text-black dark:text-white">
          제목은 {frontmatter.title} 입니다.
        </h1>

        <article className="w-full max-w-[762px] px-8 text-base text-gray-800 dark:text-gray-100">
          {content}
        </article>
      </div>
    </Suspense>
  );
};

export default PostPage;
