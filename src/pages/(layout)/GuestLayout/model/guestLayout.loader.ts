import { type LoaderFunctionArgs, redirect } from 'react-router'
import { userStore } from '@/entities/user/model/user.store.ts'
import { routerPathKeys } from '@/shared/router/routerPathKeys.ts'

export default async function guestLayoutLoader(arg: LoaderFunctionArgs) {
  if (userStore.getState().user) {
    return redirect(routerPathKeys.home)
  }
  return arg
}
