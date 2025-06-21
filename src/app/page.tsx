import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
import { Video } from "@/components/Video";
import { Testimonials } from "@/components/Testimonials";
import { Cta } from "@/components/Cta";

import { benefitOne, benefitTwo } from "@/components/data";

export default function Home() {
  return (
    <Container>
      <Hero />

      <SectionTitle
        preTitle="About Urban Tailor"
        title="Your Style, Our Passion"
      >
        Urban Tailor is a modern fashion brand delivering elegant, custom-made
        outfits for bold men and women. We blend culture, creativity, and
        confidence in every stitch.
      </SectionTitle>

      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />

      <SectionTitle
        preTitle="Behind the Stitch"
        title="See Urban Tailor in Action"
      >
        Take a look inside the craftsmanship of fashion—from concept to
        collection. This is where fabric meets artistry.
      </SectionTitle>

      <Video videoId="MG3YLIPYAIk" />

      <SectionTitle
        preTitle="Happy Clients"
        title="What Our Customers Are Saying"
      >
        Hear from real clients who trust Urban Tailor for their events,
        weddings, and everyday standout styles.
      </SectionTitle>

      <Testimonials />

      <Cta />
    </Container>
  );
}
