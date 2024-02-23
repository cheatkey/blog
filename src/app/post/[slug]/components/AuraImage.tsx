interface AuraImageProps {
  src: string;
  alt: string;
}

const AuraImage = ({ src, alt }: AuraImageProps) => {
  return (
    <div
      className="pt-4 pl-4 overflow-hidden rounded-3xl w-full"
      style={{
        background: `linear-gradient(135deg, rgba(251,99,169,1) 0%, rgba(104,189,226,1) 100%)`,
      }}
    >
      <img src={src} alt={alt} className="w-full rounded-tl-xl" />
    </div>
  );
};

export default AuraImage;
