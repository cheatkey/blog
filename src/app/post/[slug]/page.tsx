import { POST_PATH } from "@/constants";
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
import TagContainer from "@/components/TagContainer";

export const generateStaticParams = async () => {
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

const getFormattedDate = (date: string) => {
  const datePattern = /(\d{4})[./-](\d{2})[./-](\d{2})/;
  const match = date.match(datePattern);

  if (!match) {
    throw new Error("Invalid date format");
  }
  const [, year, month, day] = match;

  return `${year}년 ${month}월 ${day}일`;
};

interface PostFrontmatter {
  title?: string;
  description?: string;
  tags?: string[];
  date?: string;
}

interface PostPageProps {
  params: { slug: string };
}
const PostPage = async ({ params }: PostPageProps) => {
  const { slug } = params;
  const markdown = await fs.readFile(
    path.join(POST_PATH, `${slug}.mdx`),
    "utf8"
  );

  const { content, frontmatter } = await compileMDX<PostFrontmatter>(
    getCompileOption(markdown)
  );

  return (
    <Suspense fallback={<>Loading...</>}>
      <div className="w-full max-w-[762px] text-base text-gray-800 dark:text-gray-100 px-5">
        <div className="flex flex-col gap-2 pt-8 pb-4 border-b border-gray-700">
          <h1 className="text-3xl leading-10 font-bold text-post-header tracking-tight break-keep">
            {frontmatter.title}
          </h1>
          <p className="text-base leading-8 text-gray-200">
            {frontmatter.description}
          </p>
          <p className="text-base leading-8 text-gray-200 text-end">
            {!!frontmatter.date && getFormattedDate(frontmatter.date)}
          </p>
          {!!frontmatter.tags && <TagContainer tags={frontmatter.tags} />}
        </div>

        <article className="pt-4">{content}</article>

        <div className="flex flex-col h-40"></div>
      </div>
    </Suspense>
  );
};

export default PostPage;
