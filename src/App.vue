<script>
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'
import AppFooter from './components/AppFooter.vue'

export default {
  name: "App",
  components: {
    AppHeader,
    AppMain,
    AppFooter
  },
  data() {
    return {
      navElements: [
        "Homes",
        "Pages",
        "Blog",
        "Shop",
        "Events",
        "Elements"
      ]
    }
  }
}
</script>

<template>
  <AppHeader :navbar="navElements" />

  <AppMain />

  <AppFooter />
</template>

<style lang="scss" scoped></style>
