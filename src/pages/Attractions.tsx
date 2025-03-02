import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Clock } from "lucide-react";
import { CloudinaryImage } from "@/utils/cloudinaryImage";

const attractions = [
  {
    name: "Dagshai Jail Museum",
    description:
      "The Dagshai Jail Museum or Dagshai Central Jail in India was built in 1847, a T-shaped building of local stone masonry with 54 tiny cells. Apart from the Cellular Jail in the Andamans, it is the only other Indian museum which once was a jail.",
    image: "attractions/jail",
    distance: "5 km",
    duration: "30 minutes",
  },
  {
    name: "Barog Tunnel (Longest Tunnel of KSR Heritage Railway Section)",
    description:
      "Barog tunnel is the longest of the 103 operational tunnels on the route of the UNESCO heritage Kalka-Shimla railway, which is 1143.61m long. Barog station is immediately after the tunnel. Trains take about 2.5 minutes to cross this tunnel, running at 25 kilometers per hour",
    image: "attractions/Barog_tunnel",
    distance: "7.5 km",
    duration: "Half day",
  },
  {
    name: "Jatoli temple",
    description:
      "Jatoli gets its name from the long Jata (hair) that Lord Shiva has. Considered as Asia's highest Shiv temple, this shrine is indeed an architectural marvel. There is a water tank called 'Jal Kund' which is considered as pious as the holy river Ganga. The water of this tank is said to have some medicinal qualities that can treat skin diseases. There is a cave inside the temple where Swami Krishnananda Paramhans Ji resided.",
    image: "attractions/Jatoli_temple",
    distance: "18 km",
    duration: "2-3 hours",
  },
  {
    name: "Shoolini Mata Temple, Solan",
    description:
      "Maa Shoolini (Mahashakti), the form and formless, is the root of knowledge, wisdom, creation, preservation, and annihilation. She is Shakti or power of Lord Shiva. Maa Shoolini is also popularly known as Shoolani Durga, Shivani, and Saloni, often being compared to Goddesses such as Durga and Parvati.",
    image: "attractions/Shoolini_mata_temple",
    distance: "15 km",
    duration: "Full day",
  },
  {
    name: "Mohan Shakti National Heritage Park",
    description:
      "Mohan Shakti National Heritage Park, also referred to as the Solan Heritage Park, is a modern-era Indian heritage complex in Harat, near Solan, Himachal Pradesh, India. It is about 40 kilometers south of Shimla, about 15 kilometers north of Solan, 25 Km from Hotel Le Halcyon, spread over 40 acres of land, it was founded by Kapil Mohan – a retired Brigadier General of the Indian Army, a Padma Shree awardee of India.",
    image: "attractions/Mohan_shakti_national_heritiage_park",
    distance: "25 km",
    duration: "3-4 hours",
  },
  {
    name: "Kasauli",
    description:
      "Kasauli is a small hill town in the north Indian state of Himachal Pradesh. It's home to gabled colonial-era houses, orchards, and green-roofed Christ Church, dating from the mid-19th century. At the southern edge of town, Monkey Point overlooks forests of horse chestnut and Himalayan oak. Kasauli Mall,Heritage Market, Sunset PointClockTower, and Baba Balak Nath Mandir",
    image: "attractions/kasaul",
    distance: "15 km",
    duration: "1-2 hours",
  },
  {
    name: "Reva Waterfall",
    description:
      "Reva Waterfall is a beautiful waterfall located in the Solan district of Himachal Pradesh. The waterfall is located at a distance of 7 km from the main city of Solan. The waterfall is a perfect place to relax and enjoy the beauty of nature. The waterfall is surrounded by lush green forests and offers a serene environment to the visitors.",
    image: "attractions/riva",
    distance: "7 km",
    duration: "1-2 hours",
  },
  {
    name: "Shimla",
    description:
      "Shimla is the capital of the northern Indian state of Himachal Pradesh, in the Himalayan foothills. Once the summer capital of British India, it remains the terminus of the narrow-gauge Kalka-Shimla Railway, completed in 1903. It's also known for the handicraft shops that line The Mall, a pedestrian avenue, as well as the Lakkar Bazaar, a market specializing in wooden toys and crafts.",
    image: "attractions/Shimla",
    distance: "45 km",
    duration: "Full day",
  },
  {
    name: "Kufri",
    description:
      "Kufri is a small hill station in Shimla district of Himachal Pradesh state in India. It is located 20 km from the state capital Shimla on the National Highway No.22. Kufri is a small hill station in Shimla district of Himachal Pradesh state in India. It is located 20 km from the state capital Shimla on the National Highway No.22.",
    image: "attractions/kufri",
    distance: "50 km",
    duration: "Full day",
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
                <div className="relative w-full h-64">
                  <CloudinaryImage
                    imagePath={attraction.image}
                    alt={attraction.name}
                    className="w-full h-full object-cover"
                    priority={index < 3} // Load first 3 images immediately
                  />
                </div>
                <CardContent className="flex-grow p-6">
                  <h2 className="text-xl font-semibold mb-2 line-clamp-2">
                    {attraction.name}
                  </h2>
                  <p className="text-muted-foreground mb-4 text-sm">
                    {attraction.description}
                  </p>
                  <div className="flex items-center mb-2">
                    <MapPin className="h-4 w-4 mr-2 text-primary" />
                    <span className="text-sm">
                      {attraction.distance} from hotel
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2 text-primary" />
                    <span className="text-sm">{attraction.duration}</span>
                  </div>
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
