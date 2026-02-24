import { type FC } from 'react'
import LoginCard from './LoginCard.tsx'
import { AuthLayout } from '@/widgets/auth'

const LoginPage: FC = () => {
  return (
    <AuthLayout>
      <LoginCard />
    </AuthLayout>
  )
}

export default LoginPage
