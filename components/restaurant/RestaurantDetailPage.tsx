import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaHeart, FaStar, FaClock, FaRupeeSign, FaMapMarkerAlt } from 'react-icons/fa';

// Header Section
const HeaderSection = () => (
    <div className="relative w-full h-[40vh] rounded-b-2xl overflow-hidden">
        <img
            src="/lottie/owl_animation.json" // Replace with real restaurant image
            alt="Restaurant Cover"
            className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        <div className="absolute top-4 left-4 flex items-center gap-2">
            <button className="bg-black/40 rounded-full p-2">
                <FaArrowLeft className="text-white text-lg" />
            </button>
        </div>
        <div className="absolute top-4 right-4 flex items-center gap-2">
            <button className="bg-black/40 rounded-full p-2">
                <FaHeart className="text-[#FF6B6B] text-lg" />
            </button>
        </div>
        <div className="absolute bottom-6 left-6">
            <h1 className="text-white text-2xl font-bold font-sans drop-shadow">Owl Street Locho</h1>
            <p className="text-[#B3B3B3] text-sm mt-1">Street Food · Navrangpura</p>
        </div>
    </div>
);

// Info Row
const InfoRow = () => (
    <div className="grid grid-cols-4 bg-[#1A1A1A] rounded-xl mx-4 -mt-6 p-3 shadow-sm">
        <div className="flex flex-col items-center">
            <FaStar className="text-[#FFD95A] mb-1" />
            <span className="text-white text-sm font-semibold">4.6</span>
            <span className="text-[#B3B3B3] text-xs">Rating</span>
        </div>
        <div className="flex flex-col items-center">
            <FaClock className="text-[#FFD95A] mb-1" />
            <span className="text-white text-sm font-semibold">Till 2 AM</span>
            <span className="text-[#B3B3B3] text-xs">Open</span>
        </div>
        <div className="flex flex-col items-center">
            <FaRupeeSign className="text-[#FFD95A] mb-1" />
            <span className="text-white text-sm font-semibold">₹₹</span>
            <span className="text-[#B3B3B3] text-xs">Affordable</span>
        </div>
        <div className="flex flex-col items-center">
            <FaMapMarkerAlt className="text-[#FFD95A] mb-1" />
            <span className="text-white text-sm font-semibold">1.2 km</span>
            <span className="text-[#B3B3B3] text-xs">Away</span>
        </div>
    </div>
);


// AI Review Card
const AIReviewCard = () => {
    const [expanded, setExpanded] = React.useState(false);
    return (
        <motion.div
            className="bg-[#1E1E1E] rounded-2xl mx-4 mt-6 p-5 shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
        >
            <h2 className="text-[#FFD95A] text-lg font-bold mb-2 font-sans">AI Review</h2>
            <p className="text-[#B3B3B3] text-base mb-3 font-sans">
                {expanded
                    ? 'This locho melts in your mouth — spicy, buttery, and a little addictive 😋. The late-night crowd is always buzzing, and the staff never skimps on the chutney. If you’re craving something warm and comforting after midnight, this is the spot!'
                    : 'This locho melts in your mouth — spicy, buttery, and a little addictive 😋.'}
            </p>
            {!expanded && (
                <button
                    className="text-[#FF6B6B] text-sm font-medium font-sans"
                    onClick={() => setExpanded(true)}
                >
                    Read more
                </button>
            )}
        </motion.div>
    );
};




// Food Gallery Masonry Data
type AspectType = 'square' | 'portrait';
interface FoodGalleryItem {
    src: string;
    name: string;
    tag: 'SPICY' | 'SWEET' | 'DRINK';
    tagline: string;
    tagColor: string;
    aspect: AspectType;
}

