// TestimonialsCarousel.tsx
import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

// Define your existing testimonial structure without ID
export interface RawTestimonial {
  text: string;
  author: string;
  date: string;
  rating: number;
}

// Define the complete testimonial with ID
export interface Testimonial extends RawTestimonial {
  id: string | number;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
  onClick: (testimonial: Testimonial) => void;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  testimonial,
  onClick,
}) => (
  <div
    className="min-w-[300px] max-w-[400px] h-56 bg-white rounded-lg shadow-lg p-6 flex flex-col cursor-pointer hover:shadow-xl transition-shadow"
    onClick={() => onClick(testimonial)}
  >
    <div className="flex items-center mb-4">
      <div className="flex items-center">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-5 w-5 ${
              i < testimonial.rating
                ? "text-yellow-400 fill-yellow-400"
                : "text-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
    <p className="text-gray-600 mb-4 line-clamp-4 break-words">
      "{testimonial.text}"
    </p>
    <div className="flex items-center mt-auto">
      <span className="font-semibold">{testimonial.author}</span>
      <span className="mx-2">•</span>
      <span className="text-sm text-gray-500">{testimonial.date}</span>
    </div>
  </div>
);

// Accept raw testimonials as props
interface TestimonialsCarouselProps {
  testimonials: RawTestimonial[];
}

const TestimonialsCarousel: React.FC<TestimonialsCarouselProps> = ({
  testimonials: rawTestimonials,
}) => {
  // Process testimonials to add IDs
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const controls = useAnimation();
  const [selectedTestimonial, setSelectedTestimonial] =
    useState<Testimonial | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  // Add IDs to testimonials when the component mounts or testimonials change
  useEffect(() => {
    if (rawTestimonials?.length) {
      // Add unique IDs to each testimonial
      const testimonialsWithIds = rawTestimonials.map((testimonial, index) => ({
        ...testimonial,
        id: `testimonial-${index}`,
      }));
      setTestimonials(testimonialsWithIds);
    }
  }, [rawTestimonials]);

  // Animation configuration
  const animationConfig = {
    x: ["0%", "-100%"],
    transition: {
      duration: 30,
      repeat: Infinity,
      ease: "linear",
    },
  };

  // Pause animation on hover/touch
  const handleMouseEnter = () => {
    controls.stop();
  };

  // Resume animation when not hovering/touching
  const handleMouseLeave = () => {
    controls.start(animationConfig);
  };

  // Open dialog with full testimonial
  const handleTestimonialClick = (testimonial: Testimonial) => {
    setSelectedTestimonial(testimonial);
    setIsOpen(true);
  };

  // Start the animation when component mounts
  useEffect(() => {
    controls.start(animationConfig);
  }, []);

  // Return empty div if no testimonials
  if (!testimonials?.length) {
    return null;
  }

  return (
    <section className="py-16 px-4 md:px-8 bg-background/95">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Guest Reviews
        </h2>
        <div
          className="relative overflow-hidden"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onTouchStart={handleMouseEnter}
          onTouchEnd={handleMouseLeave}
        >
          <motion.div className="flex gap-8" animate={controls}>
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <TestimonialCard
                key={`${testimonial.id}-${index}`}
                testimonial={testimonial}
                onClick={handleTestimonialClick}
              />
            ))}
          </motion.div>
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
        </div>
        <div className="text-center mt-8">
          <Button
            variant="outline"
            size="lg"
            onClick={() =>
              window.open(
                "https://www.tripadvisor.in/Hotel_Review-g26471761-d23916676-Reviews-Hotel_Le_Halcyon_Kasauli-Shai_Solan_District_Himachal_Pradesh.html",
                "_blank"
              )
            }
          >
            Read More Reviews
          </Button>
        </div>
      </div>

      {/* Dialog for displaying full testimonial */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-md">
          {selectedTestimonial && (
            <>
              <DialogHeader>
                <DialogTitle className="flex items-center gap-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < selectedTestimonial.rating
                            ? "text-yellow-400 fill-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="ml-2">
                    Review by {selectedTestimonial.author}
                  </span>
                </DialogTitle>
              </DialogHeader>
              <div className="mt-2">
                <p className="text-gray-700">"{selectedTestimonial.text}"</p>
                <div className="mt-4 text-sm text-gray-500">
                  {selectedTestimonial.date}
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default TestimonialsCarousel;
