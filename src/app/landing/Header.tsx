"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export function Header() {
    const [isClient, setIsClient] = useState(false);

    // Ensure we're on the client side
    useEffect(() => {
        setIsClient(true);
    }, []);

    return (
        <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed top-0 left-0 right-0 z-50 bg-white/75 backdrop-blur-sm border-b border-gray-200/75 shadow-sm"
        >
            <div className="mx-auto px-6 md:px-12 py-4">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    {/* Paper Title */}
                    <div className="flex-1">
                        <h1 className="text-lg md:text-xl font-bold text-gray-900">
                            {/* TinyWave Family of Speech-to-Speech Models */}
                            TinyWave
                        </h1>
                    </div>

                    {/* Authors */}
                    <div className="flex text-right overflow-hidden">
                        <p className="text-sm md:text-base text-gray-600 whitespace-nowrap overflow-hidden overflow-ellipsis">
                            <span className="font-medium">Authors:</span>{" "}
                            <span className="italic">
                                Mohammadmahdi Nouriborji, Morteza Rohanian
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </motion.header>
    );
} 