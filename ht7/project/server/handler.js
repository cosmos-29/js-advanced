const cart = require('./cart');
const fs = require('fs');

const actions = {
    add: cart.add,
    change: cart.change,
    del: cart.del,
};

let handler = (req, res, action, file) => {
    fs.readFile(file, 'utf8', (err, data) => {
        if(err){
            res.sendStatus(404, JSON.stringify({result: 0, text: err}))
        } else {
            let newCart = actions[action](JSON.parse(data), req);
            fs.writeFile(file, newCart, (err) => {
                if(err){
                    res.send({result: 0, text: 'Can`t write file'})
                } else {
                    res.send({result: 1, text: 'Success!'})
                }
            })
        }
    })
};

module.exports = handler;
//