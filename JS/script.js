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
        tag: 'HP',
        price: 50.75,
        inCart: 0
    },
    {
        name: 'Box-Dom Quixote por Miguel de Cervantes',
        tag: 'Dom Quixote',
        price: 156.75,
        inCart: 0
    },
    {
        name: 'O Senhor dos Anéis por J.R.R. Tolkien',
        tag: 'LOTR',
        price: 87.48,
        inCart: 0
    },
    {
        name: 'O Alquimista por Paulo Coelho',
        tag: 'Alquimista',
        price: 38.90,
        inCart: 0
    },
    {
        name: 'O Pequeno Príncipe de Antoine de Saint-Exupéry',
        tag: 'Pequeno Principe',
        price: 19.90,
        inCart: 0
    },
    {
        name: 'Onde vivem os monstros por Maurice Sendak',
        tag: 'Monstros',
        price: 55.74,
        inCart: 0
    },
    {
        name: 'O Grufalo por Julia Donaldson e Axel Scheffler',
        tag: 'Grufalo',
        price: 46.90,
        inCart: 0
    },
    {
        name: 'A Lagarta Muito Comilona por Eric Carle',
        tag: 'Comilona',
        price: 46.08,
        inCart: 0
    },
    {
        name: 'Cinquenta tons de cinza eBook Kindle',
        tag: 'Cinquenta Tons',
        price: 42.21,
        inCart: 0
    },
    {
        name: 'A garota no trem eBook Kindle',
        tag: 'Garota no Trem',
        price: 26.53,
        inCart: 0
    },
    {
        name: 'A culpa é das estrelas eBook Kindle',
        tag: 'Culpa das Estrelas',
        price: 27.63,
        inCart: 0
    },
    {
        name: 'Capitães da Areia eBook Kindle',
        tag: 'Capitaes',
        price: 28.51,
        inCart: 0
    },
    {
        name: 'Bíblia Sagrada - Edição Pastoral',
        tag: 'Biblia',
        price: 20.51,
        inCart: 0
    }
]

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
            <div class="product">
                <ion-icon name="close-circle"></ion-icon>
                <img src="./images/${item.tag}.jpg">
                <span>${item.name}</span>
            </div>      
            <div class="price">${item.price}</div>
            <div class="quantity">
                <ion-icon class="decrease"
                name="arrow-dropleft-circle"</ion-icon>
                <span>${item.inCart}</span>
                <ion-icon class="increase"
                name="arrow-dropright-circle"></ion-icon>
            </div>                  
            <div class="total">
                $${item.inCart * item.price}
            </div>
            `
        })

        productContainer.innerHTML += `
            <div class="basketTotalContainer">
                <h4 class ="basketTotalTitle">
                    Basket Total
                </h4>
                
                <h4 class ="basketTotal">
                    $${cartCost}
                </h4>
            </div>
        `

    }
}

onLoadCartNumbers();
displayCart();