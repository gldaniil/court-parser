<template>
  <div class="flex flex-row">
    <div
      v-show="isShow"
      class="box-border border-r-2 border-gray-200 bg-white h-screen px-2 py-5"
      @mouseleave="isShow = !isShow"
    >
      <nav class="flex place-items-center flex-col gap-4 px-2">
        <RouterLink
          :active-class="'font-medium'"
          class="text-blue-500 duration-200"
          to="/"
          ><v-icon name="co-home" scale="1.5" />
        </RouterLink>
        <RouterLink
          :active-class="'font-medium'"
          class="text-blue-500 duration-200"
          to="/about"
          ><v-icon name="bi-question-circle" scale="1.5" />
        </RouterLink>
      </nav>
    </div>
    <div
      v-show="!isShow"
      class="absolute h-full flex place-items-center"
      @mouseenter="isShow = !isShow"
    >
      <v-icon
        name="md-arrowforwardios"
        animation="pulse"
        scale="1.5"
        fill="blue"
      />
    </div>
    <main class="bg-neutral-100 w-full h-screen">
      <div class="h-full flex flex-col pl-8 pr-6 py-6">
        <RouterView />
      </div>
    </main>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'

const isShow = ref(false)

onMounted(() => {
  const req = async () => {
    const { data } = await fetch('http://localhost:3000/api/test')
    console.log(data)
  }
  req()
})
</script>
