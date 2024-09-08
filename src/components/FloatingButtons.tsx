import React from "react";
import { Button } from "@/components/ui/button";
import { Moon, Sun, MessageCircle, Gift } from "lucide-react";
import { useTheme } from "@/components/theme-provider";

const FloatingButtons: React.FC = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="fixed bottom-20 left-4 flex flex-col space-y-2 z-50">
      {" "}
      {/* Increased bottom spacing */}
      <Button
        variant="outline"
        size="icon"
        className="rounded-full bg-background/60 backdrop-blur-sm"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        <span className="sr-only">Toggle theme</span>
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="rounded-full bg-background/60 backdrop-blur-sm"
        onClick={() => window.open("https://wa.me/yourphonenumber", "_blank")}
      >
        <MessageCircle className="h-[1.2rem] w-[1.2rem]" />
        <span className="sr-only">WhatsApp</span>
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="rounded-full bg-background/60 backdrop-blur-sm"
        onClick={() => {
          /* Handle offers click */
        }}
      >
        <Gift className="h-[1.2rem] w-[1.2rem]" />
        <span className="sr-only">Offers</span>
      </Button>
    </div>
  );
};

export default FloatingButtons;
