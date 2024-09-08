import React from "react";
import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-background border-t border-border">
      <div className="w-full py-5 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Hotel Info */}
            <div>
              <img
                src="/logo.png"
                alt="Hotel Le Halcyon Logo"
                className="h-10 w-auto mb-4"
              />
              <p className="text-sm text-muted-foreground mb-4">
                Experience luxury and serenity in the heart of Kasauli. Your
                perfect mountain getaway awaits at Hotel Le Halcyon.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/rooms"
                    className="text-sm hover:text-primary transition-colors"
                  >
                    Rooms
                  </a>
                </li>
                <li>
                  <a
                    href="/attractions"
                    className="text-sm hover:text-primary transition-colors"
                  >
                    Attractions
                  </a>
                </li>
                <li>
                  <a
                    href="/packages"
                    className="text-sm hover:text-primary transition-colors"
                  >
                    Packages
                  </a>
                </li>
                <li>
                  <a
                    href="/gallery"
                    className="text-sm hover:text-primary transition-colors"
                  >
                    Gallery
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <ul className="space-y-2">
                <li className="flex items-center text-sm">
                  <MapPin className="h-4 w-4 mr-2 text-primary" />
                  <span className="flex-1">
                    Barog Hills, Village Koron, Kasauli
                  </span>
                </li>
                <li className="flex items-center text-sm">
                  <Phone className="h-4 w-4 mr-2 text-primary" />
                  <span>+91 1234567890</span>
                </li>
                <li className="flex items-center text-sm">
                  <Mail className="h-4 w-4 mr-2 text-primary" />
                  <span className="break-all">info@hotellehalcyon.com</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Social Media and Copyright */}
          <div className="mt-8 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center">
            <div className="flex space-x-4 mb-4 sm:mb-0">
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
            <p className="text-sm text-muted-foreground text-center sm:text-left">
              © 2024 Hotel Le Halcyon. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
