<template>
  <section class="section-padding">
    <div class="max-w-4xl mx-auto">
      <div class="text-center mb-12 animate-fade-in">
        <h2 class="text-4xl font-bold text-gray-900 mb-4">{{ title }}</h2>
        <p class="text-lg text-gray-600">{{ description }}</p>
      </div>
      
      <form @submit.prevent="submitForm" class="space-y-6">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <!-- Name -->
          <div>
            <label for="name" class="block text-sm font-medium text-gray-700 mb-2">
              Full Name *
            </label>
            <input
              id="name"
              v-model="form.name"
              type="text"
              required
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
              :class="{ 'border-red-500': errors.name }"
            />
            <p v-if="errors.name" class="text-red-500 text-sm mt-1">{{ errors.name }}</p>
          </div>
          
          <!-- Email -->
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700 mb-2">
              Email Address *
            </label>
            <input
              id="email"
              v-model="form.email"
              type="email"
              required
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
              :class="{ 'border-red-500': errors.email }"
            />
            <p v-if="errors.email" class="text-red-500 text-sm mt-1">{{ errors.email }}</p>
          </div>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <!-- Phone -->
          <div>
            <label for="phone" class="block text-sm font-medium text-gray-700 mb-2">
              Contact Number *
            </label>
            <input
              id="phone"
              v-model="form.phone"
              type="tel"
              required
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
              :class="{ 'border-red-500': errors.phone }"
            />
            <p v-if="errors.phone" class="text-red-500 text-sm mt-1">{{ errors.phone }}</p>
          </div>
          
          <!-- Requirements -->
          <div>
            <label for="requirements" class="block text-sm font-medium text-gray-700 mb-2">
              Requirements *
            </label>
            <select
              id="requirements"
              v-model="form.requirements"
              required
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
              :class="{ 'border-red-500': errors.requirements }"
            >
              <option value="">Select your requirements</option>
              <option value="office-space">Office Space</option>
              <option value="co-working">Co-working Space</option>
              <option value="meeting-room">Meeting Room</option>
              <option value="event-space">Event Space</option>
              <option value="research-consultation">Research Consultation</option>
              <option value="custom-solution">Custom Solution</option>
            </select>
            <p v-if="errors.requirements" class="text-red-500 text-sm mt-1">{{ errors.requirements }}</p>
          </div>
        </div>
        
        <!-- Details -->
        <div>
          <label for="details" class="block text-sm font-medium text-gray-700 mb-2">
            Additional Details
          </label>
          <textarea
            id="details"
            v-model="form.details"
            rows="5"
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 resize-none"
            placeholder="Please provide any additional information about your requirements..."
          ></textarea>
        </div>
        
        <!-- Submit Button -->
        <div class="text-center pt-6">
          <button
            type="submit"
            :disabled="isSubmitting"
            class="btn-primary px-12 py-4 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span v-if="!isSubmitting">Submit Request</span>
            <span v-else class="flex items-center">
              <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Submitting...
            </span>
          </button>
        </div>
      </form>
      
      <!-- Success Message -->
      <div 
        v-if="showSuccess"
        class="mt-8 p-6 bg-green-50 border border-green-200 rounded-lg text-center"
      >
        <div class="flex items-center justify-center mb-2">
          <svg class="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>
        <h3 class="text-lg font-semibold text-green-800 mb-2">Thank You!</h3>
        <p class="text-green-700">Your request has been submitted successfully. We'll get back to you within 24 hours.</p>
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    default: 'Get In Touch'
  },
  description: {
    type: String,
    default: 'Fill out the form below and we\'ll get back to you as soon as possible.'
  }
})

const form = ref({
  name: '',
  email: '',
  phone: '',
  requirements: '',
  details: ''
})

const errors = ref({})
const isSubmitting = ref(false)
const showSuccess = ref(false)

const validateForm = () => {
  errors.value = {}
  
  if (!form.value.name.trim()) {
    errors.value.name = 'Name is required'
  }
  
  if (!form.value.email.trim()) {
    errors.value.email = 'Email is required'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.value.email)) {
    errors.value.email = 'Please enter a valid email address'
  }
  
  if (!form.value.phone.trim()) {
    errors.value.phone = 'Phone number is required'
  }
  
  if (!form.value.requirements) {
    errors.value.requirements = 'Please select your requirements'
  }
  
  return Object.keys(errors.value).length === 0
}

const submitForm = async () => {
  if (!validateForm()) {
    return
  }
  
  isSubmitting.value = true
  
  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Reset form
    form.value = {
      name: '',
      email: '',
      phone: '',
      requirements: '',
      details: ''
    }
    
    showSuccess.value = true
    
    // Hide success message after 5 seconds
    setTimeout(() => {
      showSuccess.value = false
    }, 5000)
    
  } catch (error) {
    console.error('Form submission error:', error)
  } finally {
    isSubmitting.value = false
  }
}
</script>
