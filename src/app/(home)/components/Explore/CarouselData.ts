export interface CarouselItem {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
}

export const carouselData: CarouselItem[] = [
  {
    id: 1,
    title: "A Hidden Sanctuary",
    subtitle: "A Hidden Sanctuary",
    description:
      "A secluded sanctuary where tranquility meets nature’s beauty, offering an unparalleled escape for rest and rejuvenation.",
    image:
      "/explore1.png",
  },
  {
    id: 2,
    title: "A pure vegetarian space",
    subtitle: "A pure vegetarian space",
    description:
      "Explore a ‘green cuisine’ dining experience, serving wholesome, vegetarian cuisine crafted to nourish both body and soul.",
    image:
      "/explore2.png",
  },
  {
    id: 3,
    title: "Family friendly space",
    subtitle: "Family friendly space",
    description:
      "We offer a family-friendly space where every member can relax, play, and create unforgettable memories together.",
    image:
      "/explore3.png",
  },
  {
    id: 4,
    title: "Holistic & Spiritual wellness",
    subtitle: "Holistic & Spiritual wellness",
    description:
      "We combine the ancient wisdom of naturopathy & panchkarma with modern luxury & spirituality  to detoxify your body, calm your mind, and elevate your spirit.",
    image:
      "/explore4.png",
  },
  {
    id: 5,
    title: "Adventure sanctuary",
    subtitle: "Adventure sanctuary",
    description:
      "From an interactive kids play area to adventure treks and activities like burma bridge & archery, we have every indoor and outdoor activity you could possibly enjoy!",
    image:
      "/explore5.png",
  },
];
