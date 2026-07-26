import { type FC } from 'react'
import DiscordIcon from '@/shared/icon/DiscordIcon.tsx'
import { Button } from '@/shared/ui/shadcn/Button'

const LoginDiscordButton: FC = () => {
  return (
    <Button size={'lg'} className={'w-full'}>
      <DiscordIcon />
      Войти через Discord
    </Button>
  )
}

export { LoginDiscordButton }
