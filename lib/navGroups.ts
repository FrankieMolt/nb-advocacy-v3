// Unified navigation groups — used by both desktop and mobile nav
export interface NavLink {
  href: string;
  label: string;
  accent?: boolean;
}

export interface NavGroup {
  label: string;
  links: NavLink[];
}

export const navGroups: NavGroup[] = [
  {
    label: "Issues",
    links: [
      { href: "/healthcare", label: "Healthcare" },
      { href: "/housing", label: "Housing" },
      { href: "/education", label: "Education" },
      { href: "/child-poverty", label: "Child Poverty" },
      { href: "/mental-health", label: "Mental Health" },
      { href: "/seniors", label: "Seniors" },
    ],
  },
  {
    label: "Power",
    links: [
      { href: "/economy", label: "Economy" },
      { href: "/oligarchy", label: "Oligarchy" },
      { href: "/corruption", label: "Corruption" },
      { href: "/intimidation", label: "Intimidation" },
    ],
  },
  {
    label: "Environment",
    links: [
      { href: "/environment", label: "Environment" },
      { href: "/climate-energy", label: "Climate & Energy" },
      { href: "/fisheries", label: "Fisheries" },
      { href: "/indigenous-rights", label: "Indigenous Rights" },
    ],
  },
  {
    label: "Crisis",
    links: [
      { href: "/budget-2026", label: "Budget 2026-27" },
      { href: "/tax-fairness", label: "Tax Fairness" },
      { href: "/rural-healthcare", label: "Rural Healthcare" },
      { href: "/infrastructure", label: "Infrastructure" },
    ],
  },
  {
    label: "Resources",
    links: [
      { href: "/articles", label: "Articles" },
      { href: "/sources", label: "Sources" },
      { href: "/faq", label: "FAQ" },
      { href: "/about", label: "About" },
      { href: "/contact", label: "Contact" },
    ],
  },
];

export const takeActionLink: NavLink = {
  href: "/take-action",
  label: "Take Action",
  accent: true,
};