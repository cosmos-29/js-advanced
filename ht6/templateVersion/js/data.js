class data {
    constructor(container = '.data') {
        this.container = container;
        this.data = 0;
        this._init();
    }

    _init() {
        this.GetData();
        this._render();
    }

    GetData() {
        const dataInFooter = document.querySelector(this.container);
        this.data = new Date().getFullYear();
        dataInFooter.innerHTML = this._render();

    }

    _render() {
        return `${this.data}`
    }
}
const dataInFooter = new data();