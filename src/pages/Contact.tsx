import { useState } from "react";
import Layout from "@/components/Layout";
import FadeIn from "@/components/FadeIn";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

const Contact = () => {

  const { toast } = useToast();

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const templateParams = {
      from_name: form.name,
      from_email: form.email,
      message: form.message,
    };

    emailjs
      .send(
        "service_mfmqs09",
        "template_thrckuy",
        templateParams,
        "mMJexa7nfTbzzSwUZ"
      )
      .then(() => {

        toast({
          title: "Message Sent!",
          description: "Thank you for contacting. I will respond soon.",
        });

        setForm({
          name: "",
          email: "",
          message: "",
        });

      })
      .catch(() => {

        toast({
          title: "Error",
          description: "Failed to send message. Please try again.",
        });

      });
  };

  return (
    <Layout>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">

        <FadeIn>
          <h1 className="font-heading text-3xl md:text-4xl text-foreground mb-12">
            Get in Touch
          </h1>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

          <FadeIn delay={100}>

            <div className="space-y-6">

              <div>
                <h2 className="font-heading text-xl text-foreground">
                  Deepak Urade
                </h2>
                <p className="font-body text-sm text-muted-foreground">
                  Interior Design Student
                </p>
              </div>

              <div className="space-y-3 font-body text-sm text-muted-foreground">

                <a
                  href="mailto:deepakurade2@gmail.com"
                  className="flex items-center gap-3 hover:text-primary transition-colors"
                >
                  <Mail size={16} />
                  deepakurade2@gmail.com
                </a>

                <a
                  href="tel:+919390173272"
                  className="flex items-center gap-3 hover:text-primary transition-colors"
                >
                  <Phone size={16} />
                  +91 9390173272
                </a>

                <span className="flex items-center gap-3">
                  <MapPin size={16} />
                  Hyderabad
                </span>

              </div>

            </div>

          </FadeIn>

          <FadeIn delay={200}>

            <form onSubmit={handleSubmit} className="space-y-6">

              <div>
                <label className="font-body text-sm text-foreground mb-2 block">
                  Name
                </label>

                <Input
                  value={form.name}
                  onChange={(e) =>
                    setForm({ ...form, name: e.target.value })
                  }
                  required
                  className="rounded-none bg-card border-border"
                />
              </div>

              <div>
                <label className="font-body text-sm text-foreground mb-2 block">
                  Email
                </label>

                <Input
                  type="email"
                  value={form.email}
                  onChange={(e) =>
                    setForm({ ...form, email: e.target.value })
                  }
                  required
                  className="rounded-none bg-card border-border"
                />
              </div>

              <div>
                <label className="font-body text-sm text-foreground mb-2 block">
                  Message
                </label>

                <Textarea
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  required
                  rows={5}
                  className="rounded-none bg-card border-border"
                />
              </div>

              <Button
                type="submit"
                className="rounded-none px-8 py-5"
              >
                Send Message
              </Button>

            </form>

          </FadeIn>

        </div>

      </div>

    </Layout>
  );
};

export default Contact;