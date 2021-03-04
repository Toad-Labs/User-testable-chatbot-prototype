<template>
  <div>
    <the-header />
    <the-navigation />
    <router-view />
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue';
import TheNavigation from './components/TheNavigation.vue';

export default {
  components: {
    TheHeader,
    TheNavigation,
  },
  setup() {

  }
}
</script>
