import {
  createApp,
  ref,
  reactive,
  computed
} from 'https://unpkg.com/vue@3/dist/vue.esm-browser.prod.js'

const app = createApp({
  setup() {
    const WEEKS = ref(5218)

    const birthDate = reactive({
      d: 0,
      m: 0,
      y: 0
    })

    const configs = reactive({
      backgroundColor: 'white',
      borderColor: 'black',
      fillColor: 'black',
      birthdayColor: 'forestgreen'
    })

    const urlParams = new URLSearchParams(window.location.search)

    birthDate.d = urlParams.get('d')
    birthDate.m = urlParams.get('m')
    birthDate.y = urlParams.get('y')

    configs.backgroundColor = urlParams.get('backgroundColor') || 'white'
    configs.borderColor = urlParams.get('borderColor') || 'black'
    configs.fillColor = urlParams.get('fillColor') || 'black'
    configs.birthdayColor = urlParams.get('birthdayColor') || 'forestgreen'

    document.body.style.setProperty('--background-color',configs.backgroundColor)
    document.body.style.setProperty('--border-color', configs.borderColor)
    document.body.style.setProperty('--fill-color', configs.fillColor)
    document.body.style.setProperty('--birthday-color', configs.birthdayColor)

    const calculatedWeek = computed(() => {
      const birth = new Date(birthDate.y, birthDate.m - 1, birthDate.d)
      const now = new Date()
      const diff = now - birth
      return Math.floor(diff / (1000 * 60 * 60 * 24 * 7))
    })

    return {
      WEEKS,
      calculatedWeek
    }
  }
})

app.mount('#app')
