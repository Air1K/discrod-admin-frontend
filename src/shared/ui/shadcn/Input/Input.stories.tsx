// input.stories.tsx
import * as React from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from 'storybook/test'
import { Mail, Check, Eye, EyeOff } from 'lucide-react'

import { Input } from './Input'
import { Button } from '../Button'

const meta = {
  title: 'Example/Input',
  component: Input,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['filled', 'outline', 'ghost'] },
    size: { control: 'select', options: ['sm', 'md', 'lg', 'xl'] },
    state: { control: 'select', options: ['default', 'success'] },
    loading: { control: 'boolean' },
    'aria-invalid': { control: 'boolean', name: 'invalid' },

    leftIcon: { table: { disable: true } },
    rightIcon: { table: { disable: true } },
    rightSection: { table: { disable: true } },
    containerClassName: { table: { disable: true } },
    onChange: { action: 'changed' },
  },
  args: {
    placeholder: 'Введите текст',
    variant: 'filled',
    size: 'md',
    state: 'default',
    loading: false,
    'aria-invalid': false,
    onChange: fn(),
    type: 'text',
  },
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Outline: Story = { args: { variant: 'outline' } }

export const Ghost: Story = { args: { variant: 'ghost' } }

export const Small: Story = { args: { size: 'sm', placeholder: 'Small' } }

export const Large: Story = { args: { size: 'lg', placeholder: 'Large' } }

export const XLarge: Story = { args: { size: 'xl', placeholder: 'XLarge' } }

export const Success: Story = {
  args: { state: 'success', rightIcon: <Check className="size-4" /> },
}

export const Invalid: Story = {
  args: { 'aria-invalid': true, placeholder: 'Неверное значение' },
}

export const WithLeftIcon: Story = {
  args: { leftIcon: <Mail className="size-4" />, placeholder: 'E-mail' },
}

export const WithRightIcon: Story = {
  args: { rightIcon: <Check className="size-4" />, placeholder: 'Код приглашения' },
}

export const Loading: Story = {
  args: { loading: true, placeholder: 'Поиск…' },
}

/** Пароль без отдельного компонента — чистая композиция через rightSection */
export const Password: Story = {
  name: 'Password (composed)',
  render: (args) => {
    const [visible, setVisible] = React.useState(false)
    return (
      <Input
        {...args}
        type={visible ? 'text' : 'password'}
        placeholder="Пароль"
        rightSection={
          <Button
            type="button"
            onClick={() => setVisible((v) => !v)}
            aria-label={visible ? 'Скрыть пароль' : 'Показать пароль'}
            className="p-1.5 text-muted-foreground/80 hover:text-foreground hover:bg-input/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/60"
            variant={'ghost'}
            size={'icon-sm'}
          >
            {visible ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
          </Button>
        }
      />
    )
  },
}
