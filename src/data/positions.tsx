export interface Position {
  position: string
  salary: number[]
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
export const data: Position[] = [
  {
    position: 'Software Engineer',
    salary: [82, 112],
    location: 'Phoenix, AZ',
    jobType: 'Full-time',
    jobCategory: 'Technology',
    description:
      'Develop applications and new technologies used in coffee brewing and distribution.',
    requirements: '',
  },
  {
    position: 'Software Engineer',
    salary: [82, 112],
    location: 'Remote',
    jobType: 'Full-time',
    jobCategory: 'Technology',
    description:
      'Develop applications and new technologies used in coffee brewing and distribution.',
    requirements: '',
  },
  {
    position: 'Senior Software Engineer',
    salary: [112, 152],
    location: 'Phoenix, AZ',
    jobType: 'Full-time',
    jobCategory: 'Technology',
    description:
      'Develop applications and new technologies used in coffee brewing and distribution.',
    requirements: '',
  },
  {
    position: 'Product Manager',
    salary: [92, 112],
    location: 'Phoenix, AZ',
    jobType: 'Full-time',
    jobCategory: 'Business',
    description: 'Manage new and existing product lines for commercial resale.',
    requirements: '',
  },
  {
    position: 'Marketing Manager',
    salary: [80, 112],
    location: 'Phoenix, AZ',
    jobType: 'Full-time',
    jobCategory: 'Marketing',
    description: 'Work in a team to develop and execute marketing campaigns.',
    requirements: '',
  },
  {
    position: 'Sales Manager',
    salary: [80, 102],
    location: 'Phoenix, AZ',
    jobType: 'Full-time',
    jobCategory: 'Sales',
    description: 'Manage sales with new and existing customers and handle distribution.',
    requirements: '',
  },
  {
    position: 'Accountant',
    salary: [70, 92],
    location: 'Phoenix, AZ',
    jobType: 'Full-time',
    jobCategory: 'Business',
    description: 'Keep record of finances and handle payroll.',
    requirements: '',
  },
  {
    position: 'Social Media Manager',
    salary: [62, 84],
    location: 'Remote',
    jobType: 'Full-time',
    jobCategory: 'Business',
    description: 'Handle social media accounts to increase brand awareness.',
    requirements: '',
  },
]
