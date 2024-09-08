import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { CalendarDays } from "lucide-react";

const Reservation: React.FC = () => {
  const [checkIn, setCheckIn] = useState<Date>(new Date());
  const [checkOut, setCheckOut] = useState<Date>(new Date());

  const handleCheckInChange = (date: Date | null) => {
    if (date) {
      setCheckIn(date);
      if (date >= checkOut) {
        setCheckOut(new Date(date.getTime() + 24 * 60 * 60 * 1000));
      }
    }
  };

  const handleCheckOutChange = (date: Date | null) => {
    if (date && date > checkIn) {
      setCheckOut(date);
    }
  };

  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="w-full max-w-7xl mx-auto px-4 -mt-20 relative z-10 flex justify-center items-center"
    >
      <Card className="bg-card/95 backdrop-blur-md shadow-[0_10px_40px_-15px_rgba(0,0,0,0.3)] rounded-2xl p-4 md:p-8 w-full md:min-w-[800px] lg:min-w-[1000px] border border-border/50">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col md:flex-row md:items-end gap-6 md:gap-8"
        >
          <div className="flex flex-col md:flex-row gap-4 md:gap-8 w-full">
            <div className="w-full md:w-auto flex-1">
              <p className="text-sm font-medium mb-2 text-foreground">
                Check-in
              </p>
              <div className="relative w-full">
                <DatePicker
                  selected={checkIn}
                  onChange={handleCheckInChange}
                  selectsStart
                  startDate={checkIn}
                  endDate={checkOut}
                  minDate={new Date()}
                  customInput={
                    <div
                      className="relative w-full"
                      onClick={(e) => e.preventDefault()}
                    >
                      <input
                        disabled
                        value={checkIn.toLocaleDateString()}
                        className="w-full h-14 pl-12 pr-4 rounded-xl border border-input bg-background text-foreground text-base focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200 pointer-events-none"
                      />
                      <CalendarDays className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground pointer-events-none w-5 h-5" />
                    </div>
                  }
                />
              </div>
            </div>
            <div className="w-full md:w-auto flex-1">
              <p className="text-sm font-medium mb-2 text-foreground">
                Check-out
              </p>
              <div className="relative w-full">
                <DatePicker
                  selected={checkOut}
                  onChange={handleCheckOutChange}
                  selectsEnd
                  startDate={checkIn}
                  endDate={checkOut}
                  minDate={checkIn}
                  customInput={
                    <div
                      className="relative w-full"
                      onClick={(e) => e.preventDefault()}
                    >
                      <input
                        disabled
                        value={checkOut.toLocaleDateString()}
                        className="w-full h-14 pl-12 pr-4 rounded-xl border border-input bg-background text-foreground text-base focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200 pointer-events-none"
                      />
                      <CalendarDays className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground pointer-events-none w-5 h-5" />
                    </div>
                  }
                />
              </div>
            </div>
          </div>
          <Button
            type="submit"
            className="h-14 px-8 hover:scale-105 bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl text-base font-semibold whitespace-nowrap transition-all duration-200 hover:shadow-lg w-full md:w-auto"
          >
            Check Availability
          </Button>
        </form>
      </Card>
    </motion.div>
  );
};

export default Reservation;
