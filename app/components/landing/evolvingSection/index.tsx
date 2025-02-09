"use client";
import { useState, useEffect, useMemo, FC } from "react";
import { motion } from "framer-motion";

const tabs = [
    {
        id: 1,
        title: "Passenger vehicles",
        description: "Revving up innovation from interior to exterior.",
        videos: [
            { id: 1, src: "/assets/videos/passenger/clip-1.mp4", thumbnail: "/assets/thumbnails/passenger/thumb-1.png" },
            { id: 2, src: "/assets/videos/passenger/clip-2.mp4", thumbnail: "/assets/thumbnails/passenger/thumb-2.png" },
            { id: 3, src: "/assets/videos/passenger/clip-3.mp4", thumbnail: "/assets/thumbnails/passenger/thumb-3.svg" },
            { id: 4, src: "/assets/videos/passenger/clip-4.mp4", thumbnail: "/assets/thumbnails/passenger/thumb-4.png" },
            { id: 5, src: "/assets/videos/passenger/clip-5.mp4", thumbnail: "/assets/thumbnails/passenger/thumb-5.png" },
        ],
    },
    {
        id: 2,
        title: "Commercial vehicles",
        description: "Advancing engineering for heavy-duty vehicles.",
        videos: [
            { id: 1, src: "/assets/videos/commercial/clip-1.mp4", thumbnail: "/assets/thumbnails/commercial/thumb-1.svg" },
            { id: 2, src: "/assets/videos/commercial/clip-2.mp4", thumbnail: "/assets/thumbnails/commercial/thumb-2.svg" },
            { id: 3, src: "/assets/videos/commercial/clip-3.mp4", thumbnail: "/assets/thumbnails/commercial/thumb-3.svg" },
        ],
    },
];

const EvolvingSection:FC = () => {
    const [activeTab, setActiveTab] = useState(1);
    const [activeVideo, setActiveVideo] = useState(tabs[0].videos[0].src);

    // Get the active tab object
    const currentTab = useMemo(() => tabs.find(tab => tab.id === activeTab), [activeTab]);

    // Function to handle scroll-based tab switching
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            if (scrollPosition > 1400) {
                setActiveTab(2);
                // Reset to first video of tab
                setActiveVideo(tabs[1].videos[0].src); 
            } else {
                setActiveTab(1);
                setActiveVideo(tabs[0].videos[0].src);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section className={` w-full lg:h-[600px] py-10 bg-black text-white flex items-center justify-center `}>
            <div className="container mx-auto lg:px-40 px-5">
                {/* Main Tabs */}
                <div className=" grid lg:grid-cols-3 grid-cols-1 items-center lg:items-start lg:justify-between">
                    {/* Tab Buttons */}
                    <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="w-full flex flex-col ">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => {
                                    setActiveTab(tab.id);
                                    setActiveVideo(tab.videos[0].src); // Reset to first video in tab
                                }}
                                className={`text-left px-4 py-4 lg:py-10 border-l-4 transition-all ${activeTab === tab.id ? "border-white text-white" : "border-gray-600 text-gray-500"
                                    }`}
                            >
                                <h3 className="text-xl font-semibold">{tab.title}</h3>
                                <p className="text-sm">{tab.description}</p>
                            </button>
                        ))}
                    </motion.div>

                    {/* Video Section */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="w-full col-span-2 flex flex-col items-center"
                    >
                        {/* Main Video */}
                        <video
                            src={activeVideo}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="rounded-lg w-[800px] h-[250px] lg:h-[350px]"
                        />

                        {/* Sub-tabs (Thumbnails) */}
                        <div className="mt-4 flex space-x-4">
                            {currentTab?.videos.map((video) => (
                                <button
                                    key={video.id}
                                    onClick={() => setActiveVideo(video.src)}
                                    className={`flex flex-col font-light items-center justify-center transition-opacity duration-300 hover:opacity-100 cursor-pointer ${activeVideo === video.src ? "opacity-1" : "opacity-50"}`}
                                >
                                    <img
                                        src={video.thumbnail}
                                        alt="Thumbnail"
                                        className={`w-16 h-16 ${activeVideo === video.src ? "border-white" : "border-gray-500"}`}
                                    />
                                </button>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default EvolvingSection;
