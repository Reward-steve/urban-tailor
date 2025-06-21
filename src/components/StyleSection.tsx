"use client";
import React, { useState } from "react";
import { Container } from "@/components/Container";
import { StyleCard } from "@/components/StyleCard";
import { StyleModal } from "@/components/Modal";
import { stylesData } from "@/components/data";
import { SectionTitle } from "@/components/SectionTitle";

export default function StyleSection() {
  const [selectedStyle, setSelectedStyle] = useState<
    null | (typeof stylesData)[0]
  >(null);

  const categories = [
    "Female Dress",
    "Women on suit",
    "Men on Suit",
    "Casual Urban Dress",
    "Native",
  ];

  const handleCardClick = (style: (typeof stylesData)[0]) => {
    setSelectedStyle(style);
  };

  const renderStyleSection = (title: string) => {
    const filtered = stylesData.filter((item) => item.category === title);
    if (!filtered.length) return null;

    return (
      <section className="mb-16" key={title}>
        <h2 className="text-2xl font-bold text-center mb-4">{title}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((style, index) => (
            <StyleCard
              key={index}
              title={style.title}
              image={style.image}
              description={style.description}
              onClick={() => handleCardClick(style)}
            />
          ))}
        </div>
      </section>
    );
  };

  return (
    <Container>
      <SectionTitle preTitle="Signature Looks" title="Explore Our Styles">
        From elegant native wears to urban chic and formal suits, our styles
        reflect confidence and tradition.
      </SectionTitle>
      {categories.map(renderStyleSection)}

      {/* Modal for Viewing Full Style */}
      <StyleModal
        isOpen={!!selectedStyle}
        onClose={() => setSelectedStyle(null)}
        style={selectedStyle}
      />
    </Container>
  );
}
