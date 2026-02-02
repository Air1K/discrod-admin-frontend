import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/shared/lib/utils.ts'

const badgeVariants = cva(
  [
    'inline-flex items-center justify-center shrink-0 whitespace-nowrap',
    'border font-medium',
    'transition-[color,background-color,border-color,box-shadow]',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50',
    'aria-invalid:ring-2 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive',
    '[&>svg]:shrink-0 [&>svg]:pointer-events-none',
  ].join(' '),
  {
    variants: {
      variant: {
        soft: 'bg-muted/50 text-muted-foreground border-border/40',
        kicker:
          'bg-card/40 text-muted-foreground border-border/30 backdrop-blur supports-[backdrop-filter]:backdrop-blur-md uppercase tracking-[0.22em]',
        icon: 'bg-card text-foreground border-border/35 shadow-sm shadow-black/5 dark:shadow-black/20',
        solid: 'bg-primary text-primary-foreground border-transparent',
        outline: 'bg-transparent text-foreground border-border/60',
        destructive:
          'bg-destructive text-white border-transparent focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40',
      },

      /**
       * rect: высота фикс, ширина по контенту + padding (badge)
       * circle: строгий круг (w=h) (обычно под иконку)
       * square: строгий квадрат (w=h), но не круг (радиус меньше)
       */
      shape: {
        rect: '', // радиус зададим через compoundVariants по размеру
        circle: 'rounded-full',
        square: '', // радиус зададим через compoundVariants по размеру
      },

      size: {
        xs: '',
        sm: '',
        md: '',
        lg: '',
      },
    },

    compoundVariants: [
      // RECT (height fixed, width by content + padding)
      {
        shape: 'rect',
        size: 'xs',
        className: 'h-5 px-2 rounded-md text-[10px] leading-none gap-1 [&>svg]:size-3',
      },
      {
        shape: 'rect',
        size: 'sm',
        className: 'h-6 px-2.5 rounded-md text-xs leading-none gap-1.5 [&>svg]:size-3.5',
      },
      {
        shape: 'rect',
        size: 'md',
        className: 'h-7 px-3 rounded-lg text-sm leading-none gap-1.5 [&>svg]:size-4',
      },
      {
        shape: 'rect',
        size: 'lg',
        className: 'h-8 px-3.5 rounded-lg text-sm leading-none gap-2 [&>svg]:size-4.5',
      },

      // CIRCLE (w=h, no padding)
      { shape: 'circle', size: 'xs', className: 'h-6 w-6 p-0 [&>svg]:size-3' },
      { shape: 'circle', size: 'sm', className: 'h-8 w-8 p-0 [&>svg]:size-4' },
      { shape: 'circle', size: 'md', className: 'h-10 w-10 p-0 [&>svg]:size-5' },
      { shape: 'circle', size: 'lg', className: 'h-12 w-12 p-0 [&>svg]:size-6' },

      // SQUARE (w=h, no padding, rounded but not full)
      { shape: 'square', size: 'xs', className: 'h-6 w-6 p-0 rounded-md [&>svg]:size-3' },
      { shape: 'square', size: 'sm', className: 'h-8 w-8 p-0 rounded-xl [&>svg]:size-4' },
      { shape: 'square', size: 'md', className: 'h-10 w-10 p-0 rounded-xl [&>svg]:size-5' },
      { shape: 'square', size: 'lg', className: 'h-12 w-12 p-0 rounded-2xl [&>svg]:size-6' },
    ],

    defaultVariants: {
      variant: 'soft',
      shape: 'rect',
      size: 'sm',
    },
  },
)

type BadgeProps = React.ComponentProps<'span'> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }

function Badge({ className, variant, shape, size, asChild = false, ...props }: BadgeProps) {
  const Comp = asChild ? Slot : 'span'
  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant, shape, size }), className)}
      {...props}
    />
  )
}

export { Badge, badgeVariants }
