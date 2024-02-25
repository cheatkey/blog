import { POST_PATH } from "@/constants";
import path from "path";
import fs from "fs/promises";
import { Suspense } from "react";
<<<<<<< Updated upstream

import { MDXRemoteProps, compileMDX } from "next-mdx-remote/rsc";
import _ from "lodash-es";
import "@/style/codeBlock.css";
<<<<<<< Updated upstream
import AuraImage from "../../../utils/mdxRenderer/components/AuraImage";
=======
import AuraImage from "./components/AuraImage";

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
  AuraImage,
};
=======
import { compileMDX } from "next-mdx-remote/rsc";
import _ from "lodash-es";
import "@/style/codeBlock.css";
>>>>>>> Stashed changes
import { getAllFiles } from "@/utils/getAllFiles";
import {
  MDXcomponents,
  getCompileOption,
} from "@/utils/mdxRenderer/mdxRenderer";
<<<<<<< Updated upstream
=======
import TagContainer from "@/components/TagContainer";
>>>>>>> Stashed changes
>>>>>>> Stashed changes

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

<<<<<<< Updated upstream
  const { content, frontmatter } = await compileMDX<{ title: string }>(
    getCompileOption(markdown)
  );
=======
<<<<<<< Updated upstream
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
>>>>>>> Stashed changes

  return (
    <Suspense fallback={<>Loading...</>}>
      <div className="w-full max-w-[762px] text-base text-gray-800 dark:text-gray-100">
        <h1 className="text-black dark:text-white">
          제목은 {frontmatter.title} 입니다.
        </h1>

<<<<<<< Updated upstream
        <article className="">{content}</article>
=======
        <article className="w-full max-w-[762px] px-8 text-base text-gray-800 dark:text-gray-100">
          {content}
        </article>
=======
  const { content, frontmatter } = await compileMDX<PostFrontmatter>(
    getCompileOption(markdown)
  );

  return (
    <Suspense fallback={<>Loading...</>}>
      <div className="w-full max-w-[762px] text-base text-gray-800 dark:text-gray-100">
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
>>>>>>> Stashed changes
>>>>>>> Stashed changes
      </div>
    </Suspense>
  );
};

export default PostPage;
