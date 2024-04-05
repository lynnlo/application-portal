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
import { useNavigate } from 'react-router-dom'
import {
  IconBriefcase,
  IconClock,
  IconLocation,
  IconLocationPin,
  IconMapPin,
  IconPin,
} from '@tabler/icons-react'

import { Position } from '../../data/positions'
import classes from './Card.module.css'

export default function CardComponent(props: Position) {
  const navigate = useNavigate()

  return (
    <Box className={classes.box}>
      <Paper className={classes.card} p="lg" withBorder shadow="lg">
        <Group gap={5}>
          <Title order={4}>{props.position}</Title>
          <Text size="sm">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit, eos?
          </Text>
        </Group>
        <Group>
          <Group gap={5}>
            <IconBriefcase size={30} />
            <Text size="sm">{true ? 'Full-time' : 'Part-time'}</Text>
          </Group>
          <Group gap={5}>
            <IconMapPin />
            <Text size="sm">{props.location}</Text>
          </Group>
        </Group>
      </Paper>
    </Box>
  )
}
