/**
 * Central catalog of North End Construction projects.
 * Swap `hue` for real image asset URLs when photography is delivered.
 */
import img49 from "@/assets/projects/14-29-49.jpg.asset.json";
import img50 from "@/assets/projects/14-29-50.jpg.asset.json";
import img53 from "@/assets/projects/14-29-53.jpg.asset.json";
import img54 from "@/assets/projects/14-29-54.jpg.asset.json";
import img54b from "@/assets/projects/14-29-54_1.jpg.asset.json";
import img55 from "@/assets/projects/14-29-55.jpg.asset.json";
import img55b from "@/assets/projects/14-29-55_1.jpg.asset.json";
import img51 from "@/assets/projects/14.29.51.jpg.asset.json";
import img51b from "@/assets/projects/14.29.51_1.jpg.asset.json";
import img52 from "@/assets/projects/14.29.52.jpg.asset.json";
import img52b from "@/assets/projects/14.29.52_1.jpg.asset.json";

export type ProjectStatus = "ongoing" | "completed" | "upcoming";

export type Amenity =
  | "Rooftop Pool"
  | "Fitness Studio"
  | "Basement Parking"
  | "24/7 Security"
  | "Backup Power"
  | "Community Lounge"
  | "Kids Play Zone"
  | "Landscaped Gardens"
  | "High-Speed Lifts"
  | "Party Kitchen";

export type Unit = {
  id: string;
  name: string;
  bedrooms: number;
  bathrooms: number;
  sizeSqft: number;
  facing: string;
  priceBDT: number;
  available: number;
  floorPlanHue: number;
};

export type NearbyPlace = {
  name: string;
  category: "School" | "Hospital" | "Market" | "Transport" | "Park";
  distanceKm: number;
};

export type Project = {
  slug: string;
  name: string;
  nameBn: string;
  tagline: string;
  status: ProjectStatus;
  type: "Residential" | "Commercial" | "Mixed-Use";
  location: string;
  area: string;
  city: "Rangpur";
  coords: { lat: number; lng: number };
  heroHue: number;
  image?: string;
  gallery?: string[];
  galleryHues: number[];
  bedroomsAvailable: number[];
  minPriceBDT: number;
  maxPriceBDT: number;
  minSizeSqft: number;
  maxSizeSqft: number;
  totalUnits: number;
  storeys: number;
  handoverDate: string; // ISO
  progress: number; // 0..100
  amenities: Amenity[];
  units: Unit[];
  nearby: NearbyPlace[];
  featured?: boolean;
};

const bd = (n: number) => n;

