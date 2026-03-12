import type { Dataset } from './types'

export const datasets: Dataset[] = [
  {
    id: '1',
    title: 'Arctic Permafrost Carbon Dynamics Analysis',
    description: 'Comprehensive dataset measuring carbon release from thawing permafrost across Alaska and Northern Canada from 2015-2024.',
    datatype: 'Climate Data',
    institution: 'University of Alaska Fairbanks',
    doi: '10.11587/ABCD1234',
    repository: 'borealis',
    year: 2024,
    authors: ['Dr. Sarah Chen', 'Dr. Michael Thompson', 'Dr. Emily Rodriguez'],
    tags: ['permafrost', 'carbon-cycle', 'arctic', 'climate-change']
  },
  {
    id: '2',
    title: 'Marine Microbial Metagenomics Collection',
    description: 'Whole metagenome sequencing data from 200+ marine samples collected across the Pacific Ocean, focusing on microbial diversity.',
    datatype: 'Genomic',
    institution: 'University of British Columbia',
    doi: '10.5281/zenodo.11223344',
    repository: 'zenodo',
    year: 2023,
    authors: ['Dr. James Wilson', 'Dr. Patricia Lee', 'Dr. David Kim'],
    tags: ['marine-biology', 'metagenomics', 'microbial-diversity', 'oceanography']
  },
  {
    id: '3',
    title: 'Indigenous Language Documentation Archive',
    description: 'Audio recordings, transcriptions, and linguistic analysis of endangered Indigenous languages across North America.',
    datatype: 'Linguistic',
    institution: 'University of Toronto',
    doi: '10.5281/zenodo.55667788',
    repository: 'zenodo',
    year: 2024,
    authors: ['Dr. Margaret Brown', 'Dr. Robert Anderson', 'Dr. Lisa Taylor'],
    tags: ['indigenous-languages', 'linguistics', 'documentation', 'cultural-preservation']
  },
  {
    id: '4',
    title: 'High-Resolution Brain Imaging Dataset',
    description: 'MRI and fMRI scans from 500 subjects studying cognitive development and neurological conditions.',
    datatype: 'Imaging',
    institution: 'McGill University',
    doi: '10.11587/WXYZ6789',
    repository: 'borealis',
    year: 2023,
    authors: ['Dr. Jennifer Martinez', 'Dr. Thomas Garcia', 'Dr. Susan Davis'],
    tags: ['neuroimaging', 'mri', 'cognitive-science', 'brain-research']
  },
  {
    id: '5',
    title: 'Agricultural Soil Health Survey',
    description: 'Soil samples and nutrient analysis from 1000+ farms across Canada, assessing soil health and sustainable farming practices.',
    datatype: 'Environmental',
    institution: 'University of Alberta',
    doi: '10.5281/zenodo.99887766',
    repository: 'zenodo',
    year: 2022,
    authors: ['Dr. William Johnson', 'Dr. Elizabeth White', 'Dr. Richard Harris'],
    tags: ['agriculture', 'soil-health', 'sustainability', 'environmental-science']
  },
  {
    id: '6',
    title: 'Protein Structure Prediction Database',
    description: '3D protein structures and predictions using AlphaFold technology for proteins from extremophilic organisms.',
    datatype: 'Structural Biology',
    institution: 'University of British Columbia',
    doi: '10.11587/LMNO3456',
    repository: 'borealis',
    year: 2024,
    authors: ['Dr. Christopher Lewis', 'Dr. Karen Walker', 'Dr. Daniel Hall'],
    tags: ['bioinformatics', 'protein-structure', 'alphafold', 'structural-biology']
  },
  {
    id: '7',
    title: 'Renewable Energy Grid Performance Data',
    description: 'Real-time data from solar and wind farms across Canada, analyzing energy production and grid integration efficiency.',
    datatype: 'Energy',
    institution: 'University of Toronto',
    doi: '10.5281/zenodo.33445566',
    repository: 'zenodo',
    year: 2024,
    authors: ['Dr. Andrew Young', 'Dr. Michelle King', 'Dr. Paul Wright'],
    tags: ['renewable-energy', 'smart-grid', 'solar', 'wind-energy', 'sustainability']
  },
  {
    id: '8',
    title: 'Longitudinal Health Outcomes Study',
    description: '20-year study tracking health outcomes in rural communities, focusing on chronic disease prevention and healthcare access.',
    datatype: 'Public Health',
    institution: 'McGill University',
    doi: '10.11587/QRST7890',
    repository: 'borealis',
    year: 2023,
    authors: ['Dr. Nancy Scott', 'Dr. George Green', 'Dr. Barbara Adams'],
    tags: ['public-health', 'epidemiology', 'rural-health', 'chronic-disease']
  },
  {
    id: '9',
    title: 'Wildlife Population Dynamics Database',
    description: 'Population tracking data for 50+ wildlife species across Canada, including migration patterns and breeding success rates.',
    datatype: 'Ecological',
    institution: 'University of Alberta',
    doi: '10.5281/zenodo.77889900',
    repository: 'zenodo',
    year: 2021,
    authors: ['Dr. Steven Clark', 'Dr. Laura Baker', 'Dr. Kevin Nelson'],
    tags: ['wildlife-biology', 'conservation', 'population-dynamics', 'biodiversity']
  },
  {
    id: '10',
    title: 'Quantum Computing Simulation Results',
    description: 'Simulation data from quantum computing experiments, including error rates and algorithm performance benchmarks.',
    datatype: 'Computational Physics',
    institution: 'University of Toronto',
    doi: '10.11587/UVWX1234',
    repository: 'borealis',
    year: 2024,
    authors: ['Dr. Joshua Hill', 'Dr. Amanda Moore', 'Dr. Brian Jackson'],
    tags: ['quantum-computing', 'simulation', 'physics', 'algorithms']
  },
  {
    id: '11',
    title: 'Social Media Impact on Mental Health Study',
    description: 'Survey data and analysis examining correlations between social media usage patterns and mental health outcomes in adolescents.',
    datatype: 'Social Science',
    institution: 'University of British Columbia',
    doi: '10.5281/zenodo.44552233',
    repository: 'zenodo',
    year: 2023,
    authors: ['Dr. Stephanie Collins', 'Dr. Ryan Cooper', 'Dr. Nicole Edwards'],
    tags: ['mental-health', 'social-media', 'adolescent-health', 'psychology']
  },
  {
    id: '12',
    title: 'Advanced Materials Characterization',
    description: 'Detailed material properties and characterization data for next-generation battery components and superalloys.',
    datatype: 'Materials Science',
    institution: 'McGill University',
    doi: '10.11587/YZAB5678',
    repository: 'borealis',
    year: 2024,
    authors: ['Dr. Brandon Stewart', 'Dr. Christina Morris', 'Dr. Justin Reed'],
    tags: ['materials-science', 'battery-technology', 'characterization', 'engineering']
  },
  {
    id: '13',
    title: 'Autonomous Vehicle Navigation Dataset',
    description: 'Sensor fusion data from autonomous vehicle testing, including lidar, camera, and radar measurements in urban environments.',
    datatype: 'Engineering',
    institution: 'University of Alberta',
    doi: '10.5281/zenodo.66778899',
    repository: 'zenodo',
    year: 2022,
    authors: ['Dr. Kevin Mitchell', 'Dr. Rachel Perez', 'Dr. Justin Campbell'],
    tags: ['autonomous-vehicles', 'lidar', 'sensor-fusion', 'transportation']
  },
  {
    id: '14',
    title: 'Climate Change Impact on Agriculture',
    description: 'Crop yield data and climate measurements analyzing the effects of climate change on agricultural productivity across Western Canada.',
    datatype: 'Agricultural Science',
    institution: 'University of Saskatchewan',
    doi: '10.11587/CDEF9012',
    repository: 'borealis',
    year: 2023,
    authors: ['Dr. Heather Roberts', 'Dr. Jeremy Turner', 'Dr. Sara Phillips'],
    tags: ['climate-change', 'agriculture', 'crop-yields', 'food-security']
  },
  {
    id: '15',
    title: 'Gene Expression Analysis in Disease',
    description: 'RNA-seq datasets analyzing gene expression patterns in various disease states, including cancer and autoimmune disorders.',
    datatype: 'Genomic',
    institution: 'University of Toronto',
    doi: '10.5281/zenodo.22334455',
    repository: 'zenodo',
    year: 2024,
    authors: ['Dr. Melissa Rivera', 'Dr. Kevin Cook', 'Dr. Tiffany Bell'],
    tags: ['genomics', 'gene-expression', 'disease-research', 'rna-seq']
  }
]

// Extract unique values for filters
export const datatypes = Array.from(new Set(datasets.map(d => d.datatype))).sort()
export const institutions = Array.from(new Set(datasets.map(d => d.institution))).sort()
