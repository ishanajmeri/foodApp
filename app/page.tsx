'use client';

import { motion } from 'framer-motion';
import { Coffee, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Home() {

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/894695/pexels-photo-894695.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)',
          backgroundSize: 'cover',
          backgroundPosition: 'center top'
        }}
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2 }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black/95" />

      <div className="relative z-10 flex flex-col items-center justify-end min-h-screen px-6 pb-12">
        <div className="flex flex-col items-center mb-auto mt-32">
          <div className="relative">
            <motion.div
              className="mb-6"
              initial={{ scale: 0, rotate: -180, opacity: 0 }}
              animate={{ scale: 1, rotate: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8, type: "spring", stiffness: 200, damping: 15 }}
            >
              <div className="relative w-20 h-20 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-600/20 to-amber-800/20 blur-xl" />
                <Coffee className="w-16 h-16 text-amber-600 relative z-10" strokeWidth={1.5} />
              </div>
            </motion.div>

            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="absolute -top-4 left-1/2 w-8 h-8 rounded-full bg-white/10"
                style={{
                  x: '-50%',
                  filter: 'blur(8px)'
                }}
                animate={{
                  y: [-20, -60],
                  opacity: [0, 1, 0],
                  scale: [0.8, 1.2]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.3
                }}
              />
            ))}
          </div>

          <motion.div
            className="text-amber-600 text-sm tracking-[0.3em] font-light mb-8"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            COFFEE TASTE!
          </motion.div>
        </div>

        <div className="text-center mb-8">
          <motion.h1
            className="text-5xl font-light text-white mb-4 leading-tight"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            Find your favorite
          </motion.h1>
          <motion.h2
            className="text-5xl font-bold text-white mb-8 leading-tight"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            Coffee Taste!
          </motion.h2>
          <motion.p
            className="text-gray-300 text-base leading-relaxed max-w-md mx-auto px-4"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.6 }}
          >
            We're coffee shop, beer and wine bar,
            <br />& event space for performing arts
          </motion.p>
        </div>

        <Link href="/owl" className="w-full max-w-md">
          <motion.button
            className="w-full bg-amber-800/80 backdrop-blur-sm text-white py-5 px-8 rounded-2xl flex items-center justify-center gap-3 text-lg font-medium border border-amber-700/30"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.6, duration: 0.6, type: "spring", stiffness: 100 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
            <motion.div
              animate={{
                x: [0, 5, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity
              }}
            >
              <ArrowRight className="w-6 h-6" />
            </motion.div>
          </motion.button>
        </Link>

        <div className="w-full max-w-md mb-8" />

        <motion.div
          className="w-32 h-1 bg-gray-600 rounded-full"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ delay: 2, duration: 0.5 }}
        />
      </div>

      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        style={{
          background: 'radial-gradient(circle at center, rgba(0,0,0,0.8) 0%, transparent 70%)'
        }}
      />
    </div>
  );
}
