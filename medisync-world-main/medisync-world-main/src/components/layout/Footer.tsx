import { Link } from "react-router-dom";
import { Heart, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground/80">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2 font-display font-bold text-xl text-primary-foreground">
              <div className="w-9 h-9 rounded-lg medical-gradient flex items-center justify-center">
                <Heart className="w-5 h-5 text-primary-foreground" />
              </div>
              Med<span className="text-primary">Online</span>
            </Link>
            <p className="text-sm leading-relaxed text-primary-foreground/60">
              Comprehensive healthcare management connecting patients, doctors, and nurses for better care.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-primary-foreground mb-4">Quick Links</h4>
            <div className="space-y-2">
              {[
                { label: "Home", path: "/" },
                { label: "About Us", path: "/about" },
                { label: "Services", path: "/services" },
                { label: "Contact", path: "/contact" },
              ].map((link) => (
                <Link key={link.path} to={link.path} className="block text-sm text-primary-foreground/60 hover:text-primary transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-primary-foreground mb-4">Services</h4>
            <div className="space-y-2 text-sm text-primary-foreground/60">
              <p>Nurse Booking</p>
              <p>Doctor Appointments</p>
              <p>Home Care</p>
              <p>Medical Center Care</p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-primary-foreground mb-4">Contact Us</h4>
            <div className="space-y-3 text-sm text-primary-foreground/60">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                <span>info@medonline.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span>123 Health St, Medical City</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/10 text-center text-sm text-primary-foreground/40">
          © 2026 MedOnline. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
