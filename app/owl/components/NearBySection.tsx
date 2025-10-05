
import { motion } from 'framer-motion';
import NearBySectionCard from './NearBySectionCard';
const NearBySection = () => {
    return (
        <motion.div
            className="bg-purple-600/40 backdrop-blur-sm rounded-2xl "
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.5 }}
            whileHover={{ scale: 1.02 }}
        >
            <motion.h3
                className="text-white text-lg font-semibold p-4"
                initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 120, delay: 1.6 }}
            >
                🍴 Top picks near you
            </motion.h3>
            <NearBySectionCard />
            {/* <div className="flex justify-between text-sm text-white/80">
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
        </div> */}
        </motion.div>)
}
export default NearBySection;