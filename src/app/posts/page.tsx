import { POST_PATH } from "@/constants";
import { getAllFiles } from "@/utils/getAllFiles";
import React from "react";
import path from "path";
import fs from "fs/promises";
import matter from "gray-matter";
import PostCard from "@/components/PostCard";
import { z } from "zod";

interface PostsPageProps {}

export const postListSchema = z.object({
  title: z.string().default(""),
  description: z.string().default(""),
  date: z.string().default(""),
  tags: z.array(z.string()).default([]),
  path: z.string(),
});

const PostsPage = async ({}: PostsPageProps) => {
  const files = await getAllFiles(POST_PATH);

  const postList = await Promise.all(
    files.map(async (filePath) => {
      const markdown = await fs.readFile(path.join(filePath), "utf8");
      const { data: frontmatter } = matter(markdown);

      return postListSchema.parse({
        ...frontmatter,
        path: `/post/${path.basename(filePath).replace(".mdx", "")}`,
      });
    })
  );

  return (
    <main className="max-w-[1200px] w-full p-4 flex flex-col gap-12 py-12">
      <h2 className="text-4xl font-bold text-gray-100 tracking-tight">
        최근에 작성된 글
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {postList.map((postData, index) => (
          <PostCard
            key={postData.path}
            title={postData.title}
            tags={postData.tags}
            description={postData.description}
            href={postData.path}
          />
        ))}
      </div>
    </main>
  );
};

export default PostsPage;
