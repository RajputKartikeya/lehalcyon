import React from "react";
import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { useTheme } from "@/components/theme-provider";

const Footer: React.FC = () => {
  const { theme } = useTheme();

  const quickLinks = [
    { name: "Rooms", href: "/rooms" },
    { name: "Attractions", href: "/attractions" },
    { name: "Packages", href: "/packages" },
    { name: "Gallery", href: "/gallery" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <footer className="w-full bg-background border-t border-border p-10">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Hotel Info */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <img
              src={theme === "dark" ? "ogwhite.svg" : "ogblack.svg"}
              alt="Home"
              className="h-12 w-auto mb-4"
            />
            <p className="text-sm text-muted-foreground">
              Experience luxury and serenity in the heart of Kasauli. Your
              perfect mountain getaway awaits at Hotel Le Halcyon.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm hover:text-primary transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-start text-sm">
                <MapPin className="h-5 w-5 mr-2 text-primary flex-shrink-0 mt-0.5" />
                <span>Barog Hills, Village Koron, Kasauli</span>
              </li>
              <li className="flex items-center text-sm">
                <Phone className="h-5 w-5 mr-2 text-primary flex-shrink-0" />
                <span>+91 1234567890</span>
              </li>
              <li className="flex items-center text-sm">
                <Mail className="h-5 w-5 mr-2 text-primary flex-shrink-0" />
                <span className="break-all">info@hotellehalcyon.com</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex items-center justify-between lg:justify-start lg:space-x-4">
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 Hotel Le Halcyon. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
