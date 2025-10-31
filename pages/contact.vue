<template>
  <div class="bg-white">
    <!-- Hero Section -->
    <section
      class="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-[#023656] to-gray-900"
    >
      <div class="absolute inset-0">
        <img
          src="/images/contact_header_background.jpg"
          alt="Contact Us"
          class="w-full h-full object-cover opacity-30"
        />
        <div
          class="absolute inset-0 bg-gradient-to-r from-[#023656]/80 to-gray-900/80"
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

      <div class="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div class="mb-6">
          <span
            class="inline-block px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium border border-white/20"
          >
            📧 Let's Connect
          </span>
        </div>
        <h1
          class="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
        >
          Get In Touch<br />
          <span
            class="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-white"
            >With Us</span
          >
        </h1>
        <p
          class="text-xl md:text-2xl text-gray-200 leading-relaxed max-w-3xl mx-auto"
        >
          Whether you're an enterprise, startup, or solopreneur, we're here to
          help you find the perfect workspace solution
        </p>
      </div>
    </section>

    <!-- Contact Info Cards -->
    <section
      class="relative px-4 py-20 md:px-[8%] lg:px-[10%] xl:px-[12%] bg-white overflow-hidden"
    >
      <!-- Blob Background -->
      <div class="absolute inset-0 overflow-visible pointer-events-none">
        <div
          class="absolute top-20 -right-40 w-[600px] h-[600px] bg-gradient-to-br from-blue-400/30 to-[#023656]/35 rounded-full blur-3xl animate-blob"
        ></div>
        <div
          class="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-gradient-to-br from-purple-400/25 to-pink-400/25 rounded-full blur-3xl animate-blob animation-delay-2000"
        ></div>
      </div>

      <div class="max-w-7xl mx-auto relative z-10">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <!-- Phone Card -->
          <div
            class="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
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
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                ></path>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-3">Call Us</h3>
            <p class="text-gray-600 mb-4">Mon-Fri: 9am - 6pm</p>
            <a
              href="tel:+1234567890"
              class="text-[#023656] font-semibold hover:underline"
            >
              +92 (XXX) XXX-XXXX
            </a>
          </div>

          <!-- Email Card -->
          <div
            class="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
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
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                ></path>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-3">Email Us</h3>
            <p class="text-gray-600 mb-4">We respond within 24 hours</p>
            <a
              href="mailto:info@irisspaces.com"
              class="text-[#023656] font-semibold hover:underline"
            >
              info@irisspaces.com
            </a>
          </div>

          <!-- Location Card -->
          <div
            class="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
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
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                ></path>
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                ></path>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-3">Visit Us</h3>
            <p class="text-gray-600 mb-4">Come see our spaces</p>
            <p class="text-[#023656] font-semibold">Lahore, Pakistan</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Form Section -->
    <section
      class="relative px-4 py-20 md:px-[8%] lg:px-[10%] xl:px-[12%] bg-gradient-to-b from-gray-50 to-white overflow-hidden"
    >
      <!-- Blob Background -->
      <div class="absolute inset-0 overflow-visible pointer-events-none">
        <div
          class="absolute top-1/4 left-1/4 w-[700px] h-[700px] bg-gradient-to-br from-cyan-400/25 to-teal-400/25 rounded-full blur-3xl animate-blob-slow"
        ></div>
        <div
          class="absolute -bottom-40 right-1/4 w-[600px] h-[600px] bg-gradient-to-br from-orange-400/20 to-yellow-400/20 rounded-full blur-3xl animate-blob-slow animation-delay-3000"
        ></div>
      </div>

      <div class="max-w-5xl mx-auto relative z-10">
        <div class="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-0">
            <!-- Form Side -->
            <div class="p-8 md:p-12">
              <div class="mb-8">
                <h2 class="text-4xl font-bold text-gray-900 mb-4">
                  Send Us a Message
                </h2>
                <p class="text-gray-600">
                  Fill out the form and we'll get back to you within 24 hours
                </p>
              </div>

              <form class="space-y-6">
                <div>
                  <label class="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="John Doe"
                    class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#023656] focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label class="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="john@example.com"
                    class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#023656] focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label class="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+92 XXX XXXXXXX"
                    class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#023656] focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label class="block text-sm font-semibold text-gray-700 mb-2">
                    I'm Interested In *
                  </label>
                  <select
                    required
                    class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#023656] focus:border-transparent transition-all"
                  >
                    <option value="">Select an option</option>
                    <option value="private-office">Private Office</option>
                    <option value="co-working">Co-working Space</option>
                    <option value="meeting-room">Meeting Room</option>
                    <option value="event-space">Event Space</option>
                    <option value="research">Research Services</option>
                    <option value="consulting">Consulting Services</option>
                    <option value="tour">Schedule a Tour</option>
                  </select>
                </div>

                <div>
                  <label class="block text-sm font-semibold text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    rows="4"
                    placeholder="Tell us more about your requirements..."
                    class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#023656] focus:border-transparent resize-none transition-all"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  class="w-full bg-gradient-to-r from-[#023656] to-[#034570] text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
                >
                  Send Message
                </button>
              </form>
            </div>

            <!-- Image Side -->
            <div class="relative hidden lg:block">
              <img
                src="/images/art_3.jpg"
                alt="Contact iris spaces"
                class="w-full h-full object-cover"
              />
              <div
                class="absolute inset-0 bg-gradient-to-br from-[#023656]/80 to-transparent flex items-center justify-center p-12"
              >
                <div class="text-white">
                  <h3 class="text-3xl font-bold mb-4">Ready to Get Started?</h3>
                  <p class="text-lg mb-6">
                    Join hundreds of businesses that trust iris spaces for their
                    workspace needs
                  </p>
                  <div class="space-y-4">
                    <div class="flex items-center gap-3">
                      <svg
                        class="w-6 h-6 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span>Quick Response Time</span>
                    </div>
                    <div class="flex items-center gap-3">
                      <svg
                        class="w-6 h-6 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span>Flexible Solutions</span>
                    </div>
                    <div class="flex items-center gap-3">
                      <svg
                        class="w-6 h-6 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span>Expert Support</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section
      class="relative px-4 py-20 md:px-[8%] lg:px-[10%] xl:px-[12%] bg-white overflow-hidden"
    >
      <!-- Blob Background -->
      <div class="absolute inset-0 overflow-visible pointer-events-none">
        <div
          class="absolute -top-40 right-1/3 w-[700px] h-[700px] bg-gradient-to-br from-indigo-400/25 to-purple-400/25 rounded-full blur-3xl animate-blob-slow animation-delay-2000"
        ></div>
        <div
          class="absolute bottom-20 -left-40 w-[600px] h-[600px] bg-gradient-to-br from-pink-400/20 to-rose-400/20 rounded-full blur-3xl animate-blob-slow"
        ></div>
      </div>

      <div class="max-w-4xl mx-auto relative z-10">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p class="text-xl text-gray-600">
            Quick answers to common questions about iris spaces
          </p>
        </div>

        <div class="space-y-4">
          <details
            class="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <summary
              class="flex items-center justify-between cursor-pointer p-6 font-semibold text-lg text-gray-900"
            >
              <span>What types of workspace solutions do you offer?</span>
              <svg
                class="w-6 h-6 transform group-open:rotate-180 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </summary>
            <div class="px-6 pb-6 text-gray-600">
              We offer private offices, co-working spaces, meeting rooms, event
              spaces, focus group facilities, and research consultation
              services. All solutions are fully customizable to meet your
              specific needs.
            </div>
          </details>

          <details
            class="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <summary
              class="flex items-center justify-between cursor-pointer p-6 font-semibold text-lg text-gray-900"
            >
              <span>Do you offer flexible membership plans?</span>
              <svg
                class="w-6 h-6 transform group-open:rotate-180 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </summary>
            <div class="px-6 pb-6 text-gray-600">
              Yes! We offer daily, weekly, monthly, and annual membership
              options. Whether you need a space for a few hours or long-term, we
              have a plan that fits your needs.
            </div>
          </details>

          <details
            class="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <summary
              class="flex items-center justify-between cursor-pointer p-6 font-semibold text-lg text-gray-900"
            >
              <span>What amenities are included?</span>
              <svg
                class="w-6 h-6 transform group-open:rotate-180 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </summary>
            <div class="px-6 pb-6 text-gray-600">
              All our spaces include high-speed WiFi, 24/7 access, security,
              printing facilities, tea/coffee, meeting rooms, and wellness
              areas. Premium amenities vary by membership level.
            </div>
          </details>

          <details
            class="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <summary
              class="flex items-center justify-between cursor-pointer p-6 font-semibold text-lg text-gray-900"
            >
              <span>Can I schedule a tour of the facility?</span>
              <svg
                class="w-6 h-6 transform group-open:rotate-180 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </summary>
            <div class="px-6 pb-6 text-gray-600">
              Absolutely! We encourage all potential members to tour our
              facilities. Contact us to schedule a visit at your convenience.
              Virtual tours are also available.
            </div>
          </details>

          <details
            class="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <summary
              class="flex items-center justify-between cursor-pointer p-6 font-semibold text-lg text-gray-900"
            >
              <span>What are your operating hours?</span>
              <svg
                class="w-6 h-6 transform group-open:rotate-180 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </summary>
            <div class="px-6 pb-6 text-gray-600">
              Our spaces are accessible 24/7 for members. Our support staff is
              available Monday-Friday, 9am-6pm, and Saturday, 10am-4pm.
              Emergency support is available around the clock.
            </div>
          </details>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section
      class="relative min-h-[60vh] flex items-center justify-center overflow-hidden"
    >
      <div class="absolute inset-0">
        <img
          src="/images/gallery_floor.jpg"
          alt="Visit iris spaces"
          class="w-full h-full object-cover"
        />
        <div
          class="absolute inset-0 bg-gradient-to-r from-[#023656]/90 to-gray-900/90"
        ></div>
      </div>

      <div class="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h2
          class="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight"
        >
          Visit Us Today
        </h2>
        <p class="text-xl md:text-2xl text-gray-200 mb-10 leading-relaxed">
          Experience the iris spaces difference firsthand. Schedule your tour
          and discover your perfect workspace.
        </p>

        <div
          class="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button
            class="group px-10 py-5 bg-white text-[#023656] rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-110 shadow-2xl"
          >
            Schedule a Tour
            <span
              class="inline-block ml-2 transform group-hover:translate-x-2 transition-transform"
              >→</span
            >
          </button>
          <a
            href="tel:+1234567890"
            class="px-10 py-5 bg-transparent border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white hover:text-[#023656] transition-all duration-300 hover:scale-110"
          >
            Call Now
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: "Contact Us - Iris Spaces",
  meta: [
    {
      name: "description",
      content:
        "Get in touch with iris spaces for premium workspace solutions in Lahore, Pakistan.",
    },
  ],
});
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

/* Details/Summary styling */
details summary::-webkit-details-marker {
  display: none;
}
</style>
