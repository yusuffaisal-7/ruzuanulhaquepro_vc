/* empty css                                     */
import { e as createComponent, f as createAstro, m as maybeRenderHead, h as addAttribute, r as renderTemplate, l as renderScript, k as renderComponent } from '../chunks/astro/server_KIt8zWfF.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_BqPIl83O.mjs';
import { $ as $$Header, a as $$Footer } from '../chunks/Footer_BBN17UHO.mjs';
import 'clsx';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Hero;
  const { profileImage = "/profile-screenshot.png" } = Astro2.props;
  const backgroundImage = "/profile-screenshot.png";
  return renderTemplate`${maybeRenderHead()}<section id="home" class="relative min-h-screen flex items-center justify-center overflow-hidden" data-astro-cid-bbe6dxrz> <!-- Background Image --> <div class="absolute inset-0 z-0" data-astro-cid-bbe6dxrz> <img${addAttribute(backgroundImage, "src")} alt="Dr. Mohammad Razuanul Hoque" class="w-full h-full object-cover" data-astro-cid-bbe6dxrz> <div class="absolute inset-0 bg-black bg-opacity-50" data-astro-cid-bbe6dxrz></div> </div> <!-- Content --> <div class="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12" data-astro-cid-bbe6dxrz> <div class="flex flex-col lg:grid lg:grid-cols-2 gap-10 items-center min-h-[80vh] py-16 lg:py-32" data-astro-cid-bbe6dxrz> <!-- Left Content (mobile: text, image, then rest; desktop: text left, image right) --> <div class="flex flex-col w-full" data-astro-cid-bbe6dxrz> <div class="text-white flex flex-col items-center lg:items-start text-center lg:text-left" data-astro-cid-bbe6dxrz> <h1 class="text-4xl xs:text-5xl sm:text-6xl lg:text-7xl font-bold mb-4 leading-tight drop-shadow-xl" data-astro-cid-bbe6dxrz> <span class="block animate-fade-in-up" data-astro-cid-bbe6dxrz>Dr. Mohammad</span> <span class="block text-3xl xs:text-4xl sm:text-5xl lg:text-6xl mt-2 animate-fade-in-up" style="animation-delay: 0.2s;" data-astro-cid-bbe6dxrz>Razuanul Hoque</span> </h1> </div> <!-- Mobile: Show image right after name/title --> <div class="block lg:hidden w-full flex justify-center my-6" data-astro-cid-bbe6dxrz> <div class="relative" data-astro-cid-bbe6dxrz> <div class="w-72 h-72 xs:w-80 xs:h-80 sm:w-96 sm:h-96 rounded-full overflow-hidden border-4 border-white shadow-2xl animate-fade-in-up" style="animation-delay: 0.3s;" data-astro-cid-bbe6dxrz> <img${addAttribute(profileImage, "src")} alt="Dr. Mohammad Razuanul Hoque" class="w-full h-full object-cover object-center" data-astro-cid-bbe6dxrz> </div> <div class="absolute inset-0 w-full h-full rounded-full border-2 border-yellow-400 opacity-50 animate-pulse pointer-events-none" data-astro-cid-bbe6dxrz></div> </div> </div> <div class="text-white flex flex-col items-center lg:items-start text-center lg:text-left" data-astro-cid-bbe6dxrz> <p class="text-lg xs:text-xl sm:text-2xl mb-2 leading-relaxed animate-fade-in-up text-gray-200" style="animation-delay: 0.4s;" data-astro-cid-bbe6dxrz>
Professor, Department of Biochemistry and Molecular Biology
</p> <p class="text-base sm:text-lg mb-6 text-gray-300 animate-fade-in-up" style="animation-delay: 0.6s;" data-astro-cid-bbe6dxrz>
Noakhali Science and Technology University
</p> <div class="flex flex-col sm:flex-row gap-4 items-center lg:items-start animate-fade-in-up w-full justify-center lg:justify-start" style="animation-delay: 0.8s;" data-astro-cid-bbe6dxrz> <a href="mailto:pro-vc@nstu.edu.bd" class="contact-btn group" data-astro-cid-bbe6dxrz> <span class="contact-text" data-astro-cid-bbe6dxrz>Get In Touch</span> <div class="arrow-container" data-astro-cid-bbe6dxrz> <svg class="arrow-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-bbe6dxrz> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 17l9.2-9.2M17 17V7H7" data-astro-cid-bbe6dxrz></path> </svg> </div> </a> </div> <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-10 w-full max-w-2xl animate-fade-in-up" style="animation-delay: 1s;" data-astro-cid-bbe6dxrz> <div class="bg-white/10 backdrop-blur-md p-5 rounded-xl hover:bg-white/20 transition-all duration-300 shadow-md" data-astro-cid-bbe6dxrz> <div class="text-2xl sm:text-3xl font-bold text-white mb-1" data-astro-cid-bbe6dxrz>PhD</div> <div class="text-gray-200 font-medium text-sm sm:text-base" data-astro-cid-bbe6dxrz>Molecular Biology</div> </div> <div class="bg-white/10 backdrop-blur-md p-5 rounded-xl hover:bg-white/20 transition-all duration-300 shadow-md" data-astro-cid-bbe6dxrz> <div class="text-2xl sm:text-3xl font-bold text-white mb-1" data-astro-cid-bbe6dxrz>Professor</div> <div class="text-gray-200 font-medium text-sm sm:text-base" data-astro-cid-bbe6dxrz>NSTU</div> </div> <div class="bg-white/10 backdrop-blur-md p-5 rounded-xl hover:bg-white/20 transition-all duration-300 shadow-md" data-astro-cid-bbe6dxrz> <div class="text-2xl sm:text-3xl font-bold text-white mb-1" data-astro-cid-bbe6dxrz>Research</div> <div class="text-gray-200 font-medium text-sm sm:text-base" data-astro-cid-bbe6dxrz>Excellence</div> </div> </div> </div> </div> <!-- Desktop: Show image on the right --> <div class="hidden lg:flex justify-center lg:justify-end fade-in-scroll mt-10 lg:mt-0" data-astro-cid-bbe6dxrz> <div class="relative" data-astro-cid-bbe6dxrz> <div class="w-48 h-48 xs:w-60 xs:h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white shadow-2xl animate-fade-in-up" style="animation-delay: 1.6s;" data-astro-cid-bbe6dxrz> <img${addAttribute(profileImage, "src")} alt="Dr. Mohammad Razuanul Hoque" class="w-full h-full object-cover object-center" data-astro-cid-bbe6dxrz> </div> <div class="absolute inset-0 w-full h-full rounded-full border-2 border-yellow-400 opacity-50 animate-pulse pointer-events-none" data-astro-cid-bbe6dxrz></div> </div> </div> </div> </div> <!-- Scroll indicator --> <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow z-10" data-astro-cid-bbe6dxrz> <svg class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-bbe6dxrz> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" data-astro-cid-bbe6dxrz></path> </svg> </div> </section> `;
}, "/Users/yusuf/Downloads/project 4/src/components/Hero.astro", void 0);

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="about" class="py-20 bg-white"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="fade-in-scroll"> <div class="text-center mb-16"> <h2 class="text-4xl sm:text-5xl font-bold text-navy-900 mb-6">About Dr. Mohammad Razuanul Hoque</h2> <p class="text-xl text-charcoal-600 max-w-3xl mx-auto">
Professor of Biochemistry and Molecular Biology at Noakhali Science and Technology University, dedicated to advancing scientific research and education.
</p> </div> <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"> <div class="fade-in-scroll"> <div class="space-y-6"> <div> <h3 class="text-2xl font-semibold text-navy-900 mb-4">Academic Excellence</h3> <p class="text-charcoal-600 leading-relaxed">
Dr. Mohammad Razuanul Hoque is a Professor of Department of Biochemistry & Molecular Biology at the University of Chittagong. Dr. Razuanul completed his B.Sc. (Hons.) and M.Sc. (with thesis) from the same department and secured first class (first position) in both examinations.
</p> </div> <div> <h3 class="text-2xl font-semibold text-navy-900 mb-4">Research Focus</h3> <p class="text-charcoal-600 leading-relaxed">
He completed his PhD in Laboratory of Molecular and Cellular Neurosciences, Tohoku University Graduate School of Life Sciences, Sendai, Japan. He worked on "the optogenetic manipulation of neural activity using sodium-transporting rhodopsins" under supervision of Professor Hiromu Yawo who is one of the pioneer scientists in the field of optogenetics.
</p> </div> <div> <h3 class="text-2xl font-semibold text-navy-900 mb-4">International Collaboration</h3> <p class="text-charcoal-600 leading-relaxed">
He did his PhD research with collaboration of Professor Hideki Kandori of Nagoya Institute of Technology, Nagoya, Japan. His research focuses on molecular biology, neuroscience, and optogenetics with significant contributions to the scientific community.
</p> </div> </div> <!-- Key Achievements --> <div class="mt-8 grid grid-cols-2 gap-4"> <div class="bg-navy-50 p-4 rounded-lg"> <div class="text-2xl font-bold text-navy-700">PhD</div> <div class="text-sm text-charcoal-600">Tohoku University, Japan</div> </div> <div class="bg-navy-50 p-4 rounded-lg"> <div class="text-2xl font-bold text-navy-700">Professor</div> <div class="text-sm text-charcoal-600">Biochemistry & Molecular Biology</div> </div> <div class="bg-navy-50 p-4 rounded-lg"> <div class="text-2xl font-bold text-navy-700">Research</div> <div class="text-sm text-charcoal-600">Optogenetics & Neuroscience</div> </div> <div class="bg-navy-50 p-4 rounded-lg"> <div class="text-2xl font-bold text-navy-700">Email</div> <div class="text-sm text-charcoal-600">pro-vc@nstu.edu.bd</div> </div> </div> </div> <div class="fade-in-scroll"> <div class="relative"> <div class="bg-gradient-to-br from-navy-100 to-navy-200 p-8 rounded-2xl"> <h4 class="text-xl font-semibold text-navy-900 mb-4">Contact Information</h4> <div class="space-y-3 text-charcoal-700"> <div class="flex items-center"> <svg class="h-5 w-5 text-navy-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path> </svg> <span>pro-vc@nstu.edu.bd</span> </div> <div class="flex items-center"> <svg class="h-5 w-5 text-navy-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path> </svg> <span>+8801840096000</span> </div> <div class="flex items-start"> <svg class="h-5 w-5 text-navy-600 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path> </svg> <span>Department of Biochemistry and Molecular Biology<br>Noakhali Science and Technology University</span> </div> <div class="flex items-center"> <svg class="h-5 w-5 text-navy-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path> </svg> <span>Blood Group: A+</span> </div> </div> </div> </div> </div> </div> </div> </div> </section>`;
}, "/Users/yusuf/Downloads/project 4/src/components/About.astro", void 0);

const $$Experience = createComponent(($$result, $$props, $$slots) => {
  const experiences = [
    {
      position: "Pro Vice-Chancellor",
      institution: "Noakhali Science and Technology University",
      period: "2020 - Present",
      description: "Leading strategic initiatives for academic excellence, research advancement, and institutional growth. Overseeing curriculum development, faculty enhancement, and international collaborations.",
      achievements: [
        "Increased research output by 40%",
        "Established 15+ industry partnerships",
        "Launched 3 new graduate programs"
      ]
    },
    {
      position: "Dean, Faculty of Science",
      institution: "Noakhali Science and Technology University",
      period: "2017 - 2020",
      description: "Managed faculty operations, academic programs, and research initiatives across multiple departments. Focused on enhancing teaching quality and research infrastructure.",
      achievements: [
        "Improved faculty satisfaction by 35%",
        "Secured $2M in research grants",
        "Initiated modern lab facilities"
      ]
    },
    {
      position: "Professor",
      institution: "Department of Computer Science",
      period: "2010 - 2017",
      description: "Teaching advanced courses in algorithms, machine learning, and software engineering. Conducted research in artificial intelligence and supervised graduate students.",
      achievements: [
        "Published 80+ research papers",
        "Supervised 25 PhD students",
        "Received Excellence in Teaching Award"
      ]
    },
    {
      position: "Associate Professor",
      institution: "Department of Computer Science",
      period: "2005 - 2010",
      description: "Developed innovative curricula and research programs. Established collaborations with international universities and industry partners.",
      achievements: [
        "Developed 3 new course modules",
        "Led international research project",
        "Won Best Paper Award"
      ]
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section id="experience" class="py-20 bg-gradient-to-br from-charcoal-50 to-navy-50"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="fade-in-scroll"> <div class="text-center mb-16"> <h2 class="text-4xl sm:text-5xl font-bold text-navy-900 mb-6">Professional Journey</h2> <p class="text-xl text-charcoal-600 max-w-3xl mx-auto">
A progressive career dedicated to academic excellence, research innovation, and educational leadership across prestigious institutions.
</p> </div> <div class="relative"> <!-- Timeline line --> <div class="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-navy-200 hidden lg:block"></div> ${experiences.map((exp, index) => renderTemplate`<div${addAttribute(`relative flex items-center mb-12 ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} fade-in-scroll`, "class")}> <!-- Timeline dot --> <div class="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-navy-600 rounded-full border-4 border-white shadow-lg hidden lg:block z-10"></div> <!-- Content --> <div${addAttribute(`w-full lg:w-5/12 ${index % 2 === 0 ? "lg:pr-8" : "lg:pl-8"}`, "class")}> <div class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"> <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4"> <h3 class="text-2xl font-bold text-navy-900 mb-2 sm:mb-0">${exp.position}</h3> <span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-navy-100 text-navy-800"> ${exp.period} </span> </div> <h4 class="text-lg font-semibold text-charcoal-700 mb-4">${exp.institution}</h4> <p class="text-charcoal-600 mb-6 leading-relaxed">${exp.description}</p> <div> <h5 class="font-semibold text-navy-900 mb-3">Key Achievements:</h5> <ul class="space-y-2"> ${exp.achievements.map((achievement) => renderTemplate`<li class="flex items-start"> <svg class="h-5 w-5 text-navy-600 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path> </svg> <span class="text-charcoal-700">${achievement}</span> </li>`)} </ul> </div> </div> </div> <!-- Spacer for opposite side on large screens --> <div class="hidden lg:block w-5/12"></div> </div>`)} </div> </div> </div> </section>`;
}, "/Users/yusuf/Downloads/project 4/src/components/Experience.astro", void 0);

const $$Research = createComponent(($$result, $$props, $$slots) => {
  const researchAreas = [
    {
      title: "Artificial Intelligence & Machine Learning",
      description: "Developing advanced algorithms for predictive analytics, natural language processing, and computer vision applications in educational technology.",
      publications: 45,
      citations: 1250,
      image: "https://images.pexels.com/photos/8566473/pexels-photo-8566473.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Educational Technology Innovation",
      description: "Creating scalable solutions for digital learning environments, assessment systems, and personalized education platforms.",
      publications: 38,
      citations: 920,
      image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Sustainable Computing Systems",
      description: "Research focused on energy-efficient computing architectures and environmentally sustainable technology solutions.",
      publications: 42,
      citations: 1100,
      image: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Data Science & Analytics",
      description: "Advanced statistical modeling and big data analytics for educational insights and institutional decision-making.",
      publications: 35,
      citations: 850,
      image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
  ];
  const recentPublications = [
    {
      title: "Deep Learning Approaches for Personalized Learning Path Optimization",
      journal: "IEEE Transactions on Learning Technologies",
      year: "2024",
      citations: 127,
      type: "Journal Article"
    },
    {
      title: "Sustainable AI: Green Computing Paradigms for Educational Institutions",
      journal: "Nature Computer Science",
      year: "2023",
      citations: 203,
      type: "Research Paper"
    },
    {
      title: "Blockchain-Based Credential Verification Systems in Higher Education",
      journal: "ACM Computing Surveys",
      year: "2023",
      citations: 156,
      type: "Survey"
    },
    {
      title: "Adaptive Learning Analytics: A Comprehensive Framework",
      journal: "Educational Technology & Society",
      year: "2023",
      citations: 98,
      type: "Framework"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section id="research" class="py-20 bg-white"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="fade-in-scroll"> <div class="text-center mb-16"> <h2 class="text-4xl sm:text-5xl font-bold text-navy-900 mb-6">Research & Publications</h2> <p class="text-xl text-charcoal-600 max-w-3xl mx-auto">
Pioneering research that bridges theoretical foundations with practical applications, driving innovation in technology and education.
</p> </div> <!-- Research Stats --> <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16 fade-in-scroll"> <div class="text-center p-6 bg-gradient-to-br from-navy-600 to-navy-700 text-white rounded-xl"> <div class="text-3xl font-bold mb-2">150+</div> <div class="text-navy-100">Publications</div> </div> <div class="text-center p-6 bg-gradient-to-br from-navy-600 to-navy-700 text-white rounded-xl"> <div class="text-3xl font-bold mb-2">4,200+</div> <div class="text-navy-100">Citations</div> </div> <div class="text-center p-6 bg-gradient-to-br from-navy-600 to-navy-700 text-white rounded-xl"> <div class="text-3xl font-bold mb-2">28</div> <div class="text-navy-100">h-index</div> </div> <div class="text-center p-6 bg-gradient-to-br from-navy-600 to-navy-700 text-white rounded-xl"> <div class="text-3xl font-bold mb-2">15+</div> <div class="text-navy-100">Collaborations</div> </div> </div> <!-- Research Areas --> <div class="mb-20"> <h3 class="text-3xl font-bold text-navy-900 text-center mb-12 fade-in-scroll">Research Areas</h3> <div class="grid grid-cols-1 md:grid-cols-2 gap-8"> ${researchAreas.map((area, index) => renderTemplate`<div class="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden fade-in-scroll"> <div class="h-48 overflow-hidden"> <img${addAttribute(area.image, "src")}${addAttribute(area.title, "alt")} class="w-full h-full object-cover hover:scale-110 transition-transform duration-300"> </div> <div class="p-6"> <h4 class="text-xl font-bold text-navy-900 mb-3">${area.title}</h4> <p class="text-charcoal-600 mb-4 leading-relaxed">${area.description}</p> <div class="flex justify-between items-center text-sm"> <span class="bg-navy-100 text-navy-800 px-3 py-1 rounded-full"> ${area.publications} Publications
</span> <span class="text-charcoal-500"> ${area.citations} Citations
</span> </div> </div> </div>`)} </div> </div> <!-- Recent Publications --> <div class="fade-in-scroll"> <h3 class="text-3xl font-bold text-navy-900 text-center mb-12">Recent Publications</h3> <div class="space-y-6"> ${recentPublications.map((pub, index) => renderTemplate`<div class="bg-charcoal-50 p-6 rounded-xl hover:bg-charcoal-100 transition-colors duration-300"> <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3"> <h4 class="text-lg font-semibold text-navy-900 mb-2 sm:mb-0">${pub.title}</h4> <div class="flex items-center space-x-4 text-sm"> <span class="bg-navy-100 text-navy-800 px-2 py-1 rounded">${pub.type}</span> <span class="text-charcoal-600">${pub.year}</span> </div> </div> <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between"> <p class="text-charcoal-700 font-medium mb-2 sm:mb-0">${pub.journal}</p> <div class="flex items-center text-sm text-charcoal-600"> <svg class="h-4 w-4 mr-1" fill="currentColor" viewBox="0 0 20 20"> <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path> </svg> ${pub.citations} citations
</div> </div> </div>`)} </div> <div class="text-center mt-8"> <a href="/publications" class="inline-flex items-center px-6 py-3 bg-navy-700 text-white font-semibold rounded-lg hover:bg-navy-800 transition-colors duration-300">
View All Publications
<svg class="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path> </svg> </a> </div> </div> </div> </div> </section>`;
}, "/Users/yusuf/Downloads/project 4/src/components/Research.astro", void 0);

