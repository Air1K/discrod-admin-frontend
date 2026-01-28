import { type FC } from 'react'
import { Card, CardContent, CardHeader } from '@/shared/ui/shadcn/card.tsx'

interface InfoCardProps {
  title: string
  description: string
}

const InfoCard: FC<InfoCardProps> = ({ title, description }) => {
  return (
    <Card>
      <CardHeader>
        <h3>{title}</h3>
      </CardHeader>
      <CardContent>
        <p>{description}</p>
      </CardContent>
    </Card>
  )
}

export default InfoCard
