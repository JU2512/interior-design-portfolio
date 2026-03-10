import Layout from "@/components/Layout";
import FadeIn from "@/components/FadeIn";

import lighting1 from "@/assets/lighting1.png";
import lighting2 from "@/assets/lighting2.png";

const LightingLayout = () => {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">

        <FadeIn>
          <h1 className="font-heading text-3xl md:text-4xl text-foreground mb-12">
            Lighting Layout
          </h1>
        </FadeIn>

        <FadeIn delay={100}>
          <img src={lighting1} className="w-full mb-16 rounded-sm" />
        </FadeIn>

        <FadeIn delay={200}>
          <img src={lighting2} className="w-full rounded-sm" />
        </FadeIn>

      </div>
    </Layout>
  );
};

export default LightingLayout;