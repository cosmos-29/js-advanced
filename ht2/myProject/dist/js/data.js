class DataCounter {
    constructor(container = '.data') {
        this.container = container;
        this.data = 0;
        this._init();
    }
    _init() {
        this.render();
    }
    getData() {
        return this.data = new Date().getFullYear();

    }
    render() {
        document.querySelector(this.container).innerHTML = this.getData();
    }
}
const dataToFooter = new DataCounter();