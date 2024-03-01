import { MDXRemoteProps } from "next-mdx-remote/rsc";
import AuraImage from "./components/AuraImage";
import Image from "./components/Image";
import remarkGfm from "remark-gfm";
import { codeHighlightOption } from "@/app/post/[slug]/utils/codeHighlight";
import rehypePrettyCode from "rehype-pretty-code";

export const MDXcomponents: MDXRemoteProps["components"] = {
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
  blockquote: (props) => (
    <blockquote
      className="pl-4 italic border-l-4 text-gray-300 border-gray-300 quote"
      {...props}
    />
  ),
  Image: (props) => <Image src={props.src} alt={props.alt} />,
  AuraImage,
};

export const getCompileOption = (markdown: string): MDXRemoteProps => ({
  source: markdown,
  options: {
    parseFrontmatter: true,
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [[rehypePrettyCode as any, codeHighlightOption]],
    },
  },
  components: MDXcomponents,
});
