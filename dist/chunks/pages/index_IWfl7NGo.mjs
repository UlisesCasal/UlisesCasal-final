/* empty css                          */
import { c as createAstro, a as createComponent, r as renderTemplate, b as addAttribute, d as renderHead, e as renderSlot, m as maybeRenderHead, f as renderComponent } from '../astro_U9PggaHz.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';

const $$Astro$6 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "C:/Users/Ulises Casal/OneDrive - UNIVERSIDAD ABIERTA INTERAMERICANA/Documents/Documentos Varios/Ulises-Casal/UlisesCasal.github.io/UlisesCasal.github.io/src/layouts/Layout.astro", void 0);

const $$Astro$5 = createAstro();
const $$NavBar = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$NavBar;
  return renderTemplate`${maybeRenderHead()}<header class="fixed inset-x-0 top-0 z-30 mx-auto w-full max-w-screen-md border border-gray-100 bg-white/80 py-3 shadow backdrop-blur-lg md:top-6 md:rounded-3xl lg:max-w-screen-lg"> <div class="px-4"> <div class="flex items-center justify-between"> <div class="flex shrink-0"> <a aria-current="page" class="flex items-center" href="/"> <img class="h-7 w-auto rounded-full" src="src\Multimedia\uimg.png" alt=""> <p class="sr-only">Ulises Casal</p> </a> </div> <div class="hidden md:flex md:items-center md:justify-center md:gap-5"> <a aria-current="page" class="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900" href="#">Sobre mí</a> <a class="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900" href="#">Habilidades</a> <a class="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900" href="#">Experiencia</a> <a class="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900" href="#">Proyectos</a> </div> <div class="flex items-center justify-end gap-3"> <a class="inline-flex items-center justify-center rounded-xl bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600" href="/login">Contáctame</a> </div> </div> </div> </header>`;
}, "C:/Users/Ulises Casal/OneDrive - UNIVERSIDAD ABIERTA INTERAMERICANA/Documents/Documentos Varios/Ulises-Casal/UlisesCasal.github.io/UlisesCasal.github.io/src/components/NavBar.astro", void 0);

const $$Astro$4 = createAstro();
const $$SobreMi = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$SobreMi;
  return renderTemplate`${maybeRenderHead()}<h1 class="text-5xl font-bold" style="padding-top: 100px;">Sobre mí</h1> <div class="flex items-start" style="padding-top: 30px"> <div> <p>
Hola!. Mi nombre es Ulises Casal, vivo en Moreno, Buenos Aires,
            Argentina. Soy estudiante de la Licenciatura en Sistemas de
            Información (3er año) 🧑🏻‍💻, en la <a href="https://www.unlu.edu.ar/" target="_blank">Universidad Nacional de Lujan
</a> , y también soy Entrenador de Natación ⏱️ recibido en la <a href="https://uai.edu.ar/" target="_blank">Universidad Abierta Interamericana.</a> <br style="padding-top: 10px">
Me considero una persona muy proactiva, debido a que, constantemente
            me estoy capacitando en diversas herramientas y tecnólogias. También,
            soy tranquilo, metódico, con muy buenas relaciones interpersonales y
            poseo una gran capacidad de abstracción y de análisis. Soy un entusiasta
            en Desarrollo Móvil y Sistemas Operativos basados en
            Linux. Actualmente, estoy trabajando como Software Developer
            en la Universidad Nacional de Luján, sí estas interesado en mi
            perfil y querés saber más sobre mí puedes contactarme desde la sección
            "Contacto", que se encuentra al pie de la página ⬇️.
</p> </div> <aside class="ml-auto"> <img class="h-50 w-50 rounded-full" src="src\Multimedia\foto-generica.jpg" alt="mi imagen"> </aside> </div>`;
}, "C:/Users/Ulises Casal/OneDrive - UNIVERSIDAD ABIERTA INTERAMERICANA/Documents/Documentos Varios/Ulises-Casal/UlisesCasal.github.io/UlisesCasal.github.io/src/components/SobreMi.astro", void 0);

const $$Astro$3 = createAstro();
const $$Background = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Background;
  return renderTemplate`${maybeRenderHead()}<div class="h-screen w-screen fixed top-0 left-0 z-[-1]"> <img src="src\Multimedia\background.jpg" class="h-full w-full object-cover" alt="Background image"> </div>`;
}, "C:/Users/Ulises Casal/OneDrive - UNIVERSIDAD ABIERTA INTERAMERICANA/Documents/Documentos Varios/Ulises-Casal/UlisesCasal.github.io/UlisesCasal.github.io/src/components/Background.astro", void 0);

