import { cn } from "@/utils/cn";

interface IconWrapperProps extends React.ComponentProps<"div"> {
  children: React.ReactNode;
}
const IconWrapper = ({ children, ...props }: IconWrapperProps) => {
  return (
    <div
      {...props}
      className={cn(
        "hover:bg-gray-700 transition-colors p-2 rounded-xl cursor-pointer",
        props.className
      )}
    >
      {children}
    </div>
  );
};

export default IconWrapper;
