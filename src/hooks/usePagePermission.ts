import { useLoginStore } from '@/store/login/login'

const usePagePermission = (condition: string) => {
  const loginStore = useLoginStore()
  const { permission } = loginStore
  return !!permission.find((item) => item.includes(condition))
}

export default usePagePermission
