Vue.component('search', {
    data() {
        return {
            name: '',
        }
    },
    template: ` <form action="#" class="search-form" @submit.prevent="$root.$refs.products.filter(name)">
                      <input type="text" v-model="name" class="search-field">
                      <button class="btn-search"  type="submit">
                       <i class="fas fa-search"></i>
                      </button>
                </form>`
});