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

const carouselImages = ["10.jpeg", "2.jpeg", "1.jpeg", "3.jpeg"];

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
      {/* Hero Section with Carousel */}
      <section className="relative h-[70vh] overflow-hidden">
        <AnimatePresence initial={false}>
          <motion.img
            key={currentImage}
            src={carouselImages[currentImage]}
            alt={`Hotel feature ${currentImage + 1}`}
            className="absolute inset-0 w-full h-full object-cover object-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          />
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
            ></motion.div>
          </div>
        </div>
      </section>
      {/* Floating Reservation Section */}
      <Reservation />
      {/* Quick Info Section */}
      <section className="py-12 bg-secondary/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: Mountain, text: "Stunning Terrace Views" },
              { icon: LucideWaves, text: "Refreshing Pool" },
              { icon: Utensils, text: "Multicuisine Restaurant" },
              { icon: Car, text: "Ample Parking" },
            ].map((item, index) => (
              <Card key={index} className="bg-background/50 backdrop-blur-sm">
                <CardContent className="flex items-center p-4">
                  <item.icon className="h-8 w-8 mr-4 text-primary" />
                  <span className="text-lg font-semibold">{item.text}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

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
            <div>
              <img
                src="/api/placeholder/800/600?text=Hotel+Exterior"
                alt="Hotel Exterior"
                className="rounded-lg shadow-lg"
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
                image: "/api/placeholder/600/400?text=Luxurious+Rooms",
                description:
                  "Spacious, cozy rooms with essential amenities and stunning alpine views",
              },
              {
                title: "Gourmet Dining",
                image: "/api/placeholder/600/400?text=Gourmet+Dining",
                description:
                  "Savor delicious meals at our multi-cuisine restaurant",
              },
              {
                title: "Perfect for Events",
                image: "/api/placeholder/600/400?text=Event+Spaces",
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
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-48 object-cover"
                />
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
            <div>
              <img
                src="/api/placeholder/800/600?text=Hotel+Location"
                alt="Hotel Location"
                className="rounded-lg shadow-lg"
              />
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

      {/* TripAdvisor Reviews Section */}
      <section className="py-20 px-4 md:px-8 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            What Our Guests Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "John D.",
                rating: 5,
                comment:
                  "Incredible value for money. The views are unbeatable and the staff is exceptionally friendly!",
              },
              {
                name: "Sarah L.",
                rating: 5,
                comment:
                  "The restaurant served some of the best food I've had. The rooms are spacious and comfortable. Highly recommend!",
              },
              {
                name: "Mike R.",
                rating: 5,
                comment:
                  "Great amenities and friendly staff. The location is perfect for a peaceful getaway. Will definitely return!",
              },
            ].map((review, index) => (
              <Card key={index} className="bg-background/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <p className="mb-4 italic">"{review.comment}"</p>
                  <p className="text-sm text-muted-foreground">
                    - {review.name}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-8 text-center">
            <a
              href="https://www.tripadvisor.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-primary hover:underline"
            >
              <img
                src="/api/placeholder/24/24?text=TA"
                alt="TripAdvisor logo"
                className="mr-2 h-6 w-6"
              />
              Read more reviews on TripAdvisor
            </a>
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
            <div>
              <img
                src="/api/placeholder/800/600?text=Nature+Walk"
                alt="Nature Walk"
                className="rounded-lg shadow-lg"
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
        className="relative py-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <img
          src="/api/placeholder/1920/1080?text=Hotel+Exterior"
          alt="Hotel exterior with mountain backdrop"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60" />
        <div className="relative z-10 text-center text-white container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Your Perfect Mountain Getaway Awaits
          </h2>
          <p className="text-xl mb-8">
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
