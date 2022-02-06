export default {
  state: () => ({
    actived: false,
  }),
  getters: {},
  mutations: {
    SET_ACTIVE(state: { actived: boolean }, payload: boolean) {
      state.actived = payload
    },
  },
  actions: {
    setName({ commit }: any, data: boolean) {
      commit("SET_NAME", data)
    },
  },
}
