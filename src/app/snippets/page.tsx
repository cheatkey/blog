import fs from "fs/promises";
import PostCard from "@/components/PostCard";
import path from "path";
import { SNIPPET_PATH } from "@/constants";
import { getAllFiles } from "@/utils/getAllFiles";
import matter from "gray-matter";
import { z } from "zod";
import _ from "lodash-es";

const snippetListSchema = z.object({
  title: z.string(),
  description: z.string().default(""),
  category: z.string(),
  tags: z.array(z.string()).default([]),
  path: z.string(),
});

const capitalizeAndReplace = (input: string): string => {
  return input
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
};

const SnippetsPage = async () => {
  const files = await getAllFiles(SNIPPET_PATH);

  const snippetList = await Promise.all(
    files.map(async (filePath) => {
      const parsedPath = path.parse(filePath);
      const category = parsedPath.dir.split(path.sep).pop();

      const markdown = await fs.readFile(path.join(filePath), "utf8");
      const { data: frontmatter } = matter(markdown);

      return snippetListSchema.parse({
        ...frontmatter,
        category: capitalizeAndReplace((category ?? "").replaceAll("-", " ")),
        path: `/snippet/${category}/${path
          .basename(filePath)
          .replace(".mdx", "")}`,
      });
    })
  );

  const snippetsByCategory = _.chain(snippetList)
    .groupBy("category")
    .toPairs()
    .value();

  return (
    <div className="flex justify-center bg-gray-900 py-20 min-h-screen">
      <main className="max-w-[1200px] w-full p-4 flex flex-col gap-12 py-12">
        <section className="flex flex-col gap-2">
          <h1 className="text-4xl font-bold text-gray-100 tracking-tight">
            Code Snippets
          </h1>
          <p className="text-gray-400">여기에 설명하는 텍스트를 넣습니다.</p>
        </section>

        {snippetsByCategory.map(([category, snippets]) => (
          <section key={category} className="flex flex-col gap-4">
            <h2 className="text-3xl font-bold text-gray-100 tracking-tight">
              {category} ({snippets.length})
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
              {snippets.map((snippet) => (
                <PostCard
                  key={snippet.title}
                  title={snippet.title}
                  tags={snippet.tags}
                  description={snippet.description}
                  href={snippet.path}
                />
              ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
};

export default SnippetsPage;
