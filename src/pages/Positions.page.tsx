/* eslint-disable @typescript-eslint/no-unused-vars */
import { Box, Center, Flex, Grid, GridCol, ScrollArea, SimpleGrid, Skeleton } from '@mantine/core'

import AppBar from '../components/appbar/AppBar'
import Spacer from '../components/spacer/Spacer'

import Card from '../components/card/Card'

const data = [
  {
    position: 'Software Engineer',
    salary: '87k - 110k',
    location: 'Phoenix, AZ',
  },
  {
    position: 'Senior Software Engineer',
    salary: '107k - 130k',
    location: 'Phoenix, AZ',
  },
  {
    position: 'Systems Manager',
    salary: '107k - 120k',
    location: 'Phoenix, AZ',
  },
  {
    position: 'Marketing Lead',
    salary: '127k - 140k',
    location: 'Phoenix, AZ',
  },
  {
    position: 'Coffee Roaster',
    salary: '67k - 80k',
    location: 'Phoenix, AZ',
  },
  {
    position: 'Data Scientist',
    salary: '97k - 110k',
    location: 'Phoenix, AZ',
  },
  {
    position: 'Business Analyst',
    salary: '97k - 110k',
    location: 'Phoenix, AZ',
  },
  {
    position: 'Sales Manager',
    salary: '97k - 110k',
    location: 'Phoenix, AZ',
  },
]

export function PositionsPage() {
  return (
    <>
      <AppBar />
      <Box>
        <Center>
          <Grid style={{ width: '90vw' }}>
            <Grid.Col span={2}>
              <Skeleton height="100%" radius="md" animate={false} />
            </Grid.Col>
            <Grid.Col span={10}>
              <Grid gutter="sm">
                <Grid.Col>
                  <Skeleton height={200} radius="md" animate={false} />
                </Grid.Col>
                <Grid.Col span={12}>
                  <Center>
                    <Flex direction="row" wrap="wrap">
                      {data.map((item, index) => (
                        <Card
                          key={index}
                          position={item.position}
                          location={item.location}
                          salary={item.salary}
                        />
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
