import React from "react";
import { Container } from "@/components/Container";
import { FaWhatsapp } from "react-icons/fa";

export const Cta = () => {
  return (
    <Container>
      <div className="flex flex-wrap items-center justify-between w-full max-w-4xl gap-5 mx-auto text-white bg-gray-900 px-7 py-7 lg:px-12 lg:py-12 lg:flex-nowrap rounded-xl">
        <div className="flex-grow text-center lg:text-left">
          <h2 className="text-2xl font-semibold lg:text-3xl">
            Let&apos;s Stitch Something Amazing
          </h2>
          <p className="mt-2 font-medium text-white text-opacity-90 lg:text-xl">
            Get your custom outfit tailored with elegance and delivered fast.
            Message Urban Tailor today to place your order.
          </p>
        </div>
        <div className="flex-shrink-0 w-full text-center lg:w-auto">
          <a
            href="https://wa.me/2349012345678?text=Hello%2C%20I'm%20interested%20in%20ordering%20a%20custom%20outfit%20from%20Urban%20Tailor."
            target="_blank"
            rel="noopener noreferrer"
            className="gap-2 items-center flex py-3 mx-auto text-lg font-medium text-center text-white bg-green-600 rounded-md px-7 lg:px-10 lg:py-5 hover:bg-green-700 transition"
          >
            <FaWhatsapp /> Order Now on WhatsApp
          </a>
        </div>
      </div>
    </Container>
  );
};
