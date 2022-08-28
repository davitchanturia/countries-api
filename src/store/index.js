import { createStore } from "vuex";
import countryDataModule from './countryData/index.js';

const store = createStore({
    modules: {
        countryData: countryDataModule
    }
});

export default store;