import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Tv,
  Phone,
  Coffee,
  Waves,
  Droplet,
  Wind,
  Bath,
  Sandwich,
  Users,
  Maximize,
  DollarSign,
  Mountain,
  Wifi,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

const roomTypes = [
  {
    name: "Deluxe Room",
    description:
      "Luxurious comfort with modern amenities and a breathtaking balcony view of the alpine-covered hills. Perfect for a rejuvenating stay.",
    image: "/api/placeholder/800/500?text=Deluxe+Room",
    price: "$X per night",
    area: "300 sq ft",
    features: ["Mountain View", "Balcony", "King Size Bed", "Work Desk"],
    images: [
      "/api/placeholder/800/500?text=Deluxe+Room+1",
      "/api/placeholder/800/500?text=Deluxe+Room+2",
      "/api/placeholder/800/500?text=Deluxe+Room+3",
      "/api/placeholder/800/500?text=Deluxe+Room+4",
    ],
  },
  {
    name: "Super Deluxe Room",
    description:
      "Elevate your stay with our spacious Super Deluxe Room, offering premium amenities and a stunning panoramic view of the Solan hills.",
    image: "/api/placeholder/800/500?text=Super+Deluxe+Room",
    price: "$Y per night",
    area: "400 sq ft",
    features: [
      "Panoramic View",
      "Large Balcony",
      "Queen Size Bed",
      "Seating Area",
    ],
    images: [
      "/api/placeholder/800/500?text=Super+Deluxe+1",
      "/api/placeholder/800/500?text=Super+Deluxe+2",
      "/api/placeholder/800/500?text=Super+Deluxe+3",
      "/api/placeholder/800/500?text=Super+Deluxe+4",
    ],
  },
  {
    name: "Suite",
    description:
      "Experience unparalleled luxury in our spacious suite, complete with a separate living area and top-tier amenities for an unforgettable stay.",
    image: "/api/placeholder/800/500?text=Suite",
    price: "$Z per night",
    area: "600 sq ft",
    features: [
      "Separate Living Room",
      "Kitchenette",
      "King Size Bed",
      "Jacuzzi",
    ],
    images: [
      "/api/placeholder/800/500?text=Suite+1",
      "/api/placeholder/800/500?text=Suite+2",
      "/api/placeholder/800/500?text=Suite+3",
      "/api/placeholder/800/500?text=Suite+4",
    ],
  },
];

const amenities = [
  { icon: Tv, name: "Cable TV" },
  { icon: Phone, name: "Telephone" },
  { icon: Coffee, name: "Tea/Coffee Maker" },
  { icon: Waves, name: "Hot/Cold Water" },
  { icon: Droplet, name: "Mineral Water" },
  { icon: Wind, name: "Geyser" },
  { icon: Bath, name: "Free Toiletries" },
  { icon: Sandwich, name: "Room Service" },
  { icon: Wifi, name: "Free Wi-Fi" },
  { icon: Mountain, name: "Scenic Views" },
];

const Rooms: React.FC = () => {
  const [expandedRoom, setExpandedRoom] = useState<string | null>(null);

  const toggleRoomDetails = (roomName: string) => {
    setExpandedRoom(expandedRoom === roomName ? null : roomName);
  };
  return (
    <div className="bg-background min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          className="text-4xl font-bold text-center mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Experience Comfort and Elegance
        </motion.h1>
        <motion.p
          className="text-center text-muted-foreground mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          As one of the top 10 hotels in Solan, Hotel Le Halcyon offers
          luxurious rooms with connected balconies providing breathtaking views
          of the town and its beautiful hills.
        </motion.p>

        <div className="space-y-8 mb-16">
          {roomTypes.map((room, index) => (
            <motion.div
              key={room.name}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3 relative">
                    <img
                      src={room.image}
                      alt={room.name}
                      className="w-full h-full object-cover"
                      style={{ minHeight: "250px" }}
                    />
                  </div>
                  <div className="md:w-2/3 p-6">
                    <div className="flex justify-between items-center mb-4">
                      <h2 className="text-2xl font-semibold">{room.name}</h2>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => toggleRoomDetails(room.name)}
                      >
                        {expandedRoom === room.name ? (
                          <ChevronUp />
                        ) : (
                          <ChevronDown />
                        )}
                      </Button>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      {room.description}
                    </p>
                    <div className="flex flex-wrap gap-4 mb-4">
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-2 text-primary" />
                        <span>Max Occupancy: 2 Adults</span>
                      </div>
                      <div className="flex items-center">
                        <Maximize className="h-4 w-4 mr-2 text-primary" />
                        <span>{room.area}</span>
                      </div>
                      <div className="flex items-center">
                        <DollarSign className="h-4 w-4 mr-2 text-primary" />
                        <span className="text-lg font-bold">{room.price}</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {room.features.map((feature, index) => (
                        <Badge key={index} variant="secondary">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                    <Button className="w-full md:w-auto">Book Now</Button>
                  </div>
                </div>

                <AnimatePresence>
                  {expandedRoom === room.name && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="p-6 bg-secondary/10"
                    >
                      <h3 className="text-xl font-semibold mb-4">
                        Room Gallery
                      </h3>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                        {room.images.slice(1).map((image, index) => (
                          <img
                            key={index}
                            src={image}
                            alt={`${room.name} view ${index + 2}`}
                            className="rounded-lg shadow-md"
                          />
                        ))}
                      </div>
                      <h3 className="text-xl font-semibold mb-4">
                        Additional Information
                      </h3>
                      <ul className="list-disc list-inside space-y-2">
                        <li>Complimentary breakfast included</li>
                        <li>High-speed Wi-Fi access</li>
                        <li>Daily housekeeping service</li>
                        <li>In-room safe for valuables</li>
                        <li>24/7 room service available</li>
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Card>
            </motion.div>
          ))}
        </div>
        <motion.h2
          className="text-3xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          All Rooms Include
        </motion.h2>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {amenities.map((amenity, index) => (
            <Card
              key={amenity.name}
              className="bg-primary/5 hover:bg-primary/10 transition-colors duration-300"
            >
              <CardContent className="flex items-center p-4">
                <amenity.icon className="h-6 w-6 mr-3 text-primary" />
                <span>{amenity.name}</span>
              </CardContent>
            </Card>
          ))}
        </motion.div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-4">
            All rooms are equipped with cupboards, table and chairs, bed covers,
            pillows, charging points, showers, and toilets. Our seasoned staff
            is dedicated to providing you with the best services possible during
            your stay.
          </p>
          <p className="text-muted-foreground mb-8">
            Hotel Le Halcyon is a year-round destination. We recommend booking
            in advance to secure your preferred dates and avoid any
            inconvenience during your vacation.
          </p>
          <Button size="lg" className="text-lg px-8 py-6 rounded-full">
            Check Availability
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Rooms;
