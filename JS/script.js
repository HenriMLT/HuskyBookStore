//     fetch("http://localhost:8080/livros", {
//         headers: {
//             "Content-type": "application/json; charset=UTF-8"
//         },
//     })
//     .then(response => response.json())
//     .then(response => {
//         console.log(response)
//         const livrosListDiv = document.querySelector("#livros-1");
        
        
//         response.forEach(livro => livrosListDiv.insertAdjacentHTML("beforeend", `
//             <div class="livro">
//                 <img src="${livro.linkImagem}">
//                 <p class="nome-livro">${livro.titulo}</p>
//                 <p class="avaliacao-livro">${'&#9733;&#9733;&#9733;&#9733;&#9734;'}</p>
//                 <p class="preco-livro">${livro.preco}</p>
//                 <button class="botao-comprar-livro">Comprar &#8594;</button>
//             </div>
//         `));
//     })
    
// }

// function getBooks2(){
//     fetch("http://localhost:8080/livros", {
//         headers: {
//             "Content-type": "application/json; charset=UTF-8"
//         },
//     })
//     .then(response => response.json())
//     .then(response => {
//         console.log(response)
//         const livrosListDiv = document.querySelector("#livros-2");
        
        
//         response.forEach(livro => livrosListDiv.insertAdjacentHTML("beforeend", `
//             <div class="livro">
//                 <img src="${livro.linkImagem}">
//                 <p class="nome-livro">${livro.titulo}</p>
//                 <p class="avaliacao-livro">${'&#9733;&#9733;&#9733;&#9733;&#9734;'}</p>
//                 <p class="preco-livro">${livro.preco}</p>
//                 <button class="botao-comprar-livro">Comprar &#8594;</button>
//             </div>
//         `));
//     })
    
// }

// function getBooks3(){
//     fetch("http://localhost:8080/livros", {
//         headers: {
//             "Content-type": "application/json; charset=UTF-8"
//         },
//     })
//     .then(response => response.json())
//     .then(response => {
//         console.log(response)
//         const livrosListDiv = document.querySelector("#livros-3");
        
        
//         response.forEach(livro => livrosListDiv.insertAdjacentHTML("beforeend", `
//             <div class="livro">
//                 <img src="${livro.linkImagem}">
//                 <p class="nome-livro">${livro.titulo}</p>
//                 <p class="avaliacao-livro">${'&#9733;&#9733;&#9733;&#9733;&#9734;'}</p>
//                 <p class="preco-livro">${livro.preco}</p>
//                 <button class="botao-comprar-livro">Comprar &#8594;</button>
//             </div>
//         `));
//     })
    
// }

// function getBooks4(){
//     fetch("http://localhost:8080/livros", {
//         headers: {
//             "Content-type": "application/json; charset=UTF-8"
//         },
//     })
//     .then(response => response.json())
//     .then(response => {
//         console.log(response)
//         const livrosListDiv = document.querySelector("#livros-4");
        
        
//         response.forEach(livro => livrosListDiv.insertAdjacentHTML("beforeend", `
//             <div class="livro">
//                 <img src="${livro.linkImagem}">
//                 <p class="nome-livro">${livro.titulo}</p>
//                 <p class="avaliacao-livro">${'&#9733;&#9733;&#9733;&#9733;&#9734;'}</p>
//                 <p class="preco-livro">${livro.preco}</p>
//                 <button class="botao-comprar-livro">Comprar &#8594;</button>
//             </div>
//         `));
//     })
    
// }

// function getBooks5(){
//     fetch("http://localhost:8080/livros", {
//         headers: {
//             "Content-type": "application/json; charset=UTF-8"
//         },
//     })
//     .then(response => response.json())
//     .then(response => {
//         console.log(response)
//         const livrosListDiv = document.querySelector("#livros-5");
        
        
//         response.forEach(livro => livrosListDiv.insertAdjacentHTML("beforeend", `
//             <div class="livro">
//                 <img src="${livro.linkImagem}">
//                 <p class="nome-livro">${livro.titulo}</p>
//                 <p class="avaliacao-livro">${'&#9733;&#9733;&#9733;&#9733;&#9734;'}</p>
//                 <p class="preco-livro">${livro.preco}</p>
//                 <button class="botao-comprar-livro">Comprar &#8594;</button>
//             </div>
//         `));
//     })
    
