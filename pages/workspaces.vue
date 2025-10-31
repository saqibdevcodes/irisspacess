<template>
  <div class="bg-white">
    <!-- Hero Section -->
    <section
      class="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-[#023656] to-gray-900"
    >
      <div class="absolute inset-0">
        <img
          src="/images/workspace_header_background.jpg"
          alt="Workspaces"
          class="w-full h-full object-cover opacity-30"
        />
        <div
          class="absolute inset-0 bg-gradient-to-r from-[#023656]/80 to-gray-900/80"
        ></div>
      </div>

      <div class="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 class="text-5xl md:text-7xl font-bold text-white mb-6">
          Your Perfect Workspace Awaits
        </h1>
        <p class="text-xl md:text-2xl text-gray-200 leading-relaxed">
          From private offices to collaborative spaces, find the ideal
          environment for your success
        </p>
      </div>
    </section>

    <!-- Intro Section with Blobs -->
    <section
      class="relative px-4 py-20 md:px-[8%] lg:px-[10%] xl:px-[12%] bg-gradient-to-br from-white to-gray-50 overflow-hidden"
    >
      <!-- Blob Background -->
      <div class="absolute inset-0 overflow-visible pointer-events-none">
        <div
          class="absolute top-20 -right-40 w-96 h-96 bg-gradient-to-br from-blue-400/30 to-[#560216]/35 rounded-full blur-3xl animate-blob"
        ></div>
        <div
          class="absolute -bottom-20 -left-40 w-[500px] h-[500px] bg-gradient-to-br from-purple-400/25 to-pink-400/25 rounded-full blur-3xl animate-blob animation-delay-2000"
        ></div>
      </div>

      <div class="max-w-7xl mx-auto relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <!-- Text on Left -->
          <div class="space-y-6">
            <div
              class="inline-block px-4 py-2 bg-[#023656]/10 rounded-full text-[#023656] text-sm font-semibold mb-4"
            >
              ✨ Designed for Inspiration
            </div>
            <h2 class="text-4xl md:text-5xl font-bold text-gray-900">
              Where Great Ideas Come to Life
            </h2>
            <p class="text-lg text-gray-600 leading-relaxed">
              Experience a global-minded space designed to elevate your focus,
              spark conversations, and bring ideas alive. Whether you're a
              founder, freelancer, or creator, iris spaces is your trusted go-to
              third space.
            </p>
            <div class="flex flex-wrap gap-4 pt-4">
              <div class="flex items-center gap-2">
                <svg
                  class="w-5 h-5 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span class="text-gray-700">24/7 Access</span>
              </div>
              <div class="flex items-center gap-2">
                <svg
                  class="w-5 h-5 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span class="text-gray-700">High-Speed WiFi</span>
              </div>
              <div class="flex items-center gap-2">
                <svg
                  class="w-5 h-5 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span class="text-gray-700">Premium Amenities</span>
              </div>
            </div>
          </div>

          <!-- Overlapping Images on Right -->
          <div class="relative h-[600px] w-full">
            <div
              class="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl"
            >
              <img
                src="/images/cafe_general_area_1.jpg"
                alt="Workspace Main"
                class="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div
              class="absolute -bottom-8 -left-8 w-[60%] h-[40%] rounded-2xl overflow-hidden shadow-2xl border-4 border-white"
            >
              <img
                src="/images/art_1.jpg"
                alt="Workspace Detail"
                class="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- What We Offer Section -->
    <section
      class="relative px-4 py-20 md:px-[8%] lg:px-[10%] xl:px-[12%] bg-white overflow-hidden"
    >
      <!-- Blob Background -->
      <div class="absolute inset-0 overflow-visible pointer-events-none">
        <div
          class="absolute -top-40 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-cyan-400/25 to-teal-400/25 rounded-full blur-3xl animate-blob-slow"
        ></div>
        <div
          class="absolute bottom-20 -right-40 w-[500px] h-[500px] bg-gradient-to-br from-orange-400/20 to-yellow-400/20 rounded-full blur-3xl animate-blob-slow animation-delay-3000"
        ></div>
      </div>

      <div class="max-w-7xl mx-auto relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div class="relative rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="/images/art_2.jpg"
              alt="Amenities"
              class="w-full h-auto hover:scale-105 transition-transform duration-700"
            />
          </div>

          <div class="space-y-8">
            <div>
              <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                What We Offer
              </h2>
              <p class="text-lg text-gray-600">
                Everything you need to work at your best, all in one place
              </p>
            </div>

            <div class="grid grid-cols-1 gap-4">
              <div
                class="group flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-all duration-300"
              >
                <div
                  class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#fcc1cf] to-[#023656] rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform"
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
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    ></path>
                  </svg>
                </div>
                <div class="flex-1">
                  <h3 class="text-lg font-bold text-gray-900 mb-1">
                    Customized Private Offices
                  </h3>
                  <p class="text-gray-600 text-sm">
                    Personalize your space to reflect your brand and culture
                  </p>
                </div>
              </div>

              <div
                class="group flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-all duration-300"
              >
                <div
                  class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#fcc1cf] to-[#023656] rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform"
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
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    ></path>
                  </svg>
                </div>
                <div class="flex-1">
                  <h3 class="text-lg font-bold text-gray-900 mb-1">
                    Flexible Collaboration Spaces
                  </h3>
                  <p class="text-gray-600 text-sm">
                    Open areas perfect for team work, training, and community
                    events
                  </p>
                </div>
              </div>

              <div
                class="group flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-all duration-300"
              >
                <div
                  class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#fcc1cf] to-[#023656] rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform"
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
                      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                    ></path>
                  </svg>
                </div>
                <div class="flex-1">
                  <h3 class="text-lg font-bold text-gray-900 mb-1">
                    Wellness Areas
                  </h3>
                  <p class="text-gray-600 text-sm">
                    Meditation zones for balance and recharging your senses
                  </p>
                </div>
              </div>

              <div
                class="group flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-all duration-300"
              >
                <div
                  class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#fcc1cf] to-[#023656] rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform"
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
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    ></path>
                  </svg>
                </div>
                <div class="flex-1">
                  <h3 class="text-lg font-bold text-gray-900 mb-1">
                    Private Boardrooms & Meeting Rooms
                  </h3>
                  <p class="text-gray-600 text-sm">
                    Professional spaces for strategy sessions and important
                    conversations
                  </p>
                </div>
              </div>

              <div
                class="group flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-all duration-300"
              >
                <div
                  class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#fcc1cf] to-[#023656] rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform"
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
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    ></path>
                  </svg>
                </div>
                <div class="flex-1">
                  <h3 class="text-lg font-bold text-gray-900 mb-1">
                    Focus Group Facilities
                  </h3>
                  <p class="text-gray-600 text-sm">
                    Specialized rooms for qualitative research and collective
                    insights
                  </p>
                </div>
              </div>

              <div
                class="group flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-all duration-300"
              >
                <div
                  class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#fcc1cf] to-[#023656] rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform"
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
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    ></path>
                  </svg>
                </div>
                <div class="flex-1">
                  <h3 class="text-lg font-bold text-gray-900 mb-1">
                    All Essentials Included
                  </h3>
                  <p class="text-gray-600 text-sm">
                    WiFi, security, tea, coffee, and more—hassle-free
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Grid Section -->
    <section
      class="relative px-4 py-20 md:px-[8%] lg:px-[10%] xl:px-[12%] bg-gradient-to-b from-gray-50 to-white overflow-hidden"
    >
      <!-- Blob Background -->
      <div class="absolute inset-0 overflow-visible pointer-events-none">
        <div
          class="absolute top-1/4 -left-40 w-[700px] h-[700px] bg-gradient-to-br from-indigo-400/25 to-purple-400/25 rounded-full blur-3xl animate-blob-slow animation-delay-2000"
        ></div>
        <div
          class="absolute -bottom-40 right-1/4 w-[600px] h-[600px] bg-gradient-to-br from-pink-400/20 to-rose-400/20 rounded-full blur-3xl animate-blob-slow"
        ></div>
      </div>

      <div class="max-w-7xl mx-auto relative z-10">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Workspace Solutions
        </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the perfect space that fits your needs and work style
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="service in services"
            :key="service.id"
            class="group relative rounded-2xl overflow-hidden shadow-xl cursor-pointer transform transition-all duration-500 hover:-translate-y-3"
          >
            <div class="relative h-[400px] overflow-hidden">
            <img
              :src="service.image"
              :alt="service.title"
                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent group-hover:from-[#023656]/95 transition-all duration-500"
              ></div>
            </div>

            <div
              class="absolute bottom-0 left-0 right-0 p-6 text-white transform transition-all duration-500"
            >
              <div class="mb-3">
                <span
                  class="inline-block w-12 h-1 bg-white rounded-full"
                ></span>
              </div>
              <h3
                class="text-2xl font-bold mb-3 group-hover:scale-105 transition-transform"
              >
                {{ service.title }}
              </h3>
              <p
                class="text-sm text-gray-200 mb-4 opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-20 transition-all duration-500"
              >
                {{ service.description }}
              </p>
              <button
                class="bg-white text-[#023656] px-6 py-3 rounded-full text-sm font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
              >
                Learn More →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section
      class="relative min-h-[70vh] flex items-center justify-center overflow-hidden"
    >
      <div class="absolute inset-0">
        <img
          src="/images/gallery_floor.jpg"
          alt="Join iris spaces"
          class="w-full h-full object-cover"
        />
        <div
          class="absolute inset-0 bg-gradient-to-r from-[#023656]/85 to-gray-900/85"
        ></div>
      </div>

      <div class="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h2
          class="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight"
        >
          Ready to Find Your Perfect Space?
        </h2>
        <p class="text-xl md:text-2xl text-gray-200 mb-10 leading-relaxed">
          Spaces that are thoughtfully designed with a unique global ambiance
          for thinkers, creators, and doers, unlike anything else in Pakistan.
        </p>

        <div
          class="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <NuxtLink
            to="/contact"
            class="group px-10 py-5 bg-white text-[#023656] rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-110 shadow-2xl"
          >
            Schedule a Tour
            <span
              class="inline-block ml-2 transform group-hover:translate-x-2 transition-transform"
              >→</span
            >
          </NuxtLink>
          <a
            href="tel:+1234567890"
            class="px-10 py-5 bg-transparent border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white hover:text-[#023656] transition-all duration-300 hover:scale-110"
          >
            Call Us Now
          </a>
        </div>

        <div class="mt-12 flex flex-wrap justify-center gap-8 text-white">
          <div class="flex items-center gap-2">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span>Flexible Terms</span>
          </div>
          <div class="flex items-center gap-2">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span>No Setup Fees</span>
          </div>
          <div class="flex items-center gap-2">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span>Move-in Ready</span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: "Workspaces - Iris Spaces",
  meta: [
    {
      name: "description",
      content:
        "Explore our premium workspace solutions designed for inspiration and productivity.",
    },
  ],
});

