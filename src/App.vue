<template>
  <header class="border-b-2 border-gray-300 bg-white">
    <div class="xl:container px-1 py-3">
      <nav class="flex place-items-center flex-row gap-4">
        <RouterLink
          class="text-2xl text-blue-500 hover:text-blue-300 duration-200"
          to="/"
          >Главная
        </RouterLink>
        <RouterLink
          class="text-2xl text-blue-500 hover:text-blue-300 duration-200"
          to="/about"
          >О нас</RouterLink
        >
      </nav>
    </div>
  </header>
  <main>
    <div class="xl:container">
      <RouterView />
    </div>
  </main>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<style scoped></style>
