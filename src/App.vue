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
  },
  methods: {
    topFunction() {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      })
    }
  }
}
</script>
<template>
  <button id="backToTop" @click="topFunction()"> <font-awesome-icon icon="fa-solid fa-arrow-up" />
  </button>

  <AppHeader :navbar="navElements" />

  <AppMain />

  <AppFooter />
</template>

<style lang="scss" scoped>
@use './styles/partials/variables' as *;

#backToTop {
  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index: 1;
  width: 30px;
  aspect-ratio: 1/1;
  border-radius: 30px;
  background-color: white;
  color: $orangeColor;
  cursor: pointer;
}
</style>
