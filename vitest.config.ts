import {defineConfig} from 'vitest/config'

export default defineConfig({
  test: {
    coverage: {
      provider: 'v8',
      exclude: ['__test__/**/*'],
    },
    reporters: ['defualt','html'],
    globals: true,
    environment: 'jsdom',
    css: false   
  }
})