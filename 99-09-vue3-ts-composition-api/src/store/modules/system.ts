export default {
  state: () => ({
    name: "DefaultValue",
  }),
  getters: {},
  mutations: {
    SET_NAME(state: any, payload: any) {
      state.name = payload
    },
  },
  actions: {
    setName({ commit }: any, data: any) {
      commit("SET_NAME", data)
    },
  },
}
