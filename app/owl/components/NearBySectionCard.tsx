import { motion } from 'framer-motion';
import { Search, Plus, Calendar, User, Cat } from 'lucide-react';
const NearBySectionCard = () => {
    return (<motion.div
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
    </motion.div>)
}

export default NearBySectionCard;