import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const featuredSpots = [
    {
        image: "/images/locho.jpg",
        name: "Locho King",
        subtitle: "Famous Locho Spot, Athwalines",
    },
    {
        image: "/images/pavbhaji.jpg",
        name: "Pav Bhaji Hub",
        subtitle: "Street Food, City Center",
    },
    // Add more spots as needed
];

export default function FoodCarousel() {
    const [active, setActive] = useState(0);

    const prev = () => setActive((i) => (i === 0 ? featuredSpots.length - 1 : i - 1));
    const next = () => setActive((i) => (i === featuredSpots.length - 1 ? 0 : i + 1));

    return (
        <div className="relative flex items-center justify-center w-full py-6">
            {/* Left Arrow */}
            <button
                className="absolute left-2 z-10 bg-black/60 rounded-full p-2 hover:bg-black/80 transition"
                onClick={prev}
            >
                <ChevronLeft className="w-6 h-6 text-white" />
            </button>

            {/* Carousel Cards */}
            <div className="relative w-full flex items-center justify-center" style={{ height: '270px' }}>
                {featuredSpots.map((spot, idx) => {
                    const offset = idx - active;
                    let scale = offset === 0 ? 1 : 0.85;
                    let opacity = offset === 0 ? 1 : 0.6;
                    let zIndex = offset === 0 ? 20 : 10;
                    let translateX = offset * 260;

                    return (
                        <motion.div
                            key={spot.name}
                            className="absolute left-1/2 -translate-x-1/2 flex-shrink-0"
                            style={{ width: "90vw", maxWidth: 400, zIndex }}
                            animate={{ scale, opacity, x: translateX }}
                            transition={{ type: "spring", stiffness: 200, damping: 30 }}
                        >
                            <div className="rounded-3xl shadow-2xl overflow-hidden bg-black/80">
                                {/* Image */}
                                <div className="relative h-64 w-full">
                                    <img
                                        src={spot.image}
                                        alt={spot.name}
                                        className="object-cover w-full h-full"
                                    />
                                    {/* Blurred overlay for text */}
                                    <div className="absolute bottom-0 left-0 w-full h-20 bg-black/60 backdrop-blur-md flex flex-col justify-center px-6">
                                        <div className="text-lg font-bold text-white">{spot.name}</div>
                                        {spot.subtitle && (
                                            <div className="text-sm text-white/80">{spot.subtitle}</div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>

            {/* Right Arrow */}
            <button
                className="absolute right-2 z-10 bg-black/60 rounded-full p-2 hover:bg-black/80 transition"
                onClick={next}
            >
                <ChevronRight className="w-6 h-6 text-white" />
            </button>
        </div>
    );
}
