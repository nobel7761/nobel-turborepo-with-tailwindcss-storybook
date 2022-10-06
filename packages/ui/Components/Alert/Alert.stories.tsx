import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Alert } from './Alert'

export default {
  title: 'Components/Alert',
  component: Alert,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Alert>

const Template: ComponentStory<typeof Alert> = (args) => <Alert {...args} />

export const Danger = Template.bind({})
Danger.args = {
  text: 'Danger Alert',
  backgroundColor: 'bg-red-500',
  textColor: 'text-white',
  className: 'px-6 py-2 w-fit m-2 rounded-lg',
}
export const Success = Template.bind({})
Success.args = {
  text: 'Success Alert',
  backgroundColor: 'bg-green-500',
  textColor: 'text-white',
  className: 'px-6 py-2 w-fit m-2 rounded-lg',
}
