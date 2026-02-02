import { redirect } from 'react-router'
import { userStore } from '@/entities/user/model/user.store.ts'
import { routerPathKeys } from '@/shared/router/routerPathKeys.ts'

export default async function privateLayoutLoader() {
  if (!userStore().user) {
    return redirect(routerPathKeys.login)
  }
  return null
}
