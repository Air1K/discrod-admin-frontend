import { type FC } from 'react'
import { Card, CardContent, CardFooter, CardHeader } from '@/shared/ui/shadcn/card.tsx'
import { LoginForm, LoginFromDiscordButton } from '@/feature/(auth)/login'
import { Separator } from '@/shared/ui/shadcn/separator.tsx'
import { Button } from '@/shared/ui/shadcn/Button'
import RegistrationButton from '@/feature/(auth)/registration/ui/RegistrationButton.tsx'

const LoginCard: FC = () => {
  return (
    <Card className={'w-1/2 max-w-[500px] bg-card/70'}>
      <CardHeader className={'text-center'}>
        <h3 className={'text-xl font-bold'}>Авторизация</h3>
        <p className={'text-sm text-muted-foreground'}>
          Войдите, чтобы управлять сервером и модерацией
        </p>
      </CardHeader>
      <CardContent className={'flex flex-col gap-5'}>
        <LoginFromDiscordButton />
        <div className="flex items-center gap-3">
          <Separator className="flex-1" />
          <span className="shrink-0 text-xs text-muted-foreground">или</span>
          <Separator className="flex-1" />
        </div>
        <LoginForm />
        <RegistrationButton />
      </CardContent>
      <CardFooter className={'text-muted-foreground'}>
        <p>
          Продолжая, вы соглашаетесь с{' '}
          <Button asChild variant={'link'} className={'decoration-1'}>
            <a href="/">Условием</a>
          </Button>{' '}
          и{' '}
          <Button asChild variant={'link'}>
            <a href={'/'}>Политикой</a>
          </Button>
          .
        </p>
      </CardFooter>
    </Card>
  )
}

export default LoginCard
