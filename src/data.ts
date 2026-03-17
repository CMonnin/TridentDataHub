import type { Dataset } from "./types";

export const datasets: Dataset[] = [
  {
    researcher: "Stephanie Tullo",
    researcherEmail: "s.tullo@placeholder.ca",
    institution: "Douglas",
    datasetName:
      "Dataset for manuscript titled: Female mice exhibit resistance to disease progression despite early pathology in a transgenic mouse model inoculated with alpha-synuclein fibrils",
    datasetDescription:
      'This repository contains the source data and code for the analyses in the manuscript titled "Female mice exhibit resistance to disease progression despite early pathology in a transgenic mouse model inoculated with alpha-synuclein fibrils", accepted for publication at Communications Biology.',
    datasetType:
      "source data (demographics (csv) MRI statistical maps and group average (MINC), behavioural data (csv)) and code",
    disease: "Synucleinopathies",
    drug: "NA",
    url: "https://doi.org/10.5281/zenodo.14655730",
  },
  {
    researcher: "Stephanie Tullo",
    researcherEmail: "s.tullo@placeholder.ca",
    institution: "Douglas",
    datasetName:
      "In vivo and in silico alpha-synuclein propagation dynamics: The role of genotype, epicentre, and connectivity",
    datasetDescription:
      'This repository contains the source data and code for the analyses in the manuscript titled "In vivo and in silico alpha-synuclein propagation dynamics: The role of genotype, epicentre, and connectivity"',
    datasetType:
      "source data (demographics (csv) MRI statistical maps and group average (MINC), behavioural data (csv)) and code",
    disease: "Synucleinopathies",
    drug: "NA",
    url: "https://doi.org/10.5281/zenodo.16614414",
  },
];

// Extract unique values for filters
export const datasetTypes = Array.from(
  new Set(datasets.map((d) => d.datasetType)),
).sort();
export const institutions = Array.from(
  new Set(datasets.map((d) => d.institution)),
).sort();
export const diseases = Array.from(
  new Set(datasets.map((d) => d.disease).filter(Boolean)),
).sort();
export const drugs = Array.from(
  new Set(datasets.map((d) => d.drug).filter(Boolean)),
).sort();
