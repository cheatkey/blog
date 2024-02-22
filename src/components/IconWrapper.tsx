interface IconWrapperProps {
  children: React.ReactNode;
}
const IconWrapper = ({ children }: IconWrapperProps) => {
  return (
    <div className="hover:bg-gray-700 transition-colors p-2 rounded-xl cursor-pointer">
      {children}
    </div>
  );
};

export default IconWrapper;
