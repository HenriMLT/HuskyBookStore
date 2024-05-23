function getBooks1(){
    fetch("http://localhost:8080/livros", {
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        },
    })
    .then(response => response.json())
    .then(response => {
        console.log(response)
        const livrosListDiv = document.querySelector("#livros-1");
        
        
        response.forEach(livro => livrosListDiv.insertAdjacentHTML("beforeend", `
            <div class="livro">
                <img src="${livro.linkImagem}">
                <p class="nome-livro">${livro.titulo}</p>
                <p class="avaliacao-livro">${'&#9733;&#9733;&#9733;&#9733;&#9734;'}</p>
                <p class="preco-livro">${livro.preco}</p>
                <button class="botao-comprar-livro">Comprar &#8594;</button>
            </div>
        `));
    })
    
}

function getBooks2(){
    fetch("http://localhost:8080/livros", {
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        },
    })
    .then(response => response.json())
    .then(response => {
        console.log(response)
        const livrosListDiv = document.querySelector("#livros-2");
        
        
        response.forEach(livro => livrosListDiv.insertAdjacentHTML("beforeend", `
            <div class="livro">
                <img src="${livro.linkImagem}">
                <p class="nome-livro">${livro.titulo}</p>
                <p class="avaliacao-livro">${'&#9733;&#9733;&#9733;&#9733;&#9734;'}</p>
                <p class="preco-livro">${livro.preco}</p>
                <button class="botao-comprar-livro">Comprar &#8594;</button>
            </div>
        `));
    })
    
}

function getBooks3(){
    fetch("http://localhost:8080/livros", {
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        },
    })
    .then(response => response.json())
    .then(response => {
        console.log(response)
        const livrosListDiv = document.querySelector("#livros-3");
        
        
        response.forEach(livro => livrosListDiv.insertAdjacentHTML("beforeend", `
            <div class="livro">
                <img src="${livro.linkImagem}">
                <p class="nome-livro">${livro.titulo}</p>
                <p class="avaliacao-livro">${'&#9733;&#9733;&#9733;&#9733;&#9734;'}</p>
                <p class="preco-livro">${livro.preco}</p>
                <button class="botao-comprar-livro">Comprar &#8594;</button>
            </div>
        `));
    })
    
}

function getBooks4(){
    fetch("http://localhost:8080/livros", {
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        },
    })
    .then(response => response.json())
    .then(response => {
        console.log(response)
        const livrosListDiv = document.querySelector("#livros-4");
        
        
        response.forEach(livro => livrosListDiv.insertAdjacentHTML("beforeend", `
            <div class="livro">
                <img src="${livro.linkImagem}">
                <p class="nome-livro">${livro.titulo}</p>
                <p class="avaliacao-livro">${'&#9733;&#9733;&#9733;&#9733;&#9734;'}</p>
                <p class="preco-livro">${livro.preco}</p>
                <button class="botao-comprar-livro">Comprar &#8594;</button>
            </div>
        `));
    })
    
}

function getBooks5(){
    fetch("http://localhost:8080/livros", {
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        },
    })
    .then(response => response.json())
    .then(response => {
        console.log(response)
        const livrosListDiv = document.querySelector("#livros-5");
        
        
        response.forEach(livro => livrosListDiv.insertAdjacentHTML("beforeend", `
            <div class="livro">
                <img src="${livro.linkImagem}">
                <p class="nome-livro">${livro.titulo}</p>
                <p class="avaliacao-livro">${'&#9733;&#9733;&#9733;&#9733;&#9734;'}</p>
                <p class="preco-livro">${livro.preco}</p>
                <button class="botao-comprar-livro">Comprar &#8594;</button>
            </div>
        `));
    })
    
}

window.addEventListener("load", evento => {
    console.log('load concluido')
    getBooks1();
    getBooks2();
    getBooks3();
    getBooks4();
    getBooks5();
    
    });