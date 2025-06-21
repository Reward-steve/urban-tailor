"use client";
import { useState } from "react";
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaInstagram,
  FaWhatsapp,
  FaFacebookF,
} from "react-icons/fa";
import { RiLoader2Line } from "react-icons/ri";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setSubmitted(true);
      setLoading(false);
      const form = e.target as HTMLFormElement;
      form.reset();
    }, 1000);
  };

  return (
    <Container>
      <SectionTitle preTitle="Let's Connect" title="Contact Urban Tailor">
        Got questions, bookings, or custom requests? We&apos;re always here to
        help and collaborate.
      </SectionTitle>

      {/* Contact Info */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-10">
        <div className="flex flex-col items-center text-center p-6 bg-white/60 dark:bg-black/30 backdrop-blur-md rounded-xl shadow-md">
          <FaPhone className="text-2xl text-green-600 mb-2" />
          <p className="font-semibold">Phone</p>
          <a
            href="tel:+2349012345678"
            className="text-sm text-gray-600 dark:text-gray-400"
          >
            +234 901 234 5678
          </a>
        </div>

        <div className="flex flex-col items-center text-center p-6 bg-white/60 dark:bg-black/30 backdrop-blur-md rounded-xl shadow-md">
          <FaEnvelope className="text-2xl text-green-600 mb-2" />
          <p className="font-semibold">Email</p>
          <a
            href="mailto:info@urbantailor.ng"
            className="text-sm text-gray-600 dark:text-gray-400"
          >
            info@urbantailor.ng
          </a>
        </div>

        <div className="flex flex-col items-center text-center p-6 bg-white/60 dark:bg-black/30 backdrop-blur-md rounded-xl shadow-md">
          <FaMapMarkerAlt className="text-2xl text-green-600 mb-2" />
          <p className="font-semibold">Visit Us</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Lagos, Nigeria
          </p>
        </div>
      </div>

      {/* Social Media */}
      <div className="text-center my-10">
        <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
        <div className="flex justify-center space-x-6 text-xl text-gray-500">
          <a
            href="https://wa.me/2349012345678"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp className="hover:text-green-500" />
          </a>
          <a
            href="https://instagram.com/urbantailor_ng"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="hover:text-pink-500" />
          </a>
          <a
            href="https://facebook.com/urbantailor"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF className="hover:text-blue-600" />
          </a>
        </div>
      </div>

      {/* Contact Form */}
      <div className="max-w-2xl mx-auto mt-12">
        {submitted ? (
          <div className="text-center text-green-600 font-semibold py-6 bg-green-100 rounded-md shadow">
            Thank you for reaching out! We&apos;ll get back to you shortly.
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-white/60 dark:bg-black/30 backdrop-blur-md p-8 rounded-xl shadow-md space-y-6 border border-gray-200 dark:border-none"
          >
            <div>
              <label htmlFor="name" className="block font-medium mb-1">
                Your Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full px-4 py-2 rounded-md bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div>
              <label htmlFor="email" className="block font-medium mb-1">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full px-4 py-2 rounded-md bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div>
              <label htmlFor="message" className="block font-medium mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="w-full px-4 py-2 rounded-md bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 rounded-md font-semibold flex justify-center items-center transition text-white ${
                loading
                  ? "bg-green-400 cursor-not-allowed"
                  : "bg-green-600 hover:bg-green-700"
              }`}
            >
              {!loading ? (
                "Send Message"
              ) : (
                <RiLoader2Line
                  size={20}
                  className="animate-spin text-white font-bold"
                />
              )}
            </button>
          </form>
        )}
      </div>

      {/* Map Embed (Responsive) */}
      <div className="relative pt-[56.25%] mt-16 rounded-xl overflow-hidden shadow-md">
        <iframe
          src="https://maps.google.com/maps?q=Lagos,%20Nigeria&t=&z=13&ie=UTF8&iwloc=&output=embed"
          className="absolute top-0 left-0 w-full h-full border-none"
          loading="lazy"
        ></iframe>
      </div>
    </Container>
  );
}
