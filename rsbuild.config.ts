import { defineConfig } from '@rsbuild/core'
import { pluginReact } from '@rsbuild/plugin-react'
import { TanStackRouterRspack } from '@tanstack/router-plugin/rspack'
import path from 'node:path';

const useDevelopment = process.env.NODE_ENV === 'development';


const base = useDevelopment
    ? ''
    : process.env.PUBLIC_URL
      ? path.resolve(process.env.PUBLIC_URL)
      : `/appstatic/`;

export default defineConfig({
  html: {
    template: path.join(process.cwd(), './public/index.html'),
    templateParameters: {
      public: base,
    },
  },
  plugins: [pluginReact()],
  tools: {
    rspack: {
      plugins: [TanStackRouterRspack({ target: 'react', autoCodeSplitting: true })],
    },
  },
})
