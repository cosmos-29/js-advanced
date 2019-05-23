Vue.component('error', {
    data() {
        return {
            showError: false,
            block: ''
        }
    },
    methods: {

    },

    template: `
               <div class="error-block" v-if="$parent.error">
                <p class="error-msg">
                <button class="close-btn" @click="$parent.error = null">&times;</button>
                 <mess 
                :text = $parent.error></mess> 
                </p>
                </div>

`

});
Vue.component('mess', {
    props: ['text'],
    template: `<p>{{text}}</p>`
});
