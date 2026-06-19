import type { Site, Page, Links, Socials } from "@types"

// Global
export const SITE: Site = {
  TITLE: "Christoph Lange",
  DESCRIPTION: "Mechatronik Student | Robotik | Automatisierung | Softwareentwicklung",
  AUTHOR: "Chris Lange",
}

// Work Page
export const WORK: Page = {
  TITLE: "Erfahrung",
  DESCRIPTION: "Studium, Projekte und praktische Erfahrungen.",
}

// Blog Page
export const BLOG: Page = {
  TITLE: "Artikel",
  DESCRIPTION: "Gedanken, Tutorials und technische Beiträge.",
}

// Projects Page
export const PROJECTS: Page = {
  TITLE: "Projekte",
  DESCRIPTION: "Robotik-, Software- und Infrastrukturprojekte.",
}

// Search Page
export const SEARCH: Page = {
  TITLE: "Search",
  DESCRIPTION: "Search all posts and projects by keyword.",
}

// Links
export const LINKS: Links = [
  { 
    TEXT: "Home", 
    HREF: "/", 
  },
  { 
    TEXT: "Projekte", 
    HREF: "/projects", 
  },
]

// Socials
export const SOCIALS: Socials = [
  { 
    NAME: "Email",
    ICON: "email", 
    TEXT: "marc.christoph.lange@gmail.com",
    HREF: "mailto:marc.christoph.lange@gmail.com",
  },
  { 
    NAME: "Github",
    ICON: "github",
    TEXT: "LangeCH",
    HREF: "https://github.com/LangeCH",
  },
]

