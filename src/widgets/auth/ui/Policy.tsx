import { type FC } from 'react'
import { Button } from '@/shared/ui/shadcn/Button'

const Policy: FC = () => {
  return (
    <p>
      Продолжая, вы соглашаетесь с{' '}
      <Button asChild variant={'link'} className={'decoration-1'}>
        <a href="/">Условием</a>
      </Button>{' '}
      и{' '}
      <Button asChild variant={'link'}>
        <a href={'/'}>Политикой</a>
      </Button>
      .
    </p>
  )
}

export { Policy }
