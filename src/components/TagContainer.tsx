interface TagContainerProps {
  tags: string[];
}
const TagContainer = ({ tags }: TagContainerProps) => {
  return (
    <div className="flex flex-row gap-2 self-end">
      {tags.map((tag) => (
        <span
          className="text-gray-400 group-hover:text-gray-300 bg-gray-800 group-hover:bg-gray-700 text-sm px-2 py-1 rounded-xl transition-colors"
          key={tag}
        >
          {tag}
        </span>
      ))}
    </div>
  );
};

export default TagContainer;
