import axios from 'axios'

export default {
    state: () => ({
        excursions: null
    }),

    getters: {
        getExcursions(state) {
            return state.excursions
        }
    },

    mutations: {
        setExcursions(state, data) {
            state.excursions = data
        }
    },

    actions: {
        async fetchExcursions({ commit }) {
            // try {
            //     const api = 'https://api.walkom.ru/api/excursions'
            //     const res = await axios.get(api)

            //     commit('setExcursions', res.data)
            // } catch {
            //     alert('Ошибка получения экскурсий')
            // }
        }
    }

}
