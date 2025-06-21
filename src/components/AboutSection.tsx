"use client";
import Image from "next/image";
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import about1 from "../../public/img/about1.jpg"; // Big image
import about2 from "../../public/img/about3.jpg"; // Small 1
import about3 from "../../public/img/about4.jpg"; // Small 2

export function AboutSection() {
  return (
    <Container>
      <SectionTitle preTitle="Who We Are" title="About Urban Tailor">
        Discover our story, values, and what drives our passion for fashion and
        cultural expression.
      </SectionTitle>

      {/* Description */}
      <div className="text-center mb-10">
        <p className="text-lg leading-relaxed max-w-3xl mx-auto mb-6">
          At <span className="text-green-600 font-semibold">Urban Tailor</span>,
          fashion is more than just clothing— it&apos;s a bold expression of
          self and culture. Our mission is to create stylish, custom-fit outfits
          that blend elegance with tradition, perfect for the modern Nigerian.
        </p>
        <p className="text-base text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          From carefully chosen fabrics to expert tailoring and clean finishing,
          every outfit is crafted with care and confidence. Whether it&apos;s
          for a wedding, event, or just a statement look, Urban Tailor helps you
          feel powerful in your style.
        </p>
      </div>

      {/* Gallery Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Two stacked smaller images */}
        <div className="flex flex-col gap-6 order-2 md:order-1">
          <Image
            src={about2}
            alt="Tailoring equipment"
            className="rounded-xl shadow-md w-full h-full object-cover"
            placeholder="blur"
          />
          <Image
            src={about3}
            alt="Urban design"
            className="rounded-xl shadow-md w-full h-full object-cover"
            placeholder="blur"
          />
        </div>

        {/* Main Large Image */}
        <div className="md:col-span-2 order-1 md:order-2">
          <Image
            src={about1}
            alt="Tailor at work"
            className="rounded-2xl shadow-xl w-full h-full object-cover"
            placeholder="blur"
          />
        </div>
      </div>
    </Container>
  );
}