const foodGalleryData: FoodGalleryItem[] = [
    {
        src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80',
        name: 'Butter Locho',
        tag: 'SPICY',
        tagline: 'Famous at Athwalines',
        tagColor: '#FF6B6B',
        aspect: 'square',
    },
    {
        src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80',
        name: 'Butter Locho',
        tag: 'SPICY',
        tagline: 'Famous at Athwalines',
        tagColor: '#FF6B6B',
        aspect: 'square',
    },
    {
        src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80',
        name: 'Masala Chai',
        tag: 'DRINK',
        tagline: 'Warm and comforting',
        tagColor: '#4ECDC4',
        aspect: 'square',
    },
    {
        src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80',
        name: 'Sweet Lassi',
        tag: 'DRINK',
        tagline: 'Chill and sweet',
        tagColor: '#4ECDC4',
        aspect: 'portrait',
    },
    {
        src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80',
        name: 'Cheese Bhajiya',
        tag: 'SPICY',
        tagline: 'Crispy, cheesy, hot',
        tagColor: '#FF6B6B',
        aspect: 'portrait',
    },
    {
        src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80',
        name: 'Chocolate Jalebi',
        tag: 'SWEET',
        tagline: 'Sugar rush!',
        tagColor: '#FFB6B9',
        aspect: 'portrait',
    },
    {
        src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80',
        name: 'Rose Falooda',
        tag: 'SWEET',
        tagline: 'Classic midnight treat',
        tagColor: '#FFB6B9',
        aspect: 'portrait',
    },
];

import { useState } from 'react';

const aspectClasses = {
    square: 'aspect-square',
    portrait: 'aspect-[3/4]',
};

const FoodGallery = () => {
    const [showAll, setShowAll] = useState(false);
    const visibleImages = showAll ? foodGalleryData : foodGalleryData.slice(0, 5);

    return (
        <motion.section
            className="mt-8 px-4"
            initial="hidden"
            animate="visible"
            variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.08 } },
            }}
        >
            <div className="flex items-center gap-2 mb-2">
                <span className="text-[#FFD95A] text-base font-bold font-sans">🍴 Food Gallery</span>
                <div className="flex-1 h-px bg-[#232323]" />
            </div>
            <div className="columns-2 gap-0">
                {visibleImages.map((item, idx) => (
                    <motion.div
                        key={idx}
                        className={`w-full break-inside-avoid overflow-hidden shadow-lg bg-[#181818] border border-[#2A2A2A] relative group ${aspectClasses[item.aspect as AspectType]}`}
                        initial={{ opacity: 0, y: 30, scale: 0.95 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.35, ease: 'easeInOut', delay: idx * 0.06 }}
                        whileHover={{ y: -4, scale: 1.03 }}
                    >
                        <img
                            src={item.src}
                            alt={item.name}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                            draggable={false}
                        />
                        {/* Overlay gradient and food name */}
                        <div className="absolute bottom-0 left-0 w-full p-3 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end">
                            <span className="text-white font-bold text-base font-sans drop-shadow">{item.name}</span>
                            <span className="text-[#B3B3B3] text-xs font-sans">{item.tagline}</span>
                        </div>
                    </motion.div>
                ))}
            </div>
            {/* AI Caption */}
            <div className="mt-3 mb-2 text-[#FFD95A] text-sm font-sans text-center">AI recommends: Try this with extra chutney 🌶️</div>
            {/* Load More Button */}
            {!showAll && (
                <button
                    className="mx-auto block mt-2 mb-4 px-6 py-2 bg-[#FFD95A] text-white font-bold rounded-xl text-sm font-sans shadow"
                    onClick={() => setShowAll(true)}
                >
                    Load more
                </button>
            )}
        </motion.section>
    );
};

const RestaurantDetailPage = () => {
    return (
        <motion.div
            className="min-h-screen bg-[#121212] flex flex-col pb-24"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
        >
            <HeaderSection />
            <InfoRow />
            <AIReviewCard />
            <FoodGallery />
            {/* TODO: Add CommunityReviews, LocationSection, BottomStickyBar */}
        </motion.div>
    );
};

export default RestaurantDetailPage;
