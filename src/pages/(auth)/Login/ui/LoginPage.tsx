import { type FC } from 'react'
import LogoLockup from '@/shared/ui/logo/LogoLockup.tsx'
import LoginCard from './LoginCard.tsx'
import InfoCards from './InfoCards.tsx'

const LoginPage: FC = () => {
  return (
    <div className={'w-screen h-screen flex gap-6 flex-col items-center justify-center'}>
      <LogoLockup />
      <LoginCard />
      <InfoCards />
    </div>
  )
}

export default LoginPage
