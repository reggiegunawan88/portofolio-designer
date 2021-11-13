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
  },
})
