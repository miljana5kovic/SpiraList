
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/SpiraList/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/SpiraList"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 23573, hash: 'cbe2924ca7710704e292bc54311d449e89abfb7228f5ff16c856eebc137edf12', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17147, hash: '45fab813d4e1266f743f2cefeb240eac97103df7b40e1e7bb1fbf9bab7c4ebad', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 83933, hash: 'ebe8e025472a9962a10f4b73bf6a6cb091b3572c83a073d16b3914a924749b85', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-36AW6TKX.css': {size: 6979, hash: 'vY6tjD/ce7M', text: () => import('./assets-chunks/styles-36AW6TKX_css.mjs').then(m => m.default)}
  },
};
