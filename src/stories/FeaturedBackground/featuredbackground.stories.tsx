import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { FeaturedBackground } from '.'

export default {
  title: 'Example/FeaturedBackground',
  component: FeaturedBackground
} as ComponentMeta<typeof FeaturedBackground>

const Template: ComponentStory<typeof FeaturedBackground> = (args) => (
    <FeaturedBackground {...args}>
        <h2 style={{ color: '#fff' }}>
            BANANINHA
        </h2>
    </FeaturedBackground>
)

export const image = Template.bind({})
image.args = {
  image: '/YjO3q30GOQiWuq1vaOdA4xAbaK.jpg'
}
