import { Link } from "react-router-dom";
import PlaceholderImage from "./PlaceholderImage";

interface ProjectCardProps {
  title: string;
  slug: string;
  image?: string;
}

const ProjectCard = ({ title, slug, image }: ProjectCardProps) => {
  return (
    <Link to={`/projects/${slug}`} className="group block">

      <div className="overflow-hidden rounded-sm">

        <div className="transition-transform duration-500 group-hover:scale-105">

          {image ? (
            <img
              src={image}
              alt={title}
              className="w-full h-[260px] object-cover"
            />
          ) : (
            <PlaceholderImage
              label={title}
              aspectRatio="16/9"
            />
          )}

        </div>

      </div>

      <h3 className="mt-4 font-heading text-lg text-foreground group-hover:text-primary transition-colors duration-300">
        {title}
      </h3>

    </Link>
  );
};

export default ProjectCard;