export default function vitePluginTransformId() {
  return {
    name: 'vite-plugin-transform-id',
    buildStart() {
      console.log('Testing My First Vite Plugin, Build is Starting...')
    },
    resolveId(source: string) {
      if (source === 'special-module') {
        return '/path/to/special-module.js';
      }
      return null; // proceed with default resolution
    },
    transform(code: string, id: string) {
      if (!/\.vue$/.test(id) && !id.includes('node_modules')) {
        console.log(`Transform 盐城 ${id}...`);
      }
      return code
    }
  }
}