import React from 'react'
import { Box, Card, Image, Overlay, Space, Stack, Text, Title } from '@mantine/core'

import { Position } from '../../data/positions'
import classes from './Card.module.css'

export default function CardComponent(props: Position) {
  return (
    <Box className={classes.box}>
      <Card className={classes.card}>
        <Title order={3}>{props.position}</Title>
        <Text>{`${props.salary[0]}k - ${props.salary[1]}k`}</Text>
        <Text>
          {props.location} · {props.jobType} · {props.jobCategory}
        </Text>
      </Card>
    </Box>
  )
}
