<script setup lang="ts">
import NavBar from '@/shared/components/NavBar.vue'
import { routeLinks } from './router/links-routes';
</script>

<template>
  <div class="wrapper dark:bg-slate-800 dark:text-white">
    <header>
      <NavBar
        custom-classes="py-4" 
        title="BreakingBad" 
        :links="routeLinks"
        />
    </header>
    <main>
      <RouterView />
    </main>
  </div>
</template>

<style scoped>

  .wrapper {
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
  }

</style>
