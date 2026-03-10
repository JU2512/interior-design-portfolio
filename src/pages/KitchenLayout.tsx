import Layout from "@/components/Layout";
import FadeIn from "@/components/FadeIn";
import PlaceholderImage from "@/components/PlaceholderImage";

const KitchenLayout = () => {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">

        <FadeIn>
          <h1 className="font-heading text-3xl md:text-4xl text-foreground mb-12">
            Kitchen Layout
          </h1>
        </FadeIn>

        <FadeIn delay={100}>
          <h2 className="font-body text-lg text-muted-foreground mb-4">
            Kitchen Planning Layout
          </h2>

          <PlaceholderImage
            label="Kitchen Layout"
            aspectRatio="16/9"
            className="rounded-md mb-16"
          />
        </FadeIn>

        <FadeIn delay={200}>
          <h2 className="font-body text-lg text-muted-foreground mb-4">
            Cabinet Layout
          </h2>

          <PlaceholderImage
            label="Kitchen Cabinet Detail"
            aspectRatio="16/9"
            className="rounded-md"
          />
        </FadeIn>

      </div>
    </Layout>
  );
};

export default KitchenLayout;