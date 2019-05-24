const func = require('./func');
const os = require('os');
const fs = require('fs');
//const http = require('http');
const moment = require('moment');
console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));
//Создание Сервера:
// const server = http.createServer((req, res) => {
//     if(req.url === '/') {
//         res.write('hello WORLD');
//         res.end();
//     }
//     if(req.url === '/api/uesrs') {
//         res.write(JSON.stringify(users));
//         res.end();
//     }
// });
// server.listen(3000);
// server.on('connection', () => {
//     console.log('new connection');
// });
// console.log('Server strated at port 3000...');

//Чтение из файла
// fs.readFile('some.json', 'utf8', (err, data) => {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(JSON.parse(data));
//     }
// });


//Смотрим свйства FS запись
let users = [
    {
        name: 'john',
        age: 23,
    }
];
// fs.writeFile('some.json', JSON.stringify(users), (error)=> {
//     if(error) console.log(error);
// });


// Смотрим модуль ОС
// console.log(func(5));
// console.log(os.platform());
// console.log(os.cpus());
// console.log(os.type());
