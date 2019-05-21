Vue.component('error', {
    data() {
        return {
            showError: false,
            block: ''
        }
    },
    methods: {


    },

    template: `<div class="alert alert-danger" role="alert" v-if="$parent.error">  
                <mess ></mess>             
               </div>`

});
Vue.component('mess', {
    props: ['product', 'img'],
    template: `<p>Ошибка</p>`
});
