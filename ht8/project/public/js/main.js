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
                .catch( error => {
                    this.error = error;
                })
        },
        postJson(url, data) {
            return fetch(url, {
                method: 'POST',
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(data)
            })
                .then(result => result.json())
                .catch( error => {
                    this.error = error;
                })
        },
        putJson(url, data) {
            return fetch(url, {
                method: 'PUT',
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(data)
            })
                .then(result => result.json())
                .catch( error => {
                    this.error = error;
                })
        },
        delJson(url, data) {
            return fetch(url, {
                method: 'DELETE',
                body: JSON.stringify(data)
            })
                .then(result => result.json())
                .catch( error => {
                    this.error = error;
                })
        },
    },
    mounted() {

    }
});


