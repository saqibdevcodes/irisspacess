<template>
  <section class="relative flex items-center justify-center overflow-hidden">
    <!-- Background Image -->
    <div class="absolute inset-0">
      <img
        :src="backgroundImage"
        :alt="title"
        class="w-full h-full object-cover hero-parallax"
      />
      <div class="absolute inset-0 bg-black/40"></div>
    </div>

    <!-- Content -->
    <div
      class="relative z-10 text-center text-white px-8 max-w-4xl mx-auto animate-fade-in"
    >
      <h2 class="text-5xl font-bold mb-6 leading-tight text-reveal">
        {{ title }}
      </h2>
      <p class="text-xl opacity-90 leading-relaxed">
        {{ description }}
      </p>
      <div v-if="buttonText" class="mt-8">
        <button class="btn-primary bg-white text-primary hover:bg-gray-100">
          {{ buttonText }}
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  backgroundImage: {
    type: String,
    required: true,
  },
  buttonText: {
    type: String,
    default: "",
  },
});
</script>