const $$Astro$2 = createAstro();
const $$Habilidades = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Habilidades;
  return renderTemplate`<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css">${maybeRenderHead()}<h1 class="text-5xl font-bold" style="padding-top: 40px;">Habilidades</h1> <div class="flex items-start" style="padding-top: 30px"> <ul class="list-disc"> <li class="font-bold" style="padding-top: 10px;">
Lenguajes de programación y relacionados: <a class="font-normal">Astro, Delphi, Java <i class="devicon-java-plain"></i>
, Kotlin <i class="devicon-kotlin-plain"></i>
, NodeJs <i class="devicon-nodejs-plain"></i>
, Python <i class="devicon-python-plain"></i>
, React <i class="devicon-react-plain"></i>
, SAP/ABAP
                , SAP reports
                , Tailwind <i class="devicon-tailwindcss-plain"></i>
, SQL, PostgreSQL,<i class="devicon-postgresql-plain"></i>
Open SQL
                , HTML<i class="devicon-html5-plain"></i>
, CSS <i class="devicon-css3-plain"></i> y XML</a>.
</li> <li class="font-bold" style="padding-top: 10px;">
Patrones de diseño:
<a class="font-normal" style="padding-top: 10px;"> del libro Design Patterns: Elements of Reusable Object-Oriented Software de Erich Gamma.</a> <aside class="ml-auto"> <img class="rounded-full" src="src\Multimedia\analisis-funcional.jpg" alt="mi imagen" height="300px" width="300px"> </aside> </li> <li class="font-bold" style="padding-top: 10px;">
Conocimiento técnico:
<a class="font-normal" style="padding-top: 10px;">
Análisis funcional, UML, conocimiento en protocolos del Stack
                TCP/IP, Linux, diseño de base de datos mediante Diagrama Entidad
                Relación y Modelo Lógico Relacional, consultas en SQL general, conocimiento en modulos de SAP, metodologías ágiles (Scrum y XP).</a> </li> <li class="font-bold" style="padding-top: 10px;">
Conocimiento de desarrollo Móvil en Kotlin:
<a class="font-normal" style="padding-top: 10px;">
Constraint Layout, Corrutinas, Room, Retrofit, Fragments, Test
                Unitarios y de UI.
</a> </li> <li class="font-bold" style="padding-top: 10px;">
Software adicional:
<a class="font-normal" style="padding-top: 10px;">
Git<i class="devicon-git-plain"></i>, Github<i class="devicon-github-original"></i>, Android Studio <i class="devicon-androidstudio-plain"></i>
, SAP.</a> </li> </ul> </div>`;
}, "C:/Users/Ulises Casal/OneDrive - UNIVERSIDAD ABIERTA INTERAMERICANA/Documents/Documentos Varios/Ulises-Casal/UlisesCasal.github.io/UlisesCasal.github.io/src/components/Habilidades.astro", void 0);

const $$Astro$1 = createAstro();
const $$Experiencia = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Experiencia;
  return renderTemplate`${maybeRenderHead()}<h1 class="text-5xl font-bold" style="padding-top: 40px;">Experiencia</h1> <div class="flex justify-center pt-10"> <ol class="relative border-s border-gray-200 dark:border-gray-700"> <li class="mb-10 ms-6"> <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900"> <svg class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20"> <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"></path> </svg> </span> <h3 class="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">Puesto ...<span class="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ms-3">Latest</span></h3> <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-white italic">Enero 2024 - actualidad ➡ ...</time> <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.</p> </li> <li class="mb-10 ms-6"> <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900"> <svg class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20"> <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"></path> </svg> </span> <h3 class="mb-1 text-lg font-semibold text-gray-900 dark:text-white">Software Developer</h3> <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-white italic">Mayo 2023 - Diciembre 2023 ➡ Universidad Nacional de Luján </time> <p class="text-base font-normal text-gray-500 dark:text-white">Mis tareas estaban relacionadas con el desarrollo de un sistema de aulas virtuales basado en Moodle, realizando las modificaciones del front-end.</p> </li> <li class="ms-6"> <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900"> <svg class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20"> <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"></path> </svg> </span> <h3 class="mb-1 text-lg font-semibold text-gray-900 dark:text-white">ChatBot Developer</h3> <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-white italic">Abril 2023 - Mayo 2023 ➡ Snappy Commerce</time> <p class="text-base font-normal text-gray-500 dark:text-white">Mis tareas estaban relacionadas con el diseño y desarrollo del flujo conversacion de ChatBots. Por otro lado, colaboraba con la escritura de la documentación de un nuevo sistema desarrollado por la empresa</p> </li> </ol> </div>`;
}, "C:/Users/Ulises Casal/OneDrive - UNIVERSIDAD ABIERTA INTERAMERICANA/Documents/Documentos Varios/Ulises-Casal/UlisesCasal.github.io/UlisesCasal.github.io/src/components/Experiencia.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Ulises Casal", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Background", $$Background, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "NavBar", $$NavBar, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "SobreMi", $$SobreMi, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "Habilidades", $$Habilidades, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "Experiencia", $$Experiencia, { "data-astro-cid-j7pv25f6": true })} </main> ` })} `;
}, "C:/Users/Ulises Casal/OneDrive - UNIVERSIDAD ABIERTA INTERAMERICANA/Documents/Documentos Varios/Ulises-Casal/UlisesCasal.github.io/UlisesCasal.github.io/src/pages/index.astro", void 0);

const $$file = "C:/Users/Ulises Casal/OneDrive - UNIVERSIDAD ABIERTA INTERAMERICANA/Documents/Documentos Varios/Ulises-Casal/UlisesCasal.github.io/UlisesCasal.github.io/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
