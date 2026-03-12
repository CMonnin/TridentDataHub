export interface Dataset {
  id: string
  title: string
  description: string
  datatype: string
  institution: string
  doi: string
  repository: 'borealis' | 'zenodo'
  year?: number
  authors?: string[]
  tags?: string[]
}

export interface FilterState {
  datatype: string | null
  institution: string | null
}
