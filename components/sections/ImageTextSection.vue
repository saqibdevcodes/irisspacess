<template>
  <section class="section-padding">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <!-- Content -->
      <div 
        class="space-y-6 animate-fade-in" 
        :class="contentPosition === 'right' ? 'lg:order-2' : 'lg:order-1'"
      >
        <h2 class="text-4xl font-bold text-gray-900 leading-tight">
          {{ title }}
        </h2>
        <p class="text-lg text-gray-600 leading-relaxed">
          {{ description }}
        </p>
        <div v-if="buttonText" class="pt-4">
          <button class="btn-primary">
            {{ buttonText }}
          </button>
        </div>
      </div>
      
      <!-- Image -->
      <div 
        class="relative animate-scale image-hover cursor-pointer" 
        :class="contentPosition === 'right' ? 'lg:order-1' : 'lg:order-2'"
        @click="openModal"
      >
        <div class="aspect-[4/3] rounded-lg overflow-hidden shadow-lg group">
          <img 
            :src="image" 
            :alt="title"
            class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div class="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
            <svg class="w-16 h-16 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Image Modal -->
    <ImageModal 
      :is-open="isModalOpen" 
      :image-src="image" 
      :image-alt="title"
      @close="closeModal"
    />
  </section>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  buttonText: {
    type: String,
    default: ''
  },
  contentPosition: {
    type: String,
    default: 'left', // 'left' or 'right'
    validator: (value) => ['left', 'right'].includes(value)
  }
})

const isModalOpen = ref(false)

const openModal = () => {
  isModalOpen.value = true
}

const closeModal = () => {
  isModalOpen.value = false
}
</script>
