<template>
<div id="signin">
  <h2>Sign In</h2>
  <hr>
  <form v-on:submit="attemptSignIn">
    <label for="email">Email / Phonenumber</label>
    <input id="email" type="text" v-model="user"/>
    <label for="password">Password</label>
    <input id="password" type="password" v-model="password"/>
    <button type="submit">Sign In</button>
    <router-link type="button" class="register" tag="button" to="register">Create Account</router-link>
  </form>
</div>
</template>

<script>
export default {
  name: 'SignIn',
  data: function () {
    return {
      user: '',
      password: ''
    }
  },
  methods: {
    attemptSignIn: async function () {
      try {
        await this.$store.dispatch('authenticate', {
          user: this.user,
          password: this.password
        })
        this.$router.push('/')
      } catch (e) {
        alert('Invalid username or password!')
      }
    }
  },
  mounted () {
    this.user = this.$store.state.newUser || ''
  }
}
</script>

<style lang="scss" scoped>
h2 {
  margin: .2rem;
  font-size: 2rem;
}

#signin {
  box-sizing: border-box;
  background-color: white;
  margin: 40px 200px;
  border-radius: 4px;
  padding: 1rem;
}

hr {
  margin-bottom: 1rem;
}

button {
  background-color: rgb(0%, 51.3%, 100%);
  color: white;
  font-size: 1rem;
  padding: .5rem 1rem;
  border-radius: 4px;
  border: none;
  margin-right: .2rem;
  cursor: pointer;

  &:hover {
    background-color: rgb(85, 170, 250);
  }

  &.register {
    background-color: #41d196;

    &:hover {
      background-color: #44f4b7;
    }
  }
}

input {
  display: block;
  font-size: 1rem;
  border-radius: 4px;
  border: 1px solid black;
  padding: .4rem;
  min-width: 400px;
  margin-bottom: 1.5rem;
}
</style>
