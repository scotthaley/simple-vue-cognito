<template>
<div id="verify">
  <h2>Verify Account</h2>
  <hr>
  <form v-on:submit="attemptVerification">
    <label for="email">Email / Phonenumber</label>
    <input id="email" type="text" v-model="user"/>
    <label for="verification">Verification Code</label>
    <input id="verification" type="text" v-model="verification"/>
    <button type="submit">Verify Account</button>
  </form>
</div>
</template>

<script>
export default {
  name: 'Verify',
  data: function () {
    return {
      user: '',
      verification: ''
    }
  },
  methods: {
    attemptVerification: async function () {
      try {
        await this.$store.dispatch('verify', {
          user: this.user,
          code: this.verification
        })
        this.$router.push('/signin')
      } catch (e) {
        alert('Invalid verification code!')
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

#verify {
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
