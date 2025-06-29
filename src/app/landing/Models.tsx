"use client";
import Image from "next/image";

export function Models() {
    return (
        <section id="models" className="bg-white">
            {/* Model Introduction */}
            <div className="w-full mx-auto flex flex-col items-center md:flex-row bg-gray-100 px-8 py-16">
                {/* Text Section */}
                <div className="max-w-6xl w-full md:w-1/2 md:pl-16 text-center md:text-left">
                    <h2 className="text-4xl font-bold text-black">Abstract</h2>
                    <p className="text-gray-700 mt-6 text-justify">
                        Current speech language models deliver strong results but remain too large for many deployment settings.  We present TinyWave, a family of 2 B-parameter speech-to-speech transformers.  A layer-aligned distillation strategy—matching hidden states, attention maps, and softened logits—shrinks model size by 3 × while retaining most of the teacher’s behaviour.  Trained on 50 k h of publicly available speech, TinyWave supports (i) speech-only generation with either phonetic or expressive token streams and (ii) mixed speech–text continuations. This approach reduces inference latency and memory footprint by 3x compared to the teacher, while preserving expressive qualities such as prosody, intonation, and speaker-specific traits. On Libri-Light language-modeling, TinyWave keeps within 1.4 normalised-perplexity points of its teacher; on spoken StoryCloze and SALMon it preserves 93–97 % of teacher accuracy and surpasses size-matched baselines. Finetuning interleaved models further yields competitive ASR and TTS performance, demonstrating effective Multimodal feature transfer.  These models are optimized for deployment on commodity hardware, enabling applications in real-time conversational agents, assistive technologies, and low-resource environments. We release models, training code, and evaluation scripts to facilitate reproducible research on compact, expressive speech generation.
                    </p>
                    <div className="mt-8 flex flex-col sm:flex-row justify-center md:justify-start">
                        <a href="https://huggingface.co/tinywave" target="_blank" rel="noopener noreferrer">
                            <button className="bg-black text-white rounded-full px-8 py-2">
                                Download Models
                            </button>
                        </a>
                        <button className="mt-4 sm:mt-0 sm:ml-4 bg-gray-300 text-black rounded-full px-8 py-2">
                            Read Paper
                        </button>
                    </div>
                </div>

                {/* Image Section */}
                <div className="w-full md:w-1/2 flex justify-center items-center md:px-16 mt-8 md:mt-0">
                    <img
                        src="images/architecture.png"
                        alt="Model Architecture"
                        className="rounded-xl w-full"
                    />
                </div>
            </div>
        </section>
    );
}
