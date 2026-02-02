import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/shared/lib/utils'
import Spinner from '@/shared/ui/Spinner.tsx'

const buttonVariants = cva(
  [
    'inline-flex items-center justify-center gap-2 whitespace-nowrap',
    'rounded-xl text-sm font-medium',
    'transition-all',
    'disabled:pointer-events-none disabled:opacity-50',
    '[&_svg]:pointer-events-none [&_svg:not([class*="size-"])]:size-4 [&_svg]:shrink-0',
    'shrink-0 outline-none focus-visible:ring-4 focus-visible:ring-ring/35',
    'cursor-pointer',
  ].join(' '),
  {
    variants: {
      variant: {
        /**
         * primary из твоей схемы (светлая/тёмная тема берётся из переменных)
         * Визуальный "glow" лучше вынести в отдельный variant (у тебя он уже есть).
         */
        default:
          'bg-primary text-primary-foreground shadow-sm hover:brightness-110 active:brightness-95',

        /**
         * destructive — из твоей схемы
         */
        destructive:
          'bg-destructive text-destructive-foreground shadow-sm hover:brightness-110 active:brightness-95 focus-visible:ring-destructive/35',

        /**
         * outline — нейтральная обводка
         */
        outline:
          'border border-border bg-transparent text-foreground hover:bg-accent hover:text-accent-foreground',

        /**
         * secondary — нейтральная заливка
         */
        secondary:
          'bg-secondary text-secondary-foreground hover:bg-secondary/80 active:bg-secondary/70',

        /**
         * ghost — минимальное действие
         */
        text: 'bg-transparent !p-0 h-auto rounded-none text-foreground/80 hover:text-foreground focus-visible:ring-0',
        ghost: 'bg-transparent text-foreground hover:bg-accent hover:text-accent-foreground',
        link: 'hover:text-primary p-0! underline',
      },

      size: {
        default: 'px-4 py-2.5 has-[>svg]:px-3',
        sm: 'rounded-lg gap-1.5 px-3 py-2 has-[>svg]:px-2.5',
        lg: 'rounded-2xl px-6 py-4 has-[>svg]:px-5 text-base [&_svg:not([class*="size-"])]:size-5',
        icon: 'size-10 rounded-xl',
        'icon-sm': 'size-8 rounded-lg',
        'icon-lg': 'size-12 rounded-2xl',
      },

      glow: {
        true: 'hover:shadow-[0_10px_30px_-10px_hsl(var(--ring)/.45)]',
        false: '',
      },

      loading: {
        true: 'cursor-progress',
        false: '',
      },
    },

    defaultVariants: {
      variant: 'default',
      size: 'default',
      glow: true,
      loading: false,
    },
  },
)

export type ButtonProps = React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
    loading?: boolean
  }

function Button({
  className,
  variant,
  size,
  asChild = false,
  glow,
  loading,
  children,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : 'button'
  const element = loading ? <Spinner /> : children
  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      aria-busy={loading ? 'true' : undefined}
      className={cn(buttonVariants({ variant, size, glow, loading }), className)}
      {...props}
    >
      {element}
    </Comp>
  )
}

export { Button, buttonVariants }
