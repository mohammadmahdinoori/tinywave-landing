import React from "react";

export function Hero() {
    return (
        <header className="flex flex-col items-center justify-center text-center py-20 px-6 md:px-12">
            <div className="h-16" />
            <h1 className="text-2xl md:text-6xl font-bold text-black max-w-6xl leading-[1.25]">
                Efficient Interleaved Speech Modeling through Knowledge Distillation
            </h1>
            <p className="text-lg text-gray-700 mt-8 max-w-2xl">
                Developing and providing state-of-the-art efficient speech-to-speech AI models.
            </p>
            <a href="https://huggingface.co/tinywave" target="_blank" rel="noopener noreferrer">
                <button className="mt-8 bg-black text-white rounded-[100px] px-8 py-2 hover:bg-gray-800">
                    Try Our Models
                </button>
            </a>
        </header>
    );
}