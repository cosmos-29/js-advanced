let updateCart = (arr) => {
    let counter = 0;
    let sum = 0;
    for(let el of arr.contents) {
        counter += el.quantity;
        sum += el.price*el.quantity;
    }
    arr.amount = counter;
    arr.countGoods = sum;
    return arr;
};


let add = (cart, req) => {
    cart.contents.push(req.body);
    updateCart(cart);
    return {name: req.body.product_name, newCart: JSON.stringify(cart, null, 4)};
};
let change = (cart, req) => {
    let find = cart.contents.find(el => el.id_product === +req.params.id);
    find.quantity += req.body.quantity;
    updateCart(cart);
    return {name: find.product_name, newCart: JSON.stringify(cart, null, 4)};
};
let del = (cart, req) => {
    console.log(req);
    let find = cart.contents.find(el => el.id_product === +req.params.id);
    cart.contents.splice(cart.contents.indexOf(find), 1);
    updateCart(cart);
    return {name: find.product_name, newCart: JSON.stringify(cart, null, 4)};
};

module.exports = {
    add,
    change,
    del
};