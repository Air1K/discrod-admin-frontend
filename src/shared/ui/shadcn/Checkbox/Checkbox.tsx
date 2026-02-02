import * as React from 'react'
import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { cva, type VariantProps } from 'class-variance-authority'
import { CheckIcon } from 'lucide-react'
import { cn } from '@/shared/lib/utils'

const checkboxVariants = cva(
  [
    'peer inline-grid place-items-center shrink-0',
    'rounded-lg border border-input',
    'bg-transparent dark:bg-input/30',
    'shadow-xs transition-all outline-none',
    // focus/invalid
    'focus-visible:border-ring focus-visible:ring-4 focus-visible:ring-ring/35',
    'aria-invalid:border-destructive aria-invalid:ring-4 aria-invalid:ring-destructive/30',
    // disabled
    'disabled:cursor-not-allowed disabled:opacity-50',
    // checked base
    'data-[state=checked]:text-primary-foreground',
  ].join(' '),
  {
    variants: {
      variant: {
        /** стандарт — заливаем primary при чекe */
        default: 'data-[state=checked]:bg-primary data-[state=checked]:border-primary',
        /** стеклянный фон, аккуратная заливка */
        glass:
          'bg-input/40 dark:bg-input/20 data-[state=checked]:bg-primary data-[state=checked]:border-primary',
        /** без заливки: подчёркиваем кольцом */
        outline:
          'bg-transparent data-[state=checked]:bg-transparent data-[state=checked]:ring-2 data-[state=checked]:ring-primary/40 data-[state=checked]:text-primary',
      },
      size: {
        sm: "!size-4 [&_[data-slot='checkbox-icon']]:size-3",
        md: "!size-5 [&_[data-slot='checkbox-icon']]:size-3.5",
        lg: "!size-6 [&_[data-slot='checkbox-icon']]:size-4",
        xl: "!size-7 [&_[data-slot='checkbox-icon']]:size-5",
      },
      glow: {
        true: 'hover:shadow-[0_10px_30px_-10px_var(--tw-shadow-color)] shadow-[#5865F2]/40 data-[state=checked]:shadow-[#5865F2]/45',
        false: '',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
      glow: true,
    },
  },
)

type BaseProps = React.ComponentProps<typeof CheckboxPrimitive.Root>

export type CheckboxProps = VariantProps<typeof checkboxVariants> & BaseProps

function Checkbox({ className, variant, size, glow, ...props }: CheckboxProps) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(checkboxVariants({ variant, size, glow }), className)}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className="grid place-content-center text-current transition-none"
      >
        <CheckIcon className="size-3.5" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
}

export { Checkbox, checkboxVariants }
