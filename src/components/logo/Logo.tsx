import React from 'react'
import { Box, Group, Image, useMantineColorScheme, getBreakpointValue } from '@mantine/core'
import { useNavigate } from 'react-router-dom'
import { useMediaQuery } from '@mantine/hooks'

import logo_mobile_dark from '../../data/grecco_logo_mobile.png'
import logo_desktop_dark from '../../data/grecco_logo_desktop.png'
import logo_mobile_light from '../../data/grecco_logo_mobile_light.png'
import logo_desktop_light from '../../data/grecco_logo_desktop_light.png'

import classes from './Logo.module.css'

interface LogoProps {
  alwaysDark?: boolean
  alwaysLight?: boolean
  alwaysFull?: boolean
  alwaysSmall?: boolean
  style?: React.CSSProperties
  height?: number
  width?: number
}

export default function Logo(props: LogoProps) {
  const navigate = useNavigate()

  const { colorScheme } = useMantineColorScheme()
  const isFull = useMediaQuery('(min-width: 48em')
  const classNames = [classes.logo].join(' ')

  return (
    <Box
      className={classNames}
      onClick={() => {
        navigate('/')
      }}
    >
      {(isFull && !props.alwaysSmall) || props.alwaysFull ? (
        (colorScheme === 'dark' && !props.alwaysLight) || props.alwaysDark ? (
          <Image
            src={logo_desktop_dark}
            width={props.width || 200}
            height={props.height || 70}
            style={props.style}
          />
        ) : (
          <Image
            src={logo_desktop_light}
            width={props.width || 200}
            height={props.height || 70}
            style={props.style}
          />
        )
      ) : (colorScheme === 'dark' && !props.alwaysLight) || props.alwaysDark ? (
        <Image
          src={logo_mobile_dark}
          width={props.width || 200}
          height={props.height || 70}
          style={props.style}
        />
      ) : (
        <Image
          src={logo_mobile_light}
          width={props.width || 200}
          height={props.height || 70}
          style={props.style}
        />
      )}
    </Box>
  )
}
