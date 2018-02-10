<template>
<div id="register">
  <h2>Create Account</h2>
  <hr>
  <form v-on:submit="attemptRegister">
    <label for="email">Email / Phonenumber</label>
    <input id="email" type="text" v-model="user"/>
    <label for="password">Password</label>
    <input id="password" type="password" v-model="password"/>
    <label for="name">Name</label>
    <input id="name" type="text" v-model="name"/>
    <label for="address">Address</label>
    <input id="address" type="text" v-model="address"/>
    <button type="submit">Create Account</button>
  </form>
</div>
</template>

<script>
export default {
  name: 'Register',
  data: function () {
    return {
      user: '',
      password: '',
      name: '',
      address: ''
    }
  },
  methods: {
    attemptRegister: async function () {
      try {
        await this.$store.dispatch('signup', {
          user: this.user,
          password: this.password,
          name: this.name,
          address: this.address
        })
        this.$router.push('verify')
      } catch (e) {
        alert('Could not register user!')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
h2 {
  margin: .2rem;
  font-size: 2rem;
}

#register {
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
  color: white;
  font-size: 1rem;
  padding: .5rem 1rem;
  border-radius: 4px;
  border: none;
  margin-right: .2rem;
  cursor: pointer;
  background-color: #41d196;

  &:hover {
    background-color: #44f4b7;
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
