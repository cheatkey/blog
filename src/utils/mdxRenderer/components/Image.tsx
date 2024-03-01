import React from "react";

interface ImageProps {
  src?: string;
  alt?: string;
}

const Image = ({ src, alt }: ImageProps) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <img src={src} alt={alt} className="rounded-2xl" />
      {!!alt && <span className="text-gray-300 text-sm mb-2">{alt}</span>}
    </div>
  );
};

export default Image;
