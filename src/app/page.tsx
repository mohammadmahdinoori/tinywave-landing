"use client";

import { motion } from "framer-motion";
import { Hero } from "./landing/Hero";
import { Header } from "./landing/Header";
import { Models } from "./landing/Models";
import { BenchmarkSection } from "./landing/Benchmark";
import { StatisticsSection } from "./landing/Statistics";
import { ExamplesSection, Example } from "./landing/ModelExampleSection";
import { Footer } from "./landing/Footer";

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const tinywave_expressvie_examples: Example[] = [
  {
    id: 1,
    title: "Example 1",
    sampleType: "text-to-speech",
    transcript:
      "Input (Text): She had never seen the ocean before, and when she finally stood at the shore—",
    userAudioURL: "",
    modelAudioURL: "/audio/tinywave-expressive/prompt_1.wav",
  },
  {
    id: 2,
    title: "Example 2",
    sampleType: "text-to-speech",
    transcript: "Input (Text): You think this is funny? Do you have any idea what you’ve done?",
    userAudioURL: "",
    modelAudioURL: "/audio/tinywave-expressive/prompt_2.wav"
  },
  {
    id: 3,
    title: "Example 3",
    sampleType: "speech-to-speech",
    transcript: "Input (Speech): He rose from his chair and",
    userAudioURL: "/audio/tinywave-expressive/prompt_3_input.wav",
    modelAudioURL: "/audio/tinywave-expressive/prompt_3_output.wav"
  },
  {
    id: 4,
    title: "Example 4",
    sampleType: "speech-to-speech",
    transcript: "Input (Speech): The keen wind",
    userAudioURL: "/audio/tinywave-expressive/prompt_7_input.wav",
    modelAudioURL: "/audio/tinywave-expressive/prompt_7_output.wav"
  },
  {
    id: 5,
    title: "Example 5",
    sampleType: "text-to-speech",
    transcript: 'Input (Text): "You don’t understand. If we do this—", "Then we can’t go back. I know."',
    userAudioURL: "",
    modelAudioURL: "/audio/tinywave-expressive/prompt_4.wav"
  },
  {
    id: 6,
    title: "Example 6",
    sampleType: "text-to-speech",
    transcript: 'Input (Text): I tried so hard to make it work, but—',
    userAudioURL: "",
    modelAudioURL: "/audio/tinywave-expressive/prompt_5.wav"
  },
  {
    id: 7,
    title: "Example 7",
    sampleType: "text-to-speech",
    transcript: 'Input (Text): I thought it was a dream, but when I woke up—',
    userAudioURL: "",
    modelAudioURL: "/audio/tinywave-expressive/prompt_8.wav"
  },
]

const tinywave_base_examples: Example[] = [
  {
    id: 1,
    title: "Example 1",
    sampleType: "speech-to-speech",
    transcript:
      "Input (Speech): Many little pieces of silver",
    userAudioURL: "/audio/tinywave-base/prompt_1_input.wav",
    modelAudioURL: "/audio/tinywave-base/prompt_1_output.wav",
  },
  {
    id: 2,
    title: "Example 2",
    sampleType: "speech-to-speech",
    transcript: "Input (Speech): He would see however that there was",
    userAudioURL: "/audio/tinywave-base/prompt_2_input.wav",
    modelAudioURL: "/audio/tinywave-base/prompt_2_output.wav"
  },
  {
    id: 3,
    title: "Example 3",
    sampleType: "speech-to-speech",
    transcript: "Input (Speech): 1734",
    userAudioURL: "/audio/tinywave-base/prompt_3_input.wav",
    modelAudioURL: "/audio/tinywave-base/prompt_3_output.wav"
  },
]



export default function Home() {
  return (
    <div className="bg-white">
      <Header />

      <motion.div
        id="hero"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <Hero />
      </motion.div>

      <motion.div
        id="flow"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
        transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
      >
        <Models />
      </motion.div>

      {/* <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
        transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
      >
        <StatisticsSection />
      </motion.div> */}

      <motion.div
        // id="benchmark"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
        transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
      >
        <BenchmarkSection />
      </motion.div>

      <motion.div
        // id="examples"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
        transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
      >
        {/* <ExamplesSection
          examples={examples}
          sectionTitle="Expressive Teacher"
          sectionDescription="Explore how our model handles complex interleaved inputs."
        /> */}
        <ExamplesSection
          examples={tinywave_expressvie_examples}
          sectionTitle="TinyWave Expressive"
          sectionDescription="Examples from our interleaved expressive model."
        />
        <ExamplesSection
          examples={tinywave_base_examples}
          sectionTitle="TinyWave Base"
          sectionDescription="Examples from our speech-to-speech base model."
        />
      </motion.div>

      {/* <motion.div
        id="vision"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
        transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
      >
        <VisionSection />
      </motion.div> */}

      {/* <motion.div
        id="contact"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
        transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
      >
        <ContactSection />
      </motion.div> */}

      {/* <motion.div
        id="footer"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
        transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
      > */}
      <Footer />
      {/* </motion.div> */}

    </div>
  );
}
