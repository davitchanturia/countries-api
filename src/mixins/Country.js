export default {
    methods: {
        getRandomItemFromArray(arr, num) {
            const shuffled = [...arr].sort(() => 0.5 - Math.random());

            return shuffled.slice(0, num);
        },
        async fetchCountryData(path, actionFrom) {
            try {

                await fetch(path)
                    .then((response) => response.json())
                    .then((data) => {

                        if (data.status === 404) {
                            throw "countries not found";
                        } else {
                            if (actionFrom === 'TheContent') {

                                const randomCountries = this.getRandomItemFromArray(data, 8);

                                this.$store.dispatch("countryData/setCountries", randomCountries);
                            } else {
                                this.$store.dispatch("countryData/setCountries", data);

                            }
                        }

                    });
            } catch (error) {
                this.$store.dispatch("countryData/setCountries", null);
            }
        }
    }
}