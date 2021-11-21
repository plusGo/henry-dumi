export default {
  esm: 'rollup',
  cjs: 'rollup',
  umd: {
    name: 'henry',
    globals: {
      react: 'React',
      antd: 'antd',
    },
  },
  cssModules: true,
  extractCSS: true,
};