const services = [
  {
    id: 1,
    title: "Private Offices",
    description:
      "Fully customizable private offices for teams of all sizes with premium amenities",
    image: "/images/floor_pic_1.jpg",
  },
  {
    id: 2,
    title: "Co-working Spaces",
    description:
      "Flexible open areas perfect for freelancers and remote workers",
    image: "/images/floor_3_rest_area.jpg",
  },
  {
    id: 3,
    title: "Meeting Rooms",
    description: "Professional meeting spaces equipped with latest technology",
    image: "/images/meeting_room.jpg",
  },
  {
    id: 4,
    title: "Focus Group Rooms",
    description:
      "Specialized facilities for qualitative research and discussions",
    image: "/images/cafe_area_2.jpg",
  },
  {
    id: 5,
    title: "Conference Halls",
    description:
      "Large venues for training sessions, events, and presentations",
    image: "/images/conference_room_1.jpg",
  },
  {
    id: 6,
    title: "Creative Studios",
    description:
      "Inspiring spaces designed for creative work and collaboration",
    image: "/images/floor_pic_2_sitting.jpg",
  },
  {
    id: 7,
    title: "Wellness Zones",
    description: "Quiet areas for meditation, relaxation, and mental recharge",
    image: "/images/cafe_area_3.jpg",
  },
];
</script>

<style scoped>
/* Blob animations */
@keyframes blob {
  0%,
  100% {
    transform: translate(0, 0) scale(1);
  }
  33% {
    transform: translate(30px, -50px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
}

@keyframes blob-slow {
  0%,
  100% {
    transform: translate(0, 0) scale(1);
  }
  50% {
    transform: translate(20px, 20px) scale(1.05);
  }
}

.animate-blob {
  animation: blob 7s ease-in-out infinite;
}

.animate-blob-slow {
  animation: blob-slow 10s ease-in-out infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-3000 {
  animation-delay: 3s;
}

.animation-delay-4000 {
  animation-delay: 4s;
}
</style>
