import { Link } from "react-router-dom";
import PlaceholderImage from "./PlaceholderImage";

interface GalleryImage {
  label: string;
  src?: string;
  link?: string;
  aspectRatio?: "16/9" | "4/3" | "1/1" | "3/4";
}

interface ImageGalleryProps {
  images: GalleryImage[];
  columns?: number;
}

const ImageGallery = ({ images, columns = 3 }: ImageGalleryProps) => {

  const gridCols =
    columns === 2
      ? "grid-cols-1 sm:grid-cols-2"
      : columns === 4
      ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
      : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";

  return (
    <div className={`grid ${gridCols} gap-6`}>
      {images.map((img, i) => {

        const content = (
          <div className="overflow-hidden rounded-sm border border-border hover:shadow-md transition">
            
            {img.src ? (
              <img
                src={img.src}
                alt={img.label}
                className="w-full object-cover"
                style={{ aspectRatio: img.aspectRatio || "4/3" }}
              />
            ) : (
              <PlaceholderImage
                label={img.label}
                aspectRatio={img.aspectRatio || "4/3"}
              />
            )}

            <p className="text-sm font-body text-center py-3">
              {img.label}
            </p>

          </div>
        );

        if (img.link) {
          return (
            <Link key={i} to={img.link}>
              {content}
            </Link>
          );
        }

        return (
          <div key={i}>
            {content}
          </div>
        );
      })}
    </div>
  );
};

export default ImageGallery;