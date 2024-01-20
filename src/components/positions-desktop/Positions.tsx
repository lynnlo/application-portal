import React from 'react'
import { Center, Grid, Box, Title, Flex } from '@mantine/core'

import Card from '../card/Card'
import { Filters } from '../filters/Filters'
import { Filter, data, Position } from '../../data/positions'

import classes from './Positions.module.css'

export const PositionsDesktop = () => {
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
      <Center style={{ width: '100vw', height: '90vh' }}>
        <Grid style={{ width: '90vw', height: '80vh' }}>
          <Grid.Col span={2}>
            <Filters filter={filter} setFilter={setFilter} />
          </Grid.Col>
          <Grid.Col span={10}>
            <Grid gutter="sm">
              <Grid.Col>
                <Box>
                  <Title>Available Positions</Title>
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
    </>
  )
}