// }

// window.addEventListener("load", evento => {
//     console.log('load concluido')
//     getBooks1();
//     getBooks2();
//     getBooks3();
//     getBooks4();
//     getBooks5();
    
//     });

let carts = document.querySelectorAll('.add-cart');

let products = [
    {
        name: 'Harry Potter',
        tag: 'https://m.media-amazon.com/images/I/5165He67NEL._SY445_SX342_.jpg',
        price: 50.75,
        inCart: 0
    },
    {
        name: 'Box-Dom Quixote por Miguel de Cervantes',
        tag: 'https://m.media-amazon.com/images/I/41E1eMLNXVL._SX342_SY445_.jpg',
        price: 156.75,
        inCart: 0
    },
    {
        name: 'O Senhor dos Anéis por J.R.R. Tolkien',
        tag: 'https://m.media-amazon.com/images/I/514M+qMYWSL._SY445_SX342_.jpg',
        price: 87.48,
        inCart: 0
    },
    {
        name: 'O Alquimista por Paulo Coelho',
        tag: 'https://m.media-amazon.com/images/I/51cF7jnQGBS._SY445_SX342_.jpg',
        price: 38.90,
        inCart: 0
    },
    {
        name: 'O Pequeno Príncipe de Antoine de Saint-Exupéry',
        tag: 'https://m.media-amazon.com/images/I/81TmOZIXvzL._SY466_.jpg',
        price: 19.90,
        inCart: 0
    },
    {
        name: 'Onde vivem os monstros por Maurice Sendak',
        tag: 'https://m.media-amazon.com/images/I/61WE-zN+Q+L._SX342_SY445_.jpg',
        price: 55.74,
        inCart: 0
    },
    {
        name: 'O Grufalo por Julia Donaldson e Axel Scheffler',
        tag: 'https://m.media-amazon.com/images/I/51fsECuE09L._SX342_SY445_.jpg',
        price: 46.90,
        inCart: 0
    },
    {
        name: 'A Lagarta Muito Comilona por Eric Carle',
        tag: 'https://m.media-amazon.com/images/I/71b5JH10OpL._SY466_.jpg',
        price: 46.08,
        inCart: 0
    },
    {
        name: 'Cinquenta tons de cinza eBook Kindle',
        tag: 'https://m.media-amazon.com/images/I/515vbT3t2UL._SY445_SX342_.jpg',
        price: 42.21,
        inCart: 0
    },
    {
        name: 'A garota no trem eBook Kindle',
        tag: 'https://m.media-amazon.com/images/I/51s6lglXdSL._SY445_SX342_.jpg',
        price: 26.53,
        inCart: 0
    },
    {
        name: 'A culpa é das estrelas eBook Kindle',
        tag: 'https://m.media-amazon.com/images/I/811ivBP1rsL._SY466_.jpg',
        price: 27.63,
        inCart: 0
    },
    {
        name: 'Capitães da Areia eBook Kindle',
        tag: 'https://m.media-amazon.com/images/I/81iVW0VvbUL._SY466_.jpg',
        price: 28.51,
        inCart: 0
    },
    {
        name: 'Bíblia Sagrada - Edição Pastoral',
        tag: 'Bhttps://d1pkzhm5uq4mnt.cloudfront.net/imagens/capas/mp_a6d2876c770d633fbdf6bc6ef4673212.jpg',
        price: 20.51,
        inCart: 0
    }
];

for (let i=0; i< carts.length; i++) {
    carts[i].addEventListener('click', ()=>{
        cartNumbers(products[i]);
        totalCost(products[i])
    })
}

function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');

    if(productNumbers) {
        document.querySelector('.cart span').textContent = productNumbers
    }
}

function cartNumbers(product){
    let productNumbers = localStorage.getItem('cartNumbers');
    
    productNumbers = parseInt(productNumbers)

    if (productNumbers){
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.cart span').textContent = productNumbers + 1
    } else {
        localStorage.setItem('cartNumbers', 1)
        document.querySelector('.cart span').textContent = 1
    }

    setItems(product)
}

