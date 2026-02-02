import { type FC } from 'react'
import * as React from 'react'

const BackgroundLayout: FC<React.ComponentProps<'div'>> = ({
  className = '',
  children,
  ...props
}) => {
  return (
    <div className={'relative ' + className} {...props}>
      <div aria-hidden className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.22]"
          style={{
            backgroundImage:
              'linear-gradient(to right, var(--border) 1px, transparent 1px), linear-gradient(to bottom, var(--border) 1px, transparent 1px)',
            backgroundSize: '50px 50px, 50px 50px',
          }}
        />
        <div
          className="absolute -left-24 -top-24 h-96 w-96 rounded-full blur-3xl opacity-80 animate-pulse animation-duration-8000"
          style={{
            background: 'radial-gradient(circle at 30% 30%, #5865F2 0%, rgba(88,101,242,0) 60%)',
          }}
        />
        <div
          className="absolute -right-24 top-1/4 h-112 w-md rounded-full blur-3xl opacity-70 animate-pulse animation-duration-8000"
          style={{
            background: 'radial-gradient(circle at 70% 30%, #3b48c5 0%, rgba(59,72,197,0) 60%)',
          }}
        />
        <div
          className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 rounded-[2.5rem] blur-2xl opacity-30 animate-pulse animation-duration-5000"
          style={{
            background:
              'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0) 60%)',
            boxShadow: 'inset 0 0 120px rgba(88,101,242,0.35)',
          }}
        />
      </div>
      {children}
    </div>
  )
}

export default BackgroundLayout
