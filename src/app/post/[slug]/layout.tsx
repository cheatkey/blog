interface PostLayoutProps {
  children: React.ReactNode;
}
const PostLayout = ({ children }: PostLayoutProps) => {
  return (
    <div className="w-full flex justify-center py-20">
      <article className="w-full max-w-[1200px] px-8">{children}</article>
    </div>
  );
};

export default PostLayout;
