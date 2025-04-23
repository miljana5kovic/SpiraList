
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/spiralist/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/spiralist"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 23573, hash: '568f44529e71eeeb87770d231e97cd8c58cff9822aef62b105e000618c5b6bd8', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17147, hash: '4c0e4573247a8f9e3c2d5cfa8d176b15f43ae6f132e02983536e0c54359e3c03', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 83933, hash: '11ad340bfe1e3395894b645911f148c344683da97f72a307fa0bebc9d4838452', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-36AW6TKX.css': {size: 6979, hash: 'vY6tjD/ce7M', text: () => import('./assets-chunks/styles-36AW6TKX_css.mjs').then(m => m.default)}
  },
};
