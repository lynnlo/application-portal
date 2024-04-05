import React from 'react'
import { Center, Grid, Box, Title, Flex, Loader, Text, Stack } from '@mantine/core'

import Card from '../card/Card'
import { Filters } from '../filters/Filters'
import { Filter, Position } from '../../data/positions'

import classes from './Positions.module.css'

export const PositionsDesktop = ({ data }: { data: Position[] }) => {
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
      .filter(
        (item: Position) => filter.jobType.length === 0 || filter.jobType.includes(item.jobType),
      )
      .filter(
        (item: Position) =>
          filter.jobCategory.length === 0 || filter.jobCategory.includes(item.jobCategory),
      )
      .filter(
        (item: Position) =>
          item.salary0 >= filter.salaryRange[0] && item.salary1 <= filter.salaryRange[1],
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
                    {data.length === 0 && (
                      <Center w="100%" h="50vh">
                        <Stack>
                          <Loader size="xl" />
                          <Text>Loading...</Text>
                        </Stack>
                      </Center>
                    )}
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
