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
import { useNavigate } from 'react-router-dom'

import { Position } from '../../data/positions'
import classes from './Card.module.css'

export default function CardComponent(props: Position) {
  const navigate = useNavigate()

  return (
    <Box className={classes.box}>
      <Paper className={classes.card} p="md" withBorder shadow="lg">
        <Stack h="60%" gap={0}>
          <Space h="10%" />
          <Title size="1vw">{props.position}</Title>
          <Text size="sm">
            {props.location} · {props.jobType}
          </Text>
          <Text size="sm">{`${props.salary[0]}k - ${props.salary[1]}k`}</Text>
        </Stack>
        <Group h="40%" align="end" justify="end" gap={0}>
          <Button
            variant="gradient"
            gradient={{
              from: 'blue',
              to: 'cyan',
              deg: 140,
            }}
            size="sm"
            type="submit"
            onClick={() => navigate(`/apply/${props.position}`)}
          >
            Apply Now
          </Button>
        </Group>
      </Paper>
    </Box>
  )
}
