import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { CloudinaryImage } from "@/utils/cloudinaryImage";

const galleryItems = [
  { id: 1, imagePath: "gallary/4_gt3v8q", alt: "" },
  { id: 2, imagePath: "gallary/7_euadyh", alt: "" },
  { id: 3, imagePath: "gallary/10_cro3bh", alt: "" },
  { id: 4, imagePath: "gallary/2_dpmrwx", alt: "" },
  { id: 5, imagePath: "gallary/1_eysrmn", alt: "" },
  { id: 6, imagePath: "gallary/8_ei5shb", alt: "" },
  { id: 7, imagePath: "gallary/3_gzt3ko", alt: "" },
  { id: 8, imagePath: "gallary/2_ij1a1h", alt: "" },
  { id: 9, imagePath: "gallary/09_lqn9r0", alt: "" },
  { id: 10, imagePath: "gallary/2_imitml", alt: "" },
  { id: 11, imagePath: "gallary/012_uc8qbf", alt: "" },
  { id: 12, imagePath: "gallary/4_c2itfa", alt: "" },
];

const Gallery: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleNavigation = (direction: "prev" | "next") => {
    if (selectedIndex === null) return;
    const totalItems = galleryItems.length;

    setSelectedIndex((prev) => {
      if (prev === null) return null;
      return direction === "prev"
        ? (prev - 1 + totalItems) % totalItems
        : (prev + 1) % totalItems;
    });
  };

  return (
    <div className="bg-background min-h-screen py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Gallery
        </motion.h1>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              className="relative aspect-square cursor-pointer"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedIndex(index)}
            >
              <CloudinaryImage
                imagePath={item.imagePath}
                alt={item.alt}
                className="w-full h-full object-cover rounded-lg shadow-md"
                priority={index < 4}
              />
            </motion.div>
          ))}
        </motion.div>

        <AnimatePresence>
          {selectedIndex !== null && (
            <Dialog
              open={selectedIndex !== null}
              onOpenChange={() => setSelectedIndex(null)}
            >
              <DialogContent className="max-w-4xl w-full bg-background p-0 overflow-hidden border-0">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="relative aspect-video bg-black"
                >
                  {/* Navigation Arrows */}
                  <button
                    onClick={() => handleNavigation("prev")}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-black/50 p-2 rounded-full hover:bg-black/80 z-10"
                  >
                    <ChevronLeft size={32} />
                  </button>

                  <button
                    onClick={() => handleNavigation("next")}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-black/50 p-2 rounded-full hover:bg-black/80 z-10"
                  >
                    <ChevronRight size={32} />
                  </button>

                  {/* Close Button */}
                  <button
                    onClick={() => setSelectedIndex(null)}
                    className="absolute top-4 right-4 text-white bg-black/50 p-1 rounded-full hover:bg-black/80 z-10"
                  >
                    <X size={24} />
                  </button>

                  {/* Main Image */}
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={selectedIndex}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -50 }}
                      transition={{ duration: 0.3 }}
                      className="w-full h-full"
                    >
                      <CloudinaryImage
                        imagePath={galleryItems[selectedIndex].imagePath}
                        alt={galleryItems[selectedIndex].alt}
                        className="w-full h-full object-contain"
                        priority
                      />
                    </motion.div>
                  </AnimatePresence>
                </motion.div>
              </DialogContent>
            </Dialog>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Gallery;
