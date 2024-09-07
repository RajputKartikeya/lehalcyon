import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Clock } from "lucide-react";

const attractions = [
  {
    name: "Scenic Mountain Trail",
    description:
      "A beautiful hiking trail with panoramic views of the surrounding mountains.",
    image: "/api/placeholder/800/500?text=Mountain+Trail",
    distance: "2 km",
    duration: "3-4 hours",
  },
  {
    name: "Crystal Clear Lake",
    description:
      "A serene lake perfect for boating, fishing, or just relaxing by the shore.",
    image: "/api/placeholder/800/500?text=Crystal+Lake",
    distance: "5 km",
    duration: "Half day",
  },
  {
    name: "Historic Town Center",
    description:
      "Explore the charming streets and architecture of our historic town center.",
    image: "/api/placeholder/800/500?text=Historic+Town",
    distance: "1 km",
    duration: "2-3 hours",
  },
  {
    name: "Adventure Park",
    description:
      "Thrilling rides and activities for all ages in a beautiful forest setting.",
    image: "/api/placeholder/800/500?text=Adventure+Park",
    distance: "10 km",
    duration: "Full day",
  },
  {
    name: "Local Winery Tour",
    description:
      "Taste exquisite local wines and learn about the winemaking process.",
    image: "/api/placeholder/800/500?text=Winery+Tour",
    distance: "15 km",
    duration: "3-4 hours",
  },
  {
    name: "Sunset Viewpoint",
    description:
      "The perfect spot to watch breathtaking sunsets over the valley.",
    image: "/api/placeholder/800/500?text=Sunset+Viewpoint",
    distance: "3 km",
    duration: "1-2 hours",
  },
];

const Attractions: React.FC = () => {
  return (
    <div className="bg-background min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          className="text-4xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Explore Nearby Attractions
        </motion.h1>
        <motion.p
          className="text-xl text-center text-muted-foreground mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Discover the beauty and excitement surrounding our hotel
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {attractions.map((attraction, index) => (
            <motion.div
              key={attraction.name}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden h-full flex flex-col">
                <img
                  src={attraction.image}
                  alt={attraction.name}
                  className="h-48 w-full object-cover"
                />
                <CardContent className="flex-grow p-6">
                  <h2 className="text-2xl font-semibold mb-2">
                    {attraction.name}
                  </h2>
                  <p className="text-muted-foreground mb-4">
                    {attraction.description}
                  </p>
                  <div className="flex items-center mb-2">
                    <MapPin className="h-4 w-4 mr-2 text-primary" />
                    <span>{attraction.distance} from hotel</span>
                  </div>
                  <div className="flex items-center mb-4">
                    <Clock className="h-4 w-4 mr-2 text-primary" />
                    <span>{attraction.duration}</span>
                  </div>
                  <Button className="w-full mt-auto">Learn More</Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <p className="text-xl mb-6">
            Want to explore more? Our concierge can help plan your perfect day
            out!
          </p>
          <Button size="lg" className="text-lg px-8 py-6 rounded-full">
            Contact Concierge
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default Attractions;
