'use client';

import { motion } from 'framer-motion';
import { Search, Plus, Calendar, User, Cat } from 'lucide-react';

export default function OwlPage() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-300 via-purple-200 to-pink-200 flex items-center justify-center p-8">
      <motion.div
        className="relative w-full max-w-md bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900 rounded-[3rem] shadow-2xl overflow-hidden"
        initial={{ scale: 0.8, opacity: 0, rotateY: -30 }}
        animate={{ scale: 1, opacity: 1, rotateY: 0 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        style={{ aspectRatio: '9/19' }}
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-8 bg-black rounded-b-3xl z-50" />

        <div className="relative h-full p-6 pt-12 flex flex-col">
          <motion.div
            className="text-white text-sm mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            5:11
          </motion.div>

          <div className="flex flex-col items-center mb-6">
            <motion.div
              className="relative mb-6"
              animate={{ y: [0, -15, 0] }}
              initial={{ scale: 0, y: -100 }}
              transition={{ delay: 0.5, type: "spring", stiffness: 200, y: { duration: 2, repeat: Infinity } }}
            >
              <motion.div className="relative w-32 h-32">
                <motion.div
                  className="absolute inset-0 bg-purple-400 rounded-full"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.6, type: "spring" }}
                />

                <motion.div
                  className="absolute top-0 -left-3 w-8 h-12 bg-purple-600 rounded-t-full"
                  style={{ clipPath: 'polygon(0 0, 100% 0, 80% 100%, 20% 100%)' }}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.7 }}
                />
                <motion.div
                  className="absolute top-0 -right-3 w-8 h-12 bg-purple-600 rounded-t-full"
                  style={{ clipPath: 'polygon(0 0, 100% 0, 80% 100%, 20% 100%)' }}
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.7 }}
                />

                <motion.div
                  className="absolute bottom-8 left-1/2 -translate-x-1/2 w-20 h-24 bg-purple-300 rounded-full"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.8 }}
                />

                <motion.div
                  className="absolute top-10 left-8 w-10 h-10 bg-white rounded-full"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.9 }}
                >
                  <motion.div
                    className="absolute top-2 left-2 w-6 h-6 bg-gray-900 rounded-full"
                    animate={{ scaleY: [1, 0.1, 1] }}
                    transition={{ duration: 0.2, repeat: Infinity, repeatDelay: 4 }}
                  />
                </motion.div>
                <motion.div
                  className="absolute top-10 right-8 w-10 h-10 bg-white rounded-full"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.9 }}
                >
                  <motion.div
                    className="absolute top-2 left-2 w-6 h-6 bg-gray-900 rounded-full"
                    animate={{ scaleY: [1, 0.1, 1] }}
                    transition={{ duration: 0.2, repeat: Infinity, repeatDelay: 4 }}
                  />
                </motion.div>

                <motion.div
                  className="absolute top-16 left-1/2 -translate-x-1/2 w-3 h-4 bg-orange-500 rounded-b-full"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1 }}
                />

                <motion.div
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-1"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1.1 }}
                >
                  <div className="w-2 h-3 bg-orange-400 rounded-t-sm" />
                  <div className="w-2 h-3 bg-orange-400 rounded-t-sm" />
                </motion.div>
              </motion.div>

              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-white rounded-full"
                  style={{
                    left: `${Math.random() * 150 - 10}px`,
                    top: `${Math.random() * 150 - 10}px`
                  }}
                  animate={{
                    y: [0, -10, 0],
                    opacity: [0.4, 1, 0.4]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.3
                  }}
                  initial={{ opacity: 0 }}
                />
              ))}
            </motion.div>

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
      </motion.div>
    </div>
  );
}
