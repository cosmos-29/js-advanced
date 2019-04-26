const products = [
    {id: 1, title: 'mango people t-shirt', price: "$52"},
    {id: 2, title: 'mango people t-shirt', price: "$52"},
    {id: 3, title: 'mango people t-shirt', price: "$52"},
    {id: 4, title: 'mango people t-shirt', price: "$52"},
    {id: 5, title: 'mango people t-shirt', price: "$52"},
    {id: 6, title: 'mango people t-shirt', price: "$52"},
    {id: 7, title: 'mango people t-shirt', price: "$52"},
    {id: 8, title: 'mango people t-shirt', price: "$52"},
];
const renderProduct = (title, price, id) => {
    return `<div class="fItems">
                <div class="fItem${id} forAdaptive">
                    <div class="background">
                        <button><i class="fas fa-shopping-cart"></i> Add to Cart</button>
                    </div>
                </div>
                <div class="sign">
                    <h2>${title}</h2>
                    <p>${price}</p>
                </div>
            </div>`
};


const renderPage = list => {
    console.log(list);
    const productList = list.map(item => renderProduct(item.title, item.price, item.id));
    let productString = '';
    // Стандартная реализация
    /*for (let i = 0; i < productList.length; ++i) {
        productString += productList[i];
    }*/
    // Реализация быстрая
    productString = productList.join('');
    document.querySelector('.itemsIcons').innerHTML = productString;
};
renderPage(products);