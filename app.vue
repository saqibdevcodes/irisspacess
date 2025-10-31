<template>
  <div>
    <NuxtLoadingIndicator :throttle="0" :duration="0" :height="0" color="transparent" />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
// Initialize scroll animations
const { initScrollAnimations } = useScrollAnimations()

onMounted(() => {
  initScrollAnimations()
})

// Watch for route changes and reinitialize animations
const route = useRoute()
watch(() => route.path, () => {
  nextTick(() => {
    initScrollAnimations()
  })
})
</script>

<style>
@import '~/assets/css/main.css';

/* PROFESSIONAL PAGE TRANSITIONS */
.page-enter-active {
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.page-leave-active {
  transition: all 0.4s cubic-bezier(0.4, 0, 1, 1);
}

.page-enter-from {
  opacity: 0;
  transform: translateY(30px) scale(0.98);
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-20px) scale(1.02);
}

/* Remove initial page load animation to prevent white overlay */

/* Smooth scrolling and prevent horizontal overflow */
html {
  scroll-behavior: smooth;
  overflow-x: hidden;
}

body {
  overflow-x: hidden;
  max-width: 100vw;
}

/* Custom scrollbar with smooth transitions */
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb {
  background: #560216;
  border-radius: 10px;
  transition: background 0.3s ease;
}

::-webkit-scrollbar-thumb:hover {
  background: #440114;
}

/* Ensure smooth animations */
* {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Hide any progress bars */
progress {
  display: none !important;
}

/* Hide browser native progress indicators */
::-webkit-progress-bar,
::-webkit-progress-value,
::-moz-progress-bar {
  display: none !important;
}

/* Hide any potential scroll progress indicators */
#nprogress,
.nprogress-container,
[data-progress],
.progress-bar,
.scroll-progress {
  display: none !important;
}
</style>
