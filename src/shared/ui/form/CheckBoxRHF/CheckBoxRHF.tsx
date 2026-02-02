import { Controller, type Control, type FieldValues, type Path } from 'react-hook-form'
import { Checkbox, type CheckboxProps } from '../../shadcn/Checkbox'

type RHFCheckboxProps<T extends FieldValues> = Omit<
  CheckboxProps,
  'checked' | 'onCheckedChange' | 'name'
> & {
  control: Control<T>
  name: Path<T>
}

export function RHFCheckbox<T extends FieldValues>({
  control,
  name,
  ...props
}: RHFCheckboxProps<T>) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <Checkbox
          {...props}
          id={props.id ?? String(name)}
          checked={Boolean(field.value)}
          onCheckedChange={field.onChange}
          aria-invalid={fieldState.invalid}
        />
      )}
    />
  )
}
