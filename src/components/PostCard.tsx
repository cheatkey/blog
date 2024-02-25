import Link from "next/link";
import TagContainer from "./TagContainer";

interface PostCardProps {
  title: string;
  tags: string[];
  description: string;
  href: string;
}

const PostCard = ({ title, description, tags, href }: PostCardProps) => {
  return (
    <Link href={href}>
      <div className="group">
        <div className="flex flex-col gap-3 group-hover:bg-gray-800 p-5 rounded-xl transition-colors">
          <p className="text-gray-200 group-hover:text-gray-100 font-bold mb-2 transition-colors">
            {title}
          </p>

          <p className="text-gray-300 group-hover:text-gray-200 transition-colors">
            {description}
          </p>

          <TagContainer tags={tags} />
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
