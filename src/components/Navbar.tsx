"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import ThemeChanger from "./DarkSwitch";
import { Disclosure } from "@headlessui/react";
import { Logo } from "./Logo";
import { usePathname } from "next/navigation";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";

export const Navbar = () => {
  const navigation = ["About", "Styles", "FAQs", "Contact"];
  const pathname = usePathname();

  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 100 || currentScrollY < lastScrollY) {
        setShowNav(true);
      } else {
        setShowNav(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={`w-full z-50 transition-transform duration-300 py-8 xl:px-0 px-2 ${
        showNav ? "translate-y-0" : "-translate-y-full"
      } sticky top-0 backdrop-blur-md bg-white/50 dark:bg-black/30 border-b border-white/30 dark:border-white/10 shadow-md`}
    >
      <nav className="container relative flex flex-wrap items-center justify-between mx-auto lg:justify-between">
        <Logo />

        <div className="flex items-center gap-3 ml-auto lg:order-2">
          <ThemeChanger />
          <Link
            href="https://wa.me/2349169354424"
            target="_blank"
            className="hidden px-6 py-2 text-white bg-green-600 rounded-md lg:inline-block"
          >
            Order Now
          </Link>
        </div>

        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button
                      aria-label="Toggle Menu"
                      className="px-1 py-1 ml-2 text-gray-500 rounded-md lg:hidden hover:text-green-500 focus:text-green-500 focus:bg-green-100 focus:outline-none dark:text-gray-300 dark:focus:bg-trueGray-700"
                    >
                      {open ? (
                        <HiX className="w-6 h-6" />
                      ) : (
                        <HiOutlineMenuAlt3 className="w-6 h-6" />
                      )}
                    </Disclosure.Button>
                    <Disclosure.Panel className="w-full mt-5 lg:hidden">
                      <div className="flex flex-col items-center space-y-2">
                        {navigation.map((item, index) => (
                          <Link
                            key={index}
                            href={`/${item.toLowerCase()}`}
                            className={`w-full py-2 text-gray-700 dark:text-gray-200 rounded hover:text-green-600 ${
                              pathname === `/${item.toLowerCase()}` ||
                              pathname === "/"
                                ? "font-bold text-green-600"
                                : ""
                            }`}
                          >
                            {item}
                          </Link>
                        ))}
                        <Link
                          href="https://wa.me/2349169354424"
                          target="_blank"
                          className="w-full px-6 py-2 text-center text-white bg-green-600 rounded-md"
                        >
                          Order Now
                        </Link>
                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </>
          )}
        </Disclosure>

        <div className="hidden lg:flex lg:items-center">
          <ul className="flex gap-6 ml-10">
            {navigation.map((menu, index) => (
              <li key={index}>
                <Link
                  href={`/${menu === "Home" ? "" : menu.toLowerCase()}`}
                  className={`text-lg font-medium transition-all ${
                    pathname === `/${menu.toLowerCase()}` ||
                    (menu === "Home" && pathname === "/")
                      ? "text-green-600"
                      : "text-gray-800 dark:text-gray-300 hover:text-green-600"
                  }`}
                >
                  {menu}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};
