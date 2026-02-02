import { type FC } from 'react'
import LogoMark from '@/shared/ui/logo/LogoMark'

const LogoLockup: FC<React.ComponentProps<'a'>> = ({ href = '/', ...props }) => {
  return (
    <a
      {...props}
      href={href}
      className="inline-flex items-center gap-2"
      aria-label="Админ Дискорд — на главную"
    >
      <LogoMark className="shrink-0" aria-hidden="true" />

      <span className="flex flex-col gap-1 leading-none">
        <span className="text-xs uppercase tracking-wider text-muted-foreground">Админ-панель</span>
        <span className="text-xl font-semibold">Админ Дискорд</span>
      </span>
    </a>
  )
}

export default LogoLockup
