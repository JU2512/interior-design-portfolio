import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border mt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h4 className="font-heading text-lg text-foreground">Deepak Urade</h4>
            <p className="font-body text-sm text-muted-foreground mt-1">Interior Design Portfolio</p>
          </div>
          <div className="flex flex-col gap-2 font-body text-sm text-muted-foreground">
            <a href="mailto:deepakurade2@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Mail size={14} /> deepakurade2@gmail.com
            </a>
            <a href="tel:+919390173272" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Phone size={14} /> +91 9390173272
            </a>
            <span className="flex items-center gap-2">
              <MapPin size={14} /> Hyderabad
            </span>
          </div>
          <div className="md:text-right">
            <p className="font-body text-xs text-muted-foreground">© 2025 Deepak Urade Portfolio</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
