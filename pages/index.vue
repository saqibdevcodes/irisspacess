<template>
  <div class="bg-white">
    <!-- Hero Section with Animated Text -->
    <section
      class="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-[#023656] to-gray-900"
    >
      <div class="absolute inset-0 opacity-[0.3]">
        <div
          class="absolute inset-0 bg-[url('/images/building_sketch.png')] bg-left bg-no-repeat bg-contain h-full"
        ></div>
      </div>
      <div class="absolute inset-0 opacity-[0.3]">
        <div
          class="absolute inset-0 bg-[url('/images/building_sketch.png')] bg-right bg-no-repeat bg-contain h-full"
        ></div>
      </div>

      <!-- Animated Background Shapes -->
      <div class="absolute inset-0 overflow-hidden">
        <div
          class="absolute top-20 left-10 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse"
        ></div>
        <div
          class="absolute bottom-20 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse"
          style="animation-delay: 1s"
        ></div>
      </div>

      <div
        class="relative z-10 text-center px-4 max-w-6xl mx-auto animate-fade-in"
      >
        <div class="mb-6">
          <span
            class="inline-block px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium border border-white/20 animate-slide-down"
          >
            Welcome to the Future of Workspaces
          </span>
        </div>

        <h1
          class="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight"
        >
          Not Your Typical<br />
          <span
            class="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-white"
            >Workspace</span
          >
        </h1>

        <p
          class="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed"
        >
          <span class="text-white capitalize font-bold text-3xl italic"
            >iris spaces
          </span>
          is more than just a desk or an office; it's an environment designed to
          spark creativity, fuel growth, and restore balance.
        </p>

        <div
          class="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button
            @click="scrollToSpaces"
            class="group px-8 py-4 bg-white text-[#560216] rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-2xl"
          >
            Explore Our Spaces
            <span
              class="inline-block ml-2 transform group-hover:translate-x-2 transition-transform"
              >→</span
            >
          </button>
          <button
            @click="scrollToContact"
            class="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-semibold text-lg hover:bg-white hover:text-[#560216] transition-all duration-300 hover:scale-105"
          >
            Book a Tour
          </button>
        </div>

        <!-- Scroll Indicator -->
        <div
          class="absolute -bottom-[10rem] left-1/2 transform -translate-x-1/2 animate-bounce"
        >
          <div
            class="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2"
          >
            <div class="w-1 h-3 bg-white/70 rounded-full animate-scroll"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="px-4 py-20 md:px-[8%] lg:px-[10%] xl:px-[12%] bg-white">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div
            class="text-center hover:scale-110 transition-transform duration-300"
          >
            <div class="text-5xl md:text-6xl font-bold text-[#023656] mb-2">
              500+
            </div>
            <div class="text-gray-600 font-medium">Happy Members</div>
          </div>
          <div
            class="text-center hover:scale-110 transition-transform duration-300"
          >
            <div class="text-5xl md:text-6xl font-bold text-[#023656] mb-2">
              50+
            </div>
            <div class="text-gray-600 font-medium">Private Offices</div>
          </div>
          <div
            class="text-center hover:scale-110 transition-transform duration-300"
          >
            <div class="text-5xl md:text-6xl font-bold text-[#023656] mb-2">
              24/7
            </div>
            <div class="text-gray-600 font-medium">Access Available</div>
          </div>
          <div
            class="text-center hover:scale-110 transition-transform duration-300"
          >
            <div class="text-5xl md:text-6xl font-bold text-[#023656] mb-2">
              100%
            </div>
            <div class="text-gray-600 font-medium">Satisfaction Rate</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="px-4 py-20 md:px-[8%] lg:px-[10%] xl:px-[12%] bg-gray-50">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Choose iris spaces?
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the perfect blend of design, functionality, and community
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Feature 1 -->
          <div
            class="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
          >
            <div
              class="w-16 h-16 bg-gradient-to-br from-[#fcc1cf] to-[#023656] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
            >
              <svg
                class="w-8 h-8 text-white"
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
            <h3 class="text-2xl font-bold text-gray-900 mb-3">
              High-Speed Internet
            </h3>
            <p class="text-gray-600 leading-relaxed">
              Lightning-fast fiber optic connectivity to keep you productive
              without interruptions.
            </p>
          </div>

          <!-- Feature 2 -->
          <div
            class="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
          >
            <div
              class="w-16 h-16 bg-gradient-to-br from-[#fcc1cf] to-[#023656] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
            >
              <svg
                class="w-8 h-8 text-white"
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
            <h3 class="text-2xl font-bold text-gray-900 mb-3">
              Vibrant Community
            </h3>
            <p class="text-gray-600 leading-relaxed">
              Connect with like-minded professionals and grow your network in
              our collaborative environment.
            </p>
          </div>

          <!-- Feature 3 -->
          <div
            class="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
          >
            <div
              class="w-16 h-16 bg-gradient-to-br from-[#fcc1cf] to-[#023656] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
            >
              <svg
                class="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-3">
              Flexible Hours
            </h3>
            <p class="text-gray-600 leading-relaxed">
              Work on your schedule with 24/7 access to our premium facilities
              and amenities.
            </p>
          </div>

          <!-- Feature 4 -->
          <div
            class="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
          >
            <div
              class="w-16 h-16 bg-gradient-to-br from-[#fcc1cf] to-[#023656] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
            >
              <svg
                class="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                ></path>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-3">
              Modern Facilities
            </h3>
            <p class="text-gray-600 leading-relaxed">
              State-of-the-art equipment, ergonomic furniture, and premium
              amenities at your fingertips.
            </p>
          </div>

          <!-- Feature 5 -->
          <div
            class="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
          >
            <div
              class="w-16 h-16 bg-gradient-to-br from-[#fcc1cf] to-[#023656] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
            >
              <svg
                class="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                ></path>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-3">
              Creative Spaces
            </h3>
            <p class="text-gray-600 leading-relaxed">
              Thoughtfully designed environments that inspire innovation and
              boost productivity.
            </p>
          </div>

          <!-- Feature 6 -->
          <div
            class="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
          >
            <div
              class="w-16 h-16 bg-gradient-to-br from-[#fcc1cf] to-[#023656] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
            >
              <svg
                class="w-8 h-8 text-white"
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
            <h3 class="text-2xl font-bold text-gray-900 mb-3">
              Wellness Focus
            </h3>
            <p class="text-gray-600 leading-relaxed">
              Balance work and wellness with our meditation areas, natural
              lighting, and green spaces.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Image Carousel with Modern Design -->
    <section
      ref="spacesSection"
      class="relative px-4 py-20 md:px-[8%] lg:px-[10%] xl:px-[12%] bg-gradient-to-br from-white via-gray-50 to-white overflow-hidden"
    >
      <!-- Animated Blob Backgrounds -->
      <div class="absolute inset-0 overflow-visible pointer-events-none">
        <div
          class="absolute top-20 -left-40 w-96 h-96 bg-gradient-to-br from-[#560216]/45 to-purple-500/40 rounded-full blur-3xl animate-blob"
        ></div>
        <div
          class="absolute top-40 -right-40 w-[500px] h-[500px] bg-gradient-to-br from-blue-500/40 to-[#560216]/45 rounded-full blur-3xl animate-blob animation-delay-2000"
        ></div>
        <!-- Blob extending to next section -->
        <div
          class="absolute -bottom-40 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-pink-500/35 to-amber-400/35 rounded-full blur-3xl animate-blob animation-delay-4000"
        ></div>
      </div>

      <div class="max-w-7xl mx-auto relative z-10">
        <div class="text-center mb-16 animate-fade-in">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Experience Our Spaces
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Take a visual tour through our beautifully designed workspaces
          </p>
        </div>

        <!-- Carousel Container -->
        <div
          class="relative py-12 overflow-hidden"
          @mouseenter="pauseAutoSlide"
          @mouseleave="resumeAutoSlide"
        >
          <!-- Images Container -->
          <div
            class="relative h-[36rem] flex items-center justify-center overflow-hidden"
          >
            <!-- All images positioned absolutely for smooth transitions -->
            <div
              v-for="(image, index) in sliderImages"
              :key="index"
              class="absolute carousel-item transition-all duration-700 ease-out cursor-pointer"
              :class="getCarouselItemClass(index)"
              :style="getCarouselItemStyle(index)"
              @click="handleImageClick(index)"
              @mouseenter="pauseAutoSlide"
              @mouseleave="resumeAutoSlide"
            >
              <img
                :src="image"
                :alt="`Workspace ${index + 1}`"
                class="w-full h-full object-cover rounded-lg shadow-xl"
              />
            </div>
          </div>

          <!-- Navigation Arrows -->
          <button
            @click="handlePrevSlide"
            @mouseenter="pauseAutoSlide"
            @mouseleave="resumeAutoSlide"
            class="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg transition-all z-30"
          >
            <svg
              class="w-6 h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 19l-7-7 7-7"
              ></path>
            </svg>
          </button>

          <button
            @click="handleNextSlide"
            @mouseenter="pauseAutoSlide"
            @mouseleave="resumeAutoSlide"
            class="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg transition-all z-30"
          >
            <svg
              class="w-6 h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </button>

          <!-- Dots Indicator -->
          <div class="flex justify-center mt-8 space-x-2">
            <button
              v-for="(slide, index) in sliderImages"
              :key="index"
              @click="handleDotClick(index)"
              @mouseenter="pauseAutoSlide"
              @mouseleave="resumeAutoSlide"
              class="w-3 h-3 rounded-full transition-all duration-300"
              :class="
                currentSlide === index ? 'bg-[#560216] w-8' : 'bg-gray-300'
              "
            ></button>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 3 - Overlapping Images Left -->
    <section
      class="relative px-4 py-16 md:px-[8%] lg:px-[10%] xl:px-[12%] bg-gradient-to-br from-gray-50 to-white overflow-hidden"
    >
      <!-- Blob Background -->
      <div class="absolute inset-0 overflow-visible pointer-events-none">
        <!-- Blob from previous section blending in -->
        <div
          class="absolute -top-40 right-[32] w-[600px] h-[600px] bg-gradient-to-br from-pink-500/30 to-amber-400/30 rounded-full blur-3xl animate-blob-slow"
        ></div>
        <div
          class="absolute top-1/3 -right-1/3 w-[500px] h-[500px] bg-gradient-to-br from-[#A020F0]/35 to-teal-400/35 rounded-full blur-xl animate-blob-slow animation-delay-2000"
        ></div>
        <!-- Blob extending to next section -->
        <div
          class="absolute -bottom-40 -left-32 w-[700px] h-[700px] bg-gradient-to-br from-teal-400/30 to-indigo-500/35 rounded-full blur-xl animate-blob-slow animation-delay-3000"
        ></div>
      </div>

      <div class="max-w-7xl mx-auto relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <!-- Overlapping Images on Left -->
          <div class="relative h-[700px] w-[90%] lg:order-1">
            <!-- Large Background Image - Full Size -->
            <div class="absolute inset-0">
              <img
                src="/images/cafe_general_area_1.jpg"
                alt="Coworking Main"
                class="w-full h-full object-cover rounded-lg shadow-xl"
              />
            </div>
            <!-- Smaller Overlapping Image - Half Outside Bottom Right -->
            <div class="absolute bottom-10 -right-32 w-[70%] h-[45%]">
              <img
                src="/images/cafe_area.jpg"
                alt="Coworking Detail"
                class="w-full h-full object-cover rounded-lg shadow-2xl border-4 border-white"
              />
            </div>
          </div>

          <!-- Text on Right -->
          <div class="space-y-6 lg:order-2 lg:pl-12 lg:max-w-xl lg:pt-[30%]">
            <h2 class="text-4xl font-bold text-gray-900">
              Spaces that elevate you
            </h2>
            <p class="text-lg text-gray-600">
              Every nook and corner is designed to help you work not just at
              100%, but at 1000%. An environment that stimulates your mind,
              sharpens your focus, and allows you to sit back and enjoy the
              reflections that come to you.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 4 - Overlapping Images Right -->
    <section
      class="relative px-4 py-16 md:px-[8%] lg:px-[10%] xl:px-[12%] bg-white overflow-hidden"
    >
      <!-- Blob Background -->
      <div class="absolute inset-0 overflow-visible pointer-events-none">
        <!-- Blob from previous section blending in -->
        <div
          class="absolute -top-40 -right-48 w-[700px] h-[700px] bg-gradient-to-br from-teal-400/25 to-indigo-500/30 rounded-full blur-2xl animate-blob-slow"
        ></div>
        <div
          class="absolute -bottom-20 -right-20 w-[550px] h-[550px] bg-gradient-to-br from-pink-500/40 to-red-500 rounded-full blur-3xl animate-blob-slow animation-delay-2000"
        ></div>
        <!-- Blob extending to next section -->
        <div
          class="absolute -bottom-40 right-[10%] w-[650px] h-[650px] bg-gradient-to-br from-rose-400/30 to-cyan-400/30 rounded-full blur-3xl animate-blob-slow animation-delay-4000"
        ></div>
      </div>

      <div class="max-w-7xl mx-auto relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <!-- Text on Left -->
          <div class="space-y-6 lg:order-1 lg:pr-12 lg:max-w-xl lg:pt-[30%]">
            <h2 class="text-4xl font-bold text-gray-900">Your Third Space</h2>
            <p class="text-lg text-gray-600">
              A space that doesn't confine you in a box, but expands your
              ability to think, grow, and find balance between work and wellness
            </p>
          </div>

          <!-- Overlapping Images on Right -->
          <div class="relative h-[700px] w-[90%] ml-auto lg:order-2">
            <!-- Large Background Image - Full Size -->
            <div class="absolute inset-0">
              <img
                src="/images/contact_header_background.jpg"
                alt="Meeting Space Main"
                class="w-full h-full object-cover rounded-lg shadow-xl"
              />
            </div>
            <!-- Smaller Overlapping Image - Half Outside Bottom Left (opposite side) -->
            <div class="absolute bottom-10 -left-32 w-[70%] h-[45%]">
              <img
                src="/images/conference_room_1.jpg"
                alt="Meeting Space Detail"
                class="w-full h-full object-cover rounded-lg shadow-2xl border-4 border-white"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 5 - Overlapping Images Left -->
    <section
      class="relative px-4 py-16 md:px-[8%] lg:px-[10%] xl:px-[12%] bg-gradient-to-br from-white to-gray-50 overflow-hidden"
    >
      <!-- Blob Background -->
      <div class="absolute inset-0 overflow-visible pointer-events-none">
        <!-- Blob from previous section blending in -->
        <div
          class="absolute -top-40 left-1 w-[650px] h-[650px] bg-gradient-to-br from-rose-400/25 to-rose-400/25 rounded-full blur-3xl animate-blob-slow"
        ></div>
        <div
          class="absolute top-1/3 -right-[8rem] w-[500px] h-[500px] bg-gradient-to-br from-cyan-400/35 to-cyan/40 rounded-full blur-3xl animate-blob-slow animation-delay-2000"
        ></div>
        <!-- Blob extending to next section -->
        <div
          class="absolute -bottom-40 -left-40 w-[700px] h-[700px] bg-gradient-to-br from-emerald-600/80 to-emerald-100/80 rounded-full blur-3xl animate-blob-slow animation-delay-4000"
        ></div>
      </div>

      <div class="max-w-7xl mx-auto relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <!-- Overlapping Images on Left -->
          <div class="relative h-[700px] w-[90%] lg:order-1">
            <!-- Large Background Image - Full Size -->
            <div class="absolute inset-0">
              <img
                src="/images/cafe_1.jpg"
                alt="Research Lab Main"
                class="w-full h-full object-cover rounded-lg shadow-xl"
              />
            </div>
            <!-- Smaller Overlapping Image - Half Outside Bottom Right -->
            <div class="absolute bottom-10 -right-32 w-[70%] h-[45%]">
              <img
                src="/images/cafe_2.jpg"
                alt="Research Lab Detail"
                class="w-full h-full object-cover rounded-lg shadow-2xl border-4 border-white"
              />
            </div>
          </div>

          <!-- Text on Right -->
          <div class="space-y-6 lg:order-2 lg:pl-12 lg:max-w-xl lg:pt-[30%]">
            <h2 class="text-4xl font-bold text-gray-900">iris Coffee Etc</h2>
            <p class="text-lg text-gray-600">
              The "etc" in iris coffee etc reflects the richness of this space
              it is coffee, but also much more: discovery, memory-making, and
              connection. Here, people come not only to sip coffee but to pause,
              browse, connect, and leave with something meaningful in hand,
              whether it is a thoughtful gift, or simply a renewed sense of
              calm.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 6 - Overlapping Images Right -->
    <section
      class="relative px-4 py-16 md:px-[8%] lg:px-[10%] xl:px-[12%] bg-white overflow-hidden"
    >
      <!-- Blob Background -->
      <div class="absolute inset-0 overflow-visible pointer-events-none">
        <!-- Blob from previous section blending in -->
        <div
          class="absolute -top-40 -left-40 w-[700px] h-[700px] bg-gradient-to-br from-yellow-400/25 to-emerald-400/30 rounded-full blur-3xl animate-blob-slow"
        ></div>
        <div
          class="absolute top-1/3 right-1/4 w-[580px] h-[580px] bg-gradient-to-br from-[#560216]/35 to-emerald-400/40 rounded-full blur-3xl animate-blob-slow animation-delay-2000"
        ></div>
        <!-- Blob extending to next section -->
        <div
          class="absolute -bottom-40 left-1/3 w-[650px] h-[650px] bg-gradient-to-br from-violet-500/30 to-blue-500/35 rounded-full blur-3xl animate-blob-slow animation-delay-4000"
        ></div>
      </div>

      <div class="max-w-7xl mx-auto relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <!-- Text on Left -->
          <div class="space-y-6 lg:order-1 lg:pr-12 lg:max-w-xl lg:pt-[30%]">
            <h2 class="text-4xl font-bold text-gray-900">
              Work smarter, live better
            </h2>
            <p class="text-lg text-gray-600">
              Step inside and you will be surrounded by colours, creativity, and
              energy, creating an environment that elevates your mind, surrounds
              you with inspiration, and makes you feel good while you do your
              best work
            </p>
          </div>

          <!-- Overlapping Images on Right -->
          <div class="relative h-[700px] w-[90%] ml-auto lg:order-2">
            <!-- Large Background Image - Full Size -->
            <div class="absolute inset-0">
              <img
                src="/images/cafe_area.jpg"
                alt="Virtual Office Main"
                class="w-full h-full object-cover rounded-lg shadow-xl"
              />
            </div>
            <!-- Smaller Overlapping Image - Half Outside Bottom Left (opposite side) -->
            <div class="absolute bottom-10 -left-32 w-[70%] h-[45%]">
              <img
                src="/images/cafe_area_2.jpg"
                alt="Virtual Office Detail"
                class="w-full h-full object-cover rounded-lg shadow-2xl border-4 border-white"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Grid with Enhanced Design -->
    <section
      class="relative px-4 py-20 md:px-[8%] lg:px-[10%] xl:px-[12%] bg-gradient-to-b from-gray-50 to-white overflow-hidden"
    >
      <!-- Blob Background -->
      <div class="absolute inset-0 overflow-visible pointer-events-none">
        <!-- Blob from previous section blending in -->
        <!-- <div
          class="absolute -top-40 left-1/3 w-[650px] h-[650px] bg-gradient-to-br from-violet-500/25 to-blue-500/30 rounded-full blur-3xl animate-blob-slow"
        ></div> -->
        <div
          class="absolute top-1/4 -right-[8rem] w-[700px] h-[700px] bg-gradient-to-br from-cyan-400/30 to-blue-500/35 rounded-full blur-3xl animate-blob-slow animation-delay-2000"
        ></div>
        <div
          class="absolute top-1/2 -left-40 w-[500px] h-[500px] bg-gradient-to-br from-orange-400/30 to-pink-500/30 rounded-full blur-3xl animate-blob-slow animation-delay-3000"
        ></div>
        <!-- Blob extending to next section -->
        <!-- <div
          class="absolute -bottom-40 right-1/4 w-[700px] h-[700px] bg-gradient-to-br from-purple-500/30 to-teal-400/35 rounded-full blur-3xl animate-blob-slow animation-delay-4000"
        ></div> -->
      </div>

      <div class="max-w-7xl mx-auto relative z-10">
        <div class="text-center mb-16 animate-fade-in">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Built for businesses of all sizes
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our comprehensive range of workspace solutions
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            class="relative rounded-2xl overflow-hidden shadow-xl group cursor-pointer transform transition-all duration-500 hover:-translate-y-3"
          >
            <img
              src="/images/floor_pic_1.jpg"
              alt="Private Office"
              class="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent group-hover:from-[#560216]/90 transition-all duration-500"
            ></div>
            <div
              class="absolute bottom-0 left-0 right-0 p-8 text-white transform transition-all duration-500"
            >
              <div class="mb-3">
                <span
                  class="inline-block w-12 h-1 bg-white rounded-full"
                ></span>
              </div>
              <h3
                class="text-2xl font-bold mb-3 group-hover:scale-105 transition-transform"
              >
                Private Office Spaces
              </h3>
              <p
                class="text-sm text-gray-200 mb-4 opacity-0 group-hover:opacity-100 transition-all duration-500"
              >
                Fully furnished private offices with premium amenities
              </p>
              <button
                class="bg-white text-[#560216] px-6 py-3 rounded-full text-sm font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
              >
                Book Now →
              </button>
            </div>
          </div>

          <div
            class="relative rounded-2xl overflow-hidden shadow-xl group cursor-pointer transform transition-all duration-500 hover:-translate-y-3"
          >
            <img
              src="/images/floor_3_rest_area.jpg"
              alt="Coworking"
              class="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent group-hover:from-[#560216]/90 transition-all duration-500"
            ></div>
            <div
              class="absolute bottom-0 left-0 right-0 p-8 text-white transform transition-all duration-500"
            >
              <div class="mb-3">
                <span
                  class="inline-block w-12 h-1 bg-white rounded-full"
                ></span>
              </div>
              <h3
                class="text-2xl font-bold mb-3 group-hover:scale-105 transition-transform"
              >
                Co-working Areas
              </h3>
              <p
                class="text-sm text-gray-200 mb-4 opacity-0 group-hover:opacity-100 transition-all duration-500"
              >
                Flexible and vibrant spaces to collaborate and innovate
              </p>
              <button
                class="bg-white text-[#560216] px-6 py-3 rounded-full text-sm font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
              >
                Book Now →
              </button>
            </div>
          </div>

          <div
            class="relative rounded-2xl overflow-hidden shadow-xl group cursor-pointer transform transition-all duration-500 hover:-translate-y-3"
          >
            <img
              src="/images/meeting_room.jpg"
              alt="Meeting Room"
              class="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent group-hover:from-[#560216]/90 transition-all duration-500"
            ></div>
            <div
              class="absolute bottom-0 left-0 right-0 p-8 text-white transform transition-all duration-500"
            >
              <div class="mb-3">
                <span
                  class="inline-block w-12 h-1 bg-white rounded-full"
                ></span>
              </div>
              <h3
                class="text-2xl font-bold mb-3 group-hover:scale-105 transition-transform"
              >
                Meeting Rooms
              </h3>
              <p
                class="text-sm text-gray-200 mb-4 opacity-0 group-hover:opacity-100 transition-all duration-500"
              >
                Professional meeting spaces with state-of-the-art technology
              </p>
              <button
                class="bg-white text-[#560216] px-6 py-3 rounded-full text-sm font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
              >
                Book Now →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section
      class="relative px-4 py-20 md:px-[8%] lg:px-[10%] xl:px-[12%] bg-white overflow-hidden"
    >
      <!-- Blob Background -->
      <div class="absolute inset-0 overflow-visible pointer-events-none">
        <!-- Blob from previous section blending in -->
        <div
          class="absolute -top-40 right-1 w-[700px] h-[700px] bg-gradient-to-br from-purple-500/25 to-teal-400/30 rounded-full blur-3xl animate-blob-slow"
        ></div>
        <div
          class="absolute top-1/3 -left-32 w-[600px] h-[600px] bg-gradient-to-br from-sky-500/30 to-cyan-500/30 rounded-full blur-3xl animate-blob-slow animation-delay-2000"
        ></div>
      </div>

      <div class="max-w-7xl mx-auto relative z-10">
        <div class="text-center mb-16 animate-fade-in">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our Members Say
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it - hear from our community
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
          >
            <div class="flex items-center mb-6">
              <div class="flex text-yellow-400">
                <svg class="w-5 h-5 fill-current" viewBox="0 0 20 20">
                  <path
                    d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
                  />
                </svg>
                <svg class="w-5 h-5 fill-current" viewBox="0 0 20 20">
                  <path
                    d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
                  />
                </svg>
                <svg class="w-5 h-5 fill-current" viewBox="0 0 20 20">
                  <path
                    d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
                  />
                </svg>
                <svg class="w-5 h-5 fill-current" viewBox="0 0 20 20">
                  <path
                    d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
                  />
                </svg>
                <svg class="w-5 h-5 fill-current" viewBox="0 0 20 20">
                  <path
                    d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
                  />
                </svg>
              </div>
            </div>
            <p class="text-gray-600 mb-6 leading-relaxed italic">
              "iris spaces has transformed the way we work. The environment is
              inspiring, the community is supportive, and the amenities are
              top-notch. Best decision we made for our startup!"
            </p>
            <div class="flex items-center">
              <div
                class="w-12 h-12 bg-gradient-to-br from-[#560216] to-[#7d0320] rounded-full flex items-center justify-center text-white font-bold text-lg"
              >
                AS
              </div>
              <div class="ml-4">
                <h4 class="font-bold text-gray-900">Ahmed Shah</h4>
                <p class="text-sm text-gray-500">Founder, TechStart</p>
              </div>
            </div>
          </div>

          <div
            class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
          >
            <div class="flex items-center mb-6">
              <div class="flex text-yellow-400">
                <svg class="w-5 h-5 fill-current" viewBox="0 0 20 20">
                  <path
                    d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
                  />
                </svg>
                <svg class="w-5 h-5 fill-current" viewBox="0 0 20 20">
                  <path
                    d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
                  />
                </svg>
                <svg class="w-5 h-5 fill-current" viewBox="0 0 20 20">
                  <path
                    d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
                  />
                </svg>
                <svg class="w-5 h-5 fill-current" viewBox="0 0 20 20">
                  <path
                    d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
                  />
                </svg>
                <svg class="w-5 h-5 fill-current" viewBox="0 0 20 20">
                  <path
                    d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
                  />
                </svg>
              </div>
            </div>
            <p class="text-gray-600 mb-6 leading-relaxed italic">
              "The perfect balance between professional and comfortable. iris
              spaces provides everything we need - from high-speed internet to
              the amazing coffee at iris Coffee Etc!"
            </p>
            <div class="flex items-center">
              <div
                class="w-12 h-12 bg-gradient-to-br from-[#560216] to-[#7d0320] rounded-full flex items-center justify-center text-white font-bold text-lg"
              >
                SN
              </div>
              <div class="ml-4">
                <h4 class="font-bold text-gray-900">Sarah Naveed</h4>
                <p class="text-sm text-gray-500">
                  Creative Director, DesignHub
                </p>
              </div>
            </div>
          </div>

          <div
            class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
          >
            <div class="flex items-center mb-6">
              <div class="flex text-yellow-400">
                <svg class="w-5 h-5 fill-current" viewBox="0 0 20 20">
                  <path
                    d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
                  />
                </svg>
                <svg class="w-5 h-5 fill-current" viewBox="0 0 20 20">
                  <path
                    d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
                  />
                </svg>
                <svg class="w-5 h-5 fill-current" viewBox="0 0 20 20">
                  <path
                    d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
                  />
                </svg>
                <svg class="w-5 h-5 fill-current" viewBox="0 0 20 20">
                  <path
                    d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
                  />
                </svg>
                <svg class="w-5 h-5 fill-current" viewBox="0 0 20 20">
                  <path
                    d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
                  />
                </svg>
              </div>
            </div>
            <p class="text-gray-600 mb-6 leading-relaxed italic">
              "As a freelancer, I needed a professional space that felt like
              home. iris spaces delivers on both fronts. The community here has
              been invaluable for my business growth."
            </p>
            <div class="flex items-center">
              <div
                class="w-12 h-12 bg-gradient-to-br from-[#560216] to-[#7d0320] rounded-full flex items-center justify-center text-white font-bold text-lg"
              >
                MK
              </div>
              <div class="ml-4">
                <h4 class="font-bold text-gray-900">Maria Khan</h4>
                <p class="text-sm text-gray-500">Marketing Consultant</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action Section -->
    <section
      class="relative min-h-[80vh] flex items-center justify-center overflow-hidden"
    >
      <div class="absolute inset-0">
        <img
          src="/images/gallery_floor.jpg"
          alt="Join iris spaces"
          class="w-full h-full object-cover"
        />
        <div
          class="absolute inset-0 bg-gradient-to-r from-[#023656]/70 to-gray-900/90"
        ></div>
      </div>

      <div
        class="relative z-10 text-center px-4 max-w-5xl mx-auto animate-fade-in"
      >
        <div class="mb-8">
          <h2
            class="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Ready to Elevate<br />Your Work Experience?
          </h2>
          <p class="text-xl md:text-2xl text-gray-200 mb-4 leading-relaxed">
            Spaces that are thoughtfully designed with a unique global ambiance
            for thinkers, creators, and doers, unlike anything else in Pakistan.
          </p>
        </div>

        <div
          class="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <NuxtLink
            to="/contact"
            class="group px-10 py-5 bg-white text-[#560216] rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-110 shadow-2xl"
          >
            Schedule a Tour
            <span
              class="inline-block ml-2 transform group-hover:translate-x-2 transition-transform"
              >→</span
            >
          </NuxtLink>
          <NuxtLink
            to="/workspaces"
            class="px-10 py-5 bg-transparent border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white hover:text-[#560216] transition-all duration-300 hover:scale-110"
          >
            View All Spaces
          </NuxtLink>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 text-white">
          <div
            class="backdrop-blur-sm bg-white/10 rounded-2xl p-6 border border-white/20"
          >
            <div class="text-4xl mb-3">📍</div>
            <h3 class="font-bold text-xl mb-2">Prime Location</h3>
            <p class="text-gray-200 text-sm">
              Easy access in the heart of the city
            </p>
          </div>
          <div
            class="backdrop-blur-sm bg-white/10 rounded-2xl p-6 border border-white/20"
          >
            <div class="text-4xl mb-3">⚡</div>
            <h3 class="font-bold text-xl mb-2">Fast Setup</h3>
            <p class="text-gray-200 text-sm">
              Move in ready, start working today
            </p>
          </div>
          <div
            class="backdrop-blur-sm bg-white/10 rounded-2xl p-6 border border-white/20"
          >
            <div class="text-4xl mb-3">🤝</div>
            <h3 class="font-bold text-xl mb-2">Supportive Community</h3>
            <p class="text-gray-200 text-sm">
              Network with amazing professionals
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Floating Action Button -->
    <Transition name="fade">
      <button
        v-if="showFloatingButton"
        @click="scrollToContact"
        class="fixed bottom-8 right-8 z-50 w-16 h-16 bg-gradient-to-br from-[#560216] to-[#7d0320] text-white rounded-full shadow-2xl hover:scale-110 transition-all duration-300 flex items-center justify-center group"
        aria-label="Contact Us"
      >
        <svg
          class="w-6 h-6 group-hover:scale-110 transition-transform"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          ></path>
        </svg>
        <span
          class="absolute right-full mr-4 px-4 py-2 bg-gray-900 text-white text-sm rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
        >
          Contact Us
        </span>
      </button>
    </Transition>
  </div>
