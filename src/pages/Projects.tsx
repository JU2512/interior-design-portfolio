import Layout from "@/components/Layout";
import FadeIn from "@/components/FadeIn";
import ProjectCard from "@/components/ProjectCard";
import drawingArea from "@/assets/drawing-area-1.png";

const projects = [
  {
    title: "Modern Contemporary Duplex Residence",
    slug: "duplex-residence",
    image: drawingArea,
  },
  {
    title: "Restaurant Interior Design",
    slug: "restaurant-interior",
  },
];

const Projects = () => {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">

        <FadeIn>
          <h1 className="font-heading text-3xl md:text-4xl text-foreground mb-12">
            Projects
          </h1>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <FadeIn key={p.slug} delay={i * 100}>
              <ProjectCard
                title={p.title}
                slug={p.slug}
                image={p.image}
              />
            </FadeIn>
          ))}
        </div>

      </div>
    </Layout>
  );
};

export default Projects;