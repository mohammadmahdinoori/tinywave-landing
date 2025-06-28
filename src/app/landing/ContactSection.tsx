"use client";
import React, { useState } from "react";
import { Loader2 } from "lucide-react";

export function ContactSection() {
  // Simple state to hold form inputs
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Submit handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/contactus`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, description }),
        }
      );
      const data = await res.json();
      if (!res.ok) {
        alert(`Error: ${data.message}`);
      } else {
        alert("Your message has been submitted successfully!");
        // Reset form inputs
        setName("");
        setEmail("");
        setDescription("");
      }
    } catch (error: any) {
      alert(`Something went wrong: ${error.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-gray-100 text-black py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Title & Description */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">Contact Us</h2>
          <p className="mt-4 text-lg text-gray-600">
            Got questions or feedback? Fill out the form below, and we’ll get back to you soon.
          </p>
        </div>

        {/* Contact Form */}
        <div className="bg-gray-200 p-8 rounded-lg max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block mb-2 font-semibold">
                Name
              </label>
              <input
                id="name"
                type="text"
                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
                placeholder="Your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block mb-2 font-semibold">
                Email
              </label>
              <input
                id="email"
                type="email"
                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            {/* Description Field */}
            <div>
              <label htmlFor="description" className="block mb-2 font-semibold">
                Description
              </label>
              <textarea
                id="description"
                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
                placeholder="How can we help you?"
                rows={5}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition flex items-center justify-center"
              >
                {isSubmitting ? (
                  <Loader2 className="animate-spin h-6 w-6 inline-block" />
                ) : (
                  "Send Request"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
