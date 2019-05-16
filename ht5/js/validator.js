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
        this._validate(value);
    }
    _validate(value) {
        if (emailRegExp.test(this.mail)) {
            console.log('Мыло верно');

        }
        if (nameRegExp.test(this.name)) console.log('Имя Бэнч');
        if (phoneRegExp.test(this.phone)) console.log('Тел');

    }
}

let classCheckList = new FormList();
const array = ['name', 'mail', 'phone'];

const emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const nameRegExp = /\b[a-z]+\b/ig;
const phoneRegExp = /\+\d+/;




