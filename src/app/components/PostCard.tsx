interface PostCardProps {
  title: string;
  tags: string[];
  description: string;
}

const PostCard = ({ title, description, tags }: PostCardProps) => {
  return (
    <div className="group">
      <div className="flex flex-col gap-3 group-hover:bg-gray-800 p-5 rounded-xl transition-colors">
        <p className="text-gray-200 group-hover:text-gray-100 font-bold mb-2 transition-colors">
          {title}
        </p>

        <p className="text-gray-300 group-hover:text-gray-200 transition-colors">
          {description}
        </p>

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
      </div>
    </div>
  );
};

export default PostCard;
