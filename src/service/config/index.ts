// 1.区分开发环境和生产环境
// export const BASE_URL = 'http://coderwhy.dev:8000'
// export const BASE_URL = 'http://123.207.32.32:8000'

// 2.代码逻辑判断，判断当前环境
// vite默认提供的环境变量
// console.log(import.meta.env.MODE)

// let BASE_URL = ''
// if (true) {
//   BASE_URL = 'http://coderwhy.prod:8000'
// } else {
//   BASE_URL = 'http://coderwhy.dev:8000'
// }

// let BASE_URL = ''
// if (import.meta.env.MODE === 'production') {
//   BASE_URL = 'http://coderwhy.prod:8000'
// } else {
//   BASE_URL = 'http://coderwhy.dev:8000'
// }

// 3.通过创建.env文件直接创建变量
// console.log(import.meta.env.VITE_URL)

export const BASE_URL = 'http://123.207.32.32:5000'
export const TIME_OUT = 10000
