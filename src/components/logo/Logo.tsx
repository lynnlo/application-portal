import React from 'react'
import { Box, Group, Image, useMantineColorScheme, getBreakpointValue } from '@mantine/core'
import { useNavigate } from 'react-router-dom'
import { useMediaQuery } from '@mantine/hooks'

import classes from './Logo.module.css'

interface LogoProps {
  alwaysDark?: boolean
  alwaysLight?: boolean
  alwaysFull?: boolean
  alwaysSmall?: boolean
  style?: React.CSSProperties
  height?: any
  width?: any
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
            alt="Grecco Logo"
            src="images/grecco_logo_desktop.png.webp"
            width={props.width || 200}
            height={props.height || 70}
            style={props.style}
          />
        ) : (
          <Image
            alt="Grecco Logo"
            src="images/grecco_logo_desktop_light.png.webp"
            width={props.width || 200}
            height={props.height || 70}
            style={props.style}
          />
        )
      ) : (colorScheme === 'dark' && !props.alwaysLight) || props.alwaysDark ? (
        <Image
          alt="Grecco Logo"
          src="images/grecco_logo_mobile.png.webp"
          width={props.width || 200}
          height={props.height || 70}
          style={props.style}
        />
      ) : (
        <Image
          alt="Grecco Logo"
          src="images/grecco_logo_mobile_light.png.webp"
          width={props.width || 200}
          height={props.height || 70}
          style={props.style}
        />
      )}
    </Box>
  )
}
