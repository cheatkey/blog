import Image from "next/image";
import React from "react";

import githubFavicon from "./assets/github.png";

interface ExternalLinkProps {
  href: string;
  children?: React.ReactNode;
}

const ExternalLink = ({ href, children }: ExternalLinkProps) => {
  const favicon = (() => {
    if (href.startsWith("https://github.com")) return githubFavicon;
  })();

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex w-fit items-center gap-2 bg-gray-800 font-medium text-gray-200 text-sm px-3 py-0 rounded-xl leading-8"
    >
      {!!favicon && (
        <Image src={favicon} alt="Favicon" className="w-4 h-4 flex-shrink-0" />
      )}
      {children ?? href}
    </a>
  );
};

export default ExternalLink;
