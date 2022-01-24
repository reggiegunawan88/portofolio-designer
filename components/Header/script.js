import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      sidebarOpened: false,
    }
  },
  methods: {
    openSidebar() {
      this.sidebarOpened = !this.sidebarOpened
    },
    redirectLinkedin() {
      window.open('https://www.linkedin.com/in/clararitonang/', '_blank')
    },
    redirectDribbble() {
      window.open('https://dribbble.com/clarasonya', '_blank')
    },
    openResume() {
      window.open('https://drive.google.com/file/d/1Gg2Nhk9T0w45vKFzCyPN7CQ0DKAyhSiX/view?usp=sharing', '_blank')
    },
  },
})
