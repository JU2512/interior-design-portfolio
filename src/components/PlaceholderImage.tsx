interface PlaceholderImageProps {
  label: string;
  src?: string;
  aspectRatio?: "16/9" | "4/3" | "1/1" | "3/4";
  className?: string;
  onClick?: () => void;
}

const PlaceholderImage = ({ label, src, aspectRatio = "4/3", className = "", onClick }: PlaceholderImageProps) => {
  if (src) {
    return (
      <div
        className={`relative overflow-hidden ${onClick ? "cursor-pointer group" : ""} ${className}`}
        style={{ aspectRatio }}
        onClick={onClick}
      >
        <img src={src} alt={label} className="absolute inset-0 w-full h-full object-cover" />
        {onClick && (
          <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors duration-300" />
        )}
      </div>
    );
  }

  return (
    <div
      className={`relative bg-muted flex items-center justify-center overflow-hidden ${onClick ? "cursor-pointer group" : ""} ${className}`}
      style={{ aspectRatio }}
      onClick={onClick}
    >
      <div className="absolute inset-0 bg-muted-foreground/5" />
      <span className="font-body text-sm text-muted-foreground text-center px-4 z-10">{label}</span>
      {onClick && (
        <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors duration-300" />
      )}
    </div>
  );
};

export default PlaceholderImage;
