import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/shared/lib/utils'
import { Loader2 } from 'lucide-react'

const inputVariants = cva(
  'block w-full min-w-0 rounded-xl transition-all outline-none disabled:pointer-events-none disabled:opacity-50 \
   placeholder:text-muted-foreground/70 text-foreground selection:bg-primary selection:text-primary-foreground \
   focus-visible:ring-4 focus-visible:ring-ring/35 focus-visible:border-ring \
   aria-invalid:border-destructive aria-invalid:ring-4 aria-invalid:ring-destructive/30 \
   file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground',
  {
    variants: {
      variant: {
        filled:
          'bg-input/50 dark:bg-input/30 border border-input/60 shadow-xs hover:bg-input/60 dark:hover:bg-input/40',
        outline: 'bg-transparent border border-input/70 shadow-xs hover:border-input',
        ghost: 'bg-transparent border border-transparent hover:bg-input/30 dark:hover:bg-input/20',
      },
      size: {
        sm: 'h-9 px-3 text-sm',
        md: 'h-10 px-3.5 text-sm',
        lg: 'h-11 px-4 text-base',
        xl: 'h-14 px-5 text-base',
      },
      withLeft: { true: 'pl-10', false: '' },
      withRight: { true: 'pr-10', false: '' },
      loading: { true: 'cursor-progress', false: '' },
      state: {
        default: '',
        success:
          'border-emerald-500/60 ring-4 ring-emerald-500/25 focus-visible:ring-emerald-500/35',
      },
    },
    defaultVariants: {
      variant: 'filled',
      size: 'md',
      withLeft: false,
      withRight: false,
      loading: false,
      state: 'default',
    },
  },
)

export type InputProps = Omit<React.ComponentProps<'input'>, 'size'> &
  VariantProps<typeof inputVariants> & {
    /** Неинтерактивная иконка слева */
    leftIcon?: React.ReactNode
    /** Неинтерактивная иконка справа */
    rightIcon?: React.ReactNode
    /** Интерактивный правый слот (кнопка/триггер) — имеет приоритет над rightIcon */
    rightSection?: React.ReactNode
    /** Лоадер справа — главный приоритет */
    loading?: boolean
    /** Классы для внешнего контейнера */
    containerClassName?: string
    /** Состояние ошибки можно дать через aria-invalid={true} */
  }

function Input({
  className,
  containerClassName,
  variant,
  size,
  leftIcon,
  rightIcon,
  rightSection,
  loading,
  state,
  ...props
}: InputProps) {
  const hasLeft = Boolean(leftIcon)
  const hasRight = Boolean(rightIcon || rightSection || loading)

  return (
    <div
      className={cn('relative', containerClassName)}
      data-slot="input-wrapper"
      data-variant={variant}
      data-size={size}
    >
      {leftIcon && (
        <span
          data-slot="input-left"
          className="pointer-events-none absolute inset-y-0 left-0 grid w-10 place-items-center text-muted-foreground"
        >
          {leftIcon}
        </span>
      )}

      <input
        data-slot="input"
        data-variant={variant}
        data-size={size}
        aria-busy={loading ? 'true' : undefined}
        className={cn(
          inputVariants({
            variant,
            size,
            withLeft: hasLeft,
            withRight: hasRight,
            loading,
            state,
          }),
          className,
        )}
        {...props}
      />

      {!rightSection && !loading && rightIcon && (
        <span
          data-slot="input-right"
          className="pointer-events-none absolute inset-y-0 right-0 grid w-10 place-items-center text-muted-foreground"
        >
          {rightIcon}
        </span>
      )}

      {rightSection && (
        <div className="absolute inset-y-0 right-0 grid w-10 place-items-center">
          {rightSection}
        </div>
      )}

      {loading && (
        <div className="absolute inset-y-0 right-0 grid w-10 place-items-center text-muted-foreground">
          <Loader2 className="size-4 animate-spin" aria-hidden />
        </div>
      )}
    </div>
  )
}

export { Input, inputVariants }
