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
          My recent project entirely done by me!
        </p>
      </div>
      <!-- Work -->
      <div class="grid lg:grid-cols-2 gap-20 my-10">
        <div class="">
          <div class="py-2 my-6">
            <span class="font-bold text-3xl" @click="open" ref="isActive"
              >InstaVids.app
              <a
                href="https://instavids.app"
                rel="noopener noreferrer"
                target="_blank"
                ><Icon name="humbleicons:external-link" /></a
            ></span>
            <p class="text-2xl py-5" :class="{ '': open, ' hidden': !open }">
              It's a tool website made with NextJs (React), TailwindCSS and as
              backend API mode with Python.
            </p>
          </div>
          <div class="py-2 my-3">
            <span class="font-bold text-3xl">Tools Used</span>
            <ul class="flex flex-wrap gap-x-7 gap-y-4 py-5 font-medium">
              <li class="bg-green-100 px-4 py-1 rounded-sm">Next 13</li>
              <li class="bg-sky-50 px-4 py-1 rounded-sm">TailwindCSS</li>
              <li class="bg-green-50 px-4 py-1 rounded-sm">Python</li>
              <li class="bg-green-50 px-4 py-1 rounded-sm">NodeJS</li>
            </ul>
          </div>
        </div>
        <div class="lg:h-96">
          <div class="w-full h-full box-content relative">
            <iframe
              src="https://instavids.app"
              class="ring-2 ring-slate-700 bg-white w-full lg:w-[1130px] h-[600px] rounded-md lg:rounded-2xl shadow-2xl lg:h-[770px] lg:scale-[50%] lg:origin-top-left"
            ></iframe>
          </div>
        </div>
      </div>
      <!-- Work -->

      <!-- Work -->
      <div class="grid lg:grid-cols-2 gap-20 my-32">
        <div class="lg:order-2">
          <div class="py-2 my-6">
            <span class="font-bold text-3xl" @click="open" ref="isActive"
              >Appdodo Appstore
              <a
                href="https://appdodo.store"
                rel="noopener noreferrer"
                target="_blank"
                ><Icon name="humbleicons:external-link" /></a
            ></span>
            <p class="text-2xl py-5" :class="{ '': open, ' hidden': !open }">
              An Android app-store made using Nextjs, TailwindCSS, MongoDB as
              backend. App data scraping done using some Javascript libraries
              like cheerio, axios , expressjs.
            </p>
          </div>
          <div class="py-2 my-3">
            <span class="font-bold text-3xl">Tools Used</span>
            <ul class="flex flex-wrap gap-x-7 gap-y-4 py-5 font-medium">
              <li class="bg-green-100 px-4 py-1 rounded-sm">NextJs</li>
              <li class="bg-sky-50 px-4 py-1 rounded-sm">TailwindCSS</li>
              <li class="bg-green-50 px-4 py-1 rounded-sm">MongoDB</li>
              <li class="bg-green-50 px-4 py-1 rounded-sm">Expressjs</li>
              <li class="bg-green-50 px-4 py-1 rounded-sm">Cheerio</li>
              <li class="bg-green-50 px-4 py-1 rounded-sm">Axios</li>
            </ul>
          </div>
        </div>
        <div class="lg:h-96">
          <div class="w-full h-full box-content relative">
            <iframe
              src="https://appdodo.store"
              class="ring-2 ring-slate-700 bg-white w-full lg:w-[1130px] h-[600px] rounded-md lg:rounded-2xl shadow-2xl lg:h-[770px] lg:scale-[50%] lg:origin-top-left"
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
