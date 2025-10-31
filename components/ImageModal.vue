<template>
  <Teleport to="body">
    <Transition name="modal">
      <div 
        v-if="isOpen"
        class="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-4"
        @click="close"
      >
        <!-- Close Button -->
        <button 
          class="absolute top-8 right-8 text-white hover:text-gray-300 transition-colors z-10"
          @click="close"
        >
          <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
        
        <!-- Image -->
        <div class="max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center" @click.stop>
          <img 
            :src="imageSrc" 
            :alt="imageAlt"
            class="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
          />
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false
  },
  imageSrc: {
    type: String,
    required: true
  },
  imageAlt: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['close'])

const close = () => {
  emit('close')
}

// Close on escape key
onMounted(() => {
  const handleEscape = (e) => {
    if (e.key === 'Escape' && props.isOpen) {
      close()
    }
  }
  document.addEventListener('keydown', handleEscape)
  
  onUnmounted(() => {
    document.removeEventListener('keydown', handleEscape)
  })
})

// Prevent body scroll when modal is open
watch(() => props.isOpen, (newVal) => {
  if (newVal) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = 'auto'
  }
})
</script>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-from img,
.modal-leave-to img {
  transform: scale(0.8);
}

.modal-enter-active img,
.modal-leave-active img {
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}
</style>

