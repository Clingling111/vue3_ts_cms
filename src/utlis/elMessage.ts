import { ElMessage } from 'element-plus'

interface IElMessage {
  message: string
  type: 'success' | 'error'
}

const useElementMessage = ({ message, type = 'success' }: IElMessage) => {
  ElMessage({
    message,
    type
  })
}

export default useElementMessage
