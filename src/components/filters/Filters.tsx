import React from 'react'
import { Stack, Title, TextInput, MultiSelect, RangeSlider } from '@mantine/core'

import classes from './Filters.module.css'
import { Filter } from '../../data/positions'

interface FiltersProps {
  filter: Filter
  setFilter: (filter: Filter) => void
}
export const Filters = ({ filter, setFilter }: FiltersProps) => {
  return (
    <>
      <Stack>
        <Title>Filters</Title>
        <Title order={3}>Search</Title>
        <TextInput
          placeholder="Search for a job"
          onChange={(value) => {
            setFilter({ ...filter, search: value.target.value })
          }}
        />
        <Title order={3}>Job Location</Title>
        <MultiSelect
          placeholder="Select a location"
          data={['Phoenix, AZ', 'Remote']}
          onChange={(value) => {
            setFilter({ ...filter, jobLocation: value })
          }}
        />
        <Title order={3}>Job Type</Title>
        <MultiSelect
          placeholder="Select a job type"
          data={['Full Time', 'Part Time', 'Contract']}
          onChange={(value) => {
            setFilter({ ...filter, jobType: value })
          }}
        />
        <Title order={3}>Job Category</Title>
        <MultiSelect
          placeholder="Select a category"
          data={['Engineering', 'Marketing', 'Sales', 'Business']}
          onChange={(value) => {
            setFilter({ ...filter, jobCategory: value })
          }}
        />
        <Title order={3}>Salary Range</Title>
        <RangeSlider
          min={40}
          max={200}
          label={null}
          marks={[
            { value: 40, label: '40k' },
            { value: 80, label: '80k' },
            { value: 120, label: '120k' },
            { value: 160, label: '160k' },
            { value: 200, label: '200k' },
          ]}
          onChange={(value) => {
            setFilter({ ...filter, salaryRange: value })
          }}
        />
      </Stack>
    </>
  )
}
