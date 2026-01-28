import * as React from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from 'storybook/test'

import { Checkbox } from './checkbox'

const meta = {
  title: 'Example/Checkbox',
  component: Checkbox,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['default', 'glass', 'outline'] },
    size: { control: 'select', options: ['sm', 'md', 'lg', 'xl'] },
    glow: { control: 'boolean' },
    disabled: { control: 'boolean' },
    'aria-invalid': { control: 'boolean', name: 'invalid' },
    checked: {
      control: 'select',
      options: [undefined as unknown as string, false, true, 'indeterminate'],
      mapping: {
        uncontrolled: undefined,
        false: false,
        true: true,
        indeterminate: 'indeterminate' as const,
      },
      labels: {
        undefined: 'uncontrolled',
        false: 'false',
        true: 'true',
        indeterminate: 'indeterminate',
      },
    },
    onCheckedChange: { action: 'changed' },
  },
  args: {
    variant: 'default',
    size: 'md',
    glow: true,
    disabled: false,
    'aria-invalid': false,
    onCheckedChange: fn(),
  },
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Glass: Story = { args: { variant: 'glass' } }

export const Outline: Story = { args: { variant: 'outline' } }

export const Small: Story = { args: { size: 'sm' } }

export const Large: Story = { args: { size: 'lg' } }

export const XLarge: Story = { args: { size: 'xl' } }

export const Disabled: Story = { args: { disabled: true } }

export const Invalid: Story = { args: { 'aria-invalid': true } }

/** Контролируемое состояние */
export const Controlled: Story = {
  render: (args) => {
    const [state, setState] = React.useState<boolean | 'indeterminate'>(false)
    return (
      <div className="flex items-center gap-3">
        <Checkbox
          {...args}
          checked={state}
          onCheckedChange={(v) => setState(v)}
          aria-invalid={state === 'indeterminate'}
        />
        <div className="flex gap-2">
          <button
            onClick={() => setState(false)}
            className="px-2 py-1 rounded bg-black/10 dark:bg-white/10"
          >
            false
          </button>
          <button
            onClick={() => setState(true)}
            className="px-2 py-1 rounded bg-black/10 dark:bg-white/10"
          >
            true
          </button>
          <button
            onClick={() => setState('indeterminate')}
            className="px-2 py-1 rounded bg-black/10 dark:bg-white/10"
          >
            indeterminate
          </button>
        </div>
      </div>
    )
  },
}

/** С лейблом */
export const WithLabel: Story = {
  render: (args) => {
    const id = React.useId()
    const [checked, setChecked] = React.useState(false)
    return (
      <label htmlFor={id} className="flex items-center gap-3 cursor-pointer select-none">
        <Checkbox
          id={id}
          {...args}
          checked={checked}
          onCheckedChange={(v) => setChecked(v === true)}
        />
        <span className="text-sm text-foreground/90">Запомнить меня</span>
      </label>
    )
  },
}
