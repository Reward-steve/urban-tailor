import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../../public/img/benefit-one.png";
import benefitTwoImg from "../../public/img/creative.png";

const benefitOne = {
  title: "Why Clients Choose Urban Tailor",
  desc: "We make fashion personal. Every outfit is designed to fit your body, your style, and your story.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Perfect Fit, Every Time",
      desc: "All outfits are tailor-made to your exact measurements — no generic sizes here.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Fast Turnaround",
      desc: "We deliver within days, without compromising style or quality.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Trusted by Dozens",
      desc: "Satisfied clients across weddings, parties, and everyday wear.",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Designed for Modern Wearers",
  desc: "Urban Tailor blends tradition and trend. We create bold, beautiful outfits that stand out anywhere.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Seamless Mobile Experience",
      desc: "Order, preview designs, and chat — all from your phone.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Built on Creativity",
      desc: "Each design is crafted with a mix of culture, trend, and your personal taste.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Wear Anytime, Anywhere",
      desc: "From ceremonies to street style — our outfits are made to turn heads.",
      icon: <SunIcon />,
    },
  ],
};

export { benefitOne, benefitTwo };

export const faqdata = [
  {
    question: "How do I place an order?",
    answer:
      "You can place an order directly through WhatsApp by clicking the 'Order Now' button on the site. We’ll guide you through measurements, style selection, and payment.",
  },
  {
    question: "Do you offer delivery services?",
    answer:
      "Yes, we deliver nationwide across Nigeria. Delivery fees depend on your location and are confirmed during the order process.",
  },
  {
    question: "How long does it take to complete an outfit?",
    answer:
      "Our standard turnaround time is 3 to 7 working days depending on the outfit type and order volume. Express orders are also available.",
  },
  {
    question: "Can I request a custom design?",
    answer:
      "Absolutely! We specialize in custom styles. Just send us your inspiration or describe what you want, and we’ll bring it to life.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept bank transfers, mobile payments, and POS. Full or part payment is required before production starts.",
  },
  {
    question: "Do you accept returns or offer refunds?",
    answer:
      "Due to the custom nature of our designs, we do not offer refunds. However, we’re happy to make reasonable adjustments if something doesn’t fit right.",
  },
];
export const stylesData = [
  // Female Dresses
  {
    title: "Elegant Wrap Dress",
    image: "/img/female4.jpg",
    description: "Graceful, feminine, and tailored to flatter.",
    category: "Female Dress",
  },
  {
    title: "Bold Ankara Gown",
    image: "/img/female5.jpg",
    description: "Vibrant prints blended with modern silhouettes.",
    category: "Female Dress",
  },
  {
    title: "Chic Mermaid Tail",
    image: "/img/female1.jpg",
    description: "Figure-hugging elegance with dramatic flair.",
    category: "Female Dress",
  },

  // Women on Suit
  {
    title: "Corporate Lady Suit",
    image: "/img/fesuit1.jpg",
    description: "Empowering, confident, and clean cut for the modern woman.",
    category: "Women on suit",
  },
  {
    title: "Checkered Blazer Set",
    image: "/img/fesuit2.jpg",
    description: "Smart elegance with a touch of flair for formal settings.",
    category: "Women on suit",
  },
  {
    title: "White Power Suit",
    image: "/img/fesuit.jpg",
    description: "Minimal yet commanding. Designed for impact.",
    category: "Women on suit",
  },

  // Men on Suit
  {
    title: "Classic 2-Piece Suit",
    image: "/img/suit.jpg",
    description: "A timeless fit for business or formal settings.",
    category: "Men on Suit",
  },
  {
    title: "Double-Breasted Charcoal",
    image: "/img/suit1.jpg",
    description: "Sharp cuts and strong shoulders for a powerful look.",
    category: "Men on Suit",
  },
  {
    title: "Wine Slim Fit",
    image: "/img/suit2.jpg",
    description: "Stand out without shouting. Sleek and bold.",
    category: "Men on Suit",
  },

  // Casual Urban Dress
  {
    title: "Urban Smart Casual",
    image: "/img/casual1.jpg",
    description: "Effortlessly clean, cool, and city-ready.",
    category: "Casual Urban Dress",
  },
  {
    title: "Weekend Polo Vibe",
    image: "/img/casual2.jpg",
    description: "Relaxed but intentional. Perfect for daytime hangs.",
    category: "Casual Urban Dress",
  },
  {
    title: "Denim x Native",
    image: "/img/casual3.jpg",
    description: "Blend of Western edge and local pride.",
    category: "Casual Urban Dress",
  },

  // Native
  {
    title: "Royal Agbada",
    image: "/img/agbada.jpg",
    description: "Command presence with king-level agbada drip.",
    category: "Native",
  },
  {
    title: "Senator Style",
    image: "/img/senator1.jpg",
    description: "Sharp, subtle, and rooted in tradition.",
    category: "Native",
  },
  {
    title: "Casual Native",
    image: "/img/senator2.jpg",
    description: "Stay grounded and stylish in everyday native.",
    category: "Native",
  },
];
