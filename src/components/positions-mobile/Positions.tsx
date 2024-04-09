import React from 'react'
import {
  Center,
  Grid,
  Box,
  Title,
  Flex,
  Stack,
  Text,
  Button,
  ScrollArea,
  Drawer,
} from '@mantine/core'

import { Filters } from '../filters/Filters'
import File from '../file/File'
import { Filter, Position } from '../../data/positions'

export const PositionsMobile = ({ data }: { data: Position[] }) => {
  const [opened, setOpened] = React.useState(false)

  const [filter, setFilter] = React.useState<Filter>({
    search: '',
    jobType: [],
    jobLocation: [],
    jobCategory: [],
    salaryRange: [20, 200],
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
      <Center style={{ width: '100vw', height: '94vh' }}>
        <Stack style={{ width: '90vw', height: '80vh' }}>
          <Title order={2}>Available Positions</Title>
          <Button
            h="60px"
            variant="outline"
            color="gray"
            fullWidth
            onClick={() => {
              setOpened(true)
            }}
          >
            Open Filters
          </Button>
          <ScrollArea scrollbarSize={0}>
            {get_filtered_data().map((item, index) => (
              <File key={index} {...item} />
            ))}
          </ScrollArea>
        </Stack>
      </Center>
      <Drawer
        opened={opened}
        onClose={() => {
          setOpened(false)
        }}
      >
        <ScrollArea h="80vh" scrollbarSize={0}>
          <Filters filter={filter} setFilter={setFilter} />
        </ScrollArea>
      </Drawer>
    </>
  )
}
