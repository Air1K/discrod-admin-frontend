import { type ComponentProps, type FC } from 'react'
import LogoLockup from '@/shared/ui/logo/LogoLockup.tsx'
import { InfoCards } from './InfoCards'
import { cn } from '@/shared/lib/utils.ts'

const AuthLayout: FC<ComponentProps<'div'>> = ({ children, className, ...props }) => {
  return (
    <div
      {...props}
      className={cn(className, 'w-screen h-screen flex gap-6 flex-col items-center justify-center')}
    >
      <LogoLockup />
      {children}
      <InfoCards />
    </div>
  )
}

export { AuthLayout }
