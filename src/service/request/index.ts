import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig } from 'axios'

import type { MYRequestConfig } from './type'

// 针对AxiosRequestConfig配置进行扩展
// interface MYInterceptors {
//   requestSuccessFn: (
//     config: InternalAxiosRequestConfig
//   ) => InternalAxiosRequestConfig
//   requestFailureFn: (err: any) => any
//   responseSuccessFn: (res: AxiosResponse) => AxiosResponse
//   responseFailureFn: (err: any) => any
// }

// interface MYRequestConfig extends AxiosRequestConfig {
//   // ?:可选属性
//   interceptors?: MYInterceptors
// }

class MYRequest {
  instance: AxiosInstance

  // request实例 => axios的实例
  constructor(config: MYRequestConfig) {
    this.instance = axios.create(config)
    // 给每个instance设置拦截器
    this.instance.interceptors.request.use(
      (config) => {
        // token -- loading
        // console.log('全局请求成功的拦截')
        return config
      },
      (err) => {
        // console.log('全局请求失败的拦截')
        return err
      }
    )
    this.instance.interceptors.response.use(
      (res) => {
        // console.log('全局响应成功的拦截')
        return res.data
      },
      (err) => {
        // console.log('全局响应失败的拦截')
        return err
      }
    )

    // 针对特定的实例添加拦截器
    this.instance.interceptors.request.use(
      config.interceptors?.requestSuccessFn,
      config.interceptors?.requestFailureFn
    )
    this.instance.interceptors.response.use(
      config.interceptors?.responseSuccessFn,
      config.interceptors?.responseFailureFn
    )
  }

  // 封装网络请求的方法
  request<T = any>(config: AxiosRequestConfig) {
    return new Promise<T>((resolve, reject) => {
      this.instance
        .request<any, T>(config)
        .then((res) => {
          resolve(res)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }

  get<T = any>(config: MYRequestConfig<T>) {
    return this.request({ ...config, method: 'GET' })
  }

  post<T = any>(config: MYRequestConfig<T>) {
    return this.request({ ...config, method: 'POST' })
  }

  delete<T = any>(config: MYRequestConfig<T>) {
    return this.request({ ...config, method: 'DELETE' })
  }

  patch<T = any>(config: MYRequestConfig<T>) {
    return this.request({ ...config, method: 'PATCH' })
  }
}

export default MYRequest
