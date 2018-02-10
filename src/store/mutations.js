export default {
  authenticated (state, userData) {
    state.authenticated = true
    state.user = userData.user
    state.username = userData.username
    state.newUser = null
  },
  signout (state) {
    state.authenticated = false
    state.user = null
    state.username = null
    state.newUser = null
  },
  setNewUser (state, username) {
    state.newUser = username
  }
}
