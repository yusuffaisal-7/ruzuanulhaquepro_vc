import { renderers } from './renderers.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_DRmTj19N.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/admin/dashboard.astro.mjs');
const _page2 = () => import('./pages/admin/messages.astro.mjs');
const _page3 = () => import('./pages/admin.astro.mjs');
const _page4 = () => import('./pages/api/admin/blog.astro.mjs');
const _page5 = () => import('./pages/api/admin/contact.astro.mjs');
const _page6 = () => import('./pages/api/admin/content.astro.mjs');
const _page7 = () => import('./pages/api/admin/delete-image.astro.mjs');
const _page8 = () => import('./pages/api/admin/delete-message.astro.mjs');
const _page9 = () => import('./pages/api/admin/images.astro.mjs');
const _page10 = () => import('./pages/api/admin/login.astro.mjs');
const _page11 = () => import('./pages/api/admin/mark-message-read.astro.mjs');
const _page12 = () => import('./pages/api/admin/messages.astro.mjs');
const _page13 = () => import('./pages/api/admin/save-blog.astro.mjs');
const _page14 = () => import('./pages/api/admin/update-profile.astro.mjs');
const _page15 = () => import('./pages/api/admin/update-research.astro.mjs');
const _page16 = () => import('./pages/api/admin/upload-image.astro.mjs');
const _page17 = () => import('./pages/blog/_slug_.astro.mjs');
const _page18 = () => import('./pages/blog.astro.mjs');
const _page19 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/admin/dashboard.astro", _page1],
    ["src/pages/admin/messages.astro", _page2],
    ["src/pages/admin/index.astro", _page3],
    ["src/pages/api/admin/blog.js", _page4],
    ["src/pages/api/admin/contact.js", _page5],
    ["src/pages/api/admin/content.js", _page6],
    ["src/pages/api/admin/delete-image.js", _page7],
    ["src/pages/api/admin/delete-message.js", _page8],
    ["src/pages/api/admin/images.js", _page9],
    ["src/pages/api/admin/login.js", _page10],
    ["src/pages/api/admin/mark-message-read.js", _page11],
    ["src/pages/api/admin/messages.js", _page12],
    ["src/pages/api/admin/save-blog.js", _page13],
    ["src/pages/api/admin/update-profile.js", _page14],
    ["src/pages/api/admin/update-research.js", _page15],
    ["src/pages/api/admin/upload-image.js", _page16],
    ["src/pages/blog/[slug].astro", _page17],
    ["src/pages/blog/index.astro", _page18],
    ["src/pages/index.astro", _page19]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "8765f9fe-19f2-48b3-8211-b4bd986add4a"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
