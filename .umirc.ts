import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  // base: "/xastbenchmark.github.io",
  // publicPath: "/xastbenchmark.github.io/",
  layout: {
    title: "xAST评价体系",
  },
  routes: [
    // {
    //   path: '/',
    //   redirect: '/homePage',
    // },
    {
      // name: 'xast评价体系',
      path: '/',
      component: './xAST',
      // 不展示顶栏
      headerRender: false,
      // 不展示页脚
      footerRender: false,
      // 不展示菜单
      menuRender: false,
    }
  ],
  npmClient: 'pnpm',
});
