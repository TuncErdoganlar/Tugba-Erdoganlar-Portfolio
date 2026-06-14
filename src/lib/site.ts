// Public contact details only. Per privacy rules, the home address and personal
// mobile number from the CV are intentionally NOT included anywhere on the site.
export const site = {
  name: "Tuğba Erdoğanlar",
  email: "tugbaerdoganlar@gmail.com",
  linkedin: "https://www.linkedin.com/in/tu%C4%9Fba-erdo%C4%9Fanlar-156aab14/",
  cvPath: "/cv.pdf",
  url: "https://tugba-site.vercel.app",
  sections: ["about", "experience", "therapeutic", "training", "contact"] as const,
};

export type SectionId = (typeof site.sections)[number];
