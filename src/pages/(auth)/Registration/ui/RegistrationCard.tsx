import { type FC } from 'react'
import { Card, CardContent, CardFooter, CardHeader } from '@/shared/ui/shadcn/card.tsx'
import { Policy } from '@/widgets/auth'
import { Button } from '@/shared/ui/shadcn/Button'
import { Link } from 'react-router'
import { routerPathKeys } from '@/shared/router/routerPathKeys.ts'
import { RegistrationForm } from '@/features/(auth)/registration'

const RegistrationCard: FC = () => {
  return (
    <Card className={'md:w-1/2 max-w-[500px] bg-card/70'}>
      <CardHeader className={'text-center'}>
        <h3 className={'text-xl font-bold'}>Регистрация</h3>
        <p className={'text-sm text-muted-foreground'}>
          Зарегистрируйтесь, чтобы управлять сервером и модерацией
        </p>
      </CardHeader>
      <CardContent className={'flex flex-col gap-5'}>
        <RegistrationForm />
        <Button
          variant={'outline'}
          asChild
        >
          <Link to={routerPathKeys.login}>У меня уже есть аккаунт</Link>
        </Button>
      </CardContent>
      <CardFooter className={'text-muted-foreground'}>
        <Policy />
      </CardFooter>
    </Card>
  )
}

export default RegistrationCard
