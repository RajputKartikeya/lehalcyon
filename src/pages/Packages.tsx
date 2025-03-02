import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CloudinaryImage } from "@/utils/cloudinaryImage";

const packages = [
  {
    title: "Health and Wellness Package",
    description:
      "Rejuvenate your body and mind with our comprehensive health and wellness package. Enjoy spa treatments, yoga sessions, nutritious meals, and access to our state-of-the-art fitness center.",
    image: "packages/health_and_wellness",
  },
  {
    title: "Corporate Meets and Business Conference",
    description:
      "Host your next corporate event in our modern conference facilities. We offer fully equipped meeting rooms, catering services, team-building activities, and special group rates for accommodations.",
    image:
      "packages/conference_room_corporate_meetings_and_business_conference",
  },
  {
    title: "Staycation/Workcation – Long Stay Packages",
    description:
      "Whether you're looking for a change of scenery or a productive work environment, our long-stay packages offer the perfect blend of comfort and convenience. Enjoy discounted rates, high-speed internet, and all the amenities of home.",
    image: "packages/staycat1",
  },
  {
    title: "Honeymoon Packages",
    description:
      "Start your new life together in romantic bliss. Our honeymoon package includes luxury suite accommodation, couples spa treatments, candlelit dinners, and special romantic touches to make your stay unforgettable.",
    image: "packages/Honeymoon_packages",
  },
  {
    title: "Destination Weddings",
    description:
      "Make your dream wedding a reality at our picturesque venue. Our wedding package includes ceremony and reception venues, catering, accommodation for guests, and a dedicated wedding planner to ensure every detail is perfect.",
    image: "packages/destination_weddings",
  },
  {
    title: "Students Educational Tours",
    description:
      "Combine learning with fun in our educational tour packages. We offer guided tours to local historical sites, interactive workshops, and safe, comfortable accommodation for student groups.",
    image: "packages/educational_tours",
  },
  {
    title: "Family Packages",
    description:
      "Create lasting memories with our family-friendly packages. Enjoy spacious family rooms, kids' activities, family dining options, and special excursions designed for all ages.",
    image: "packages/family_packages",
  },
];

const Packages: React.FC = () => {
  return (
    <div className="bg-background min-h-screen py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Packages
        </motion.h1>

        <div className="grid grid-cols-1 gap-8 md:gap-12">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden h-full shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex flex-col lg:flex-row">
                  <div className="lg:w-1/2 h-64 md:h-72">
                    <div className="w-full h-full overflow-hidden">
                      <CloudinaryImage
                        imagePath={pkg.image}
                        alt={pkg.title}
                        className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                        priority={index < 2}
                      />
                    </div>
                  </div>
                  <div className="lg:w-1/2 flex flex-col">
                    <CardHeader>
                      <CardTitle className="text-xl md:text-2xl font-semibold">
                        {pkg.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pb-6">
                      <p className="text-sm md:text-base text-muted-foreground">
                        {pkg.description}
                      </p>
                    </CardContent>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Packages;
