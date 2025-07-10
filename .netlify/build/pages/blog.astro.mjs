/* empty css                                     */
import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../chunks/astro/server_KIt8zWfF.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_BqPIl83O.mjs';
import { $ as $$Header, a as $$Footer } from '../chunks/Footer_BBN17UHO.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const blogPosts = [
    {
      title: "The Future of Higher Education: AI Integration and Human-Centered Learning",
      excerpt: "Exploring how artificial intelligence can enhance educational experiences while maintaining the human elements that make learning meaningful and transformative. This comprehensive analysis examines current trends, challenges, and opportunities in AI-driven education.",
      date: "2024-01-15",
      category: "Education Technology",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
      slug: "future-higher-education-ai-human-learning",
      readTime: "8 min read"
    },
    {
      title: "Building Sustainable Research Communities in Developing Nations",
      excerpt: "Strategies for fostering collaborative research environments that drive innovation while addressing local challenges and global sustainability goals. Learn how to establish research networks that create lasting impact.",
      date: "2024-01-08",
      category: "Research Development",
      image: "https://images.pexels.com/photos/3184302/pexels-photo-3184302.jpeg?auto=compress&cs=tinysrgb&w=800",
      slug: "sustainable-research-communities-developing-nations",
      readTime: "6 min read"
    },
    {
      title: "Leadership in Academic Excellence: Lessons from Two Decades",
      excerpt: "Reflecting on key insights from academic leadership roles and the evolving landscape of university administration in the digital age. Essential strategies for modern academic leaders.",
      date: "2024-01-01",
      category: "Academic Leadership",
      image: "https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=800",
      slug: "leadership-academic-excellence-lessons",
      readTime: "10 min read"
    },
    {
      title: "Data-Driven Decision Making in University Management",
      excerpt: "How modern analytics and data science techniques are revolutionizing institutional planning, student success initiatives, and resource optimization in higher education institutions.",
      date: "2023-12-20",
      category: "Data Science",
      image: "https://images.pexels.com/photos/669616/pexels-photo-669616.jpeg?auto=compress&cs=tinysrgb&w=800",
      slug: "data-driven-decision-making-university-management",
      readTime: "7 min read"
    },
    {
      title: "Interdisciplinary Research: Breaking Academic Silos",
      excerpt: "The importance of cross-disciplinary collaboration in addressing complex global challenges. How universities can foster interdisciplinary research environments.",
      date: "2023-12-10",
      category: "Research Methodology",
      image: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800",
      slug: "interdisciplinary-research-breaking-silos",
      readTime: "9 min read"
    },
    {
      title: "Digital Transformation in Higher Education Post-Pandemic",
      excerpt: "Examining the lasting changes brought by COVID-19 to university systems worldwide and how institutions can build resilient, hybrid learning environments.",
      date: "2023-11-28",
      category: "Digital Innovation",
      image: "https://images.pexels.com/photos/4144096/pexels-photo-4144096.jpeg?auto=compress&cs=tinysrgb&w=800",
      slug: "digital-transformation-higher-education-pandemic",
      readTime: "12 min read"
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Blog - Academic Insights and Leadership Perspectives" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${maybeRenderHead()}<main class="pt-16"> <!-- Hero Section --> <section class="py-20 bg-gradient-to-br from-navy-50 via-white to-navy-100"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="text-center mb-12 fade-in-scroll"> <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-navy-900 mb-6">
Academic Insights
</h1> <p class="text-xl text-charcoal-600 max-w-3xl mx-auto">
Thoughts on education, research, leadership, and the evolving landscape of higher education institutions.
</p> </div> </div> </section> <!-- Blog Posts Grid --> <section class="py-20 bg-white"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> ${blogPosts.map((post, index) => renderTemplate`<article class="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden fade-in-scroll"> <div class="h-48 overflow-hidden"> <img${addAttribute(post.image, "src")}${addAttribute(post.title, "alt")} class="w-full h-full object-cover hover:scale-110 transition-transform duration-300"> </div> <div class="p-6"> <div class="flex items-center justify-between mb-4"> <span class="bg-navy-100 text-navy-800 text-xs font-medium px-2 py-1 rounded-full"> ${post.category} </span> <span class="text-charcoal-500 text-xs"> ${post.readTime} </span> </div> <h2 class="text-lg font-bold text-navy-900 mb-3 leading-tight hover:text-navy-700 transition-colors"> <a${addAttribute(`/blog/${post.slug}`, "href")}>${post.title}</a> </h2> <p class="text-charcoal-600 text-sm mb-4 leading-relaxed">${post.excerpt}</p> <div class="flex items-center justify-between"> <time class="text-charcoal-500 text-xs"> ${new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  })} </time> <a${addAttribute(`/blog/${post.slug}`, "href")} class="inline-flex items-center text-navy-700 font-semibold text-sm hover:text-navy-900 transition-colors group">
Read More
<svg class="ml-1 h-3 w-3 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path> </svg> </a> </div> </div> </article>`)} </div> </div> </section> </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "/Users/yusuf/Downloads/project 4/src/pages/blog/index.astro", void 0);

const $$file = "/Users/yusuf/Downloads/project 4/src/pages/blog/index.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
