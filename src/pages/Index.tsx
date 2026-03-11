import Layout from "@/components/Layout";
import FadeIn from "@/components/FadeIn";
import ProjectCard from "@/components/ProjectCard";
import heroImage from "@/assets/home-hero.png";
import drawingArea from "@/assets/drawing-area-1.png";
import flooring from "@/assets/flooring_autocad.jpeg";

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative w-full h-screen">
        <img src={heroImage} alt="Modern contemporary interior design render" className="absolute inset-0 w-full h-full object-cover" />
        <div
  className="absolute inset-0"
  style={{ background: "linear-gradient(rgba(0,0,0,0.05), rgba(0,0,0,0.05))" }}
/>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-6">
            <FadeIn>
              <h1 className="font-heading text-4xl md:text-6xl font-semibold mb-3" style={{ color: '#AF6E4D', letterSpacing: '2px' }}>Deepak Urade</h1>
              <p className="font-body text-lg md:text-xl text-white mb-4" style={{ textShadow: '0px 4px 18px rgba(0,0,0,0.35)' }}>Interior Design Portfolio</p>
              <p className="font-body text-sm md:text-base text-white/70 max-w-md mx-auto" style={{ textShadow: '0px 4px 18px rgba(0,0,0,0.35)' }}>Creating functional spaces through modern and thoughtful interior design.</p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <FadeIn>
          <h2 className="font-heading text-2xl md:text-3xl text-foreground mb-12">Featured Projects</h2>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <FadeIn delay={100}>
           <ProjectCard 
  title="Modern Contemporary Duplex Residence" 
  slug="duplex-residence"
  image={drawingArea}
/>
          </FadeIn>
          <FadeIn delay={200}>
            <ProjectCard 
  title="Restaurant Interior Design" 
  slug="restaurant-interior"
  image={flooring}
/>
          </FadeIn>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
