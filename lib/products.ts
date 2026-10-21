import type { StaticImageData } from "next/image";

import basilSeedsImg from "@/public/images/products/basil-seeds.jpeg";
import beetrootImg from "@/public/images/products/beet.png";
import chiaImg from "@/public/images/products/chia.png";
import garlicImg from "@/public/images/products/garlic.png";
import moringaImg from "@/public/images/products/moringa.png";
import spinachImg from "@/public/images/products/spinach.png";

export type Product = {
  id: string;
  name: string;
  category: string;
  img: StaticImageData;
  desc: string;
  contain?: boolean;
};

export const PRODUCTS: Product[] = [
  {
    id: "moringa",
    name: "Moringa Powder",
    category: "Superfoods",
    img: moringaImg,
    desc: "Nutrient-dense organic moringa leaf powder, harvested at dawn and gently air-dried.",
  },
  {
    id: "chia",
    name: "Chia Seeds",
    category: "Pantry",
    img: chiaImg,
    desc: "Premium raw organic chia seeds, a plant-powered source of omega-3 and fibre.",
  },
  {
    id: "spinach",
    name: "Spinach Powder",
    category: "Superfoods",
    img: spinachImg,
    desc: "Iron-rich organic spinach, gently dried and milled, vivid green goodness for smoothies and rotis.",
  },
  {
    id: "basil-seeds",
    name: "Basil Seeds",
    category: "Superfoods",
    img: basilSeedsImg,
    desc: "Cooling sabja seeds that bloom into delicate pearls, fibre-rich, made for sherbets and falooda.",
  },
  {
    id: "beetroot",
    name: "Beetroot Powder",
    category: "Pantry",
    img: beetrootImg,
    desc: "Earthy-sweet organic beetroot, slow-dried and powdered, natural colour and stamina for juices and baking.",
  },
  {
    id: "garlic",
    name: "Garlic Powder",
    category: "Herbs & Spices",
    img: garlicImg,
    desc: "Fine organic garlic powder delivering robust, savoury flavour to any dish.",
    contain: true,
  },
];
