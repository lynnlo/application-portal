import { Box, Group, Image } from '@mantine/core'
import React from 'react'
import logo_mobile_dark from './grecco_logo_mobile.png'
import logo_desktop_dark from './grecco_logo_desktop.png'
import logo_mobile_light from './grecco_logo_mobile_light.png'
import logo_desktop_light from './grecco_logo_desktop_light.png'

import classes from './Logo.module.css'

interface LogoProps {}

export default function Logo(props: LogoProps) {
  const classNames = [classes.logo].join(' ')

  return (
    <Box className={classNames}>
      <Group visibleFrom="sm">
        <Image lightHidden src={logo_desktop_dark} width={200} height={70} />
        <Image darkHidden src={logo_desktop_light} width={200} height={70} />
      </Group>
      <Group hiddenFrom="sm">
        <Image lightHidden src={logo_mobile_dark} width={70} height={70} />
        <Image darkHidden src={logo_mobile_light} width={70} height={70} />
      </Group>
    </Box>
  )
}
