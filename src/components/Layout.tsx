import React, { useRef, useEffect } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Navbar from "./Navbar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll();

  const smoothScrollY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const container = scrollContainerRef.current;
    const content = contentRef.current;
    if (!container || !content) return;

    const updateHeight = () => {
      container.style.height = `${content.scrollHeight}px`;
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);

    return () => window.removeEventListener("resize", updateHeight);
  }, [children]);

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />
      <div ref={scrollContainerRef} className="flex-grow relative">
        <motion.div
          ref={contentRef}
          style={{ y: useTransform(smoothScrollY, [0, 1], [0, -100]) }}
          className="absolute top-0 left-0 right-0"
        >
          <main className="w-full">{children}</main>
        </motion.div>
      </div>
      <footer className="w-full py-4 text-center bg-background border-t border-border">
        <p>&copy; 2024 Hotel Le Halcyon. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;
