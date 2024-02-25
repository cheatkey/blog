interface SnippetLayoutProps {
  children: React.ReactNode;
}
const Snippetayout = ({ children }: SnippetLayoutProps) => {
  return (
    <div className="w-full flex justify-center py-14 bg-gray-900 min-h-screen">
      {children}
    </div>
  );
};

export default Snippetayout;
