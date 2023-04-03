import { ComponentMeta } from '@storybook/react'

import { Text } from '../Text'
import { TextProps } from '../types'

export default {
  title: 'Atoms/Text',
  component: Text,
} as ComponentMeta<typeof Text>

export const Component = (props: TextProps) => <Text {...props} />

const componentArgs: TextProps = {
  text: 'Lorem Ipsum',
  color: 'black',
  fontSize: '1rem',
}

Component.args = componentArgs
