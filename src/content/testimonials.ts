export interface Testimonial {
  quote: string;
  author?: string;
  role?: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "One of the best developers -- great full-stack, great communication, works very hard, and has a terrific attitude! I would happily work with Wuhibe in the future!",
    author: "Vinay Gode",
    role: "Founder | BundleUp, Couplespal",
  },
  {
    quote:
      "Wuhibe led our backend development for nearly a year, and I would happily continue to work with him! Especially valuable were his high attention to detail, ability and willingness to go deep on DevOps implementations, and how well he worked with the full team. I hope to work with Wuhibe again!",
    author: "Joe Contini",
    role: "Founder | AncestryPass",
  },
  {
    quote:
      "Super reliable developer who did a fantastic job on the backend. From time to time he also did React Frontend, which makes him a flexible support for us!",
    author: "Follow Flash",
  },
];
