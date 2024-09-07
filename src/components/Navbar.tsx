import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Moon, Sun, Menu } from "lucide-react";
import { useTheme } from "@/components/theme-provider";

const Navbar: React.FC = () => {
  const { setTheme } = useTheme();

  return (
    <div className="w-full flex justify-center items-center fixed top-4 z-50">
      <motion.nav
        className="w-[90%] max-w-7xl rounded-full border border-border bg-background/60 backdrop-blur-md shadow-lg"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, type: "spring", stiffness: 120 }}
      >
        <div className="container flex h-16 items-center justify-between px-6">
          <Link to="/" className="flex items-center space-x-2">
            <motion.span
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <img src="/logo.png" alt="logo" className="w-21 h-10" />
            </motion.span>
          </Link>
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex space-x-1">
              {[
                "Rooms",

                "Attractions",
                "Packages",
                "Gallary",
                "Contact",
                "About",
              ].map((item) => (
                <motion.div
                  key={item}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to={`/${item.toLowerCase()}`}
                    className="px-3 py-2 text-sm font-medium rounded-full transition-colors hover:bg-primary/40"
                  >
                    {item}
                  </Link>
                </motion.div>
              ))}
            </div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="sm"
                className="rounded-full hover:bg-slate-100 border-yellow-500"
              >
                Book Now
              </Button>
            </motion.div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon" className="rounded-full">
                  <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                  <span className="sr-only">Toggle theme</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setTheme("light")}>
                  Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>
                  Dark
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")}>
                  System
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="md:hidden rounded-full"
                >
                  <Menu className="h-[1.2rem] w-[1.2rem]" />
                  <span className="sr-only">Menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {[
                  "Rooms",

                  "Attractions",
                  "Packages",
                  "Gallary",
                  "Contact",
                  "About",
                ].map((item) => (
                  <DropdownMenuItem key={item}>
                    <Link to={`/${item.toLowerCase()}`}>{item}</Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </motion.nav>
    </div>
  );
};

export default Navbar;
