import { FlaskRound, Wrench, Zap, BugOff, SprayCan, Cog } from "lucide-react";

export const services = [
  {
    id: "pest-control",
    icon: BugOff,
    title: "Pest Control",
    description: "Comprehensive pest management solutions",
    details: [
      "Residential pest control for homes and apartments",
      "Commercial pest management for offices and retail",
      "Industrial facility pest control",
      "Eco-friendly and non-toxic treatments",
      "Preventive pest management programs",
      "Emergency pest control services",
    ],
  },
  {
    id: "fumigation",
    icon: SprayCan,
    title: "Fumigation",
    description: "Professional fumigation and disinfection services",
    details: [
      "Full-scale fumigation for buildings and structures",
      "Termite fumigation and treatment",
      "Bed bug elimination services",
      "Cockroach and rodent fumigation",
      "Post-construction fumigation",
      "Regular maintenance fumigation programs",
    ],
  },
  {
    id: "maintenance",
    icon: Cog,
    title: "Facility Maintenance",
    description: "Complete facility upkeep and management",
    details: [
      "General facility cleaning and janitorial services",
      "HVAC system maintenance and inspection",
      "Plumbing repairs and maintenance",
      "Electrical system maintenance",
      "Preventive maintenance scheduling",
      "Emergency maintenance support",
    ],
  },
  {
    id: "chemical-supply",
    icon: FlaskRound,
    title: "Chemical & Safety Supply",
    description: "Quality chemicals and safety equipment",
    details: [
      "Industrial-grade chemicals for facilities",
      "Safety equipment and protective gear",
      "Cleaning supplies and disinfectants",
      "Personal protective equipment (PPE)",
      "Bulk supply options with competitive pricing",
      "Consultation on proper usage and safety",
    ],
  },
];
