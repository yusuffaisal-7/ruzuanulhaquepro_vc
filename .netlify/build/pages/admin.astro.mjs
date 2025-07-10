/* empty css                                     */
import { e as createComponent, k as renderComponent, l as renderScript, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_KIt8zWfF.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_BqPIl83O.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Admin Login - Portfolio Management" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="min-h-screen bg-gradient-to-br from-navy-50 to-slate-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"> <div class="max-w-md w-full space-y-8"> <div class="text-center"> <h2 class="text-3xl font-bold text-navy-900 mb-2">Admin Access</h2> <p class="text-charcoal-600">Enter your credentials to manage portfolio content</p> </div> <div class="bg-white rounded-2xl shadow-lg p-8"> <form id="loginForm" class="space-y-6"> <div> <label for="email" class="block text-sm font-medium text-charcoal-700 mb-2">
Email Address
</label> <input type="email" id="email" name="email" required class="w-full px-4 py-3 border border-charcoal-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-navy-500 transition-colors" placeholder="Enter your admin email"> </div> <div> <label for="password" class="block text-sm font-medium text-charcoal-700 mb-2">
Password
</label> <input type="password" id="password" name="password" required class="w-full px-4 py-3 border border-charcoal-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-navy-500 transition-colors" placeholder="Enter your password"> </div> <button type="submit" class="w-full bg-navy-700 text-white py-3 px-4 rounded-lg font-semibold hover:bg-navy-800 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-navy-500 focus:ring-offset-2">
Login to Dashboard
</button> </form> <div id="message" class="mt-4 text-center text-sm"></div> </div> </div> </div> ` })} ${renderScript($$result, "/Users/yusuf/Downloads/project 4/src/pages/admin/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/yusuf/Downloads/project 4/src/pages/admin/index.astro", void 0);

const $$file = "/Users/yusuf/Downloads/project 4/src/pages/admin/index.astro";
const $$url = "/admin";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
