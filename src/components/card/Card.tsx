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
  Chip,
  Pill,
} from '@mantine/core'
import { useNavigate } from 'react-router-dom'
import {
  IconBriefcase,
  IconMapPin,
  IconPin,
} from '@tabler/icons-react'

import { Position } from '../../data/positions'
import classes from './Card.module.css'

export default function CardComponent(props: Position) {
  const navigate = useNavigate()

  return (
    <Box className={classes.box}>
      <Paper
        className={classes.card}
        p="lg"
        withBorder
        shadow="lg"
        onClick={() => {
          setTimeout(() => navigate(`/apply/${props.position}`), 150)
        }}
      >
        <Group>
          <Text size="sm">{props.jobCategory}</Text>
          <Group gap={5}>
            <Title order={3}>{props.position}</Title>
            <Text size="sm">{props.description}</Text>
          </Group>
        </Group>
        <Group>
          <Group gap={5}>
            <IconBriefcase size={30} />
            <Text size="sm">{props.jobType}</Text>
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
