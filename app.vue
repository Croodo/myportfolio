<script setup>
useHead({
  link: [
    { rel: "preconnect", href: "https://fonts.gstatic.com" },
    {
      href: "https://fonts.googleapis.com/css2?family=Do+Hyeon&family=Federo&family=Josefin+Sans:wght@100&family=Major+Mono+Display&display=swap",
      rel: "stylesheet",
    },
  ],
});
</script>

<template>
  <NuxtLayout>
    <NuxtLoadingIndicator />
    <NuxtPage class="text-slate-800"></NuxtPage>
  </NuxtLayout>
</template>
