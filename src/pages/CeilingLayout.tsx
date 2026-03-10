import Layout from "@/components/Layout";
import FadeIn from "@/components/FadeIn";

import ceiling1 from "@/assets/ceiling1.png";
import ceiling2 from "@/assets/ceiling2.png";

const CeilingLayout = () => {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">

        <FadeIn>
          <h1 className="font-heading text-3xl md:text-4xl text-foreground mb-12">
            Ceiling Layout
          </h1>
        </FadeIn>

        <FadeIn delay={100}>
          <img src={ceiling1} className="w-full mb-16 rounded-sm" />
        </FadeIn>

        <FadeIn delay={200}>
          <img src={ceiling2} className="w-full rounded-sm" />
        </FadeIn>

      </div>
    </Layout>
  );
};

export default CeilingLayout;