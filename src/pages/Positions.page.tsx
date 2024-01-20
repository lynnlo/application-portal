/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import { Group } from '@mantine/core'
import { User } from '@supabase/supabase-js'

import supabase from '../supabase'
import { PositionsDesktop } from '../components/positions-desktop/Positions'
import { PositionsMobile } from '../components/positions-mobile/Positions'
import { Position } from '../data/positions'

export function PositionsPage() {
  const [data, setData] = React.useState<Position[]>([])

  React.useEffect(() => {
    if (supabase) {
      supabase
        .from('positions')
        .select('*')
        .then((res) => {
          if (res.error) {
            console.error(res.error)
            return
          }
          setData(res.data)
        })
    }
  }, [])

  return (
    <>
      <Group visibleFrom="md">
        <PositionsDesktop data={data} />
      </Group>
      <Group hiddenFrom="md">
        <PositionsMobile data={data} />
      </Group>
    </>
  )
}
