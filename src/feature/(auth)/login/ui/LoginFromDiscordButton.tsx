import { type FC } from 'react'
import { Button } from '@/shared/ui/shadcn/Button'
import DiscordIcon from '@/shared/icon/DiscordIcon.tsx'

const LoginFromDiscordButton: FC = () => {
  return (
    <Button size={'lg'} className={'w-full'}>
      <DiscordIcon />
      Войти через Discord
    </Button>
  )
}

export { LoginFromDiscordButton }
