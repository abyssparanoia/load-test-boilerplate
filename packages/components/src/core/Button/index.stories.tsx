import React from 'react'
import { Story } from '@storybook/react/types-6-0'
import { Button, ButtonColor, ButtonProps } from '.'

export default {
  title: 'components/core/Button',
  component: Button,
  argTypes: {
    color: {
      control: {
        type: 'select',
        options: Object.values(ButtonColor)
      }
    },
    size: {
      control: {
        type: 'select',
        options: ['medium', 'small']
      }
    }
  }
}

const Template: Story<ButtonProps & { children: React.ReactNode }> = args => <Button {...args} />

const defaultProps: ButtonProps = {
  color: ButtonColor.Primary,
  inline: false,
  disabled: false,
  size: 'medium',
  children: 'ログイン'
}

export const overview = Template.bind({})
overview.args = defaultProps

export const large = Template.bind({})
large.args = {
  ...defaultProps,
  size: 'large'
}

export const small = Template.bind({})
small.args = {
  ...defaultProps,
  size: 'small'
}
