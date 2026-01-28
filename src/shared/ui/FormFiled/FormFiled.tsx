import { type FC } from 'react'
import { cn } from '@/shared/lib/utils.ts'
import Label from '@/shared/ui/Label/Label.tsx'
import ErrorMessage from '@/shared/ui/Message/ErrorMessage.tsx'

interface FormFiledProps extends React.ComponentProps<'fieldset'> {
  label?: string
  labelPosition?: 'left' | 'right' | 'top' | 'bottom'
  required?: boolean
  errorMessage?: string
  disabled?: boolean
}

const FormFiled: FC<FormFiledProps> = ({
  label,
  errorMessage,
  required,
  children,
  className,
  disabled,
  labelPosition = 'top',
  ...props
}) => {
  return (
    <fieldset {...props} className={cn('', className, disabled && 'opacity-20')}>
      <div
        className={cn(
          'flex gap-2',
          labelPosition === 'top' && 'flex-col',
          labelPosition === 'bottom' && 'flex-col-reverse',
          labelPosition === 'left' && 'flex-row items-center justify-start',
          labelPosition === 'right' && 'flex-row-reverse items-center justify-end',
        )}
      >
        {(required || label) && (
          <div>
            <Label text={label} />
            {required ? <span className="text-destructive ml-1">*</span> : null}
          </div>
        )}
        {children}
      </div>
      <ErrorMessage message={errorMessage} />
    </fieldset>
  )
}

export default FormFiled
