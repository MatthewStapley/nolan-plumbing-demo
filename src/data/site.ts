// Everything client-specific lives here. Update this file, not the page.
// Image paths are relative to /public (e.g. "work/bathroom.webp") and are
// made base-aware automatically, so they work on GitHub Pages.

export const business = {
  name: "Nolan Plumbing",
  owner: "Sam Nolan",
  ownerFirst: "Sam",
  phoneDisplay: "07508 449527",
  phoneHref: "tel:+447508449527",
  instagram: "https://www.instagram.com/nolan.plumbing/",
  instagramHandle: "@nolan.plumbing",
  region: "South Wales",
  areas: ["Port Talbot", "Neath", "Swansea"],
  // Not shown until confirmed. Set to the international number without "+",
  // e.g. "447508449527", to show a WhatsApp link in the contact section.
  whatsapp: null as string | null,
  // Path to an original logo file in /public once supplied, e.g. "logo.svg".
  // While null, a text wordmark is used.
  logo: null as string | null,
};

export type Service = { id: string; name: string; description: string };

export const services: Service[] = [
  {
    id: "plumbing",
    name: "Plumbing repairs & installations",
    description:
      "Leaks, taps, toilets, sinks and pipework, fixed when they go wrong or fitted new.",
  },
  {
    id: "bathrooms",
    name: "Bathrooms",
    description:
      "Bathroom plumbing and installations. Tell us what you're planning and we'll talk it through.",
  },
  {
    id: "heating",
    name: "Heating",
    description:
      "Heating work around the home. Describe the job and we'll let you know if it's one we can take on.",
  },
  {
    id: "drainage",
    name: "Drainage",
    description: "Blocked or slow-running drains, inside and outside the property.",
  },
  {
    id: "jetting",
    name: "Drain jetting",
    description:
      "High-pressure water jetting to clear stubborn blockages and build-up from drain runs.",
  },
  {
    id: "cctv",
    name: "CCTV drain surveys",
    description:
      "A camera sent down the drain to see what's going on, before any digging or guesswork.",
  },
];

// Hero image. Leave null to show the placeholder artwork.
export const heroImage = null as null | { src: string; alt: string; width: number; height: number };

// Four genuine project photos. Leave src as null to show a labelled
// placeholder. Export photos as WebP at roughly 1600px on the long edge.
export type WorkItem = {
  src: string | null;
  alt: string;
  caption: string;
  width: number;
  height: number;
};

export const work: WorkItem[] = [
  { src: null, alt: "", caption: "Bathroom photo to be added", width: 1600, height: 1200 },
  { src: null, alt: "", caption: "Drainage photo to be added", width: 1200, height: 1600 },
  { src: null, alt: "", caption: "Plumbing photo to be added", width: 1600, height: 1200 },
  { src: null, alt: "", caption: "Project photo to be added", width: 1600, height: 1200 },
];

// Customer reviews. Leave quote as null to show a labelled placeholder.
// Only add genuine reviews, with the customer's permission to use their name.
export type Review = {
  quote: string | null;
  name: string | null;
  location: string | null;
};

export const reviews: Review[] = [
  { quote: null, name: null, location: null },
  { quote: null, name: null, location: null },
  { quote: null, name: null, location: null },
];
