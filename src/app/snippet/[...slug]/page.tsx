import { POST_PATH, SNIPPET_PATH } from "@/constants";
import path from "path";
import fs from "fs/promises";
import { Suspense } from "react";

import { MDXRemoteProps, compileMDX } from "next-mdx-remote/rsc";
import _ from "lodash-es";
import "@/style/codeBlock.css";
import AuraImage from "../../../utils/mdxRenderer/components/AuraImage";
import { getAllFiles } from "@/utils/getAllFiles";
import {
  MDXcomponents,
  getCompileOption,
} from "@/utils/mdxRenderer/mdxRenderer";

export const generateStaticParams = async () => {
  const files = await getAllFiles(SNIPPET_PATH);

  const result = _.chain(files)
    .map((v) => path.parse(v))
    .map((v) => ({
      category: v.dir.split(path.sep).pop(),
      fileName: v.base,
    }))
    .filter((v) => v.fileName.endsWith(".mdx"))
    .map((v) => ({ slug: [v.category, v.fileName.replace(".mdx", "")] }))
    .value();

  console.log("result:", result);
  return result;
};

interface SnippetPageProps {
  params: { slug: string[] };
}
const SnippetPage = async ({ params }: SnippetPageProps) => {
  const { slug } = params;

  const markdown = await fs.readFile(
    path.join(SNIPPET_PATH, `${slug.join("/")}.mdx`),
    "utf8"
  );

  const { content, frontmatter } = await compileMDX<{ title: string }>(
    getCompileOption(markdown)
  );

  console.log("content:", content);

  return (
    <Suspense fallback={<>Loading...</>}>
      <div className="pt-10 w-full max-w-[762px] px-8 text-base text-gray-800 dark:text-gray-100">
        <h1 className="text-black dark:text-white">
          제목은 {frontmatter.title} 입니다.
        </h1>

        <article className="">{content}</article>
      </div>
    </Suspense>
  );
};

export default SnippetPage;
