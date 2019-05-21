Vue.component('error', {
    data() {
        return {
            showError: false,
            block: ''
        }
    },
    methods: {
        check() {
            if(this.$parents.error) {
                this.showError = true;
            }
            if(this.showError) {
                this.block = "visible"
            } else this.block = "invisible"
        }
    },

    template: `<div class="alert alert-danger" role="alert">  
                <mess :class="this.block"></mess>             
               </div>`

});
Vue.component('mess', {
    props: ['product', 'img'],
    template: `<p>Ошибка</p>`
});
