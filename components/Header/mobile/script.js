import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      sidebarOpened: false,
    }
  },
  methods: {
    toggleSidebar() {
      this.sidebarOpened = !this.sidebarOpened
    },
  },
})
