<template>
  <div class="bg-white">
    <!-- Hero Section -->
    <section
      class="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-[#023656] to-gray-900"
    >
      <div class="absolute inset-0">
        <img
          src="/images/conference_room_1.jpg"
          alt="Research & Consulting"
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
            🔍 Data-Driven Insights
          </span>
        </div>
        <h1
          class="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
        >
          Research & Consulting<br />
          <span
            class="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-white"
            >Solutions</span
          >
          </h1>
        <p
          class="text-xl md:text-2xl text-gray-200 mb-10 leading-relaxed max-w-3xl mx-auto"
        >
          Transform your business with expert research and strategic
          consultation services that drive real results
        </p>
        <div
          class="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <NuxtLink
            to="/contact"
            class="group px-8 py-4 bg-white text-[#023656] rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-2xl"
          >
            Get Started
            <span
              class="inline-block ml-2 transform group-hover:translate-x-2 transition-transform"
              >→</span
            >
          </NuxtLink>
          <button
            @click="scrollToServices"
            class="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-semibold text-lg hover:bg-white hover:text-[#023656] transition-all duration-300 hover:scale-105"
          >
            View Services
          </button>
        </div>
      </div>
    </section>

    <!-- Why Choose Us Section -->
    <section
      class="relative px-4 py-20 md:px-[8%] lg:px-[10%] xl:px-[12%] bg-white overflow-hidden"
    >
      <!-- Blob Background -->
      <div class="absolute inset-0 overflow-visible pointer-events-none">
        <div
          class="absolute top-20 -left-40 w-[600px] h-[600px] bg-gradient-to-br from-blue-400/30 to-[#023656]/35 rounded-full blur-3xl animate-blob"
        ></div>
        <div
          class="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-gradient-to-br from-purple-400/25 to-pink-400/25 rounded-full blur-3xl animate-blob animation-delay-2000"
        ></div>
      </div>

      <div class="max-w-7xl mx-auto relative z-10">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Partner With Us?
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Expertise, innovation, and results-driven strategies for your
            business growth
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                ></path>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-3">
              Data-Driven Insights
            </h3>
            <p class="text-gray-600 leading-relaxed">
              Leverage comprehensive data analysis and market research to make
              informed business decisions
            </p>
          </div>

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
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                ></path>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-3">Expert Team</h3>
            <p class="text-gray-600 leading-relaxed">
              Work with seasoned professionals who bring years of experience in
              research and consulting
            </p>
          </div>

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
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                ></path>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-3">
              Fast Turnaround
            </h3>
            <p class="text-gray-600 leading-relaxed">
              Get actionable insights quickly with our efficient processes and
              dedicated project management
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Grid Section -->
    <section
      ref="servicesSection"
      class="relative px-4 py-20 md:px-[8%] lg:px-[10%] xl:px-[12%] bg-gradient-to-b from-gray-50 to-white overflow-hidden"
    >
      <!-- Blob Background -->
      <div class="absolute inset-0 overflow-visible pointer-events-none">
        <div
          class="absolute top-1/4 right-1/4 w-[700px] h-[700px] bg-gradient-to-br from-cyan-400/25 to-teal-400/25 rounded-full blur-3xl animate-blob-slow"
        ></div>
        <div
          class="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-gradient-to-br from-orange-400/20 to-yellow-400/20 rounded-full blur-3xl animate-blob-slow animation-delay-3000"
        ></div>
      </div>

      <div class="max-w-7xl mx-auto relative z-10">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive research and consulting solutions tailored to your
            business needs
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="service in services"
            :key="service.id"
            class="group relative rounded-2xl overflow-hidden shadow-xl cursor-pointer transform transition-all duration-500 hover:-translate-y-3"
          >
            <div class="relative h-[450px] overflow-hidden">
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
              class="absolute inset-0 flex flex-col justify-end p-8 text-white"
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
                class="text-sm text-gray-200 mb-4 opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-24 transition-all duration-500 overflow-hidden"
              >
                {{ service.description }}
              </p>
              <button
                class="bg-white text-[#023656] px-6 py-3 rounded-full text-sm font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg w-fit"
              >
                Learn More →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Process Section -->
    <section
      class="relative px-4 py-20 md:px-[8%] lg:px-[10%] xl:px-[12%] bg-white overflow-hidden"
    >
      <!-- Blob Background -->
      <div class="absolute inset-0 overflow-visible pointer-events-none">
        <div
          class="absolute -top-40 left-1/3 w-[700px] h-[700px] bg-gradient-to-br from-indigo-400/25 to-purple-400/25 rounded-full blur-3xl animate-blob-slow animation-delay-2000"
        ></div>
        <div
          class="absolute bottom-20 -right-40 w-[600px] h-[600px] bg-gradient-to-br from-pink-400/20 to-rose-400/20 rounded-full blur-3xl animate-blob-slow"
        ></div>
      </div>

      <div class="max-w-7xl mx-auto relative z-10">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            How We Work
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Our proven process ensures successful outcomes for every project
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div class="relative text-center">
            <div
              class="w-20 h-20 bg-gradient-to-br from-[#fcc1cf] to-[#023656] rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6 shadow-xl hover:scale-110 transition-transform"
            >
              1
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">Discovery</h3>
            <p class="text-gray-600">
              We understand your business goals and challenges through in-depth
              consultation
            </p>
            <div
              class="hidden md:block absolute top-10 -right-12 w-24 h-0.5 bg-gradient-to-r from-[#023656] to-transparent"
            ></div>
          </div>

          <div class="relative text-center">
            <div
              class="w-20 h-20 bg-gradient-to-br from-[#fcc1cf] to-[#023656] rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6 shadow-xl hover:scale-110 transition-transform"
            >
              2
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">Strategy</h3>
            <p class="text-gray-600">
              We develop a customized research plan tailored to your specific
              needs
            </p>
            <div
              class="hidden md:block absolute top-10 -right-12 w-24 h-0.5 bg-gradient-to-r from-[#023656] to-transparent"
            ></div>
          </div>

          <div class="relative text-center">
            <div
              class="w-20 h-20 bg-gradient-to-br from-[#fcc1cf] to-[#023656] rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6 shadow-xl hover:scale-110 transition-transform"
            >
              3
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">Execution</h3>
            <p class="text-gray-600">
              Our team conducts comprehensive research using proven
              methodologies
            </p>
            <div
              class="hidden md:block absolute top-10 -right-12 w-24 h-0.5 bg-gradient-to-r from-[#023656] to-transparent"
            ></div>
          </div>

          <div class="relative text-center">
            <div
              class="w-20 h-20 bg-gradient-to-br from-[#fcc1cf] to-[#023656] rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6 shadow-xl hover:scale-110 transition-transform"
            >
              4
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">Insights</h3>
            <p class="text-gray-600">
              We deliver actionable insights and recommendations for your
              business growth
            </p>
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
          src="/images/floor_1_hall.jpg"
          alt="Partner with iris spaces"
          class="w-full h-full object-cover"
        />
        <div
          class="absolute inset-0 bg-gradient-to-r from-[#023656]/85 to-gray-900/85"
        ></div>
      </div>

      <div class="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <h2
          class="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
        >
          Ready to Transform<br />Your Business?
        </h2>
        <p class="text-xl md:text-2xl text-gray-200 mb-10 leading-relaxed">
          Partner with iris spaces for research and consulting services that
          help your brand grow smarter and achieve measurable results
        </p>

        <div
          class="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <NuxtLink
            to="/contact"
            class="group px-10 py-5 bg-white text-[#023656] rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-110 shadow-2xl"
          >
            Request Consultation
            <span
              class="inline-block ml-2 transform group-hover:translate-x-2 transition-transform"
              >→</span
            >
          </NuxtLink>
          <a
            href="tel:+1234567890"
            class="px-10 py-5 bg-transparent border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white hover:text-[#023656] transition-all duration-300 hover:scale-110"
          >
            Call Us Today
          </a>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
          <div
            class="backdrop-blur-sm bg-white/10 rounded-2xl p-6 border border-white/20"
          >
            <div class="text-4xl mb-3">🎯</div>
            <h3 class="font-bold text-xl mb-2">Proven Results</h3>
            <p class="text-gray-200 text-sm">
              Track record of successful projects across industries
            </p>
          </div>
          <div
            class="backdrop-blur-sm bg-white/10 rounded-2xl p-6 border border-white/20"
          >
            <div class="text-4xl mb-3">💼</div>
            <h3 class="font-bold text-xl mb-2">Industry Expertise</h3>
            <p class="text-gray-200 text-sm">
              Deep knowledge across multiple business sectors
            </p>
          </div>
          <div
            class="backdrop-blur-sm bg-white/10 rounded-2xl p-6 border border-white/20"
          >
            <div class="text-4xl mb-3">🤝</div>
            <h3 class="font-bold text-xl mb-2">Dedicated Support</h3>
            <p class="text-gray-200 text-sm">
              Ongoing guidance throughout your project journey
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: "Research & Consulting - Iris Spaces",
  meta: [
    {
      name: "description",
      content:
        "Expert research and consultation services that drive business growth and informed decision-making.",
    },
  ],
});

const servicesSection = ref(null);

const scrollToServices = () => {
  if (servicesSection.value) {
    servicesSection.value.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};

const services = [
  {
    id: 1,
    title: "Quantitative Research",
    description:
      "Comprehensive statistical analysis and data-driven insights for informed business decisions",
    image: "/images/art_8.jpg",
  },
  {
    id: 2,
    title: "Qualitative Research",
    description:
      "In-depth interviews and focus groups to understand customer behavior and preferences",
    image: "/images/art_7.jpg",
  },
  {
    id: 3,
    title: "Mystery Shopping",
    description:
      "Evaluate customer experience and service quality through professional mystery shoppers",
    image: "/images/art_6.jpg",
  },
  {
    id: 4,
    title: "Work Culture Survey",
    description:
      "Assess employee satisfaction and organizational culture for improved workplace dynamics",
    image: "/images/art_2.jpg",
  },
  {
    id: 5,
    title: "Leadership Training",
    description:
      "Develop effective leaders with customized training programs and coaching sessions",
    image: "/images/art_4.jpg",
  },
  {
    id: 6,
    title: "Digital Marketing",
    description:
      "Strategic digital marketing solutions to enhance your online presence and reach",
    image: "/images/art_5.jpg",
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
</style>
