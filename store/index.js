export const state = () => ({
    collapsed: '',
})

export const mutations = {
    screenRatio: (state, payload) => {
        state.collapsed = payload
        console.log(' mutation store payload', state.collapsed)
      },
}

export const actions = {
    SCREEN_RATIO: (context, payload) => {
        console.log(' action store payload', payload)
        context.commit('screenRatio', payload)
      },
}

export const getters = {
    isCollapsed(state) {
        return state.collapsed
      },
}