</template>

<script setup>
// Refs
const spacesSection = ref(null);
const showFloatingButton = ref(false);

// Slider data
const sliderImages = ref([
  "/images/gallery_floor.jpg",
  "/images/cafe_area.jpg",
  "/images/main_header_background.jpg",
  "/images/workspace_header_background.jpg",
  "/images/contact_header_background.jpg",
]);

const currentSlide = ref(0);

// Scroll functions
const scrollToSpaces = () => {
  if (spacesSection.value) {
    spacesSection.value.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

const scrollToContact = () => {
  navigateTo("/contact");
};

// Handle floating button visibility
const handleScroll = () => {
  showFloatingButton.value = window.scrollY > 500;
};

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % sliderImages.value.length;
};

const prevSlide = () => {
  currentSlide.value =
    currentSlide.value === 0
      ? sliderImages.value.length - 1
      : currentSlide.value - 1;
};

// Calculate position of each image relative to current slide
const getPosition = (index) => {
  const diff = index - currentSlide.value;
  const total = sliderImages.value.length;

  // Normalize to -total/2 to +total/2 range
  if (diff > total / 2) return diff - total;
  if (diff < -total / 2) return diff + total;
  return diff;
};

// Get carousel item positioning and styling
const getCarouselItemStyle = (index) => {
  const position = getPosition(index);

  // Center image (position 0)
  if (position === 0) {
    return {
      left: "50%",
      transform: "translateX(-50%) scale(1)",
      width: "50%",
      height: "32rem",
      zIndex: 20,
      opacity: 1,
    };
  }

  // Left image (position -1)
  if (position === -1) {
    return {
      left: "5%",
      transform: "translateX(0) scale(0.85)",
      width: "30%",
      height: "24rem",
      zIndex: 10,
      opacity: 0.7,
    };
  }

  // Right image (position 1)
  if (position === 1) {
    return {
      right: "5%",
      transform: "translateX(0) scale(0.85)",
      width: "30%",
      height: "24rem",
      zIndex: 10,
      opacity: 0.7,
    };
  }

  // Hidden images - keep them off-screen but not too far
  return {
    left: position < 0 ? "-50%" : "150%",
    transform: "scale(0.7)",
    width: "30%",
    height: "20rem",
    zIndex: 0,
    opacity: 0,
    pointerEvents: "none",
  };
};

const getCarouselItemClass = (index) => {
  const position = getPosition(index);
  if (position === 0) return "carousel-center";
  if (position === -1) return "carousel-left";
  if (position === 1) return "carousel-right";
  return "carousel-hidden";
};

const handleImageClick = (index) => {
  const position = getPosition(index);
  if (position === -1) {
    handlePrevSlide();
  } else if (position === 1) {
    handleNextSlide();
  }
};

// Auto-slide with pause functionality
let autoSlideInterval = null;
const isPaused = ref(false);
let resumeTimeout = null;

const startAutoSlide = () => {
  if (autoSlideInterval) {
    clearInterval(autoSlideInterval);
  }
  autoSlideInterval = setInterval(() => {
    if (!isPaused.value) {
      nextSlide();
    }
  }, 4000); // Smooth 4 second interval
};

const pauseAutoSlide = () => {
  isPaused.value = true;
  // Clear any pending resume timeout
  if (resumeTimeout) {
    clearTimeout(resumeTimeout);
    resumeTimeout = null;
  }
};

const resumeAutoSlide = () => {
  isPaused.value = false;
};

const handleNextSlide = () => {
  nextSlide();
};

const handlePrevSlide = () => {
  prevSlide();
};

const handleDotClick = (index) => {
  currentSlide.value = index;
};

onMounted(() => {
  startAutoSlide();
  window.addEventListener("scroll", handleScroll);
  handleScroll(); // Check initial scroll position
});

onUnmounted(() => {
  if (autoSlideInterval) {
    clearInterval(autoSlideInterval);
  }
  window.removeEventListener("scroll", handleScroll);
});

useHead({
  title: "Iris Spaces - Premium Workspace Solutions",
  meta: [
    {
      name: "description",
      content: "Discover premium workspace solutions at Iris Spaces.",
    },
  ],
});
</script>

<style scoped>
/* Carousel smooth transitions */
.carousel-item {
  transition: all 700ms cubic-bezier(0.45, 0.05, 0.15, 1);
  will-change: transform, left, right, width, height, opacity;
  backface-visibility: hidden;
  perspective: 1000px;
}

.carousel-center {
  pointer-events: none;
}

.carousel-left,
.carousel-right {
  cursor: pointer;
}

.carousel-left:hover,
.carousel-right:hover {
  opacity: 1 !important;
  transform: scale(0.9) !important;
}

.carousel-hidden {
  pointer-events: none;
}

/* Custom Animations */
@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes scroll {
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    transform: translateY(12px);
    opacity: 0;
  }
}

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

.animate-slide-down {
  animation: slideDown 1s ease-out;
}

.animate-scroll {
  animation: scroll 1.5s ease-in-out infinite;
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

/* Fade transition for floating button */
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}

.fade-enter-from {
  opacity: 0;
  transform: scale(0.8) translateY(20px);
}

.fade-leave-to {
  opacity: 0;
  transform: scale(0.8) translateY(20px);
}

/* Enhanced hover effects */
@media (hover: hover) {
  .group:hover .group-hover\:scale-110 {
    transform: scale(1.1);
  }
}

/* Gradient text animation */
@keyframes gradientShift {
  0%,
  100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

.bg-gradient-to-r {
  background-size: 200% 200%;
  animation: gradientShift 8s ease infinite;
}

/* Smooth scroll behavior */
html {
  scroll-behavior: smooth;
}

/* Loading skeleton animations */
@keyframes pulse {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(180deg, #560216, #7d0320);
  border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(180deg, #7d0320, #560216);
}
</style>
