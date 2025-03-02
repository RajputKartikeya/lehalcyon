import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Instagram,
  Twitter,
  Globe,
  MessageCircle,
} from "lucide-react";

const Contact: React.FC = () => {
  // Replace with your actual Google Maps embed URL
  const googleMapsEmbedUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3423.4240376845096!2d77.0520816!3d30.902769499999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390f87e54f998cbb%3A0xb7644bf74c6b8c81!2sHotel%20Le%20Halcyon!5e0!3m2!1sen!2sin!4v1740819625881!5m2!1sen!2sin";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:lehalcyon2021@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    )}`;
    window.location.href = mailtoLink;
  };

  const socialButtons = [
    { icon: Globe, label: "Google Page", link: "https://g.co/kgs/5RoayMX" },
    {
      icon: Instagram,
      label: "Instagram",
      link: "https://www.instagram.com/hotellehalcyon/",
    },
    {
      icon: Facebook,
      label: "Facebook",
      link: "https://www.facebook.com/hotellehalcyon",
    },
    { icon: Twitter, label: "Twitter", link: "https://www.twitter.com" },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      link: "https://wa.me/9667647948",
    },
  ];

  return (
    <div className="bg-background min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          className="text-4xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Contact Us
        </motion.h1>
        <motion.p
          className="text-xl text-center text-muted-foreground mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          We're here to help with your inquiries and bookings
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-4">Our Location</h2>
                <div className="aspect-video mb-6">
                  <iframe
                    src={googleMapsEmbedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </CardContent>
            </Card>
            <Card className="mt-8 p-6">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {socialButtons.map((button, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    className="w-full"
                    onClick={() => window.open(button.link, "_blank")}
                  >
                    <button.icon className="mr-2 h-4 w-4" />
                    {button.label}
                  </Button>
                ))}
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card className="mb-8">
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-4">
                  Contact Information
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 pt-1">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <span className="flex-1">
                      Hotel Le Halcyon, Koron Kenthri Road, near Kheel Mor,
                      Kumarhatti, Himachal Pradesh 173229
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div className="flex-shrink-0 w-8">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <span className="flex-1">
                      +91 9667647948 | +91 7827041770
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div className="flex-shrink-0 w-8">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <span className="flex-1">lehalcyon2021@gmail.com</span>
                  </div>
                  <div className="flex items-center">
                    <div className="flex-shrink-0 w-8">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <span className="flex-1">Reception open 24/7</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-4">
                  Send us a message
                </h2>
                <form onSubmit={handleSendMessage} className="space-y-4">
                  <Input
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                  <Input
                    type="email"
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <Input
                    placeholder="Subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    required
                  />
                  <Textarea
                    placeholder="Your Message"
                    className="h-32"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  />
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
