export interface Position {
  position: string
  salary0: number
  salary1: number
  location: 'Phoenix, AZ' | 'Remote'
  jobType: 'Full-time' | 'Part-time' | 'Contract'
  jobCategory: 'Design' | 'Technology' | 'Business' | 'Marketing' | 'Sales'
  description: string
  requirements: string
}
export interface Filter {
  search: string
  jobType: string[]
  jobLocation: string[]
  jobCategory: string[]
  salaryRange: number[]
}
