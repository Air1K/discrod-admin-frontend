import { useState, type ComponentProps } from 'react'
import { Eye, EyeOff } from 'lucide-react'
import { Button } from '@/shared/ui/shadcn/Button'
import { Input, type InputProps } from '@/shared/ui/shadcn/Input'

type PasswordInputProps = Omit<InputProps, 'type' | 'rightSection'> & {
  inputType?: ComponentProps<'input'>['type']
}

const PasswordInput = ({ inputType = 'password', ...props }: PasswordInputProps) => {
  const [visible, setVisible] = useState(false)
  const isPasswordType = inputType === 'password'

  return (
    <Input
      {...props}
      type={isPasswordType && visible ? 'text' : inputType}
      rightSection={
        isPasswordType ? (
          <Button
            type="button"
            variant={'ghost'}
            size={'icon-sm'}
            glow={false}
            className="p-1.5 text-muted-foreground/80 hover:text-foreground hover:bg-input/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/60"
            onClick={() => setVisible((state) => !state)}
            aria-label={visible ? 'Скрыть пароль' : 'Показать пароль'}
            title={visible ? 'Скрыть пароль' : 'Показать пароль'}
          >
            {visible ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
          </Button>
        ) : null
      }
    />
  )
}

export { PasswordInput }
