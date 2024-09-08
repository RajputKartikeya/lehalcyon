import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import FloatingButtons from "./FloatingButtons";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />
      <main className="flex-grow w-full relative">
        <div className="w-full">{children}</div>
        <div className="fixed bottom-4 right-4 z-50">
          <FloatingButtons />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
