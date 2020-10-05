import { createStore } from 'vuex'

export default createStore({
  state: {
    profileName: 'Anon',
    joinCode: '12345'
  },
  mutations: {
    updateProfile(state, {profileName}) {
      state.profileName = profileName;
    },
    setJoinCode(state, {joinCode}) {
      state.joinCode = joinCode;
    }
  },
  actions: {
    join({commit, state}) {
      console.log(`Join, name=${state.profileName}, code=${state.joinCode}`);
      // TODO
    }
  },
  modules: {
  }
})
