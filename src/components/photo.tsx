import Image from "next/image";

type PhotoProps = {
  src: string;
  alt: string;
  sizes: string;
  className: string;
  priority?: boolean;
  position?: string;
};

export function Photo({
  src,
  alt,
  sizes,
  className,
  priority = false,
  position = "object-center",
}: PhotoProps) {
  return (
    <div className={`relative overflow-hidden bg-line/40 ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        quality={priority ? 90 : 82}
        sizes={sizes}
        className={`scale-photo object-cover ${position}`}
      />
    </div>
  );
}
