import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default defineNuxtPlugin(() => {
  if (process.client) {
    gsap.registerPlugin(ScrollTrigger)
    
    // Global GSAP configuration
    gsap.config({
      nullTargetWarn: false,
      trialWarn: false
    })
    
    // Make GSAP available globally
    window.gsap = gsap
    window.ScrollTrigger = ScrollTrigger
  }
  
  return {
    provide: {
      gsap,
      ScrollTrigger
    }
  }
})
