import Vue from 'vue'

export default Vue.extend({
  methods: {
    redirectLink() {
      window.open('https://interaktif.kompas.id/baca/yuk-meriahkan-lomba-kemerdekaan-17-agustus/', '_blank').focus()
    },
  },
})
