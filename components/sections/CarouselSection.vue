<template>
  <section class="section-padding bg-gray-50">
    <div class="text-center mb-12 animate-fade-in">
      <h2 class="text-4xl font-bold text-gray-900 mb-4">{{ title }}</h2>
      <p class="text-lg text-gray-600 max-w-3xl mx-auto">{{ description }}</p>
    </div>
    
    <div class="relative">
      <!-- Main Carousel Container -->
      <div class="overflow-hidden rounded-lg">
        <div 
          ref="carouselContainer"
          class="flex transition-transform duration-500 ease-in-out"
          :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
        >
          <div 
            v-for="(item, index) in items" 
            :key="index"
            class="w-full flex-shrink-0"
          >
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
              <!-- Left Image -->
              <div 
                v-if="index > 0"
                class="aspect-square rounded-lg overflow-hidden shadow-lg opacity-60 scale-90"
              >
                <img 
                  :src="items[index - 1].image" 
                  :alt="items[index - 1].title"
                  class="w-full h-full object-cover"
                />
              </div>
              <div v-else class="aspect-square"></div>
              
              <!-- Center Image (Main) -->
              <div 
                class="aspect-square rounded-lg overflow-hidden shadow-xl relative cursor-pointer group"
                @click="openModal(item.image, item.title)"
              >
                <img 
                  :src="item.image" 
                  :alt="item.title"
                  class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div class="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                  <div class="text-center text-white">
                    <h3 class="text-2xl font-bold mb-2">{{ item.title }}</h3>
                    <p class="text-sm opacity-90">{{ item.description }}</p>
                    <svg class="w-12 h-12 mx-auto mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"></path>
                    </svg>
                  </div>
                </div>
              </div>
              
              <!-- Right Image -->
              <div 
                v-if="index < items.length - 1"
                class="aspect-square rounded-lg overflow-hidden shadow-lg opacity-60 scale-90"
              >
                <img 
                  :src="items[index + 1].image" 
                  :alt="items[index + 1].title"
                  class="w-full h-full object-cover"
                />
              </div>
              <div v-else class="aspect-square"></div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Navigation Arrows -->
      <button 
        @click="previousSlide"
        class="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-3 shadow-lg transition-all duration-300"
        :disabled="currentSlide === 0"
      >
        <svg class="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
        </svg>
      </button>
      
      <button 
        @click="nextSlide"
        class="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-3 shadow-lg transition-all duration-300"
        :disabled="currentSlide === items.length - 1"
      >
        <svg class="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
        </svg>
      </button>
      
      <!-- Dots Indicator -->
      <div class="flex justify-center mt-8 space-x-2">
        <button 
          v-for="(item, index) in items" 
          :key="index"
          @click="currentSlide = index"
          class="w-3 h-3 rounded-full transition-all duration-300"
          :class="currentSlide === index ? 'bg-primary' : 'bg-gray-300'"
        ></button>
      </div>
    </div>
    
    <!-- Image Modal -->
    <ImageModal 
      :is-open="isModalOpen" 
      :image-src="modalImageSrc" 
      :image-alt="modalImageAlt"
      @close="closeModal"
    />
  </section>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  items: {
    type: Array,
    required: true
  }
})

const currentSlide = ref(0)
const carouselContainer = ref(null)
const isModalOpen = ref(false)
const modalImageSrc = ref('')
const modalImageAlt = ref('')

const openModal = (imageSrc, imageAlt) => {
  modalImageSrc.value = imageSrc
  modalImageAlt.value = imageAlt
  isModalOpen.value = true
}

const closeModal = () => {
  isModalOpen.value = false
}

const nextSlide = () => {
  if (currentSlide.value < props.items.length - 1) {
    currentSlide.value++
  }
}

const previousSlide = () => {
  if (currentSlide.value > 0) {
    currentSlide.value--
  }
}

// Auto-slide functionality
let autoSlideInterval = null

onMounted(() => {
  autoSlideInterval = setInterval(() => {
    if (currentSlide.value < props.items.length - 1) {
      currentSlide.value++
    } else {
      currentSlide.value = 0
    }
  }, 5000)
})

onUnmounted(() => {
  if (autoSlideInterval) {
    clearInterval(autoSlideInterval)
  }
})
</script>
