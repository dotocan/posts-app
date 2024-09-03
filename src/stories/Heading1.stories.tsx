import type { Meta, StoryObj } from '@storybook/react';
import { Heading1 } from '../components/primitives/typography/Heading1';

const meta: Meta<typeof Heading1> = {
    component: Heading1
}

export default meta;

type Story = StoryObj<typeof Heading1>;

export const Light: Story = {
    args: {
        weight: 'light',
        children: 'Light'
    }
}

export const Medium: Story = {
    args: {
        weight: 'medium',
        children: 'Medium'
    }
}

export const Bold: Story = {
    args: {
        weight: 'bold',
        children: 'Bold'
    }
}