import React from 'react'
import { Typography } from '../../variables'

export enum ButtonColor {
  Primary = 'primary',
  Outlined = 'outlined',
  BrandOutlined = 'brandOutlined'
}

export type ButtonProps = React.ComponentPropsWithoutRef<'button'> & {
  color?: ButtonColor
  inline?: boolean
  size?: 'tiny' | 'small' | 'medium' | 'large'
  loading?: boolean
  typography?: string
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

export const Button: React.FC<ButtonProps> = ({ children, ...other }) => {
  return <button {...other}>{children}</button>
}

Button.defaultProps = {
  color: ButtonColor.Primary,
  size: 'medium',
  typography: Typography.TEXT_NORMAL_30,
  inline: false
}
