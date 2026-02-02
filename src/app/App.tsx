import { Providers } from '@/app/providers'
import { attachAuthInterceptor } from '@/shared/api/httpClient.ts'
import { sessionStore } from '@/entities/session'

attachAuthInterceptor(() => sessionStore.getState().token)

export default function App() {
  return (
    <Providers.rectQuery>
      <Providers.theme>
        <Providers.router />
      </Providers.theme>
    </Providers.rectQuery>
  )
}
