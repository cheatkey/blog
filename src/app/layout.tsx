import { Footer, Layout, Navbar } from "nextra-theme-docs";
import { Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import "nextra-theme-docs/style.css";
import "./globals.css";

export const metadata = {
  title: "Frontend Atelier",
  description:
    "프론트엔드 개발, 타입스크립트, Next.js, 웹 접근성 등 웹 개발을 공유하는 블로그",
  keywords: [
    "프론트엔드 개발",
    "Typescript",
    "Next.js",
    "React",
    "웹 최적화",
    "웹 접근성",
    "개발 블로그",
  ],
  openGraph: {
    type: "website",
    url: "https://your-blog-url.com",
    title: "Frontend Atelier",
    description:
      "프론트엔드 개발, 타입스크립트, Next.js, 웹 접근성 등 웹 개발을 공유하는 블로그",
    siteName: "Frontend Atelier",
    images: [
      {
        url: "https://your-blog-url.com/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  metadataBase: new URL("https://your-blog-url.com"),
};

const navbar = <Navbar logo={<b>Frontend Atelier</b>} />;
const footer = (
  <Footer>MIT {new Date().getFullYear()} © Frontend Atelier.</Footer>
);

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/variable/pretendardvariable.css"
        />
      </Head>
      <body>
        <Layout
          darkMode={false}
          nextThemes={{
            defaultTheme: "light",
          }}
          banner={<></>}
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/shuding/nextra/tree/main/docs"
          footer={footer}
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
