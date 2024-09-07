import React from "react";
import Navbar from "./Navbar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />
      <main className="flex-grow w-full">{children}</main>
      <footer className="w-full py-4 text-center bg-background border-t border-border">
        <p>&copy; 2024 Hotel Le Halcyon. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;
