import { defineConfig, type UserConfigExport } from '@tarojs/cli'

import devConfig from './dev'
import prodConfig from './prod'

// https://taro-docs.jd.com/docs/next/config#defineconfig-辅助函数
export default defineConfig<'vite'>(async (merge, { command, mode }) => {
  console.log('当前命令：', command)
  console.log('当前环境：', mode)
  const baseConfig: UserConfigExport<'vite'> = {
    projectName: 'HomeStyleDishes',
    date: '2026-3-24',
    designWidth: 750,
    deviceRatio: {
      640: 2.34 / 2,
      750: 1,
      375: 2,
      828: 1.81 / 2
    },
    sourceRoot: 'src',
    outputRoot: 'dist/HomeStyleDishes',
    plugins: [
      '@tarojs/plugin-generator'
    ],
    defineConstants: {},
    copy: {
      patterns: [],
      options: {}
    },
    framework: 'react',
    compiler: 'vite',
    mini: {
      postcss: {
        pxtransform: {
          enable: true,
          config: {}
        },
        cssModules: {
          enable: false,
          config: {
            namingPattern: 'module',
            generateScopedName: '[name]__[local]___[hash:base64:5]'
          }
        }
      }
    }
  }

  if (mode === 'development') {
    return merge({}, baseConfig, devConfig)
  }

  return merge({}, baseConfig, prodConfig)
})
