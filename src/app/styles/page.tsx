import StyleSection from "@/components/StyleSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Styles - Urban Tailor",
  description: "Explore our collection of custom-made styles for every taste.",
};

export default function StylesPage() {
  return (
    <>
      <StyleSection />
    </>
  );
}
