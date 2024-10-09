let products = [
    "Iphone",
    "Smartwatch",
    "Bottle",
    "Ballpen",
    "Gelpen",
    "Pencil",
    "Lamp",
    "Mouse",
    "Keyboard",
    "Monitor",
    "Printer",
    "Compass Box",
    "Geometry Box",
    "Mobile",
    "Computer",
    "Tiffin",
    "Eraser",
    "Sharpner",
    "Motor",
    "Biscuit",
    "Torch",
    "Fan"
];

function filterProducts(event){
   
    let userValue = event.target.value.toLowerCase();

    let matching = [];

    for(i = 0; i < products.length; i++){
        let product = products[i];
          if(product.toLocaleLowerCase().includes(userValue)){
            matching.push(product);
        }
    }
    showProducts(matching);
}
function showProducts(items){

    let div = document.getElementById("products");

    let productList = "";

    if(items.length === 0){

        div.innerHTML = `<p>Esa Koi Product nahi mila.</p>`;

        return;
    }

        for(let i = 0; i < items.length; i++){
            productList += `<div class="sqr">
            <img src="Products\\a.jpg">
            <h1>${items[i]}<h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Quas expedita voluptatibus officia. Quasi optio assumenda officia
                ab hic odio, eius necessitatibus esse, vero autem eligendi quisquam,
                perferendis dolorem quidem? Debitis?</p>
            </div>`;
        }
        div.innerHTML = productList;

}
showProducts(products);