function setItems(product) {
    let cartItems = localStorage.getItem('productsInCart')
    cartItems = JSON.parse(cartItems)

    if (cartItems != null) {
        if (cartItems[product.tag] == undefined){
            cartItems = {
                ...cartItems,
                [product.tag]: product
            }
        }
        cartItems[product.tag].inCart += 1
    } else {
        product.inCart = 1;
        cartItems = {
            [product.tag]: product
        }
    }
    
    
    localStorage.setItem('productsInCart', JSON.stringify(cartItems));
}

function totalCost(product) {
    // console.log('preço do produto', product.price)
    let cartCost = localStorage.getItem('totalCost')

    console.log('Meu cartCost é: ', cartCost)
    console.log(typeof cartCost)

    if (cartCost != null) {
        cartCost = parseFloat(cartCost)
        localStorage.setItem('totalCost', cartCost + product.price)
    } else {
        localStorage.setItem('totalCost', product.price)
    }

    localStorage.setItem('totalCost', cartCost + product.price)
}

function displayCart() {
    let cartItems = localStorage.getItem('productsInCart')
    cartItems = JSON.parse(cartItems)
    let productContainer = document.querySelector('.products')
    let cartCost = localStorage.getItem('totalCost')

    console.log(cartItems)
    if (cartItems && productContainer) {
        productContainer.innerHTML = ''
        Object.values(cartItems).map(item => {
            productContainer.innerHTML += `
            <div class="product" id='${item.id}'>
                <div class="botaofechar">
                    <ion-icon onclick=removeAll('${item.tag}') class="remove-all" name="close-circle-outline"></ion-icon>
                </div>
                <img id="imgcarrinho" src="${item.tag}">
                <span>${item.name}</span>
            </div>      
            <div class="price">R$ ${item.price}</div>
            <div class="quantity">
                <ion-icon onclick="removeOne('${item.tag}')" name="remove-circle-outline"></ion-icon>
                <span> ${item.inCart}</span>
                <ion-icon onclick="addOne('${item.tag}')" name="add-circle-outline"></ion-icon>
            </div>                  
            <div class="total">
               R$ ${item.inCart * item.price}
            </div>
            `
            console.log(item.tag)
        })

        productContainer.innerHTML += `
            <div class="basketTotalContainer">
                <h4 class ="basketTotalTitle">
                    Basket Total
                </h4>
                
                <h4 class ="basketTotal">
                    R$ ${cartCost}
                </h4>
            </div>
        `;

    }
}

function removeAll(tag){
    //gets data from localstorage
    var cart = JSON.parse(localStorage.getItem("productsInCart"));
    var totalPrice = parseFloat(localStorage.getItem("totalCost"));
    var N = parseFloat(localStorage.getItem("cartNumbers"));

    //gets the correct item
    var item = cart[tag]
    
    //deletes the item
    delete cart[tag]
    localStorage.setItem("productsInCart", JSON.stringify(cart));
    localStorage.setItem("totalCost", totalPrice - (item.price * item.inCart))
    localStorage.setItem("cartNumbers", N - item.inCart)
    location.reload();
}

function addOne(tag){
    //gets data from localstorage
    var cart = JSON.parse(localStorage.getItem("productsInCart"));
    var totalPrice = parseFloat(localStorage.getItem("totalCost"));
    var N = parseFloat(localStorage.getItem("cartNumbers"));

    //gets the correct item
    var item = cart[tag];

    //change values
    item.inCart++; //adds one more inCart
    localStorage.setItem("productsInCart", JSON.stringify(cart));
    localStorage.setItem("totalCost", totalPrice + item.price);
    localStorage.setItem("cartNumbers", N + 1);
    location.reload();
}

function removeOne(tag){
    //gets data from localstorage
    var cart = JSON.parse(localStorage.getItem("productsInCart"));
    var totalPrice = parseFloat(localStorage.getItem("totalCost")); //
    var N = parseFloat(localStorage.getItem("cartNumbers"));

    //gets the correct item
    var item = cart[tag]

    //changes values of cart items
    if (item.inCart > 1){
        item.inCart--
        localStorage.setItem("productsInCart", JSON.stringify(cart));
    }
    else{
        delete cart[tag];
        localStorage.setItem("productsInCart", JSON.stringify(cart));
    }

    //changes total price and total number of products
    localStorage.setItem("totalCost", totalPrice - item.price);
    localStorage.setItem("cartNumbers", N - 1);
    location.reload();
}
onLoadCartNumbers();
displayCart();