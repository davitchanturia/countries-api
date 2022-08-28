export default {
    namespaced: true,
    data() {
        return {
            countries: []
        }
    },
    getters: {
        getAllCountry(state) {
            return state.countries;
        },
    },
    mutations: {
        setCountries(state, payload) {
            state.countries = payload;
        }
    },
    actions: {
        setCountries(context, payload) {
            context.commit('setCountries', payload);
        }
    }
}