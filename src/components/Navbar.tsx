import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useTheme } from "@/components/theme-provider";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { theme } = useTheme();

  const menuItems = [
    "Rooms",
    "Attractions",
    "Packages",
    "Gallery",
    "Contact",
    "About",
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Function to scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Use effect to scroll to top on route change
  useEffect(() => {
    scrollToTop();
  }, [location.pathname]);

  return (
    <>
      <div className="w-full flex justify-center items-center fixed top-4 z-50">
        <motion.nav
          className="w-[90%] max-w-7xl rounded-full border border-border bg-background/60 backdrop-blur-md shadow-lg"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, type: "spring", stiffness: 120 }}
        >
          <div className="container flex h-16 items-center justify-between px-6">
            <Link
              to="/"
              className="flex items-center space-x-2"
              onClick={scrollToTop}
            >
              <motion.span
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <img
                  src={theme === "dark" ? "fullwhite.svg" : "fullblack.svg"}
                  alt="Home"
                  className="h-10 w-18"
                />
              </motion.span>
            </Link>
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center space-x-1">
                {menuItems.map((item) => (
                  <motion.div
                    key={item}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      to={`/${item.toLowerCase()}`}
                      className="px-3 py-2 text-sm font-medium rounded-full transition-colors hover:bg-primary/40"
                      onClick={scrollToTop}
                    >
                      {item}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    size="sm"
                    className="rounded-full hover:bg-slate-100 border-yellow-500"
                    onClick={scrollToTop}
                  >
                    Book Now
                  </Button>
                </motion.div>
              </div>
              <Button
                variant="outline"
                size="icon"
                className="md:hidden rounded-full"
                onClick={toggleMenu}
              >
                <Menu className="h-[1.2rem] w-[1.2rem]" />
                <span className="sr-only">Menu</span>
              </Button>
            </div>
          </div>
        </motion.nav>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-0 bg-background/95 backdrop-blur-md z-50 md:hidden"
          >
            <div className="flex flex-col h-full p-6">
              <div className="flex justify-between items-center mb-8">
                <Link
                  to="/"
                  className="flex items-center"
                  onClick={() => {
                    toggleMenu();
                    scrollToTop();
                  }}
                >
                  <img
                    src={theme === "dark" ? "white.svg" : "black.svg"}
                    alt="Home"
                    className="h-12 w-18"
                  />
                </Link>
                <Button variant="ghost" size="icon" onClick={toggleMenu}>
                  <X className="h-6 w-6" />
                </Button>
              </div>
              <nav className="flex flex-col items-center justify-center flex-grow">
                {[...menuItems, "Book Now"].map((item) => (
                  <motion.div
                    key={item}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="my-2"
                  >
                    {item === "Book Now" ? (
                      <Button
                        size="lg"
                        className="rounded-full text-2xl font-medium"
                        onClick={() => {
                          toggleMenu();
                          scrollToTop();
                        }}
                      >
                        {item}
                      </Button>
                    ) : (
                      <Link
                        to={`/${item.toLowerCase()}`}
                        className="text-2xl font-medium"
                        onClick={() => {
                          toggleMenu();
                          scrollToTop();
                        }}
                      >
                        {item}
                      </Link>
                    )}
                  </motion.div>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
