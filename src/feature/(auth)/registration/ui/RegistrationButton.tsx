import { type FC } from 'react'
import { Button } from '@/shared/ui/shadcn/Button'
import { Link } from 'react-router'
import { routerPathKeys } from '@/shared/router/routerPathKeys.ts'

const RegistrationButton: FC = () => {
  return (
    <Button asChild variant={'outline'}>
      <Link to={routerPathKeys.register}>Зарегистрироваться</Link>
    </Button>
  )
}

export default RegistrationButton
