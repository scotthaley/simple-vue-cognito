import api from '../api'

export default {
  authenticate: async function (context, data) {
    try {
      const user = await api.user.login(data.user, data.password)
      context.commit('authenticated', { user, username: data.user })
    } catch (e) {
      throw new Error(e)
    }
  },
  signup: async function (context, data) {
    try {
      await api.user.signup(data)
      context.commit('setNewUser', data.user)
    } catch (e) {
      throw new Error(e)
    }
  },
  verify: async function (context, data) {
    try {
      await api.user.verify(data.user, data.code)
    } catch (e) {
      throw new Error(e)
    }
  },
  signout: function (context) {
    api.user.signout(context.state.user)
    context.commit('signout')
  }
}
