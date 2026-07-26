import { type FC } from 'react'
import { Link } from 'react-router'
import { routerPathKeys } from '@/shared/router/routerPathKeys.ts'
import { Button } from '@/shared/ui/shadcn/Button'

const RegistrationButton: FC = () => {
  return (
    <Button
      asChild
      variant={'outline'}
    >
      <Link to={routerPathKeys.register}>Зарегистрироваться</Link>
    </Button>
  )
}

export { RegistrationButton }
