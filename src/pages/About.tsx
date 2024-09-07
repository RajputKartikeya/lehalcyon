import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const About: React.FC = () => {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center">
        <img
          src="/api/placeholder/1920/1080?text=Hotel+Le+Halcyon"
          alt="Hotel Le Halcyon"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative z-10 text-center text-white">
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Hotel Le Halcyon
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Your ideal vacation retreat in Kasauli
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div>
              <h2 className="text-3xl font-bold mb-4">
                Welcome to Hotel Le Halcyon
              </h2>
              <p className="text-muted-foreground mb-4">
                Nestled in the beautiful hill station of Kasauli, Hotel Le
                Halcyon is renowned for its top-notch standards and first-rate
                service. Surrounded by lush, green Himalayan pine forests, our
                hotel offers a refreshing retreat that fills you with a sense of
                peace and calm.
              </p>
              <Button>Book Your Stay</Button>
            </div>
            <div>
              <img
                src="/api/placeholder/800/600?text=Hotel+Exterior"
                alt="Hotel Exterior"
                className="rounded-lg shadow-lg"
              />
            </div>
          </motion.div>

          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold mb-4">Unparalleled Location</h2>
            <p className="text-muted-foreground mb-4">
              Located at Barog Hills in village Koron, just 3 KM from Kumarhatti
              chowk, Hotel Le Halcyon offers easy access to the region's
              attractions. We're approximately 300 KMs from Delhi, 60 Kms from
              Chandigarh (the nearest airport), and 37 Kms from Kalka (the
              nearest railway station).
            </p>
            <p className="text-muted-foreground">
              Our hotel overlooks slopes that provide serene views of the hills
              of Kasauli and Dagshai, offering our guests an unforgettable
              experience of natural beauty.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-2">Deluxe Room</h3>
                <p className="text-muted-foreground">
                  Well-furnished and designed rooms feature ergonomic work areas
                  and LED HD TVs, ensuring comfort and convenience during your
                  stay.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-2">
                  Super Deluxe Room
                </h3>
                <p className="text-muted-foreground">
                  Our Super Deluxe Rooms come with attached bathrooms including
                  free toiletries and showers with both cold and hot water
                  facilities for added luxury.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4">Our Commitment</h2>
            <p className="text-muted-foreground mb-4">
              At Hotel Le Halcyon, we welcome you with open arms. Our dedicated
              team is committed to serving you with high-level ethics and
              hygiene. It's our endeavor to make your stay with us a pleasant,
              memorable moment.
            </p>
            <p className="text-muted-foreground">
              Experience the magic of the hills and the majesty of nature at
              Hotel Le Halcyon - your home away from home in Kasauli.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
