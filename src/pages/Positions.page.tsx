/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import { Group } from '@mantine/core'

import { PositionsDesktop } from '../components/positions-desktop/Positions'
import { PositionsMobile } from '../components/positions-mobile/Positions'

export function PositionsPage() {
  return (
    <>
      <Group visibleFrom="md">
        <PositionsDesktop />
      </Group>
      <Group hiddenFrom="md">
        <PositionsMobile />
      </Group>
    </>
  )
}
