class FormList {
    constructor() {
        this.name = '';
        this.mail = '';
        this.phone = '';
        this._init();
    }

    _init() {
        document.querySelector('.form-validate').addEventListener('submit', e => {
        e.preventDefault();
        this.filter(document.querySelector('.check-field'));
    })
    }

    filter(value) {
        this.name = value.querySelector('.name').querySelector('.form-control').value;
        this.mail = value.querySelector('.mail').querySelector('.form-control').value;
        this.phone = value.querySelector('.phone').querySelector('.form-control').value;
        this._validate();
    }
    _validate() {
        if (emailRegExp.test(this.mail)) console.log('Мыло верно');
        if (nameRegExp.test(this.mail)) console.log('Имя Бэнч');


    }
}

let classCheckList = new FormList();
const array = ['name', 'mail', 'phone'];

const emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const nameRegExp = /[a-z]+/i;
const




