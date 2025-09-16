import { blogsData } from "./[slug]/blogsData";

export const blogPageData = {
  bannerData: {
    title: "Our Blogs",
  },
  cards: blogsData.map((blog) => ({
    src: blog.image,
    title: blog.title,
    description: blog.description,
    date: blog.date,
    link: { href: `/blog/${blog.slug}`, label: "Read More" },
  })),
  addCardData: {
    title: "Lorem Ipsum Dolor Sit Amet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad.",
    link: {
      label: "Book Now",
      href: "",
    },
  },
};
