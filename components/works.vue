<script setup>
let isActive = ref(true);
function open() {
  isActive.value = false;
}
</script>
<template>
  <div id="portfolio" class="bg-white relative z-[3]">
    <div class="px-6 sm:px-12 max-w-7xl m-auto py-14">
      <div>
        <h2 class="text-2xl md:text-4xl lg:text-5xl font-serif">
          Recent Full Stack Development
        </h2>
        <p class="text-xl md:text2xl lg:text-4xl font-thin my-3">
          These webapps I built for test purposes
        </p>
      </div>
      <!-- Work -->
      <div class="grid lg:grid-cols-2 gap-20 my-10">
        <div class="">
          <div class="py-2 my-6">
            <span class="font-bold text-3xl" @click="open" ref="isActive"
              >WoWoomen
              <a
                href="https://www.wowoomen.com"
                rel="noopener noreferrer"
                target="_blank"
                ><Icon name="humbleicons:external-link" /></a
            ></span>
            <p class="text-2xl py-5" :class="{ '': open, ' hidden': !open }">
              It's a blog website made with Nuxt3 (Vue) as the frontend &
              backend, MongoDB as database and UI created using TailwindCSS.
            </p>
          </div>
          <div class="py-2 my-3">
            <span class="font-bold text-3xl">Tools Used</span>
            <ul class="flex flex-wrap gap-x-7 gap-y-4 py-5 font-medium">
              <li class="bg-green-100 px-4 py-1 rounded-sm">Nuxt3</li>
              <li class="bg-sky-50 px-4 py-1 rounded-sm">TailwindCSS</li>
              <li class="bg-green-50 px-4 py-1 rounded-sm">MongoDB</li>
              <li class="bg-gray-50 px-4 py-1 rounded-sm">ExpressJS</li>
              <li class="bg-green-50 px-4 py-1 rounded-sm">NodeJS</li>
            </ul>
          </div>
        </div>
        <div class="lg:h-96">
          <div class="w-full h-full box-content relative">
            <iframe
              src="https://www.wowoomen.com"
              class="ring-2 ring-slate-700 bg-white w-full lg:w-[1130px] h-[600px] rounded-md lg:rounded-none lg:h-[770px] lg:scale-[50%] lg:origin-top-left"
            ></iframe>
          </div>
        </div>
      </div>
      <!-- Work -->

      <!-- Work -->
      <div class="grid lg:grid-cols-3 gap-20 my-10">
        <div class="lg:col-span-2 lg:order-2">
          <div class="py-2 my-6">
            <span class="font-bold text-3xl" @click="open" ref="isActive"
              >Short Video Platform
              <a
                href="https://www.vidmatevideos.in/shorts/this-kid-is-a-genius"
                rel="noopener noreferrer"
                target="_blank"
                ><Icon name="humbleicons:external-link" /></a
            ></span>
            <p class="text-2xl py-5" :class="{ '': open, ' hidden': !open }">
              This web-app is just a short video player, giving feels like YT
              shorts, TikTok, and Reels scrolling. Data API created through
              ytdl-core npm package (a YouTube downloading module).
            </p>
          </div>
          <div class="py-2 my-3">
            <span class="font-bold text-3xl">Tools Used</span>
            <ul class="flex flex-wrap gap-x-7 gap-y-4 py-5 font-medium">
              <li class="bg-green-100 px-4 py-1 rounded-sm">Nuxt3</li>
              <li class="bg-sky-50 px-4 py-1 rounded-sm">TailwindCSS</li>
              <li class="bg-green-50 px-4 py-1 rounded-sm">MongoDB</li>
              <li class="bg-gray-50 px-4 py-1 rounded-sm">ExpressJS</li>
              <li class="bg-green-50 px-4 py-1 rounded-sm">NodeJS</li>
            </ul>
          </div>
        </div>
        <div class="lg:h-96 lg:order-1">
          <div class="w-full h-full box-content relative text-center">
            <iframe
              src="https://www.vidmatevideos.in/shorts/this-kid-is-a-genius"
              class="ring-2 ring-slate-700 bg-white w-full lg:w-[390px] h-[600px] lg:rounded-lg lg:h-[570px] lg:scale-[75%] lg:origin-top-left rounded-lg overflow-hidden"
            ></iframe>
          </div>
        </div>
      </div>
      <!-- Work -->
      <!-- Work -->
      <div class="grid lg:grid-cols-2 gap-20 my-32">
        <div class="">
          <div class="py-2 my-6">
            <span class="font-bold text-3xl" @click="open" ref="isActive"
              >Sports News Site
              <a
                href="https://sports101.vercel.app"
                rel="noopener noreferrer"
                target="_blank"
                ><Icon name="humbleicons:external-link" /></a
            ></span>
            <p class="text-2xl py-5" :class="{ '': open, ' hidden': !open }">
              Just a template design for a sports news website.
            </p>
          </div>
          <div class="py-2 my-3">
            <span class="font-bold text-3xl">Tools Used</span>
            <ul class="flex flex-wrap gap-x-7 gap-y-4 py-5 font-medium">
              <li class="bg-green-100 px-4 py-1 rounded-sm">Nuxt3</li>
              <li class="bg-sky-50 px-4 py-1 rounded-sm">TailwindCSS</li>
              <li class="bg-green-50 px-4 py-1 rounded-sm">MongoDB</li>
              <li class="bg-gray-50 px-4 py-1 rounded-sm">ExpressJS</li>
              <li class="bg-green-50 px-4 py-1 rounded-sm">NodeJS</li>
            </ul>
          </div>
        </div>
        <div class="lg:h-96">
          <div class="w-full h-full box-content relative">
            <iframe
              src="https://sports101.vercel.app"
              class="ring-2 ring-slate-700 bg-white w-full lg:w-[1130px] h-[600px] rounded-md lg:rounded-none lg:h-[770px] lg:scale-[50%] lg:origin-top-left"
            ></iframe>
          </div>
        </div>
      </div>
      <!-- Work -->
    </div>
  </div>
</template>
<style>
.preview_wrap {
  width: 100%;
  height: 800px;
  padding: 0;
  overflow: hidden;
}
.frame_wrap {
  border: 0;
  transform: scale(0.5);

  -ms-transform-origin: 0 0;
  -moz-transform-origin: 0 0;
  -o-transform-origin: 0 0;
  -webkit-transform-origin: 0 0;
  transform-origin: 0 0;
}
.websiteFrame {
  width: 1130px;
  height: 770px;
}
</style>
