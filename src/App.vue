<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import { VApp, VMain } from 'vuetify/lib'

export default {
  name: 'App',
  components: {
    VApp,
    VMain,
  },
  data: () => ({}),
}
</script>

<!-- this should generally be the only global CSS in the app -->
<style scoped>
*,
*::before,
*::after {
  background-origin: padding-box;
}

#app {
  font-family: 'Avenir', Arial, Helvetica, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
