"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import WaveSurfer from "wavesurfer.js";
import { Stars } from "lucide-react";

export type Example = {
    id: number;
    title: string;
    transcript: string;
    userAudioURL: string;
    modelAudioURL: string;
    sampleType: "speech-to-speech" | "text-to-speech" | "speech-to-text";
};

type ExamplesSectionProps = {
    examples: Example[];
    sectionTitle?: string;
    sectionDescription?: string;
};

export function ExamplesSection({
    examples,
    sectionTitle = "Model Examples",
    sectionDescription = "Experience our state-of-the-art model with real-time voice input and high-quality output.",
}: ExamplesSectionProps) {
    const [selectedIdx, setSelectedIdx] = useState(0);
    const selectedExample = examples[selectedIdx];

    return (
        <section className="bg-gray-100 text-black py-16 px-6 md:px-12">
            {/* Section Title & Description */}
            <div className="max-w-6xl mx-auto text-center mb-12">
                <h2 className="text-4xl font-bold">{sectionTitle}</h2>
                <p className="mt-4 text-lg text-gray-600">{sectionDescription}</p>
            </div>

            <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 items-center">
                {/* LEFT COLUMN - Audio Waveforms in a card */}
                <div className="md:w-1/2 w-full flex justify-center">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={selectedExample.id}
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -30 }}
                            transition={{ duration: 0.3 }}
                            className="w-full bg-gray-200 px-8 py-16 mx-4 rounded-xl relative"
                        >
                            <div className="space-y-8">
                                {/* Model Input Waveform */}
                                {selectedExample.userAudioURL !== "" ? (
                                    <div>
                                        <p className="text-black text-center mb-2 font-bold">Model Input</p>
                                        <WaveSurferContainer audioURL={selectedExample.userAudioURL} />
                                    </div>
                                ) : null}

                                {/* Model Output Waveform */}
                                <div>
                                    <div className="flex flex-row justify-center items-center mb-2">
                                        <Stars width={16} height={16} fill="currentColor" />
                                        <p className="text-black font-bold ml-2">Model Output</p>
                                    </div>
                                    <WaveSurferContainer audioURL={selectedExample.modelAudioURL} />
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* RIGHT COLUMN - List of Examples */}
                <div className="md:w-1/2 w-full flex flex-col justify-center">
                    <div className="space-y-6">
                        {examples.map((ex, idx) => (
                            <button
                                key={ex.id}
                                onClick={() => setSelectedIdx(idx)}
                                className={`relative block w-full text-left p-4 rounded-md transition-colors ${
                                    idx === selectedIdx
                                        ? "bg-black text-white"
                                        : "bg-gray-200 hover:bg-gray-300 text-black"
                                }`}
                            >
                                {/* Sample Type Tag */}
                                <span
                                    className={
                                        `absolute top-3 right-3 inline-block text-[10px] font-semibold px-2 py-1 rounded-full lowercase ${
                                            idx === selectedIdx
                                                ? "bg-white text-black"
                                                : "bg-black text-white"
                                        }`
                                    }
                                >
                                    {ex.sampleType}
                                </span>

                                <h4 className="text-xl font-semibold">{ex.title}</h4>
                                <p className="text-sm mt-2">{ex.transcript}</p>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

/**
 * WaveSurferContainer:
 * A sub-component that renders an audio waveform for the given audioURL,
 * along with a play/pause button.
 */
function WaveSurferContainer({ audioURL }: { audioURL: string }) {
    const waveformRef = useRef<HTMLDivElement | null>(null);
    const wavesurferRef = useRef<WaveSurfer | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        if (!waveformRef.current) return;

        wavesurferRef.current = WaveSurfer.create({
            container: waveformRef.current,
            waveColor: "#888",
            progressColor: "#555",
            cursorColor: "#ff5722",
            barWidth: 2,
            height: 60,
        });

        wavesurferRef.current.load(audioURL);

        return () => {
            try {
                wavesurferRef.current?.destroy();
            } catch (error) {
                console.error("Error destroying WaveSurfer:", error);
            }
        };
    }, [audioURL]);

    const handlePlayPause = () => {
        if (wavesurferRef.current) {
            wavesurferRef.current.playPause();
            setIsPlaying((prev) => !prev);
        }
    };

    return (
        <div className="bg-gray-100 p-4 rounded-lg">
            <div ref={waveformRef} className="w-full"></div>
            <button
                onClick={handlePlayPause}
                className="mt-2 px-4 py-2 bg-gray-200 text-black rounded hover:bg-gray-300 transition"
            >
                {isPlaying ? "Pause" : "Play"}
            </button>
        </div>
    );
}
