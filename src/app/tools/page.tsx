const ToolsPage = () => {
  const tools = [
    {
      image: "/images/project-beautiful-mermaid.png",
      title: "beautiful mermaid",
      url: "https://beautiful-mermaid.vercel.app/",
      github: "https://github.com/cheatkey/beautiful-mermaid",
      description: "mermaid 다이어그램을 예쁘게 그려주는 도구",
    },
    {
      image: "/images/project-code-craft.png",
      title: "code craft",
      url: "https://craft-code.vercel.app/",
      github: "https://github.com/cheatkey/code-craft",
      description:
        "개발자들이 자주 사용하는 코드를 입력하여 Bash 및 PowerShell 스크립트를 생성하고 실행함으로써 폴더와 파일 생성을 자동화하는 툴",
    },
  ];

  return (
    <div className="flex justify-center bg-gray-900 py-20 min-h-screen">
      <main className="max-w-[1200px] w-full p-4 flex flex-col gap-12 py-12">
        <section className="flex flex-col gap-2">
          <h1 className="text-4xl font-bold text-gray-100 tracking-tight">
            Tools
          </h1>
          <p className="text-gray-400">
            직접 개발한, 개발할 때 유용한 온라인 툴 입니다.
          </p>
        </section>

        <section className="flex flex-col gap-4">
          {tools.map((tool) => (
            <div
              key={tool.github}
              className="flex flex-row gap-4 hover:bg-gray-950 p-6 transition-colors rounded-2xl"
            >
              <img className="w-80 h-auto rounded-xl" src={tool.image} />
              <div className="flex-col flex gap-1">
                <h2 className="text-2xl font-bold text-gray-100 tracking-tight">
                  {tool.title}
                </h2>
                <a href={tool.url} className="text-blue-600 text-base">
                  {tool.url}
                </a>
                <a href={tool.github} className="text-blue-600 text-base">
                  {tool.github}
                </a>

                <p className="text-gray-200 text-base">{tool.description}</p>
              </div>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
};

export default ToolsPage;
