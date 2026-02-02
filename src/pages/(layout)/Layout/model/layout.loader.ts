import { checkAuthQuery } from '@/feature/(auth)/checkAuth/model/checkAuth.query.ts'

export default async function layoutLoader() {
  await checkAuthQuery()
  return null
}
