interface PostLayoutProps {
  children: React.ReactNode;
}
const PostLayout = ({ children }: PostLayoutProps) => {
  return (
    <div className="w-full flex justify-center py-14 bg-gray-900 min-h-screen">
      {children}
    </div>
  );
};

export default PostLayout;
