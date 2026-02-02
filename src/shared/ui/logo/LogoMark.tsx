import { type FC } from 'react'
import { Badge } from '@/shared/ui/shadcn/Badge/badge.tsx'
import { ShieldCheck } from 'lucide-react'
import * as React from 'react'

const LogoMark: FC<React.ComponentProps<'div'>> = (props) => {
  return (
    <Badge variant={'icon'} shape={'square'} size={'lg'} {...props}>
      <ShieldCheck />
    </Badge>
  )
}

export default LogoMark
