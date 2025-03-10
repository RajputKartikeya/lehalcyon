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
  Mountain,
  Wifi,
  ChevronDown,
  ChevronUp,
  IndianRupee,
} from "lucide-react";
import { CloudinaryImage } from "@/utils/cloudinaryImage";

const roomTypes = [
  {
    name: "Deluxe Room",
    description: "Luxurious comfort with modern amenities...",
    image: "rooms/deluxe/1_u0m9ez",
    price: "3000 per night",
    area: "300 sq ft",
    features: ["Mountain View", "Balcony", "King Size Bed", "Work Desk"],
    images: [
      "",
      "rooms/deluxe/2_sl7crf",
      "rooms/deluxe/5_j961ms",
      "rooms/deluxeroom2",
    ],
  },
  {
    name: "Super Deluxe Room",
    description: "Elevate your stay with our spacious...",
    image: "rooms/super-deluxe/3_laurce",
    price: "4500 per night",
    area: "400 sq ft",
    features: [
      "Panoramic View",
      "Large Balcony",
      "Queen Size Bed",
      "Seating Area",
    ],
    images: [
      "",
      "rooms/super-deluxe/4_dnelwg",
      "rooms/super-deluxe/5_y0vo2u",
      "rooms/sdeluxeroom3",
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
                    <CloudinaryImage
                      imagePath={room.image}
                      alt={room.name}
                      className="w-full h-full object-cover absolute inset-0"
                      priority={index < 2} // Load first two images immediately
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
                        <IndianRupee className="h-4 w-4 mr-2 text-primary" />
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
                          <CloudinaryImage
                            key={index}
                            imagePath={image}
                            alt={`${room.name} view ${index + 2}`}
                            className="rounded-lg shadow-md h-48 object-cover"
                            priority={false}
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
          {amenities.map((amenity) => (
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

        <motion.div
          className="bg-secondary/10 rounded-lg p-8 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold text-center mb-6">
            Additional Charges & Policies
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">
                  Extra Person Charges
                </h3>
                <ul className="space-y-3">
                  <li className="flex justify-between">
                    <span>Extra Bed charge</span>
                    <span className="font-medium">₹1250</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Extra Child Charge</span>
                    <span className="font-medium">Free up to 7 years old</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">
                  Booking & Cancellation Policy
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">Cancellation:</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>
                        Full refund for cancellations 7+ days before arrival
                      </li>
                      <li>
                        Cancellations within 7 days or no-shows: full charge
                      </li>
                      <li>
                        Hotel may assist with alternate accommodations if unable
                        to honor reservation
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2">
                      Group Bookings (3+ rooms):
                    </h4>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>Changes/cancellations: 7+ days in advance</li>
                      <li>15+ days before check-in: No charge</li>
                      <li>7-14 days before check-in: 50% charge</li>
                      <li>Less than 7 days before check-in: 100% charge</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2">
                      Non-refundable Periods:
                    </h4>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>Long weekends, festivals, sold-out dates</li>
                      <li>Dec 20 - Jan 2 (blackout period)</li>
                      <li>
                        Major holidays (Holi, Eid, Diwali, Christmas, New
                        Year's)
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
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
          <Button
            size="lg"
            className="text-lg px-8 py-6 rounded-full"
            onClick={() =>
              window.open(
                "https://bookings.asiatech.in/?page=4342&type=website",
                "_blank"
              )
            }
          >
            Check Availability
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Rooms;
