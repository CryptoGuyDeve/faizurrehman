"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const DownCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ scale: 1.02 }}
      className="w-full"
    >
      <Card
        className="
          w-full 
          bg-[#151518] 
          border border-white/10 
          shadow-[0_0_25px_rgba(255,255,255,0.05)]
          rounded-xl 
          backdrop-blur-md 
          relative 
          overflow-hidden
        "
      >
        {/* Subtle animated glow highlight */}
        <motion.div
          className="absolute top-0 left-0 w-full h-full pointer-events-none"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 0.08 }}
          transition={{ duration: 0.4 }}
          style={{
            background:
              "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.25), transparent 60%)",
          }}
        />

        <CardContent className="p-5 flex flex-col gap-3 relative z-10">
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="text-lg font-semibold text-white"
          >
            Stay updated
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="text-sm text-white/60 leading-relaxed"
          >
            Stay updated on new products and updates.
            <br />
            You can unsubscribe anytime.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6 }}
          >
            <Button
              onClick={() =>
                (window.location.href =
                  "https://donate.stripe.com/test_cNieVd6ue7Bm7aqcNZeUU00")
              }
              className="
                mt-2 w-fit 
                bg-white text-black 
                hover:bg-white/80 
                font-medium px-4 py-2 rounded-md shadow
              "
            >
              Subscribe
            </Button>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default DownCard;
