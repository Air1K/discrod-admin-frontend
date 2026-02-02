import { type FC } from 'react'
import { Card, CardContent, CardHeader } from '@/shared/ui/shadcn/card.tsx'

interface InfoCardProps {
  title: string
  description: string
}

const InfoCard: FC<InfoCardProps> = ({ title, description }) => {
  return (
    <Card className={'gap-1 p-4 [&>div]:p-0'}>
      <CardHeader className={'block'}>
        <h3>{title}</h3>
      </CardHeader>
      <CardContent className={'text-sm text-muted-foreground leading-4'}>
        <p>{description}</p>
      </CardContent>
    </Card>
  )
}

export default InfoCard
