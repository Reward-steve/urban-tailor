"use client";

import Image from "next/image";
import { Container } from "@/components/Container";
import heroImg from "../../public/img/urban.jpg";
import { FaWhatsapp } from "react-icons/fa";

export const Hero = () => {
  return (
    <>
      <Container className="flex flex-wrap items-center h-screen">
        {/* Left Text Section */}
        <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
          <p className="text-green-600 font-semibold uppercase mb-2 text-sm tracking-wide">
            Urban Tailor
          </p>
          <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-5xl xl:text-6xl dark:text-white">
            Your Style, Our Passion
          </h1>
          <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
            Bespoke fashion for kings and queens. Get custom designs tailored to
            fit your personality and presence.
          </p>

          <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-3 sm:space-y-0 mt-4">
            <a
              href="https://wa.me/2349012345678"
              target="_blank"
              rel="noopener noreferrer"
              className="py-4 px-5 rounded-md bg-green-500 hover:bg-green-600 text-white text-lg transition-transform hover:scale-105 flex items-center gap-2"
            >
              <FaWhatsapp /> Order Now on WhatsApp
            </a>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <Image
            src={heroImg}
            alt="Urban Tailor fashion showcase"
            className="w-full max-w-md rounded-xl object-cover shadow-xl"
            loading="eager"
            placeholder="blur"
          />
        </div>
      </Container>
      <div className="text-center mt-8 text-gray-700 dark:text-white">
        Trusted by <span className="text-green-600 font-semibold">2,000+</span>{" "}
        satisfied customers & counting
      </div>
    </>
  );
};
