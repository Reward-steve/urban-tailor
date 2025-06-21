import { Metadata } from "next";
import { AboutSection } from "@/components/AboutSection";

export const metadata: Metadata = {
  title: "About - Urban Tailor",
  description:
    "Discover the story, vision, and craft behind Urban Tailor's fashion-forward elegance.",
};

export default function AboutPage() {
  return (
    <>
      <AboutSection />
    </>
  );
}
