<script setup>
// import { onMounted } from "vue";
// let scrollPosition = ref(null);
// let scrolled = 0;
// function updateScroll() {
//   scrollPosition = window.scrollY;
// }

// onMounted(() => {
//   window.addEventListener("scroll", updateScroll);
// });
// console.log(scrollPosition);
import Footer from "~~/components/Footer.vue";
</script>
<template>
  <div class="relative">
    <!-- HEADER MENU -->
    <div
      class="flex py-5 w-[90%] m-auto space-x-5 underline decoration-2 underline-offset-4"
    >
      <a href="#skills" class="">Skills</a>
      <a href="#portfolio" class="">Portfolio</a>
    </div>
    <div></div>
    <!-- MENU END -->
    <div class="bg-gray-900 py-7 lg:py-0 lg:sticky top-0 z-[1]">
      <div
        class="absolute inset-0 bg-[url(/img/grid.svg)] bg-top [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"
      ></div>
      <div
        class="px-6 sm:px-12 max-w-7xl m-auto lg:py-20 flex space-x-10 justify-between text-white relative"
      >
        <div class="max-w-[700px]">
          <h1 class="text-6xl lg:text-8xl font-bold">
            <span class="text-xl lg:text-4xl font-bold block text-slate-500"
              >Hi,</span
            >
            <span class="text-2xl lg:text-5xl font-bold italic mr-5">I'm</span>
            <span class="">Bhaskar</span>
          </h1>
          <div
            class="subTitle my-3 lg:my-6 text-lg lg:text-2xl block lg:flex space-x-2 lg:space-x-3 font-black break-all"
          >
            <span class="text-cyan-300">UX/UI</span>
            <span class="text-purple-300">Code Writer</span>
            <span class="text-pink-300">&</span>
            <span class="text-green-300">Vue</span>
            <span class="text-blue-300">Developer</span>
          </div>
          <p class="text-base lg:text-3xl font-normal info">
            Self Learned Web Developer, Started web development in 2010. Still
            learning new technologies. Top priority is responsive front-end
            development.
          </p>
        </div>
        <!-- IMAGE -->
        <!-- <div
          class="
            bg-white
            w-72
            h-90
            relative
            card
            flex
            items-center
            justify-center
            object-fit overflow-hidden p-2
          "
        >
          <img src="/me.jpg" class="relative z-10   rounded-md" />
        </div> -->
        <!-- IMG END -->
      </div>
    </div>
    <skills></skills>
    <works></works>
    <Quote />
    <Footer />
  </div>
</template>
<style>
@property --rotate {
  syntax: "<angle>";
  initial-value: 132deg;
  inherits: false;
}

:root {
  --card-height: 330px;
  --card-width: 280px;
}

.card {
  background: #191c29;
  width: var(--card-width);
  height: var(--card-height);
  padding: 0px;
  position: relative;
  border-radius: 6px;
  justify-content: center;
  align-items: center;
  text-align: center;
  display: flex;
  font-size: 1.5em;
  color: rgb(88 199 250 / 0%);
  cursor: pointer;
  font-family: cursive;
}

.card::before {
  content: "";
  width: 104%;
  height: 102%;
  border-radius: 8px;
  background-image: linear-gradient(
    var(--rotate),
    #5dffa3,
    #21b2a3 43%,
    #005ec2
  );
  position: absolute;
  z-index: 1;
  top: -1%;
  left: -2%;
  animation: spin 2.5s linear infinite;
}

.card::after {
  position: absolute;
  content: "";
  top: calc(var(--card-height) / 6);
  left: 0;
  right: 0;
  z-index: 1;
  height: 100%;
  width: 100%;
  margin: 0 auto;
  transform: scale(0.8);
  filter: blur(calc(var(--card-height) / 6));
  background-image: linear-gradient(
    var(--rotate),
    #5dffa3,
    #21b242 43%,
    #00a8c2
  );
  opacity: 1;
  transition: opacity 0.5s;
  animation: spin 2.5s linear infinite;
}

@keyframes spin {
  0% {
    --rotate: 0deg;
  }
  100% {
    --rotate: 360deg;
  }
}
</style>