const $$Blog = createComponent(($$result, $$props, $$slots) => {
  const blogPosts = [
    {
      title: "The Future of Higher Education: AI Integration and Human-Centered Learning",
      excerpt: "Exploring how artificial intelligence can enhance educational experiences while maintaining the human elements that make learning meaningful and transformative.",
      date: "2024-01-15",
      category: "Education Technology",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
      slug: "future-higher-education-ai-human-learning"
    },
    {
      title: "Building Sustainable Research Communities in Developing Nations",
      excerpt: "Strategies for fostering collaborative research environments that drive innovation while addressing local challenges and global sustainability goals.",
      date: "2024-01-08",
      category: "Research Development",
      image: "https://images.pexels.com/photos/3184302/pexels-photo-3184302.jpeg?auto=compress&cs=tinysrgb&w=800",
      slug: "sustainable-research-communities-developing-nations"
    },
    {
      title: "Leadership in Academic Excellence: Lessons from Two Decades",
      excerpt: "Reflecting on key insights from academic leadership roles and the evolving landscape of university administration in the digital age.",
      date: "2024-01-01",
      category: "Academic Leadership",
      image: "https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=800",
      slug: "leadership-academic-excellence-lessons"
    },
    {
      title: "Data-Driven Decision Making in University Management",
      excerpt: "How modern analytics and data science techniques are revolutionizing institutional planning, student success initiatives, and resource optimization.",
      date: "2023-12-20",
      category: "Data Science",
      image: "https://images.pexels.com/photos/669616/pexels-photo-669616.jpeg?auto=compress&cs=tinysrgb&w=800",
      slug: "data-driven-decision-making-university-management"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section id="blog" class="py-20 bg-gradient-to-br from-charcoal-50 to-navy-50"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="fade-in-scroll"> <div class="text-center mb-16"> <h2 class="text-4xl sm:text-5xl font-bold text-navy-900 mb-6">Latest Insights</h2> <p class="text-xl text-charcoal-600 max-w-3xl mx-auto">
Sharing thoughts on education, research, leadership, and the evolving landscape of higher education institutions.
</p> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12"> ${blogPosts.map((post, index) => renderTemplate`<article class="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden fade-in-scroll"> <div class="h-64 overflow-hidden"> <img${addAttribute(post.image, "src")}${addAttribute(post.title, "alt")} class="w-full h-full object-cover hover:scale-110 transition-transform duration-300"> </div> <div class="p-8"> <div class="flex items-center justify-between mb-4"> <span class="bg-navy-100 text-navy-800 text-sm font-medium px-3 py-1 rounded-full"> ${post.category} </span> <time class="text-charcoal-500 text-sm"> ${new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  })} </time> </div> <h3 class="text-xl font-bold text-navy-900 mb-4 leading-tight hover:text-navy-700 transition-colors"> <a${addAttribute(`/blog/${post.slug}`, "href")}>${post.title}</a> </h3> <p class="text-charcoal-600 mb-6 leading-relaxed">${post.excerpt}</p> <a${addAttribute(`/blog/${post.slug}`, "href")} class="inline-flex items-center text-navy-700 font-semibold hover:text-navy-900 transition-colors group"${addAttribute(`Read more about ${post.title}`, "aria-label")}>
Read More
<svg class="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path> </svg> </a> </div> </article>`)} </div> <div class="text-center fade-in-scroll"> <a href="/blog" class="inline-flex items-center px-8 py-4 bg-navy-700 text-white font-semibold rounded-lg hover:bg-navy-800 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
View All Posts
<svg class="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path> </svg> </a> </div> </div> </div> </section>`;
}, "/Users/yusuf/Downloads/project 4/src/components/Blog.astro", void 0);

const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="contact" class="py-20 bg-white"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="fade-in-scroll"> <div class="text-center mb-16"> <h2 class="text-4xl sm:text-5xl font-bold text-navy-900 mb-6">Get In Touch</h2> <p class="text-xl text-charcoal-600 max-w-3xl mx-auto">
Ready to discuss collaboration opportunities, research partnerships, or academic initiatives? I'd love to hear from you.
</p> </div> <div class="grid grid-cols-1 lg:grid-cols-2 gap-12"> <!-- Contact Information --> <div class="fade-in-scroll"> <div class="bg-gradient-to-br from-navy-600 to-navy-700 p-8 rounded-2xl text-white"> <h3 class="text-2xl font-bold mb-8">Contact Information</h3> <div class="space-y-6"> <div class="flex items-start"> <svg class="h-6 w-6 text-navy-200 mt-1 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path> </svg> <div> <h4 class="font-semibold mb-1">Office Address</h4> <p class="text-navy-200">
Pro Vice-Chancellor Office<br>
Noakhali Science and Technology University<br>
Sonapur, Noakhali-3814, Bangladesh
</p> </div> </div> <div class="flex items-start"> <svg class="h-6 w-6 text-navy-200 mt-1 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path> </svg> <div> <h4 class="font-semibold mb-1">Email</h4> <a href="mailto:pvc@nstu.edu.bd" class="text-navy-200 hover:text-white transition-colors">
pvc@nstu.edu.bd
</a> </div> </div> <div class="flex items-start"> <svg class="h-6 w-6 text-navy-200 mt-1 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path> </svg> <div> <h4 class="font-semibold mb-1">Phone</h4> <a href="tel:+8801XXXXXXXXX" class="text-navy-200 hover:text-white transition-colors">
+880 1XXX-XXXXXX
</a> </div> </div> <div class="flex items-start"> <svg class="h-6 w-6 text-navy-200 mt-1 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path> </svg> <div> <h4 class="font-semibold mb-1">Office Hours</h4> <p class="text-navy-200">
Sunday - Thursday: 9:00 AM - 5:00 PM<br>
Friday: 9:00 AM - 12:00 PM
</p> </div> </div> </div> <!-- Social Links --> <div class="mt-8 pt-8 border-t border-navy-500"> <h4 class="font-semibold mb-4">Connect With Me</h4> <div class="flex space-x-4"> <a href="#" class="bg-navy-500 p-3 rounded-lg hover:bg-navy-400 transition-colors"> <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"> <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path> </svg> </a> <a href="#" class="bg-navy-500 p-3 rounded-lg hover:bg-navy-400 transition-colors"> <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"> <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path> </svg> </a> <a href="#" class="bg-navy-500 p-3 rounded-lg hover:bg-navy-400 transition-colors"> <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"> <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.1.12.112.226.083.346-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.161-1.499-.698-2.436-2.888-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.357-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.017 0z"></path> </svg> </a> </div> </div> </div> </div> <!-- Contact Form --> <div class="fade-in-scroll"> <form class="space-y-6" id="contactForm"> <div class="grid grid-cols-1 sm:grid-cols-2 gap-6"> <div> <label for="firstName" class="block text-sm font-medium text-charcoal-700 mb-2">First Name</label> <input type="text" id="firstName" name="firstName" class="w-full px-4 py-3 border border-charcoal-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-navy-500 transition-colors" required> </div> <div> <label for="lastName" class="block text-sm font-medium text-charcoal-700 mb-2">Last Name</label> <input type="text" id="lastName" name="lastName" class="w-full px-4 py-3 border border-charcoal-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-navy-500 transition-colors" required> </div> </div> <div> <label for="email" class="block text-sm font-medium text-charcoal-700 mb-2">Email Address</label> <input type="email" id="email" name="email" class="w-full px-4 py-3 border border-charcoal-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-navy-500 transition-colors" required> </div> <div> <label for="organization" class="block text-sm font-medium text-charcoal-700 mb-2">Organization</label> <input type="text" id="organization" name="organization" class="w-full px-4 py-3 border border-charcoal-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-navy-500 transition-colors"> </div> <div> <label for="subject" class="block text-sm font-medium text-charcoal-700 mb-2">Subject</label> <select id="subject" name="subject" class="w-full px-4 py-3 border border-charcoal-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-navy-500 transition-colors" required> <option value="">Select a subject</option> <option value="collaboration">Research Collaboration</option> <option value="speaking">Speaking Engagement</option> <option value="consultation">Academic Consultation</option> <option value="partnership">Partnership Opportunity</option> <option value="other">Other</option> </select> </div> <div> <label for="message" class="block text-sm font-medium text-charcoal-700 mb-2">Message</label> <textarea id="message" name="message" rows="6" class="w-full px-4 py-3 border border-charcoal-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-navy-500 transition-colors resize-vertical" placeholder="Please share details about your inquiry..." required></textarea> </div> <button type="submit" class="w-full bg-navy-700 text-white py-4 px-6 rounded-lg font-semibold hover:bg-navy-800 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
Send Message
</button> <div id="contactStatus" class="mt-4 text-center text-sm"></div> </form> </div> </div> </div> </div> </section> ${renderScript($$result, "/Users/yusuf/Downloads/project 4/src/components/Contact.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/yusuf/Downloads/project 4/src/components/Contact.astro", void 0);

const profile = {"image":"/uploads/profile-1751530768491-7t33ci.jpg"};
const content = {
  profile};

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const profileImage = content.profile?.image;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Dr. Academic Excellence - Pro Vice-Chancellor Portfolio" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${maybeRenderHead()}<main> ${renderComponent($$result2, "Hero", $$Hero, { "profileImage": profileImage })} ${renderComponent($$result2, "About", $$About, {})} ${renderComponent($$result2, "Experience", $$Experience, {})} ${renderComponent($$result2, "Research", $$Research, {})} ${renderComponent($$result2, "Blog", $$Blog, {})} ${renderComponent($$result2, "Contact", $$Contact, {})} </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "/Users/yusuf/Downloads/project 4/src/pages/index.astro", void 0);

const $$file = "/Users/yusuf/Downloads/project 4/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
