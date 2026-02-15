import { useState } from "react";

const ImageWithFallback = (props: {
  src: string;
  alt: string;
  fallback: string;
  height?: string;
}) => {
  const { src, alt, fallback, height = "200px" } = props;
  const imageSrc = src ? src : fallback;
  const [imgSrc, setImgSrc] = useState(imageSrc);

  const handleError = () => {
    setImgSrc(fallback);
  };

  return (
    <img
      src={imgSrc}
      alt={alt}
      onError={handleError}
      style={{ height: height, objectFit: "cover" }}
      loading="lazy"
    />
  );
};

export default ImageWithFallback;
