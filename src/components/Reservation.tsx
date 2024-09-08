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
      className="w-full max-w-5xl mx-auto px-4 -mt-20 relative z-10 flex justify-center items-center"
    >
      <Card className="bg-white/95 backdrop-blur-md shadow-[0_10px_40px_-15px_rgba(0,0,0,0.3)] rounded-2xl p-4 md:p-8 w-full md:w-auto md:min-w-[700px] border border-gray-200/50">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col md:flex-row md:items-end gap-6 md:gap-8"
        >
          <div className="flex flex-col md:flex-row gap-4 md:gap-8 w-full">
            <div className="w-full md:w-auto flex-1">
              <p className="text-sm font-medium mb-2 text-gray-700">Check-in</p>
              <div className="relative w-full">
                <DatePicker
                  selected={checkIn}
                  onChange={handleCheckInChange}
                  selectsStart
                  startDate={checkIn}
                  endDate={checkOut}
                  minDate={new Date()}
                  customInput={
                    <input
                      readOnly
                      className="w-full h-14 pl-12 pr-4 rounded-xl border border-gray-300 bg-white text-base focus:outline-none focus:ring-2  transition-all duration-200"
                    />
                  }
                />
                <CalendarDays className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none w-5 h-5" />
              </div>
            </div>
            <div className="w-full md:w-auto flex-1">
              <p className="text-sm font-medium mb-2 text-gray-700">
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
                    <input
                      readOnly
                      className="w-full h-14 pl-12 pr-4 rounded-xl border border-gray-300 bg-white text-base focus:outline-none focus:ring-2  transition-all duration-200"
                    />
                  }
                />
                <CalendarDays className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none w-5 h-5" />
              </div>
            </div>
          </div>
          <Button
            type="submit"
            className="h-14 px-8  hover:scale-105 text-white rounded-xl text-base font-semibold whitespace-nowrap transition-all duration-200 hover:shadow-lg w-full md:w-auto"
          >
            Check Availability
          </Button>
        </form>
      </Card>
    </motion.div>
  );
};

export default Reservation;
