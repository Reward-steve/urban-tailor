"use client";

import Image from "next/image";
import React from "react";
import { Container } from "@/components/Container";
import { motion } from "framer-motion";

interface BenefitsProps {
  imgPos?: "left" | "right";
  data: {
    imgPos?: "left" | "right";
    title: string;
    desc: string;
    image: any;
    bullets: {
      title: string;
      desc: string;
      icon: React.ReactNode;
    }[];
  };
}

export const Benefits = ({ imgPos = "left", data }: BenefitsProps) => {
  return (
    <Container className="flex flex-wrap mb-20 lg:gap-10 lg:flex-nowrap">
      {/* Image Section */}
      <motion.div
        className={`flex items-center justify-center w-full lg:w-1/2 ${
          imgPos === "right" ? "lg:order-1" : ""
        }`}
        initial={{ opacity: 0, x: imgPos === "right" ? 100 : -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div>
          <Image
            src={data.image}
            width={521}
            height={521}
            alt="Benefits"
            className="object-cover rounded-xl"
            placeholder="blur"
            blurDataURL={data.image.src}
          />
        </div>
      </motion.div>

      {/* Text Section */}
      <motion.div
        className={`flex flex-wrap items-center w-full lg:w-1/2 ${
          imgPos === "right" ? "lg:justify-end" : ""
        }`}
        initial={{ opacity: 0, x: imgPos === "right" ? -100 : 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div>
          <div className="flex flex-col w-full mt-4">
            <h3 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
              {data.title}
            </h3>
            <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
              {data.desc}
            </p>
          </div>

          <div className="w-full mt-5">
            {data.bullets.map((item, index) => (
              <Benefit key={index} title={item.title} icon={item.icon}>
                {item.desc}
              </Benefit>
            ))}
          </div>
        </div>
      </motion.div>
    </Container>
  );
};

function Benefit({
  title,
  icon,
  children,
}: {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start mt-8 space-x-3">
      <div className="flex items-center justify-center flex-shrink-0 mt-1 bg-green-500 rounded-md w-11 h-11">
        {React.cloneElement(icon as React.ReactElement, {
          className: "w-6 h-6 text-green-50",
        })}
      </div>
      <div>
        <h4 className="text-xl font-medium text-gray-800 dark:text-gray-200">
          {title}
        </h4>
        <p className="mt-1 text-gray-500 dark:text-gray-400">{children}</p>
      </div>
    </div>
  );
}
