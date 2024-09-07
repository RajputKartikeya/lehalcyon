import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const packages = [
  {
    title: "Health and Wellness Package",
    description:
      "Rejuvenate your body and mind with our comprehensive health and wellness package. Enjoy spa treatments, yoga sessions, nutritious meals, and access to our state-of-the-art fitness center.",
    image: "/api/placeholder/800/600?text=Health+and+Wellness",
  },
  {
    title: "Corporate Meets and Business Conference",
    description:
      "Host your next corporate event in our modern conference facilities. We offer fully equipped meeting rooms, catering services, team-building activities, and special group rates for accommodations.",
    image: "/api/placeholder/800/600?text=Corporate+Meets",
  },
  {
    title: "Staycation/Workcation – Long Stay Packages",
    description:
      "Whether you're looking for a change of scenery or a productive work environment, our long-stay packages offer the perfect blend of comfort and convenience. Enjoy discounted rates, high-speed internet, and all the amenities of home.",
    image: "/api/placeholder/800/600?text=Staycation",
  },
  {
    title: "Honeymoon Packages",
    description:
      "Start your new life together in romantic bliss. Our honeymoon package includes luxury suite accommodation, couples spa treatments, candlelit dinners, and special romantic touches to make your stay unforgettable.",
    image: "/api/placeholder/800/600?text=Honeymoon",
  },
  {
    title: "Destination Weddings",
    description:
      "Make your dream wedding a reality at our picturesque venue. Our wedding package includes ceremony and reception venues, catering, accommodation for guests, and a dedicated wedding planner to ensure every detail is perfect.",
    image: "/api/placeholder/800/600?text=Destination+Weddings",
  },
  {
    title: "Students Educational Tours",
    description:
      "Combine learning with fun in our educational tour packages. We offer guided tours to local historical sites, interactive workshops, and safe, comfortable accommodation for student groups.",
    image: "/api/placeholder/800/600?text=Educational+Tours",
  },
  {
    title: "Family Packages",
    description:
      "Create lasting memories with our family-friendly packages. Enjoy spacious family rooms, kids' activities, family dining options, and special excursions designed for all ages.",
    image: "/api/placeholder/800/600?text=Family+Packages",
  },
];

const Packages: React.FC = () => {
  return (
    <div className="bg-background min-h-screen py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Packages
        </motion.h1>

        {packages.map((pkg, index) => (
          <motion.div
            key={pkg.title}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`flex flex-col ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            } mb-24 items-center`}
          >
            <div className="md:w-1/2 mb-8 md:mb-0">
              <img
                src={pkg.image}
                alt={pkg.title}
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            <div className="md:w-1/2 md:px-8">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-3xl font-semibold mb-4">{pkg.title}</h2>
                  <p className="text-muted-foreground mb-6">
                    {pkg.description}
                  </p>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Packages;
