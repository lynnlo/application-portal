/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import {
  Box,
  Center,
  Flex,
  Grid,
  GridCol,
  MultiSelect,
  RangeSlider,
  ScrollArea,
  Select,
  SimpleGrid,
  Skeleton,
  Stack,
  TextInput,
  Title,
} from '@mantine/core'

import AppBar from '../components/appbar/AppBar'
import Spacer from '../components/spacer/Spacer'

import Card from '../components/card/Card'
import { Filter, data, Position } from '../data/positions'

export function PositionsPage() {
  const [filter, setFilter] = React.useState<Filter>({
    search: '',
    jobType: [],
    jobLocation: [],
    jobCategory: [],
    salaryRange: [40, 200],
  })

  const get_filtered_data = () => {
    const new_data = data
      .filter(
        (item: Position) =>
          filter.search.length === 0 ||
          item.position.toLowerCase().includes(filter.search.toLowerCase()),
      )
      .filter(
        (item: Position) =>
          filter.jobLocation.length === 0 || filter.jobLocation.includes(item.location),
      )
      .filter((item) => filter.jobType.length === 0 || filter.jobType.includes(item.jobType))
      .filter(
        (item) => filter.jobCategory.length === 0 || filter.jobCategory.includes(item.jobCategory),
      )
      .filter(
        (item: Position) =>
          item.salary[0] >= filter.salaryRange[0] && item.salary[1] <= filter.salaryRange[1],
      )

    return new_data
  }
  
  return (
    <>
      <AppBar />
      <Box>
        <Center style={{ width: '100vw', height: '90vh' }}>
          <Grid style={{ width: '90vw', height: '60vh' }}>
            <Grid.Col span={2}>
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
            </Grid.Col>
            <Grid.Col span={10}>
              <Grid gutter="sm">
                <Grid.Col>
                  <Box>
                    <Title>Availible Positions</Title>
                  </Box>
                </Grid.Col>
                <Grid.Col span={12}>
                  <Center>
                    <Flex direction="row" wrap="wrap" w="100%">
                      {get_filtered_data().map((item, index) => (
                        <Card key={index} {...item} />
                      ))}
                    </Flex>
                  </Center>
                </Grid.Col>
              </Grid>
            </Grid.Col>
          </Grid>
        </Center>
      </Box>
    </>
  )
}
