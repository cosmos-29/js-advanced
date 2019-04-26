//Не понятно почему const? 
const products = [
    {id: 1, title: 'mango people t-shirt', price: "$52", link: 'images/Layer_2.jpg'},
    {id: 2, title: 'mango people t-shirt', price: "$52", link: 'images/Layer_3.jpg'},
    {id: 3, title: 'mango people t-shirt', price: "$52", link: 'images/Layer_4.jpg'},
    {id: 4, title: 'mango people t-shirt', price: "$52", link: 'images/Layer_5.jpg'},
    {id: 5, title: 'mango people t-shirt', price: "$52", link: 'images/Layer_6.jpg'},
    {id: 6, title: 'mango people t-shirt', price: "$52", link: 'images/Layer_7.jpg'},
    {id: 7, title: 'mango people t-shirt', price: "$52", link: 'images/Layer_8.jpg'},
    {id: 8, title: 'mango people t-shirt', price: "$52", link: 'images/Layer_9.jpg'},
];
const renderProduct = (title, price, id, link) => {
    return `<div class="fItems">
                <div class="fItem${id} forAdaptive" style="background:url(${link}) #ffffff no-repeat;">
                    <div class="background" >
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
    const productList = list.map(item => renderProduct(item.title, item.price, item.id, item.link));
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