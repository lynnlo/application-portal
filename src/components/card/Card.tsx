import React from 'react'
import { Box, Card, Text, Title } from '@mantine/core'

import classes from './Card.module.css'

export interface CardProps {
  position: string
  salary: string
  location: string
}

export default function CardComponent(props: CardProps) {
  return (
    <Box className={classes.box}>
      <Card className={classes.card}>
        <Title order={3}>{props.position}</Title>
        <Text>{props.salary}</Text>
        <Text>{props.location}</Text>
      </Card>
    </Box>
  )
}
