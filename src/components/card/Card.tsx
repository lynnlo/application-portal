import React from 'react'
import {
  Box,
  Button,
  Paper,
  Text,
  Title,
  Group,
  Space,
  Stack,
  Image,
  ActionIcon,
} from '@mantine/core'
import { IconBookmark } from '@tabler/icons-react'

import { Position } from '../../data/positions'
import classes from './Card.module.css'

export default function CardComponent(props: Position) {
  return (
    <Box className={classes.box}>
      <Paper className={classes.card} p="md" withBorder shadow="lg">
        <Image
          h="40%"
          radius="1rem 1rem 0 0"
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fgetwallpapers.com%2Fwallpaper%2Ffull%2Fc%2Fc%2F0%2F157216.jpg&f=1&nofb=1&ipt=c33c9ef408879b227d4fa1bc3f21c3cffd659c5708c73e367faca119c0d4fa81&ipo=images"
        />
        <Stack h="40%" gap={0}>
          <Space h="10%" />
          <Title order={4}>{props.position}</Title>
          <Text>{`${props.salary[0]}k - ${props.salary[1]}k`}</Text>
          <Text>
            {props.location} · {props.jobType} · {props.jobCategory}
          </Text>
        </Stack>
        <Group h="20%" align="end" justify="end" gap={0}>
          <Button
            variant="gradient"
            gradient={{
              from: 'blue',
              to: 'cyan',
              deg: 140,
            }}
            size="sm"
            type="submit"
          >
            Apply Now
          </Button>
        </Group>
      </Paper>
    </Box>
  )
}
