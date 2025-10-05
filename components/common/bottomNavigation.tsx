
import { motion } from 'framer-motion';
import { Search, Plus, Calendar, User, Cat } from 'lucide-react';
const BottomNavigation = () => {
    return (<motion.div
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
    </motion.div>)
}

export default BottomNavigation;