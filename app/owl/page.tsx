'use client';

import { motion } from 'framer-motion';
import { Search, Plus, Calendar, User, Cat } from 'lucide-react';
import Lottie from "lottie-react";
// import owlAnimation from '/lottie/owl_animation.json';
import { useEffect, useState } from 'react';

export default function OwlPage() {
  const [owlAnim, setOwlAnim] = useState(null);

  useEffect(() => {
    // ✅ Load Lottie file from public folder
    fetch("/lottie/owl_animation.json")
      .then((res) => res.json())
      .then((data) => setOwlAnim(data));
  }, []);

  return (
    <div>
      <motion.div
        className="h-full relative w-full max-w-md shadow-2xl overflow-hidden"
        style={{ background: 'linear-gradient(to bottom, #2d1d3d 50%, #6b4e87 100%)', aspectRatio: '9/19' }}
        initial={{ scale: 0.8, opacity: 1, rotateY: 0 }}
        animate={{ scale: 1, opacity: 1, rotateY: 0 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      >
        <div className="relative h-full p-6 pt-12 flex flex-col">
          <div className='flex justify-center items-center'>
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className='z-10'
            >
              {/* Lottie animation inside Framer Motion */}
              <Lottie
                animationData={owlAnim}
                loop
                style={{ width: 200, height: 200 }}
              />
            </motion.div>
          </div>
          <div className='mt-[-50px]'>
            <div className="flex flex-col items-center mb-6">
              <motion.div
                className="w-full relative"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1.2, type: "spring" }}
              >
                <input
                  type="text"
                  placeholder="your meal"
                  className="w-full bg-white/95 text-gray-700 placeholder-gray-400 px-12 py-4 rounded-2xl text-base"
                />
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <motion.button
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-purple-600 p-2 rounded-xl"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Search className="w-5 h-5 text-white" />
                </motion.button>
              </motion.div>
            </div>
            <motion.div
              className="flex-1 space-y-4 overflow-y-auto"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 }}
            >
              <motion.div
                className="bg-purple-600/40 backdrop-blur-sm rounded-2xl p-4"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1.5 }}
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="text-white text-lg font-semibold mb-3">Saite fiori</h3>
                <div className="flex justify-between text-sm text-white/80">
                  <div>
                    <div className="flex items-center gap-1 mb-1">
                      <div className="w-2 h-2 bg-white rounded-full" />
                      <span>Cardiners</span>
                    </div>
                    <div className="flex items-center gap-1 mb-1">
                      <div className="w-2 h-2 border border-white rounded-full" />
                      <span>Suort Alkcraçon</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-white" />
                      <span>Elitrefired</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div>Vit̃apiner Vitiroubas</div>
                    <div>Pesofar af ritols</div>
                    <div>Asp Iniderers</div>
                    <div>éa hivrs</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="text-white text-sm flex items-center gap-2 px-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.6 }}
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                >
                  ✓
                </motion.div>
                <span>Alarm àmides flie...</span>
              </motion.div>

              <motion.div
                className="bg-purple-600/40 backdrop-blur-sm rounded-2xl p-4 flex items-center justify-between"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1.7 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-purple-400 rounded-full flex items-center justify-center">
                    <Cat className="w-6 h-6 text-purple-800" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Silkur</h4>
                    <p className="text-white/70 text-sm">Vo thoum 6:50 ocan</p>
                  </div>
                </div>
                <motion.button
                  className="bg-purple-700 p-2 rounded-full"
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Plus className="w-5 h-5 text-white" />
                </motion.button>
              </motion.div>

              <motion.div
                className="bg-purple-600/40 backdrop-blur-sm rounded-2xl p-4 flex items-center justify-between"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1.8 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-purple-400 rounded-full flex items-center justify-center">
                    <div className="text-2xl">🐾</div>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Elretrors</h4>
                    <p className="text-white/70 text-sm">Pecstarre verilen yell</p>
                    <p className="text-white/60 text-xs">Alçs tibur 14:23 ocan</p>
                  </div>
                </div>
                <motion.button
                  className="bg-purple-700 p-2 rounded-full"
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Plus className="w-5 h-5 text-white" />
                </motion.button>
              </motion.div>
            </motion.div>

            <motion.div
              className="mt-6 bg-purple-600/40 backdrop-blur-sm rounded-2xl p-4 flex justify-around items-center"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.9, type: "spring" }}
            >
              <motion.button
                className="flex flex-col items-center gap-1"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Calendar className="w-6 h-6 text-white" />
                <span className="text-white text-xs">Cuisines</span>
              </motion.button>
              <motion.button
                className="flex flex-col items-center gap-1"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <User className="w-6 h-6 text-white" />
                <span className="text-white text-xs">Price Range</span>
              </motion.button>
              <motion.button
                className="flex flex-col items-center gap-1"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Cat className="w-6 h-6 text-white" />
                <span className="text-white text-xs">Suiteline</span>
              </motion.button>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