export const projects: Project[] = [
  {
    slug: "north-end-horizon",
    name: "North End Horizon",
    nameBn: "নর্থ এন্ড হরাইজন",
    tagline: "Sky-height residences overlooking central Rangpur.",
    status: "ongoing",
    type: "Residential",
    location: "Medical More",
    area: "Central Rangpur",
    city: "Rangpur",
    coords: { lat: 25.7439, lng: 89.2752 },
    heroHue: 265,
    image: img49.url,
    gallery: [img49.url, img50.url, img53.url],
    galleryHues: [265, 220, 82, 155, 265, 220],
    bedroomsAvailable: [3, 4],
    minPriceBDT: bd(9_500_000),
    maxPriceBDT: bd(14_800_000),
    minSizeSqft: 1650,
    maxSizeSqft: 2400,
    totalUnits: 48,
    storeys: 14,
    handoverDate: "2026-12-01",
    progress: 72,
    amenities: [
      "Rooftop Pool",
      "Fitness Studio",
      "Basement Parking",
      "24/7 Security",
      "Backup Power",
      "High-Speed Lifts",
    ],
    units: [
      { id: "H-3A", name: "Sky Home 3A", bedrooms: 3, bathrooms: 3, sizeSqft: 1650, facing: "South-East", priceBDT: 9_500_000, available: 4, floorPlanHue: 265 },
      { id: "H-3B", name: "Sky Home 3B", bedrooms: 3, bathrooms: 3, sizeSqft: 1850, facing: "South-West", priceBDT: 10_800_000, available: 3, floorPlanHue: 220 },
      { id: "H-4A", name: "Signature 4A", bedrooms: 4, bathrooms: 4, sizeSqft: 2400, facing: "Corner", priceBDT: 14_800_000, available: 2, floorPlanHue: 82 },
    ],
    nearby: [
      { name: "Rangpur Medical College", category: "Hospital", distanceKm: 0.4 },
      { name: "Cantonment Public School", category: "School", distanceKm: 1.2 },
      { name: "Central Bus Terminal", category: "Transport", distanceKm: 2.1 },
      { name: "Shapla Chattar Market", category: "Market", distanceKm: 0.9 },
      { name: "Town Hall Park", category: "Park", distanceKm: 1.5 },
    ],
    featured: true,
  },
  {
    slug: "gold-crest-residences",
    name: "Gold Crest Residences",
    nameBn: "গোল্ড ক্রেস্ট রেসিডেন্সেস",
    tagline: "Boutique living in the heart of Jail Road corridor.",
    status: "ongoing",
    type: "Residential",
    location: "Jail Road",
    area: "East Rangpur",
    city: "Rangpur",
    coords: { lat: 25.7370, lng: 89.2810 },
    heroHue: 82,
    image: img50.url,
    gallery: [img50.url, img54.url, img54b.url],
    galleryHues: [82, 40, 220, 82, 40],
    bedroomsAvailable: [2, 3],
    minPriceBDT: 6_800_000,
    maxPriceBDT: 11_200_000,
    minSizeSqft: 1250,
    maxSizeSqft: 1900,
    totalUnits: 36,
    storeys: 10,
    handoverDate: "2027-06-01",
    progress: 45,
    amenities: ["Fitness Studio", "Basement Parking", "24/7 Security", "Backup Power", "Community Lounge"],
    units: [
      { id: "G-2A", name: "Classic 2A", bedrooms: 2, bathrooms: 2, sizeSqft: 1250, facing: "East", priceBDT: 6_800_000, available: 6, floorPlanHue: 82 },
      { id: "G-3A", name: "Premium 3A", bedrooms: 3, bathrooms: 3, sizeSqft: 1900, facing: "South", priceBDT: 11_200_000, available: 4, floorPlanHue: 40 },
    ],
    nearby: [
      { name: "Government College", category: "School", distanceKm: 0.6 },
      { name: "Rangpur Prime Hospital", category: "Hospital", distanceKm: 1.0 },
      { name: "Jail Road Bazar", category: "Market", distanceKm: 0.3 },
    ],
    featured: true,
  },
  {
    slug: "greenline-terrace",
    name: "Greenline Terrace",
    nameBn: "গ্রীনলাইন টেরাস",
    tagline: "Nature-forward homes along the Betpotti green belt.",
    status: "ongoing",
    type: "Residential",
    location: "Betpotti",
    area: "North Rangpur",
    city: "Rangpur",
    coords: { lat: 25.7550, lng: 89.2640 },
    heroHue: 155,
    image: img53.url,
    gallery: [img53.url, img55.url, img55b.url],
    galleryHues: [155, 220, 82, 155],
    bedroomsAvailable: [2, 3],
    minPriceBDT: 5_900_000,
    maxPriceBDT: 9_600_000,
    minSizeSqft: 1200,
    maxSizeSqft: 1800,
    totalUnits: 24,
    storeys: 8,
    handoverDate: "2027-03-01",
    progress: 60,
    amenities: ["Landscaped Gardens", "Basement Parking", "24/7 Security", "Kids Play Zone", "Backup Power"],
    units: [
      { id: "L-2A", name: "Garden 2A", bedrooms: 2, bathrooms: 2, sizeSqft: 1200, facing: "Garden", priceBDT: 5_900_000, available: 3, floorPlanHue: 155 },
      { id: "L-3A", name: "Terrace 3A", bedrooms: 3, bathrooms: 3, sizeSqft: 1800, facing: "South-East", priceBDT: 9_600_000, available: 5, floorPlanHue: 220 },
    ],
    nearby: [
      { name: "Betpotti Green Park", category: "Park", distanceKm: 0.2 },
      { name: "Cambrian School", category: "School", distanceKm: 0.8 },
      { name: "Betpotti Local Market", category: "Market", distanceKm: 0.4 },
    ],
  },
  {
    slug: "northern-boulevard",
    name: "Northern Boulevard",
    nameBn: "নর্দার্ন বুলেভার্ড",
    tagline: "Mixed-use tower with retail arcade and premium homes.",
    status: "ongoing",
    type: "Mixed-Use",
    location: "Modern More",
    area: "West Rangpur",
    city: "Rangpur",
    coords: { lat: 25.7300, lng: 89.2500 },
    heroHue: 220,
    image: img54.url,
    gallery: [img54.url, img54b.url, img49.url],
    galleryHues: [220, 265, 82, 155, 220],
    bedroomsAvailable: [2, 3, 4],
    minPriceBDT: 7_500_000,
    maxPriceBDT: 18_000_000,
    minSizeSqft: 1300,
    maxSizeSqft: 2600,
    totalUnits: 60,
    storeys: 16,
    handoverDate: "2027-10-01",
    progress: 30,
    amenities: ["Rooftop Pool", "Fitness Studio", "Basement Parking", "24/7 Security", "Backup Power", "Community Lounge", "High-Speed Lifts"],
    units: [
      { id: "B-2A", name: "Signature 2A", bedrooms: 2, bathrooms: 2, sizeSqft: 1300, facing: "East", priceBDT: 7_500_000, available: 8, floorPlanHue: 220 },
      { id: "B-3A", name: "Signature 3A", bedrooms: 3, bathrooms: 3, sizeSqft: 1900, facing: "South", priceBDT: 12_000_000, available: 6, floorPlanHue: 265 },
      { id: "B-4A", name: "Penthouse 4A", bedrooms: 4, bathrooms: 4, sizeSqft: 2600, facing: "Corner", priceBDT: 18_000_000, available: 2, floorPlanHue: 82 },
    ],
    nearby: [
      { name: "Modern Public School", category: "School", distanceKm: 0.5 },
      { name: "City Hospital", category: "Hospital", distanceKm: 1.3 },
      { name: "Modern Market", category: "Market", distanceKm: 0.4 },
    ],
  },
  {
    slug: "north-end-prime",
    name: "North End Prime",
    nameBn: "নর্থ এন্ড প্রাইম",
    tagline: "Fully handed over — the debut signature address.",
    status: "completed",
    type: "Residential",
    location: "Central Road",
    area: "Central Rangpur",
    city: "Rangpur",
    coords: { lat: 25.7420, lng: 89.2700 },
    heroHue: 265,
    image: img55.url,
    gallery: [img55.url, img55b.url, img51.url],
    galleryHues: [265, 220, 82],
    bedroomsAvailable: [3],
    minPriceBDT: 11_500_000,
    maxPriceBDT: 13_500_000,
    minSizeSqft: 1800,
    maxSizeSqft: 2100,
    totalUnits: 32,
    storeys: 12,
    handoverDate: "2023-11-01",
    progress: 100,
    amenities: ["Rooftop Pool", "Fitness Studio", "24/7 Security", "High-Speed Lifts"],
    units: [
      { id: "P-3A", name: "Prime 3A", bedrooms: 3, bathrooms: 3, sizeSqft: 1800, facing: "South", priceBDT: 11_500_000, available: 0, floorPlanHue: 265 },
    ],
    nearby: [
      { name: "Central Road School", category: "School", distanceKm: 0.4 },
      { name: "Kachari Bazar", category: "Market", distanceKm: 0.6 },
    ],
  },
  {
    slug: "gold-leaf-tower",
    name: "Gold Leaf Tower",
    nameBn: "গোল্ড লিফ টাওয়ার",
    tagline: "Commercial landmark on Grand Hotel Road.",
    status: "completed",
    type: "Commercial",
    location: "Grand Hotel Road",
    area: "Central Rangpur",
    city: "Rangpur",
    coords: { lat: 25.7410, lng: 89.2705 },
    heroHue: 82,
    image: img51.url,
    gallery: [img51.url, img51b.url, img52.url],
    galleryHues: [82, 40, 220],
    bedroomsAvailable: [],
    minPriceBDT: 4_500_000,
    maxPriceBDT: 12_000_000,
    minSizeSqft: 500,
    maxSizeSqft: 1400,
    totalUnits: 40,
    storeys: 8,
    handoverDate: "2022-05-01",
    progress: 100,
    amenities: ["Basement Parking", "24/7 Security", "Backup Power", "High-Speed Lifts"],
    units: [],
    nearby: [
      { name: "Grand Hotel Road Business Hub", category: "Market", distanceKm: 0.1 },
    ],
  },
  {
    slug: "emerald-court",
    name: "Emerald Court",
    nameBn: "ইমারেল্ড কোর্ট",
    tagline: "Family-first residences by Kachari Bazar.",
    status: "completed",
    type: "Residential",
    location: "Kachari Bazar",
    area: "Central Rangpur",
    city: "Rangpur",
    coords: { lat: 25.7380, lng: 89.2755 },
    heroHue: 155,
    image: img52.url,
    gallery: [img52.url, img52b.url, img55.url],
    galleryHues: [155, 82, 220],
    bedroomsAvailable: [3],
    minPriceBDT: 8_400_000,
    maxPriceBDT: 10_200_000,
    minSizeSqft: 1500,
    maxSizeSqft: 1800,
    totalUnits: 24,
    storeys: 8,
    handoverDate: "2021-08-01",
    progress: 100,
    amenities: ["Landscaped Gardens", "24/7 Security", "Kids Play Zone"],
    units: [],
    nearby: [
      { name: "Kachari Bazar School", category: "School", distanceKm: 0.5 },
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function formatBDT(n: number): string {
  if (n >= 10_000_000) return `৳ ${(n / 10_000_000).toFixed(2)} Cr`;
  if (n >= 100_000) return `৳ ${(n / 100_000).toFixed(2)} Lakh`;
  return `৳ ${n.toLocaleString("en-IN")}`;
}

export const projectAreas = Array.from(new Set(projects.map((p) => p.area)));
export const projectLocations = Array.from(new Set(projects.map((p) => p.location)));