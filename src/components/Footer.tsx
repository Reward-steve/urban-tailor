import Link from "next/link";
import { Container } from "@/components/Container";
import { Logo } from "./Logo";
import { BsFacebook } from "react-icons/bs";
import { FaInstagram, FaWhatsapp } from "react-icons/fa6";

export function Footer() {
  const navigation = ["About", "Styles", "FAQs", "Contact"];
  const legal = ["Terms of Service", "Privacy Policy", "Legal Notice"];

  return (
    <div className="relative w-full shadow-md backdrop-blur-md bg-white/50 dark:bg-black/30 border-t border-gray-400 dark:border-white/10">
      <Container>
        <div className="grid max-w-screen-xl grid-cols-1 gap-10 px-2 pt-10 mx-auto mt-5 dark:border-gray-700 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Logo />
            <p className="max-w-md mt-4 text-sm">
              Urban Tailor is where fashion meets culture. We create elegant,
              bold, and custom-fit outfits for trendsetters across Nigeria.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold mb-2">Explore</h4>
            <div className="flex flex-col space-y-2 text-sm">
              {navigation.map((item, index) => (
                <Link
                  key={index}
                  href={`/${item.toLowerCase().trim()}`}
                  className="hover:text-green-600"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold mb-2">Legal</h4>
            <div className="flex flex-col space-y-2 text-sm">
              {legal.map((item, index) => (
                <Link key={index} href="/" className="hover:text-green-600">
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* Socials */}
          <div>
            <h4 className="text-sm font-semibold mb-2">Follow Us</h4>
            <div className="flex items-center mt-3 space-x-5 text-xl text-gray-400">
              <a
                href="https://wa.me/2349012345678"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="hover:bg-green-500 bg-green-700 rounded-md" />
              </a>
              <a
                href="https://instagram.com/urbantailor_ng"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram className="hover:bg-red-500 bg-red-700 rounded-md" />
              </a>
              <a
                href="https://facebook.com/urbantailor"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <BsFacebook className="hover:bg-blue-500 bg-blue-700 rounded-md" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Credit */}
        <div className="py-5 my-5 text-sm text-center text-gray-500 dark:text-gray-400 border-t border-white/30">
          © {new Date().getFullYear()} Urban Tailor. All rights reserved. <br />
          Built by{" "}
          <a
            href="https://github.com/Reward-steve"
            target="_blank"
            rel="noopener"
            className="text-green-600 hover:underline"
          >
            Reward Stephen
          </a>
        </div>
      </Container>
    </div>
  );
}
