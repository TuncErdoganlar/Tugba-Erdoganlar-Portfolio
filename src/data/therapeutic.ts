// Therapeutic / study experience records (from the CV).
// `areaKey` and `locations` are translated via messages; `indication` keeps
// the standard clinical terminology and is shown as-is in both languages.

export type Phase = "I" | "II" | "III" | "IV";

export interface StudyRecord {
  areaKey: string; // maps to messages: therapeutic.area.<areaKey>
  indication: string;
  phase: Phase;
  sites: number;
  locations: Array<"TR" | "DE" | "GB">; // maps to messages: therapeutic.loc.<code>
}

export const studies: StudyRecord[] = [
  { areaKey: "infectiousDisease", indication: "Paediatric HCC", phase: "III", sites: 3, locations: ["TR"] },
  { areaKey: "oncology", indication: "Hepatocellular Carcinoma", phase: "III", sites: 4, locations: ["TR"] },
  { areaKey: "ophthalmology", indication: "Ophthalmic (pharmaceutical)", phase: "III", sites: 6, locations: ["TR"] },
  { areaKey: "vaccinesImmunology", indication: "Newborn vaccine", phase: "III", sites: 1, locations: ["TR"] },
  { areaKey: "hematology", indication: "Non-Hodgkin's Lymphoma", phase: "III", sites: 3, locations: ["TR"] },
  { areaKey: "neurology", indication: "Multiple Sclerosis", phase: "IV", sites: 6, locations: ["TR"] },
  { areaKey: "nephrology", indication: "Chronic Renal Failure (predialysis)", phase: "III", sites: 12, locations: ["TR"] },
  { areaKey: "nephrology", indication: "Chronic Renal Failure (dialysis)", phase: "III", sites: 12, locations: ["TR"] },
  { areaKey: "nephrology", indication: "Chronic Renal Failure (follow-up)", phase: "III", sites: 4, locations: ["TR"] },
  { areaKey: "cardiovascular", indication: "Atrial Fibrillation", phase: "III", sites: 23, locations: ["TR"] },
  { areaKey: "dermatology", indication: "Onychomycosis", phase: "III", sites: 5, locations: ["TR"] },
  { areaKey: "infectiousDisease", indication: "Nosocomial Pneumonia", phase: "III", sites: 3, locations: ["TR"] },
  { areaKey: "respiratory", indication: "Asthma", phase: "III", sites: 18, locations: ["TR"] },
  { areaKey: "oncology", indication: "Lung Cancer", phase: "III", sites: 13, locations: ["TR"] },
  { areaKey: "nephrology", indication: "Renal Transplantation", phase: "IV", sites: 6, locations: ["TR"] },
  { areaKey: "vaccinesImmunology", indication: "Immunogenicity & Safety (IC43)", phase: "II", sites: 5, locations: ["TR"] },
  { areaKey: "gastroenterology", indication: "Ulcerative Colitis", phase: "III", sites: 10, locations: ["TR"] },
  { areaKey: "childrensMentalHealth", indication: "ADHD", phase: "III", sites: 1, locations: ["TR"] },
  { areaKey: "orthopaedics", indication: "Gadolinium Retention in Bones", phase: "IV", sites: 3, locations: ["TR"] },
  { areaKey: "rheumatology", indication: "Ischemic Digital Ulcers", phase: "III", sites: 3, locations: ["TR"] },
  { areaKey: "medicalDevice", indication: "Left Atrial Appendage (LAA) Occluder", phase: "I", sites: 5, locations: ["DE", "GB"] },
  { areaKey: "medicalDevice", indication: "Atrial Flow Regulator (AFR) Implant", phase: "I", sites: 10, locations: ["TR", "DE", "GB"] },
  { areaKey: "medicalDevice", indication: "Ventricular Septal Defect (VSD) Occluder", phase: "I", sites: 10, locations: ["TR", "GB"] },
  { areaKey: "oncology", indication: "Lung Cancer", phase: "III", sites: 6, locations: ["TR"] },
  { areaKey: "oncology", indication: "NSCLC", phase: "III", sites: 6, locations: ["TR"] },
  { areaKey: "oncology", indication: "Non-Hodgkin's Lymphoma", phase: "III", sites: 5, locations: ["TR"] },
  { areaKey: "oncology", indication: "Diffuse Large B-cell Lymphoma", phase: "III", sites: 5, locations: ["TR"] },
  { areaKey: "hematology", indication: "Paediatric Haemophilia B", phase: "III", sites: 2, locations: ["TR"] },
  { areaKey: "oncology", indication: "Lung Cancer", phase: "III", sites: 4, locations: ["TR"] },
  { areaKey: "oncology", indication: "Diffuse Large B-cell Lymphoma", phase: "III", sites: 11, locations: ["TR"] },
  { areaKey: "infectiousDisease", indication: "Staphylococcus aureus Bacteremia", phase: "III", sites: 4, locations: ["TR"] },
];

// Distinct area keys in display order (by frequency / prominence).
export const areaKeys = [
  "oncology",
  "nephrology",
  "hematology",
  "cardiovascular",
  "infectiousDisease",
  "neurology",
  "ophthalmology",
  "dermatology",
  "respiratory",
  "gastroenterology",
  "rheumatology",
  "orthopaedics",
  "vaccinesImmunology",
  "childrensMentalHealth",
  "medicalDevice",
] as const;

export const phases: Phase[] = ["I", "II", "III", "IV"];
