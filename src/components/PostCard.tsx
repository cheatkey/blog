<<<<<<< Updated upstream
import Link from "next/link";

=======
<<<<<<< Updated upstream
=======
import Link from "next/link";
import TagContainer from "./TagContainer";

>>>>>>> Stashed changes
>>>>>>> Stashed changes
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

<<<<<<< Updated upstream
          <div className="flex flex-row gap-2">
            {tags.map((tag) => (
              <span
                className="text-gray-400 group-hover:text-gray-300 bg-gray-800 group-hover:bg-gray-700 text-sm px-2 py-1 rounded-xl transition-colors"
                key={tag}
              >
                {tag}
              </span>
            ))}
          </div>
=======
<<<<<<< Updated upstream
        <div className="flex flex-row gap-2">
          {tags.map((tag) => (
            <span
              className="text-gray-400 group-hover:text-gray-300 bg-gray-800 group-hover:bg-gray-700 text-sm px-2 py-1 rounded-xl transition-colors"
              key={tag}
            >
              {tag}
            </span>
          ))}
=======
          <TagContainer tags={tags} />
>>>>>>> Stashed changes
>>>>>>> Stashed changes
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
