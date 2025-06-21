import ContactSection from "@/components/ContactSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact - Urban Tailor",
  description:
    "Ways of getting in touch with, messaging and contacting Urban Tailor",
};

export default function ContactPage() {
  return <ContactSection />;
}
