import Image from "next/image";
import PostCard from "@/components/PostCard";
import { getAllFiles } from "@/utils/getAllFiles";
import { POST_PATH } from "@/constants";
import fs from "fs/promises";
import matter from "gray-matter";
import path from "path";
import { postListSchema } from "./posts/page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "개발 블로그",
};

export default async function Home() {
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
    <div className="flex justify-center min-h-screen bg-gray-900 py-20">
      <main className="max-w-[1200px] w-full p-4 flex flex-col gap-24 py-12">
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
    </div>
  );

  return (
    <div className="flex justify-center bg-gray-900 py-20">
      <main className="max-w-[1200px] w-full p-4 flex flex-col gap-24 py-12">
        <section className="max-w-[1200px] w-full px-4 py-40">
          <p className="text-2xl text-gray-50">개발 블로그</p>
          <span className="text-gray-200">블로그 소개 내용 입력</span>
          <p className="text-gray-300">github, email 아이콘 링크</p>
        </section>

        <section className="flex flex-col gap-2 max-w-[1200px] w-full px-4">
          <h2 className="text-4xl font-bold text-gray-100">
            시리즈로 작성된 글
          </h2>

          <p className="text-red-700 dark:text-blue-500">test</p>

          <div className="w-full h-48 bg-gray-600 rounded-lg p-6">
            zustand 마스터리
          </div>
          <div className="w-full h-48 bg-gray-600 rounded-lg p-6">
            Notion 생산성 with notion api, chatgpt
          </div>
          <div className="w-full h-48 bg-gray-600 rounded-lg p-6">
            프론트엔드 디버깅 101
          </div>

          <p className="text-gray-300">다른 시리즈 더 보기</p>
        </section>

        <section className="max-w-[1200px] w-full px-4 flex flex-col gap-6">
          <h2 className="text-4xl font-bold text-gray-100 tracking-tight">
            최근에 작성된 글
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
            {Array(5)
              .fill(null)
              .map((_, index) => (
                <PostCard
                  key={index}
                  title={"리액트 디버깅 팁 5가지 "}
                  tags={["REACT", "JAVASCRIPT", "TYPESCRIPT"]}
                  description={"리액트 환경에서 디버깅하는 팁을 소개합니다."}
                  href=""
                />
              ))}
          </div>
          <p className="text-gray-300">Read all posts</p>
        </section>

        <section className="max-w-[1200px] w-full px-4 flex flex-col gap-6">
          <h2 className="text-4xl font-bold text-gray-100 tracking-tight">
            웹 개발 주제
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {["React", "Typescript", "Frontend"].map((tag) => (
              <div key={tag} className="flex flex-col gap-4">
                <div className="flex flex-row justify-between px-4 items-center">
                  <p className="text-2xl font-semibold text-gray-200">{tag}</p>
                  <p className="text-gray-300">더보기</p>
                </div>

                <div className="flex flex-col gap-4">
                  {Array(3)
                    .fill(null)
                    .map((_, index) => (
                      <PostCard
                        key={index}
                        title={"리액트 디버깅 팁 5가지 "}
                        tags={["REACT", "JAVASCRIPT", "TYPESCRIPT"]}
                        description={
                          "리액트 환경에서 디버깅하는 팁을 소개합니다."
                        }
                        href=""
                      />
                    ))}
                </div>

                <p className="text-gray-300">...총 N개의 포스트 더보기</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
