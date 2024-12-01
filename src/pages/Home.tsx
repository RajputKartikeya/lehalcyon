import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Star,
  Utensils,
  LucideWaves,
  Mountain,
  Car,
  MapPin,
  Train,
  TentTree,
  Sun,
  Coffee,
  Wifi,
  Users,
  Calendar,
  Smile,
} from "lucide-react";
import Reservation from "@/components/Reservation";
import { CloudinaryImage } from "@/utils/cloudinaryImage";

const carouselImages = ["home/hero1", "home/hero2", "home/hero3", "home/hero4"];

const Home: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full">
      <div className="relative">
        {/* Hero Section */}
        <section className="relative h-[70vh] overflow-hidden">
          <AnimatePresence initial={false}>
            <motion.div
              key={currentImage}
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative w-full h-full">
                <CloudinaryImage
                  imagePath={carouselImages[currentImage]}
                  alt={`Hotel feature ${currentImage + 1}`}
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  priority={true}
                />
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="absolute inset-0 bg-black bg-opacity-40" />

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white">
              <motion.h1
                className="text-4xl md:text-6xl font-bold mb-4"
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                Hotel Le Halcyon
              </motion.h1>
              <motion.p
                className="text-xl md:text-2xl mb-8"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Your Elegant Retreat in Kasauli
              </motion.p>
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              />
            </div>
          </div>
        </section>
        {/* Floating Reservation Section */}
        <div className="z-10">
          <div className="container mx-auto px-4">
            <Reservation />
          </div>
        </div>

        {/* Quick Info Section */}
        <section>
          <div className="container mx-auto px-4">
            <div className="pt-20">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {[
                  { icon: Mountain, text: "Stunning Terrace Views" },
                  { icon: LucideWaves, text: "Refreshing Pool" },
                  { icon: Utensils, text: "Multicuisine Restaurant" },
                  { icon: Car, text: "Ample Parking" },
                ].map((item, index) => (
                  <Card
                    key={index}
                    className="bg-background/50 backdrop-blur-sm"
                  >
                    <CardContent className="flex items-center p-4">
                      <item.icon className="h-8 w-8 mr-4 text-primary" />
                      <span className="text-lg font-semibold">{item.text}</span>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* About Section */}
      <section className="py-20 px-4 md:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Experience Luxury in the Heart of Nature
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg mb-6">
                Hotel Le Halcyon, one of the top 10 hotels in Kasauli, offers an
                unparalleled retreat surrounded by lush, green Himalayan pine
                forests. Our commitment to top-notch standards and first-rate
                service ensures a stay that's as refreshing as it is memorable.
              </p>
              <p className="text-lg mb-6">
                Nestled in a location unspoiled by excessive commercialization,
                we offer you the chance to enjoy nature in all its glory. From
                our terraces, feast your eyes on sylvan valleys and magnificent
                flower beds, while our multi-cuisine restaurant caters to the
                most discerning palates.
              </p>
              <Button size="lg" className="mt-4">
                Learn More About Us
              </Button>
            </div>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
              <CloudinaryImage
                imagePath="home/hotelext"
                alt="Hotel Exterior"
                className="absolute inset-0 w-full h-full object-cover transition-shadow duration-300 hover:shadow-2xl"
                priority={false}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Amazing Facts Section */}
      <section className="py-20 px-4 md:px-8 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Amazing Facts About Hotel Le Halcyon
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: MapPin,
                title: "Prime Location",
                description:
                  "Located in Kasauli, surrounded by lush, green Himalayan pine forests",
              },
              {
                icon: Star,
                title: "Top 10 in Kasauli",
                description:
                  "Renowned for top-notch standards and first-rate service in the hospitality sector",
              },
              {
                icon: Train,
                title: "Easy Access",
                description:
                  "Just 37 km from Kalka railway station and 60 km from Chandigarh airport",
              },
              {
                icon: TentTree,
                title: "Natural Beauty",
                description:
                  "Offers breathtaking views of thick Pine Forest, Dagshai, and Kasauli hills",
              },
              {
                icon: Sun,
                title: "Scenic Sunsets",
                description:
                  "Enjoy crystal-clear sunset views from your room's balcony",
              },
              {
                icon: Coffee,
                title: "Complimentary Treats",
                description:
                  "Wake up to complimentary tea, coffee, and mineral water",
              },
            ].map((fact, index) => (
              <motion.div
                key={index}
                className="bg-card text-card-foreground rounded-lg overflow-hidden shadow-lg"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 * index, duration: 0.5 }}
              >
                <CardContent className="p-6">
                  <fact.icon className="h-12 w-12 mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">{fact.title}</h3>
                  <p>{fact.description}</p>
                </CardContent>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 md:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Experience the Best of Both Worlds
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Luxurious Rooms",
                imagePath: "home/spaceroom",
                description:
                  "Spacious, cozy rooms with essential amenities and stunning alpine views",
              },
              {
                title: "Gourmet Dining",
                imagePath: "home/gourdining",
                description:
                  "Savor delicious meals at our multi-cuisine restaurant",
              },
              {
                title: "Perfect for Events",
                imagePath: "home/event1",
                description:
                  "Ideal for celebrations, from birthdays to New Year's parties",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="bg-card text-card-foreground rounded-lg overflow-hidden shadow-lg"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 * index, duration: 0.5 }}
              >
                <div className="relative aspect-[16/9] w-full">
                  <CloudinaryImage
                    imagePath={feature.imagePath}
                    alt={feature.title}
                    className="w-full h-48 object-cover shadow-md hover:shadow-2xl transition-shadow duration-500"
                    priority={false}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p>{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="py-20 px-4 md:px-8 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Modern Amenities for Your Comfort
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {[
              { icon: Wifi, text: "Free Wi-Fi" },
              { icon: Users, text: "Conference Room" },
              { icon: Calendar, text: "Banquet Facilities" },
              { icon: Car, text: "Ample Parking" },
              { icon: Utensils, text: "Multi-Cuisine Restaurant" },
              { icon: LucideWaves, text: "Pool Table" },
              { icon: TentTree, text: "Large Lawn" },
              { icon: Smile, text: "Kids' Play Area" },
            ].map((amenity, index) => (
              <Card key={index} className="bg-background/50 backdrop-blur-sm">
                <CardContent className="flex items-center p-4">
                  <amenity.icon className="h-6 w-6 mr-3 text-primary" />
                  <span>{amenity.text}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Location Highlight Section */}
      <section className="py-20 px-4 md:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Ideal Location for Your Mountain Getaway
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27389.680700077115!2d77.04062936647762!3d30.894770209960516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390f87e54f998cbb%3A0xb7644bf74c6b8c81!2sHotel%20Le%20Halcyon!5e0!3m2!1sen!2sin!4v1733062579932!5m2!1sen!2sin"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Hotel Le Halcyon Location"
                allowFullScreen
              ></iframe>
            </div>
            <div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <MapPin className="h-6 w-6 mr-2 text-primary flex-shrink-0 mt-1" />
                  <span>
                    Located at Barog Hills in village Koron, 3 KM from
                    Kumarhatti chowk
                  </span>
                </li>
                <li className="flex items-start">
                  <Car className="h-6 w-6 mr-2 text-primary flex-shrink-0 mt-1" />
                  <span>
                    Approximately 300 KMs from Delhi and 60 Kms from Chandigarh
                    (nearest airport)
                  </span>
                </li>
                <li className="flex items-start">
                  <Train className="h-6 w-6 mr-2 text-primary flex-shrink-0 mt-1" />
                  <span>Just 37 Kms from Kalka (nearest railway station)</span>
                </li>
                <li className="flex items-start">
                  <Mountain className="h-6 w-6 mr-2 text-primary flex-shrink-0 mt-1" />
                  <span>
                    Overlooking slopes provide serene views of Kasauli and
                    Dagshai hills
                  </span>
                </li>
              </ul>
              <Button className="mt-6">Plan Your Visit</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Nature Walk Section */}
      <section className="py-20 px-4 md:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Explore Nature's Beauty
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="relative aspect-[16/9] w-full rounded-lg overflow-hidden">
              <CloudinaryImage
                imagePath="home/nature"
                alt="Nature Walk"
                className="absolute inset-0 w-full h-full object-cover shadow-lg"
                priority={false}
              />
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">
                Scenic Walking Trails
              </h3>
              <p className="text-lg mb-6">
                Immerse yourself in the natural beauty surrounding Hotel Le
                Halcyon. Our hotel is connected to a 2 KM Chewa Track and less
                occupied metallic roads, perfect for morning and evening walks.
                Experience the refreshing mountain air and stunning views that
                will uplift your spirits and make your journey truly enjoyable.
              </p>
              <Button>Discover Our Trails</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <motion.section
        className="relative py-20 overflow-hidden min-h-[60vh]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 w-full h-full">
          <CloudinaryImage
            imagePath="home/mountaindrop"
            alt="Hotel exterior with mountain backdrop"
            className="w-full h-full object-cover object-center"
            priority={false}
          />
        </div>

        <div className="absolute inset-0 bg-black bg-opacity-60 z-[1]" />

        <div className="relative z-10 text-center text-white container mx-auto px-4 flex flex-col items-center justify-center h-full">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Your Perfect Mountain Getaway Awaits
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Experience comfort, luxury, and breathtaking views at Hotel Le
            Halcyon
          </p>
          <p className="text-lg mb-8">
            Book in advance to secure your stay at one of the best hotels in
            Kasauli
          </p>
          <Button
            size="lg"
            className="text-lg px-8 py-6 rounded-full bg-primary hover:bg-primary/90"
          >
            Book Now for the Best Rates
          </Button>
        </div>
      </motion.section>
    </div>
  );
};

export default Home;
