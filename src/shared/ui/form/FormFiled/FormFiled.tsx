import { type FC } from 'react'
import { Field, FieldError, FieldLabel, type FieldProps } from '@/shared/ui/shadcn/field.tsx'
import { cn } from '@/shared/lib/utils.ts'

interface FormFiledProps extends FieldProps {
  name?: string
  label?: string
  required?: boolean
  errorMessage?: string
  disabled?: boolean
  revers?: boolean
}

const FormFiled: FC<FormFiledProps> = ({
  name,
  label,
  errorMessage,
  required,
  children,
  revers = false,
  className,
  ...props
}) => {
  return (
    <Field
      {...props}
      className={cn(
        className,
        revers &&
          (props.orientation === 'horizontal'
            ? 'flex-row-reverse justify-end'
            : 'flex-col-reverse'),
      )}
    >
      {(required || label) && (
        <div className={'flex gap-1'}>
          <FieldLabel htmlFor={name}>{label} </FieldLabel>
          {required ? <span className="text-destructive ml-1">*</span> : null}
        </div>
      )}
      {children}
      {errorMessage && <FieldError errors={[{ message: errorMessage }]} />}
    </Field>
  )
}

export default FormFiled
