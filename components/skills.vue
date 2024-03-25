<script setup>
const skills = [
  {
    id: "HTML",
    experiance: "13 Years",
    icon: "ion:logo-html5",
    icColor: "text-red-400",
    info: `Over 13 Years of experiences in HTML coding. Can design any complex template ideas while keeping less element used and focusing SEO optimised.`,
  },
  {
    id: "CSS",
    experiance: "13 Years",
    icon: "mdi:language-css3",
    icColor: "text-blue-400",
    info: `When i started designing, CSS frameworks ware not so populer, so learned CSS from core. But for now i prefer tailwindCSS.`,
  },
  {
    id: "JavaScript",
    experiance: "6 Years",
    icon: "logos:javascript",
    icColor: "text-yellow-400",
    info: `Everything i buid from last 4 years is based on Javascript.`,
  },
  {
    id: "NodeJS",
    experiance: "4 Years",
    icon: "logos:nodejs-icon",
    icColor: "text-green-400",
    info: `Started using Node when i had to switch my PHP website to Javascript framework like Vue. From there started using Node for Frontend as well backend programs.`,
  },
  {
    id: "NextJS",
    experiance: "4 Years",
    icon: "logos:nextjs-icon",
    icColor: "text-green-400",
    info: `Over the past four years, I have been consistently building projects using Next.js because of its compatibility with Vercel, which helps me manage page speed for better SEO.`,
  },
  {
    id: "NuxtJS",
    experiance: "4 Years",
    icon: "logos:nuxt-icon",
    icColor: "text-green-400",
    info: `I just love Nuxt. Have complete understanding of Nuxt and it's top modules like ,nuxt/content, nuxt/image etc.`,
  },
  {
    id: "TailwindCSS",
    experiance: "4 Years",
    icon: "logos:tailwindcss-icon",
    icColor: "text-teal-400",
    info: `Having long time experiences in CSS3 so Tailwindcss made it easy to design my pages faster. Have Complete confident using TailwindCSS.`,
  },
  {
    id: "MongoDB",
    experiance: "3 Years",
    icon: "vscode-icons:file-type-mongo",
    icColor: "text-green-700",
    info: `Using mongodb for last 3 years with nodejs to manage data and create my Rest APIs.`,
  },
];
</script>
<template>
  <div id="skills" class="bg-white lg:sticky lg:top-0 relative z-[2]">
    <div class="px-6 sm:px-12 max-w-7xl m-auto py-14 flex flex-col lg:flex-row">
      <div
        class="lg:w-32 flex items-center justify-center lg:-ml-32 mb-10 lg:mb-0"
      >
        <div
          class="text-2xl lg:-rotate-90 uppercase tracking-widest text-white px-10 rounded-sm py-1 bg-green-400 whitespace-nowrap"
        >
          BEST SKILLS
        </div>
      </div>
      <div class="overflow-hidden">
        <div
          class="bg-gradient-to-r from-green-300 via-purple-300 to-blue-300 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-slate-800 gap-[1px]"
        >
          <div
            class="bg-white sm:px-5 py-5"
            v-for="(data, index) in skills"
            :key="index"
          >
            <div class="flex justify-between items-center pt-7 md:pt-0">
              <div class="flex flex-col ml-0">
                <span class="font-bold text-xl">{{ data.id }}</span>
                <span class="text-sm">{{ data.experiance }}</span>
              </div>
              <span class="">
                <Icon
                  :name="`${data.icon}`"
                  size="45"
                  :class="`${data.icColor}`"
                />
              </span>
            </div>

            <p class="mt-3 text-sm">{{ data.info }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.skillsGrid div {
  @apply lg:pl-6 pr-2 pb-4;
}
.skillsGrid :nth-child(1),
.skillsGrid :nth-child(5) {
  @apply pl-[1px];
}

.skillsGrid :nth-child(5),
.skillsGrid :nth-child(6),
.skillsGrid :nth-child(7),
.skillsGrid :nth-child(8) {
  @apply pt-6;
}
</style>
