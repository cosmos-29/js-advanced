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
                <mess 
                :text = $parent.error></mess>             
               </div>`

});
Vue.component('mess', {
    props: ['text'],
    template: `<p>{{text}}</p>`
});
