/// <reference types="vite/client" />

// 以declare关键字声明的类型 外部不必导入也能使用

declare module "*.vue" {
  import type { DefineComponent } from "vue";
  const vueComponent: DefineComponent<{}, {}, any>;
  export default vueComponent;
}