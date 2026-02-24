import { type FC } from 'react'
import { AuthLayout } from '@/widgets/auth'
import RegistrationCard from './RegistrationCard.tsx'

const RegistrationPage: FC = () => {
  return (
    <AuthLayout>
      <RegistrationCard />
    </AuthLayout>
  )
}

export default RegistrationPage
