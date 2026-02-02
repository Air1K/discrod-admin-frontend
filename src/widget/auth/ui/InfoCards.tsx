import { type FC } from 'react'
import InfoCard from '@/shared/ui/info/InfoCard.tsx'

const InfoCards: FC = () => {
  return (
    <div className="mx-auto mt-8 w-full max-w-4xl px-4">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        <InfoCard
          title="Роли и доступы"
          description="Быстро назначайте права модераторам и командам."
        />
        <InfoCard
          title="Логи и аудит"
          description="Следите за действиями и событиями в реальном времени."
        />
        <InfoCard
          title="Автомодерация"
          description="Фильтры, анти-спам и пользовательские правила."
        />
      </div>
    </div>
  )
}

export { InfoCards }
