"use client";
import React from "react";

export function VisionSection() {
  return (
    <section className="relative bg-black text-white py-16 px-6 overflow-hidden">
      {/* Animated Gradient Splashes */}
      {/* You can add or remove splashes for variety */}
      <div className="absolute top-0 left-1/4 w-80 h-80 bg-gradient-to-br from-white to-transparent rounded-full blur-2xl opacity-40 animate-pulse-fast" />
      <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-gradient-to-br from-white to-transparent rounded-full blur-3xl opacity-30 animate-pulse-slow" />
      {/* <div className="absolute bottom-0 left-[10%] w-60 h-60 bg-gradient-to-br from-white to-transparent rounded-full blur-2xl opacity-20 animate-pulse-slower" /> */}

      {/* Content Container */}
      <div className="relative max-w-4xl mx-auto text-center">
        <h2 className="text-5xl font-bold mb-6">Our Vision</h2>
        <p className="text-lg text-gray-200 leading-relaxed max-w-3xl mx-auto">
          We believe in <span className="font-semibold text-white">democratizing speech-to-speech models</span>, 
          making powerful, high-quality AI voice technology accessible to everyone. Our goal is to remove barriers, 
          foster innovation, and empower creators worldwide to communicate freely across languages and boundaries. 
          By releasing cutting-edge models, we strive to open the door to new possibilities for education, entertainment, 
          accessibility, and more—ensuring that voice technology truly belongs to all of us.
        </p>
        
        {/* Call To Action */}
        <div className="mt-10">
          <button className="bg-white text-black rounded-full px-8 py-3 font-semibold hover:bg-gray-200 transition">
            Join Our Journey
          </button>
        </div>
      </div>

      {/* Custom Animation Styles */}
      <style jsx>{`
        /* Faster, more visible pulse */
        @keyframes pulseFast {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.4);
          }
          100% {
            transform: scale(1);
          }
        }
        .animate-pulse-fast {
          animation: pulseFast 4s ease-in-out infinite;
        }

        /* Medium pulse */
        @keyframes pulseSlow {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.3);
          }
          100% {
            transform: scale(1);
          }
        }
        .animate-pulse-slow {
          animation: pulseSlow 5s ease-in-out infinite;
        }

        /* Even slower, more subtle pulse */
        @keyframes pulseSlower {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.2);
          }
          100% {
            transform: scale(1);
          }
        }
        .animate-pulse-slower {
          animation: pulseSlower 7s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
