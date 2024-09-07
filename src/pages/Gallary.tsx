import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X } from "lucide-react";

// Sample gallery items - replace with your actual images
const galleryItems = [
  {
    id: 1,
    src: "/api/placeholder/800/600?text=Hotel+Exterior",
    alt: "Hotel Exterior",
  },
  {
    id: 2,
    src: "/api/placeholder/600/800?text=Luxury+Suite",
    alt: "Luxury Suite",
  },
  {
    id: 3,
    src: "/api/placeholder/800/800?text=Swimming+Pool",
    alt: "Swimming Pool",
  },
  {
    id: 4,
    src: "/api/placeholder/600/800?text=Dining+Area",
    alt: "Dining Area",
  },
  { id: 5, src: "/api/placeholder/800/600?text=Spa", alt: "Spa" },
  { id: 6, src: "/api/placeholder/800/800?text=Gym", alt: "Gym" },
  { id: 7, src: "/api/placeholder/600/800?text=Bar", alt: "Bar" },
  {
    id: 8,
    src: "/api/placeholder/800/600?text=Conference+Room",
    alt: "Conference Room",
  },
  { id: 9, src: "/api/placeholder/800/800?text=Garden", alt: "Garden" },
  // Add more items as needed
];

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<
    (typeof galleryItems)[0] | null
  >(null);

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
          className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {galleryItems.map((item) => (
            <motion.div
              key={item.id}
              className="break-inside-avoid"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedImage(item)}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-auto rounded-lg shadow-md cursor-pointer"
              />
            </motion.div>
          ))}
        </motion.div>

        <AnimatePresence>
          {selectedImage && (
            <Dialog
              open={!!selectedImage}
              onOpenChange={() => setSelectedImage(null)}
            >
              <DialogContent className="max-w-3xl w-full bg-background p-0 overflow-hidden">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  className="relative"
                >
                  <img
                    src={selectedImage.src}
                    alt={selectedImage.alt}
                    className="w-full h-auto"
                  />
                  <button
                    onClick={() => setSelectedImage(null)}
                    className="absolute top-2 right-2 text-white bg-black bg-opacity-50 rounded-full p-1"
                  >
                    <X size={24} />
                  </button>
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
