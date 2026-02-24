import { type FC } from 'react'
import { Card, CardContent, CardFooter, CardHeader } from '@/shared/ui/shadcn/card.tsx'
import { LoginForm, LoginFromDiscordButton } from '@/features/(auth)/login'
import { Separator } from '@/shared/ui/shadcn/separator.tsx'
import { RegistrationButton } from '@/features/(auth)/registration'
import { Policy } from '@/widgets/auth'

const LoginCard: FC = () => {
  return (
    <Card className={'md:w-1/2 max-w-[500px] bg-card/70'}>
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
        <Policy />
      </CardFooter>
    </Card>
  )
}

export default LoginCard
