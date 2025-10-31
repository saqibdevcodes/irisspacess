<template>
  <div class="min-h-screen bg-white flex flex-col">
    <!-- Header with Background Image -->
    <header
      class="relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-[#023656] to-gray-900s"
    >
      <!-- Navigation Bar -->
      <nav
        class="w-full py-4 px-8 bg-gradient-to-tr from-gray-900 via-[#023656] to-gray-900"
      >
        <div class="flex items-center justify-between max-w-7xl mx-auto">
          <!-- Logo -->
          <!-- <NuxtLink to="/" class="flex items-center space-x-2 z-50">
            <div class="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
              <span class="text-[#560216] font-bold text-xl">IS</span>
            </div>
            <span class="text-white font-bold text-xl hidden sm:block">IRIS SPACES</span>
          </NuxtLink> -->
          <NuxtLink to="/" class="flex items-center space-x-2 z-50">
            <!-- Replace this with your logo -->
            <img
              src="/images/logo_white_text.png"
              alt="Iris Spaces Logo"
              class="w-52 object-contain"
            />
          </NuxtLink>

          <!-- Mobile Menu Button -->
          <button
            @click="mobileMenuOpen = !mobileMenuOpen"
            class="md:hidden p-2 text-white"
          >
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>

          <!-- Desktop Navigation -->
          <div class="hidden md:flex space-x-8">
            <NuxtLink
              to="/"
              class="text-white hover:text-gray-300 transition-colors duration-300 font-medium"
              :class="{ 'border-b-2 border-white': $route.path === '/' }"
            >
              Home
            </NuxtLink>
            <NuxtLink
              to="/workspaces"
              class="text-white hover:text-gray-300 transition-colors duration-300 font-medium"
              :class="{
                'border-b-2 border-white': $route.path === '/workspaces',
              }"
            >
              Workspaces
            </NuxtLink>
            <NuxtLink
              to="/research-consult"
              class="text-white hover:text-gray-300 transition-colors duration-300 font-medium"
              :class="{
                'border-b-2 border-white': $route.path === '/research-consult',
              }"
            >
              Research & Consult
            </NuxtLink>
            <NuxtLink
              to="/contact"
              class="text-white hover:text-gray-300 transition-colors duration-300 font-medium"
              :class="{ 'border-b-2 border-white': $route.path === '/contact' }"
            >
              Contact
            </NuxtLink>
          </div>
        </div>

        <!-- Mobile Menu -->
        <div
          v-if="mobileMenuOpen"
          class="md:hidden mt-4 bg-white/95 backdrop-blur-sm rounded-lg p-4"
        >
          <div class="flex flex-col space-y-4">
            <NuxtLink
              to="/"
              @click="mobileMenuOpen = false"
              class="text-gray-700 hover:text-[#560216] transition-colors duration-300 font-medium"
            >
              Home
            </NuxtLink>
            <NuxtLink
              to="/workspaces"
              @click="mobileMenuOpen = false"
              class="text-gray-700 hover:text-[#560216] transition-colors duration-300 font-medium"
            >
              Workspaces
            </NuxtLink>
            <NuxtLink
              to="/research-consult"
              @click="mobileMenuOpen = false"
              class="text-gray-700 hover:text-[#560216] transition-colors duration-300 font-medium"
            >
              Research & Consult
            </NuxtLink>
            <NuxtLink
              to="/contact"
              @click="mobileMenuOpen = false"
              class="text-gray-700 hover:text-[#560216] transition-colors duration-300 font-medium"
            >
              Contact
            </NuxtLink>
          </div>
        </div>
      </nav>

      <!-- Centered Title -->
    </header>

    <!-- Main Content -->
    <main class="flex-1">
      <slot />
    </main>

    <!-- Footer -->
    <footer class="bg-gray-50 border-t border-gray-200 mt-auto">
      <div class="px-4 py-16 md:px-[10%] lg:px-[15%] xl:px-[20%]">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <!-- Company Info -->
          <div class="space-y-4">
            <h3 class="text-xl font-bold text-[#560216]">IRIS SPACES</h3>
            <p class="text-gray-700 text-sm leading-relaxed">
              We provide innovative workspace solutions that inspire creativity
              and productivity. Our premium spaces are designed to meet the
              evolving needs of modern businesses.
            </p>
          </div>

          <!-- Why Choose Us -->
          <div class="space-y-4">
            <h4 class="text-lg font-semibold text-[#560216]">Why Choose Us</h4>
            <p class="text-gray-700 text-sm leading-relaxed">
              With years of experience in workspace design and management, we
              deliver exceptional solutions tailored to your unique requirements
              and budget.
            </p>
          </div>

          <!-- Services -->
          <div class="space-y-4">
            <h4 class="text-lg font-semibold text-[#560216]">Bookings</h4>
            <ul class="space-y-2 text-sm text-gray-700">
              <li>• Private Office Spaces</li>
              <li>• Co-working Areas</li>
              <li>• Meeting Rooms</li>
              <li>• Event Spaces</li>
              <li>• Research Consultations</li>
              <li>• Space Planning</li>
              <li>• Virtual Office Solutions</li>
              <li>• Custom Workspace Design</li>
            </ul>
          </div>

          <!-- Contact & Social -->
          <div class="space-y-4">
            <h4 class="text-lg font-semibold text-[#560216]">Contact Us</h4>
            <div class="space-y-3 text-sm text-gray-700">
              <div>
                <p class="font-semibold text-gray-900">Address:</p>
                <p>60D Main Broadway<br />DHA Phase 8, Lahore</p>
              </div>
              <div>
                <p class="font-semibold text-gray-900">Phone:</p>
                <p>+42 368 123 456</p>
              </div>
              <div>
                <p class="font-semibold text-gray-900">Email:</p>
                <p>info@irisspacespk.com</p>
              </div>
            </div>

            <!-- Social Icons -->
            <div class="flex space-x-4 pt-4">
              <a
                href="#"
                class="text-gray-500 hover:text-[#560216] transition-colors duration-300"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                  />
                </svg>
              </a>
              <a
                href="#"
                class="text-gray-500 hover:text-[#560216] transition-colors duration-300"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                  />
                </svg>
              </a>
              <a
                href="#"
                class="text-gray-500 hover:text-[#560216] transition-colors duration-300"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <!-- Footer Bottom -->
        <div class="border-t border-gray-200 mt-8 pt-8 text-center">
          <p class="text-sm text-gray-600">
            © {{ new Date().getFullYear() }} Iris Spaces. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
const route = useRoute();
const mobileMenuOpen = ref(false);

// Header images mapping
const headerImages = {
  "/": "/images/main_header_background.jpg",
  "/workspaces": "/images/workspace_header_background.jpg",
  "/research-consult": "/images/consult_header_background.jpeg",
  "/contact": "/images/contact_header_background.jpg",
};

// Page titles
const pageTitles = {
  "/": "Home",
  "/workspaces": "Workspaces",
  "/research-consult": "Research & Consult",
  "/contact": "Contact Us",
};

// Computed properties for current page
const headerImage = computed(
  () => headerImages[route.path] || "/images/office-space-1.jpg"
);
const currentPageTitle = computed(
  () => pageTitles[route.path] || "Iris Spaces"
);

// Close mobile menu on route change
watch(
  () => route.path,
  () => {
    mobileMenuOpen.value = false;
  }
);
</script>
