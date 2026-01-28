import type { LoaderFunctionArgs } from 'react-router'
import { checkAuthQuery } from '@/feature/(auth)/checkAuth/model/checkAuth.query.ts'

export default async function layoutLoader(arg: LoaderFunctionArgs) {
  await checkAuthQuery()
  return arg
}
