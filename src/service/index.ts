import { BASE_URL, TIME_OUT } from './config'
import MYRequest from './request'

const myRequest = new MYRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    // 为每个请求接口配置请求头(携带token)
    requestSuccessFn: (config) => {
      const token = localStorage.getItem('token')
      if (token && config.headers) {
        config.headers.Authorization = token
      }
      return config
    }
  }
})

export default myRequest

// 爱彼迎数据的拦截
// const myRequest2 = new myRequest({
//   baseURL: BASE_URL,
//   timeout: TIME_OUT,
//   interceptors: {
//     requestSuccessFn: (config) => {
//       console.log('爱彼迎的请求成功的拦截')
//       return config
//     },
//     requestFailureFn: (err) => {
//       console.log('爱彼迎的请求失败的拦截')
//       return err
//     },
//     responseSuccessFn: (config) => {
//       console.log('爱彼迎的响应成功的拦截')
//       return config
//     },
//     responseFailureFn: (err) => {
//       console.log('爱彼迎的响应失败的拦截')
//       return err
//     }
//   }
// })
