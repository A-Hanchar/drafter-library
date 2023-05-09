import { Meta, StoryObj } from '@storybook/react'

import { disableControl } from '../../../helpers/storiesHelpers'

import { Text } from '../Text'
import { TextSize } from '../types'

export default {
  title: 'Atoms/Text',
  component: Text,
  args: {
    as: 'p',
    children: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.',
  },
} satisfies Meta<typeof Text>

type TextStory = StoryObj<typeof Text>

export const Basic: TextStory = {}

const textSizes: TextSize[] = ['30px', '24px', '21px', '18px', '16px', '14px', '12px', '10px']

export const Sizes: TextStory = {
  argTypes: {
    children: disableControl(),
    size: disableControl(),
  },
  render: (props) => (
    <div>
      {textSizes.map((size) => (
        <Text
          as="p"
          drafterId={`text-size-${size}`}
          size={size}
          {...props}
        >
          {size}: mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
        </Text>
      ))}
    </div>
  ),
}
