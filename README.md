# vue3_ts_cms

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

```
vue3_ts_cms
├─ 📁.vscode
│  └─ 📄extensions.json
├─ 📁public
│  └─ 📄favicon.ico
├─ 📁src
│  ├─ 📁assets
│  │  ├─ 📁css
│  │  │  ├─ 📄common.less
│  │  │  ├─ 📄index.less
│  │  │  └─ 📄reset.less
│  │  └─ 📁img
│  │     ├─ 📄login-bg.svg
│  │     └─ 📄logo.svg
│  ├─ 📁base-ui
│  ├─ 📁components
│  │  ├─ 📁main-header
│  │  │  ├─ 📁c-cpns
│  │  │  │  ├─ 📄header-crumbs.vue
│  │  │  │  └─ 📄header-info.vue
│  │  │  └─ 📄main-header.vue
│  │  ├─ 📁main-menu
│  │  │  └─ 📄main-menu.vue
│  │  ├─ 📁page-content
│  │  │  └─ 📄page-content.vue
│  │  ├─ 📁page-echarts
│  │  │  ├─ 📁data
│  │  │  │  └─ 📄china.json
│  │  │  ├─ 📁src
│  │  │  │  ├─ 📄bar-echart.vue
│  │  │  │  ├─ 📄base-echart.vue
│  │  │  │  ├─ 📄line-echart.vue
│  │  │  │  ├─ 📄map-echart.vue
│  │  │  │  ├─ 📄pie-echart.vue
│  │  │  │  └─ 📄rose-echart.vue
│  │  │  ├─ 📁types
│  │  │  └─ 📁utils
│  │  │     ├─ 📄convert-data.ts
│  │  │     └─ 📄coordinate-data.ts
│  │  ├─ 📁page-modal
│  │  │  └─ 📄page-modal.vue
│  │  └─ 📁page-search
│  │     └─ 📄page-search.vue
│  ├─ 📁global
│  │  └─ 📄register-icons.ts
│  ├─ 📁hooks
│  │  ├─ 📄usePageContent.ts
│  │  ├─ 📄usePageModal.ts
│  │  └─ 📄usePagePermission.ts
│  ├─ 📁router
│  │  ├─ 📁login
│  │  ├─ 📁main
│  │  │  ├─ 📁analysis
│  │  │  │  ├─ 📁dashboard
│  │  │  │  │  └─ 📄dashboard.ts
│  │  │  │  └─ 📁overview
│  │  │  │     └─ 📄overview.ts
│  │  │  ├─ 📁product
│  │  │  │  ├─ 📁category
│  │  │  │  │  └─ 📄category.ts
│  │  │  │  └─ 📁goods
│  │  │  │     └─ 📄goods.ts
│  │  │  ├─ 📁story
│  │  │  │  ├─ 📁chat
│  │  │  │  │  └─ 📄chat.ts
│  │  │  │  └─ 📁list
│  │  │  │     └─ 📄list.ts
│  │  │  └─ 📁system
│  │  │     ├─ 📁department
│  │  │     │  └─ 📄department.ts
│  │  │     ├─ 📁menu
│  │  │     │  └─ 📄menu.ts
│  │  │     ├─ 📁role
│  │  │     │  └─ 📄role.ts
│  │  │     └─ 📁user
│  │  │        └─ 📄user.ts
│  │  └─ 📄index.ts
│  ├─ 📁service
│  │  ├─ 📁config
│  │  │  └─ 📄index.ts
│  │  ├─ 📁login
│  │  │  └─ 📄login.ts
│  │  ├─ 📁main
│  │  │  ├─ 📁analysis
│  │  │  │  └─ 📄analysis.ts
│  │  │  ├─ 📁system
│  │  │  │  └─ 📄system.ts
│  │  │  └─ 📄main.ts
│  │  ├─ 📁request
│  │  │  ├─ 📄index.ts
│  │  │  └─ 📄type.ts
│  │  └─ 📄index.ts
│  ├─ 📁store
│  │  ├─ 📁login
│  │  │  └─ 📄login.ts
│  │  ├─ 📁main
│  │  │  ├─ 📁analysis
│  │  │  │  └─ 📄analysis.ts
│  │  │  ├─ 📁product
│  │  │  │  └─ 📄product.ts
│  │  │  ├─ 📁system
│  │  │  │  └─ 📄system.ts
│  │  │  └─ 📄main.ts
│  │  └─ 📄index.ts
│  ├─ 📁utlis
│  │  ├─ 📄format.ts
│  │  └─ 📄mapMenuToRoute.ts
│  ├─ 📁views
│  │  ├─ 📁login
│  │  │  ├─ 📁c-cpns
│  │  │  │  ├─ 📄login-panel.vue
│  │  │  │  ├─ 📄panel-account.vue
│  │  │  │  └─ 📄panel-phone.vue
│  │  │  ├─ 📁types
│  │  │  │  └─ 📄index.ts
│  │  │  └─ 📄Login.vue
│  │  ├─ 📁main
│  │  │  ├─ 📁analysis
│  │  │  │  ├─ 📁dashboard
│  │  │  │  │  ├─ 📁c-cpns
│  │  │  │  │  │  ├─ 📁chart-card
│  │  │  │  │  │  │  └─ 📄chart-card.vue
│  │  │  │  │  │  └─ 📁count-card
│  │  │  │  │  │     └─ 📄count-card.vue
│  │  │  │  │  └─ 📄dashboard.vue
│  │  │  │  └─ 📁overview
│  │  │  │     └─ 📄overview.vue
│  │  │  ├─ 📁product
│  │  │  │  ├─ 📁category
│  │  │  │  │  ├─ 📁c-cpns
│  │  │  │  │  │  ├─ 📄category-content.vue
│  │  │  │  │  │  ├─ 📄category-modal.vue
│  │  │  │  │  │  └─ 📄category-search.vue
│  │  │  │  │  └─ 📄category.vue
│  │  │  │  └─ 📁goods
│  │  │  │     ├─ 📁config
│  │  │  │     │  ├─ 📄content.config.ts
│  │  │  │     │  ├─ 📄modal.config.ts
│  │  │  │     │  └─ 📄search.config.ts
│  │  │  │     └─ 📄goods.vue
│  │  │  ├─ 📁story
│  │  │  │  ├─ 📁chat
│  │  │  │  │  └─ 📄chat.vue
│  │  │  │  └─ 📁list
│  │  │  │     └─ 📄list.vue
│  │  │  ├─ 📁system
│  │  │  │  ├─ 📁department
│  │  │  │  │  ├─ 📁config
│  │  │  │  │  │  ├─ 📄content.config.ts
│  │  │  │  │  │  ├─ 📄modal.config.ts
│  │  │  │  │  │  └─ 📄search.config.ts
│  │  │  │  │  └─ 📄department.vue
│  │  │  │  ├─ 📁menu
│  │  │  │  │  ├─ 📁config
│  │  │  │  │  │  └─ 📄content.config.ts
│  │  │  │  │  └─ 📄menu.vue
│  │  │  │  ├─ 📁role
│  │  │  │  │  ├─ 📁config
│  │  │  │  │  │  ├─ 📄content.config.ts
│  │  │  │  │  │  ├─ 📄modal.config.ts
│  │  │  │  │  │  └─ 📄search.config.ts
│  │  │  │  │  └─ 📄role.vue
│  │  │  │  └─ 📁user
│  │  │  │     ├─ 📁c-cpns
│  │  │  │     │  ├─ 📄user-content.vue
│  │  │  │     │  ├─ 📄user-modal.vue
│  │  │  │     │  └─ 📄user-search.vue
│  │  │  │     └─ 📄user.vue
│  │  │  └─ 📄Main.vue
│  │  └─ 📁not-found
│  │     └─ 📄NotFound.vue
│  ├─ 📄App.vue
│  └─ 📄main.ts
├─ 📄.editorconfig
├─ 📄.env
├─ 📄.eslintrc.cjs
├─ 📄.gitignore
├─ 📄.prettierrc.json
├─ 📄auto-imports.d.ts
├─ 📄components.d.ts
├─ 📄env.d.ts
├─ 📄index.html
├─ 📄package-lock.json
├─ 📄package.json
├─ 📄README.md
├─ 📄tsconfig.app.json
├─ 📄tsconfig.json
├─ 📄tsconfig.node.json
├─ 📄vite.config.ts
├─ 📄Vue3+TS新的接口地址.md
└─ 📄项目搭建和接口文档.pdf
```