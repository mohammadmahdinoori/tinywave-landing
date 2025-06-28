"use client";

import React, { useState, useEffect, useRef } from "react";
import { Menu } from "lucide-react";
import { motion } from "framer-motion";

interface Section {
    id: string;
    label: string;
}

const sections: Section[] = [
    { id: "hero", label: "Home" },
    { id: "flow", label: "Flow 1.0" },
    { id: "recent-models", label: "Models" },
    { id: "vision", label: "Vision" },
    { id: "recent-blogs", label: "Blogs" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState<string>("hero");
    const [isClient, setIsClient] = useState(false);

    // Use a ref object to hold button references keyed by section id.
    const navRefs = useRef<Record<string, HTMLButtonElement | null>>({});

    // Underline state to control left offset and width.
    const [underlineProps, setUnderlineProps] = useState<{ left: number; width: number }>({
        left: 0,
        width: 0,
    });

    // Ensure we're on the client side
    useEffect(() => {
        setIsClient(true);
    }, []);

    // Smooth scroll with a -50px offset.
    const scrollToSection = (id: string) => {
        if (!isClient) return;
        
        const el = document.getElementById(id);
        if (el) {
            const yOffset = -50;
            const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: "smooth" });
        }
        setIsOpen(false);
    };

    // Update activeSection based on scroll position.
    useEffect(() => {
        if (!isClient) return;

        const handleScroll = () => {
            sections.forEach((sec) => {
                const el = document.getElementById(sec.id);
                if (el) {
                    const rect = el.getBoundingClientRect();
                    if (rect.top <= 100 && rect.bottom >= 100) {
                        setActiveSection(sec.id);
                    }
                }
            });
        };
        
        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, [isClient]);

    // Update underline position using offsetLeft & offsetWidth from each button.
    useEffect(() => {
        if (!isClient) return;
        
        const activeRef = navRefs.current[activeSection];
        if (activeRef) {
            const left = activeRef.offsetLeft - 30;
            const width = activeRef.offsetWidth + 10;
            setUnderlineProps({ left, width });
        }
    }, [activeSection, isClient]);

    return (
        <nav className="bg-white text-black w-full flex justify-between items-center py-4 px-6 md:px-12 shadow-sm fixed top-0 left-0 z-50">
            <h1 className="text-lg font-semibold">Flowence</h1>
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-6 relative h-8">
                {sections.map((sec) => (
                    <button
                        key={sec.id}
                        ref={(el) => { navRefs.current[sec.id] = el; }}
                        onClick={() => scrollToSection(sec.id)}
                        className={`hover:text-black focus:outline-none ${activeSection === sec.id ? "font-bold" : "font-normal"}`}
                    >
                        {sec.label}
                    </button>
                ))}
                {isClient && (
                    <motion.div
                        className="absolute bottom-0 h-0.5 bg-black"
                        animate={{ left: underlineProps.left, width: underlineProps.width }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    />
                )}
            </div>
            <button
                className="hidden md:block bg-black text-white rounded-full px-8 py-2 hover:bg-gray-800"
                onClick={() => scrollToSection("contact")}
            >
                Contact Us
            </button>
            {/* Mobile Menu Toggle */}
            <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
                <Menu size={24} />
            </button>
            {isOpen && (
                <div className="md:hidden flex flex-col items-center space-y-4 py-4 bg-white shadow-md absolute top-full left-0 right-0">
                    {sections.map((sec) => (
                        <button
                            key={sec.id}
                            onClick={() => scrollToSection(sec.id)}
                            className={`hover:text-black focus:outline-none ${activeSection === sec.id ? "font-bold" : "font-normal"}`}
                        >
                            {sec.label}
                        </button>
                    ))}
                    <button
                        className="bg-black text-white rounded-md px-4 py-2 hover:bg-gray-800"
                        onClick={() => scrollToSection("contact")}
                    >
                        Contact Us
                    </button>
                </div>
            )}
        </nav>
    );
}
