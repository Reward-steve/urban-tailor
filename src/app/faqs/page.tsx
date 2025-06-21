import { FaqSection } from "@/components/FaqSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQs - Urban Tailor",
  description:
    "Answers to common questions about ordering, returns, and services from Urban Tailor.",
};

export default function FaqPage() {
  return <FaqSection />;
}
