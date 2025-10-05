"use client";
import { usePathname } from "next/navigation";
import { motion } from 'framer-motion';
import { Home, Map, User, Coffee, MapPinPlus } from 'lucide-react';
import { useRouter } from 'next/navigation';
const BottomNavigation = () => {
    const pathname = usePathname();
    const router = useRouter();
    const isHomeActive = pathname === "/owl";
    return (
        <motion.div
            className="fixed bottom-0 left-0 w-full bg-purple-600/40 backdrop-blur-sm rounded-t-2xl p-2 flex justify-around items-center z-50"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.9, type: "spring" }}
        >
            <motion.button
                className={`flex flex-col items-center gap-1 ${isHomeActive ? 'bg-white/20' : ''} rounded-xl p-2`}
                whileHover={{ y: -6, boxShadow: "0 0 12px 2px #fff7b2" }}
                whileTap={{ scale: 0.95 }}
            >
                <Home className="w-6 h-6 text-white" />
                <span className="text-white text-xs">Home</span>
            </motion.button>
            <motion.button
                className="flex flex-col items-center gap-1 rounded-xl p-2"
                whileHover={{ y: -6, boxShadow: "0 0 12px 2px #fff7b2" }}
                whileTap={{ scale: 0.95 }}
                onClick={() => router.push('/coffee')}
            >
                <Coffee className="w-6 h-6 text-white" />
                <span className="text-white text-xs">Coffee</span>
            </motion.button>
            <motion.button
                className="flex flex-col items-center justify-center gap-1 rounded-full p-0"
                style={{ position: "relative", top: "-24px", zIndex: 51 }}
                initial={{ scale: 1 }}
                animate={{ scale: [1, 1.08, 1], boxShadow: ["0 0 0 0 #FFD70055", "0 0 8px 2px #FFD70055", "0 0 0 0 #FFD70055"] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                whileHover={{ y: -10, boxShadow: "0 0 16px 4px #FFD70088" }}
                whileTap={{ scale: 0.98 }}
                onClick={() => router.push('/add-place')}
            >
                <div className="bg-yellow-400 shadow flex items-center justify-center" style={{ width: 64, height: 64, borderRadius: "50%", boxShadow: "0 2px 8px 0 #FFD70055" }}>
                    <MapPinPlus className="w-10 h-10 text-white" />
                </div>
            </motion.button>
            <motion.button
                className="flex flex-col items-center gap-1 rounded-xl p-2"
                whileHover={{ y: -6, boxShadow: "0 0 12px 2px #fff7b2" }}
                whileTap={{ scale: 0.95 }}
            >
                <Map className="w-6 h-6 text-white" />
                <span className="text-white text-xs">Map</span>
            </motion.button>
            <motion.button
                className="flex flex-col items-center gap-1 rounded-xl p-2"
                whileHover={{ y: -6, boxShadow: "0 0 12px 2px #fff7b2" }}
                whileTap={{ scale: 0.95 }}
            >
                <User className="w-6 h-6 text-white" />
                <span className="text-white text-xs">Profile</span>
            </motion.button>
        </motion.div>
    );
}

export default BottomNavigation;