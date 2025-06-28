"use client";
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "GSLM",
    sStoryCloze: 53.3,
    tStoryCloze: 66.6,
    sWuggy: 64.8,
    sBlimp: 54.2,
  },
  {
    name: "TWIST",
    sStoryCloze: 55.4,
    tStoryCloze: 76.4,
    sWuggy: 74.5,
    sBlimp: 59.2,
  },
  {
    name: "SpiritLM-Base",
    sStoryCloze: 60.3,
    tStoryCloze: 82.1,
    sWuggy: 70.98,
    sBlimp: 58.37,
  },
  {
    name: "TinyWave‑Base (2 B)",
    sStoryCloze: 55.3,
    tStoryCloze: 74.8,
    sWuggy: 70.26,
    sBlimp: 58.08,
  },
  {
    name: "Baseline (2 B)",
    sStoryCloze: 53.6,
    tStoryCloze: 53.6,
    sWuggy: undefined,
    sBlimp: undefined,
  },
  {
    name: "SpiritLM-Expressive",
    sStoryCloze: 57.1,
    tStoryCloze: 75.5,
    sWuggy: 65.0,
    sBlimp: 54.35,
  },
  {
    name: "TinyWave‑Expressive",
    sStoryCloze: 54.1,
    tStoryCloze: 71.6,
    sWuggy: 63.98,
    sBlimp: 54.28,
  },
  {
    name: "Baseline‑Expressive",
    sStoryCloze: 50.6,
    tStoryCloze: 63.1,
    sWuggy: undefined,
    sBlimp: undefined,
  },
];

export function BenchmarkSection() {
  return (
    <section id="benchmark" className="py-16 px-6 md:px-12 bg-black text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-5xl font-bold text-white bg-clip-text text-transparent">
          Spoken‑LM Benchmarks
        </h2>
        <p className="text-gray-400 mt-4 max-w-3xl mx-auto">
          Accuracy (↑) across sStoryCloze, tStoryCloze, sWuggy, and sBlimp.
        </p>
      </div>

      <div className="mt-10 max-w-6xl mx-auto">
        <ResponsiveContainer width="100%" height={500}>
          <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 50 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#444" />
            <XAxis
              dataKey="name"
              stroke="#bbb"
              interval={0}
              angle={-35}
              textAnchor="end"
              height={80}
            />
            <YAxis stroke="#bbb" domain={[50, 85]} />
            <Tooltip
              wrapperStyle={{ backgroundColor: "#222", borderRadius: "8px", color: "white" }}
            />
            <Legend wrapperStyle={{ color: "white", bottom: 0 }} />
            <Bar dataKey="sStoryCloze" fill="#e91e63" name="sStoryCloze (%)" />
            <Bar dataKey="tStoryCloze" fill="#ff9800" name="tStoryCloze (%)" />
            <Bar dataKey="sWuggy" fill="#00bcd4" name="sWuggy (%)" />
            <Bar dataKey="sBlimp" fill="#4caf50" name="sBlimp (%)" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}
