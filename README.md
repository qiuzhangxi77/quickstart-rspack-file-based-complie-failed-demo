# Example

To run this example:

- `npm ci`
- `npm run dev`

## background

you can get the background from this issue:https://github.com/TanStack/router/issues/4456

## Branches

- v1.116.1(@tanstack/router-plugin)
  - parsing successful
- v1.121.22(@tanstack/router-plugin)
  - parsing failed
  ```
  × Error: [html-rspack-plugin]: Child compilation failed:
  │   × Module parse failed:
  │   ╰─▶   × JavaScript parsing error: Expression expected
  │          ╭─[1:0]
  │        1 │ <!DOCTYPE html>
  │          · ─
  │        2 │ <!--
  │        3 │     NOTE: This HTML file is a template. If you open it directly in the browser,
  │          ╰────
  │
  │   help:
  │         File was processed with these loaders:
  │          * commonjs|/home/mujin/mujin/zhangxi/quickstart-rspack-file-based-complie-failed-demo/node_modules/@rsbuild/core/compiled/html-rspack-plugin/loader.js
  │          * module|/home/mujin/mujin/zhangxi/quickstart-rspack-file-based-complie-failed-demo/node_modules/unplugin/dist/rspack/loaders/transform.js??tanstack-router:code-splitter:compile-reference-file
  │         You may need an additional loader to handle the result of these loaders.
  ```

## breaking changes commit?
- @tanstack/router-plugin@1.121.7: [commit](https://github.com/TanStack/router/commit/fc926bf9d2a6b8a2aacf8c4e3b93e64ebd0690e3)
