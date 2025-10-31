<template>
  <section class="section-padding">
    <div class="text-center mb-12 animate-fade-in">
      <h2 class="text-4xl font-bold text-gray-900 mb-4">{{ title }}</h2>
      <p class="text-lg text-gray-600 max-w-3xl mx-auto">{{ description }}</p>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-stagger">
      <div 
        v-for="(item, index) in items" 
        :key="index"
        class="group cursor-pointer stagger-item"
        @click="openModal(item)"
      >
        <div class="relative aspect-square rounded-lg overflow-hidden shadow-lg">
          <img 
            :src="item.image" 
            :alt="item.title"
            class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <div class="absolute inset-0 flex items-center justify-center">
            <div class="text-center text-white">
              <h3 class="text-xl font-bold mb-4">{{ item.title }}</h3>
              <button class="btn-primary text-sm">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Modal -->
    <div 
      v-if="isModalOpen" 
      class="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      @click="closeModal"
    >
      <div 
        class="bg-white rounded-lg max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto"
        @click.stop
      >
        <div class="p-8">
          <!-- Modal Header -->
          <div class="flex justify-between items-start mb-6">
            <h3 class="text-3xl font-bold text-gray-900">{{ selectedItem?.title }}</h3>
            <button 
              @click="closeModal"
              class="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          
          <!-- Modal Content -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <!-- Image -->
            <div class="aspect-square rounded-lg overflow-hidden">
              <img 
                :src="selectedItem?.image" 
                :alt="selectedItem?.title"
                class="w-full h-full object-cover"
              />
            </div>
            
            <!-- Details -->
            <div class="space-y-6">
              <div>
                <h4 class="text-lg font-semibold text-gray-900 mb-2">Service Description</h4>
                <p class="text-gray-600">{{ selectedItem?.description }}</p>
              </div>
              
              <div>
                <h4 class="text-lg font-semibold text-gray-900 mb-2">What's Included</h4>
                <ul class="space-y-2">
                  <li 
                    v-for="feature in selectedItem?.features" 
                    :key="feature"
                    class="flex items-center text-gray-600"
                  >
                    <svg class="w-4 h-4 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                    </svg>
                    {{ feature }}
                  </li>
                </ul>
              </div>
              
              <div class="flex space-x-4">
                <button class="btn-primary flex-1">
                  Get Started
                </button>
                <button 
                  @click="navigateToContact"
                  class="btn-secondary flex-1"
                >
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
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

const isModalOpen = ref(false)
const selectedItem = ref(null)

const openModal = (item) => {
  selectedItem.value = item
  isModalOpen.value = true
  document.body.style.overflow = 'hidden'
}

const closeModal = () => {
  isModalOpen.value = false
  selectedItem.value = null
  document.body.style.overflow = 'auto'
}

const navigateToContact = () => {
  closeModal()
  navigateTo('/contact')
}

// Close modal on escape key
onMounted(() => {
  const handleEscape = (e) => {
    if (e.key === 'Escape') {
      closeModal()
    }
  }
  document.addEventListener('keydown', handleEscape)
  
  onUnmounted(() => {
    document.removeEventListener('keydown', handleEscape)
  })
})
</script>