import { type FC } from 'react'
import { cn } from '@/shared/lib/utils.ts'

interface ErrorMessageProps extends React.ComponentProps<'p'> {
  message?: string
}

const ErrorMessage: FC<ErrorMessageProps> = ({ message, className, ...props }) => {
  if (!message) return null
  return (
    <p {...props} role="alert" className={cn('text-xs text-destructive', className)}>
      {message}
    </p>
  )
}

export default ErrorMessage
