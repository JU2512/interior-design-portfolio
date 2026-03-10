import Layout from "@/components/Layout";
import FadeIn from "@/components/FadeIn";

/* images */
import ex1 from "@/assets/ex1.jpeg";
import ex2 from "@/assets/ex2.jpeg";
import ex3 from "@/assets/ex3.jpeg";

const Extracurricular = () => {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">

        {/* TITLE */}

        <FadeIn>
          <h1 className="font-heading text-3xl md:text-4xl text-foreground mb-2">
            Material Research & Market Study
          </h1>
        </FadeIn>

        <FadeIn delay={100}>
          <p className="font-body text-base md:text-lg text-muted-foreground mb-12">
            Market research conducted to understand commonly used furniture
            boards, interior hardware systems, laminates, veneers and decorative
            finishes used in residential interior design.
          </p>
        </FadeIn>

        {/* IMAGE 1 */}

        <FadeIn delay={150}>
          <div className="mb-12">
            <img
              src={ex1}
              alt="Wood boards laminates edge banding"
              className="w-full rounded-sm object-cover"
            />

            <h3 className="mt-3 font-body text-base text-foreground">
              Material - Wood Types & Edge Banding 
            </h3>
          </div>
        </FadeIn>


        {/* TEXT + RIGHT IMAGES */}

        <FadeIn delay={200}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

            {/* LEFT TEXT CONTENT */}

            <div>

              {/* DESCRIPTION */}

              <p className="font-body text-lg text-muted-foreground leading-relaxed mb-10">
                This study focuses on understanding the practical application of
                interior materials used in furniture and residential interiors.
                The research includes wood boards such as MDF and HDHMR,
                hardware components like hinges and channels, and decorative
                laminates, acrylic sheets and veneer finishes. The exercise
                helped build material knowledge and understanding of real-world
                interior construction practices.
              </p>


              {/* LEARNING OUTCOMES */}

              <h2 className="font-heading text-xl text-foreground mb-4">
                Key Learning Outcomes
              </h2>

              <ul className="space-y-4 font-body text-base text-muted-foreground">

                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  Studied different wood boards such as MDF, HDHMR and
                  pre-laminated boards used in furniture manufacturing.
                </li>

                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  Analyzed cabinet hardware including hinges, handles,
                  channels, locks and glass fittings used in modular interiors.
                </li>

                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  Explored decorative laminates, acrylic sheets, veneer
                  finishes and panel materials used for interior surfaces.
                </li>

              </ul>

            </div>


            {/* RIGHT IMAGES */}

            <div className="space-y-10">

              <div>
                <img
                  src={ex2}
                  alt="Furniture hardware study"
                  className="w-full rounded-sm object-cover"
                />

                <h3 className="mt-3 font-body text-base text-foreground">
                   Finishes - Decorative Laminates, Panels & Veneer Finishes
                </h3>
              </div>

              <div>
                <img
                  src={ex3}
                  alt="Decorative laminates veneer finishes"
                  className="w-full rounded-sm object-cover"
                />

                <h3 className="mt-3 font-body text-base text-foreground">
                  Material - Furniture Hardware & Glass
                </h3>
              </div>

            </div>

          </div>
        </FadeIn>

      </div>
    </Layout>
  );
};

export default Extracurricular;