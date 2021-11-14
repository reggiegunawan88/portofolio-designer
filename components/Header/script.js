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
      window.open('https://drive.google.com/file/d/1Tkk0b8_wZ1Cwp2PsQ5NnTXIjXhEnpqSs/view', '_blank')
    },
  },
})
