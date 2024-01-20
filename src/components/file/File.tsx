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

import { Position } from '../../data/positions'
import classes from './File.module.css'

export default function FileComponent(props: Position) {
  const navigate = useNavigate()
  return (
    <Paper
      className={classes.card}
      p="lg"
      withBorder
      shadow="md"
      onClick={() => {
        navigate(`/apply/${props.position}`)
      }}
    >
      <Group h="100%" justify="space-between">
        <Title w="60%" size="4vw">
          {props.position}
        </Title>
        <Stack w="30%" gap="sm">
          <Text size="2.2vw">{props.jobType}</Text>
          <Text size="2vw">{props.location}</Text>
          <Text size="2vw">{`${props.salary0}k - ${props.salary1}k`}</Text>
        </Stack>
      </Group>
    </Paper>
  )
}
