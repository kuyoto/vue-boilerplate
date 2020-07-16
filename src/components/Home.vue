<template>
  <v-container>
    <v-layout text-center wrap>
      <v-flex xs12>
        <v-img
          :src="require('../assets/icons/logo.svg')"
          alt="vue logo"
          class="my-3"
          contain
          height="200"
        ></v-img>
      </v-flex>

      <v-flex mb-4>
        <h1 class="display-1 font-weight-bold mb-3">{{ message }}</h1>

        <p class="subheading font-weight-regular"
          >For guide and recipes on how to configure / customize this
          project.<br />checkout the
          <a href="https://cli.vuejs.org'" target="_blank">vue-cli docs</a>
        </p>
      </v-flex>

      <v-flex xs12 mb-5>
        <h2 class="headline font-weight-bold mb-3">Installed CLI Plugins</h2>

        <v-layout justify-center>
          <a
            v-for="(plugin, i) in installedPlugins"
            :key="i"
            :href="plugin.href"
            class="subheading mx-3"
            target="_blank"
            >{{ plugin.text }}</a
          >
        </v-layout>
      </v-flex>

      <v-flex xs12 mb-5>
        <h2 class="headline font-weight-bold mb-3">Essential Links</h2>

        <v-layout justify-center>
          <a
            v-for="(link, i) in essentialLinks"
            :key="i"
            :href="link.href"
            class="subheading mx-3"
            target="_blank"
            >{{ link.text }}</a
          >
        </v-layout>
      </v-flex>

      <v-flex xs12 mb-5>
        <h2 class="headline font-weight-bold mb-3">Ecosystem</h2>

        <v-layout justify-center>
          <a
            v-for="(eco, i) in ecosystem"
            :key="i"
            :href="eco.href"
            class="subheading mx-3"
            target="_blank"
            >{{ eco.text }}</a
          >
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'home',
  components: {},
  data: () => ({
    message: 'Welcome to your Vue.js + Vuetify App',
    ecosystem: [
      {
        text: 'vue-router',
        href: 'hhttps://router.vuejs.org',
      },
      {
        text: 'vue-loader',
        href: 'https://vue-loader.vuejs.org',
      },
      {
        text: 'vue-cli',
        href: 'https://cli.vuejs.org',
      },
      {
        text: 'vuex',
        href: 'ttps://vuex.vuejs.or',
      },
      {
        text: 'awesome-vue',
        href: 'https://github.com/vuejs/awesome-vue',
      },
    ],
    essentialLinks: [
      {
        text: 'Core Docs',
        href: 'https://vuejs.org',
      },
      {
        text: 'Forum',
        href: 'https://forum.vuejs.org',
      },
      {
        text: 'Community Chat',
        href: 'https://chat.vuejs.org',
      },
      {
        text: 'Twitter',
        href: 'https://twitter.com/vuejs',
      },
    ],
    installedPlugins: [
      {
        text: 'Babel',
        href: 'https://cli.vuejs.org/core-plugins/babel.html',
      },
      {
        text: 'ESLint',
        href: 'https://cli.vuejs.org/core-plugins/eslint.htm',
      },
      {
        text: 'Jest',
        href: 'https://cli.vuejs.org/core-plugins/unit-jest.html',
      },
      {
        text: 'Vuetify',
        href: 'https://awesomejs.dev/for/vue-cli/pkg/245665376837304832/',
      },
    ],
  }),
}
</script>

<style scoped>
a {
  color: #42b983;
}
</style>
