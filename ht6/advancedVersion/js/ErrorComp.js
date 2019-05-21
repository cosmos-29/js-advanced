Vue.component('error', {
    data() {
        return {
             showProduct: true,
        }
    },
    methods: {
        errorScan() {
            if(this.$parent.error) alert("Ошибка!");
        }
    },

    template: `<div class="alert alert-danger" role="alert">
                Это уведомление об опасности — check it out!
               </div>`

});
