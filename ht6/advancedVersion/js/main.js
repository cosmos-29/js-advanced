const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';
//Инициализируем вью
const app = new Vue({
    el: '#app',
    data: {
        name: '',
    },
    methods: {
        getJson(url) {
            return fetch(url)
                .then(result => result.json())
                .catch(error => console.log(error))
        }
    },
    mounted() {

    }
});