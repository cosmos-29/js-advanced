const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';
//Инициализируем вью
const app = new Vue({
    el: '#app',
    data: {
        name: '',
        error: null,
    },
    methods: {
        getJson(url) {
            return fetch(url)
                .then(result => result.json())
        }
    },
    mounted() {

    }
});


