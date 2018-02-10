<template>
<div id="navbar">
  <div class="logo">
    <h1>simple-vue-cognito</h1>
  </div>
  <div>
    <router-link v-if="!authenticated" to="signin">Sign In</router-link>
    <a href="#" v-if="authenticated" @click="signout">{{ username }}</a>
  </div>
</div>
</template>

<script>
export default {
  name: 'NavBar',
  computed: {
    authenticated () {
      return this.$store.state.authenticated
    },
    username () {
      return this.$store.state.username
    }
  },
  methods: {
    signout () {
      this.$store.dispatch('signout')
    }
  }
}
</script>

<style lang="scss" scoped>
h1 {
  color: white;
  font-size: 3rem;
}

a, a:visited {
  color: white;
  text-decoration: none;
  font-size: 1.5rem;
}

a:hover {
  text-decoration: underline;
}

#navbar {
  display: flex;
  flex-direction: row;
  align-items: center;

  .logo {
    flex-grow: 1;
  }
}

</style>
