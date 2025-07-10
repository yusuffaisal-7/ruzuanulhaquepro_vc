/* empty css                                        */
import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, l as renderScript } from '../../chunks/astro/server_KIt8zWfF.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_BqPIl83O.mjs';
/* empty css                                       */
export { renderers } from '../../renderers.mjs';

const $$Messages = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Admin Messages - Portfolio Management", "data-astro-cid-bglp5o5y": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="min-h-screen bg-slate-50" data-astro-cid-bglp5o5y> <header class="bg-white shadow-sm border-b border-slate-200" data-astro-cid-bglp5o5y> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-astro-cid-bglp5o5y> <div class="flex justify-between items-center h-16" data-astro-cid-bglp5o5y> <h1 class="text-xl font-bold text-navy-900" data-astro-cid-bglp5o5y>Contact Messages</h1> <a href="/admin/dashboard" class="text-navy-700 hover:underline" data-astro-cid-bglp5o5y>Back to Dashboard</a> </div> </div> </header> <main class="max-w-4xl mx-auto py-10 px-4" data-astro-cid-bglp5o5y> <h2 class="text-2xl font-bold mb-8" data-astro-cid-bglp5o5y>Inbox</h2> <div id="messagesList" class="space-y-8" data-astro-cid-bglp5o5y></div> </main> </div> ${renderScript($$result2, "/Users/yusuf/Downloads/project 4/src/pages/admin/messages.astro?astro&type=script&index=0&lang.ts")}  ` })}`;
}, "/Users/yusuf/Downloads/project 4/src/pages/admin/messages.astro", void 0);

const $$file = "/Users/yusuf/Downloads/project 4/src/pages/admin/messages.astro";
const $$url = "/admin/messages";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Messages,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
