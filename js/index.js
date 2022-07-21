const li                 = document.querySelector(".seletor")
const ul                 = document.querySelector('#sub')
const inputPesquisa      = document.querySelector(".pesquisa")
const botaoPesquisa      = document.querySelector(".button__pesquisa")
const carrinhoLoja       = document.querySelector(".content__main")
const sectionProdutos    = document.querySelector(".content__products")
const ulProdudos         = document.createElement("ul")
const quantidadeProdutos = document.querySelector(".product__soma")
const valorTotal         = document.querySelector(".product__total__soma")
const btnTodos           = document.querySelector(".all__itens")
const btnAcessorios      = document.querySelector(".acessorios__itens")
const btnCalcados        = document.querySelector(".calcados__itens")
const btnCamisetas       = document.querySelector(".camisetas__itens")
const mainContainer      = document.querySelector("main")



ulProdudos.classList.add("content__list")
sectionProdutos.append(ulProdudos)

carrinhoLoja.innerHTML  = ""

let carrinhoItens = []

listandoCard(data)

function listandoCard(products){
    ulProdudos.innerHTML = ""
    for(let i = 0; i < products.length; i++){
        
        let liCards = criandoCard(products[i])
        ulProdudos.append(liCards)
    }
}


function criandoCard(produtos){
    let nome         = produtos.nameItem
    let descricao    = produtos.description
    let preco        = produtos.value
    let addCart      = produtos.addCart
    let departamento = produtos.tag
    let img          = produtos.img
    let id           = produtos.id
  
    const liCard          = document.createElement("li")
    const figure          = document.createElement("figure")
    const imagem          = document.createElement("img")
    const article         = document.createElement("article")
    const header          = document.createElement("header")
    const divDepartamento = document.createElement("div")
    const p               = document.createElement("p")
    const span            = document.createElement("span")
    const divNome         = document.createElement("div")
    const h3Nome          = document.createElement("h3")
    const main            = document.createElement("main")
    const pDescricao      = document.createElement("p")
    const spanPreco       = document.createElement("span")
    const spanButton      = document.createElement("span")

    liCard.classList.add("card")
    figure.setAttribute("id", "figure")
    figure.classList.add("figure__on")
    header.classList.add("cabecalho__product")
    divDepartamento.classList.add("departamento")
    span.classList.add("valor")
    divNome.classList.add("title")
    spanButton.classList.add("button")
    spanButton.setAttribute("id", id)


    spanButton.innerText = addCart
    spanPreco.innerText = `R$ ${preco},00`
    pDescricao.innerText = descricao
    h3Nome.innerText = nome
    span.innerText = `R$ ${preco},00`
    imagem.src = img
    imagem.alt = nome
    p.innerText = departamento



    main.append(pDescricao, spanPreco, spanButton)
    divNome.append(h3Nome)
    divDepartamento.append(p, span)
    header.append(divDepartamento, divNome)
    article.append(header, main)
    figure.append(imagem)
    liCard.append(figure, article)

    let hover =  eventoHoverCardLi(liCard)
    return hover

}

function eventoHoverCardLi(li){
const lis     = li.querySelector("#figure")
const cardLi  = li
const spanValor = cardLi.querySelector(".valor")
spanValor.classList.add("hiden")

//*******EFEITO HOVER******/
cardLi.addEventListener("mouseover", function(){
    lis.classList.remove("figure__on") 
    lis.classList.add("figure__off")
    spanValor.classList.remove("valor")
})

 cardLi.addEventListener("mouseout", function(){
     lis.classList.remove("figure__off") 
     lis.classList.add("figure__on")
     spanValor.classList.add("valor")
 })

 return cardLi
}


ulProdudos.addEventListener("click", addClick)


function addClick(event){
    let btn = event.target
    
    if(btn.tagName == "SPAN"){
        let cardCarrinho = carrinhoProdutos(data, btn.id)
        adicionandoCarrinho(cardCarrinho)
    }
}

function adicionandoCarrinho(produto){

    carrinhoItens.push(produto)
    carrinhoLoja.append(produto)
    quantidadeCarrinho(carrinhoItens.length)
    carrinhoVazio(carrinhoLoja)

    //BANNER CARRINHO VAZIO
    if(carrinhoLoja.querySelector(".vazio")){
        carrinhoLoja.querySelector(".vazio").remove()
    }
    

}


function quantidadeCarrinho(num){
quantidadeProdutos.innerText = num
somaCarrinho(num)
}



carrinhoLoja.addEventListener("click", removendoItens)

function removendoItens(event){
    let btnRemover = event.target 
    if(btnRemover.tagName == "IMG"){
        let cardProduto = event.target.parentElement.parentElement.parentElement
        cardProduto.remove()
        carrinhoItens.splice(carrinhoItens.length - 1,1)
        quantidadeCarrinho(carrinhoItens.length)
        console.log(carrinhoItens)
        carrinhoVazio(carrinhoLoja)
    }
    
}




function somaCarrinho(quantidade){
    let valor         = 0
    let receber       = []
    console.log(quantidade)
    for(let i = 0; i < carrinhoItens.length; i++){

       let numeroInteriro = Number(carrinhoItens[i].querySelector(".valor").innerText)
        receber.push(numeroInteriro)
  
    }
    console.log(receber)
    for(let i = 0; i < receber.length; i++){
        valor += receber[i]
    }
 
    valorTotal.innerText = `R$ ${valor},00 `    
}







function carrinhoProdutos(produtos, ids){
    for(let i = 0; i < produtos.length; i++){
        let nomes         = produtos[i].nameItem
        let descricao     = produtos[i].description
        let preco         = produtos[i].value
        let addCart       = produtos[i].addCart
        let departamento  = produtos[i].tag
        let img           = produtos[i].img
        let id            = produtos[i].id
    

        const divCard = document.createElement("div")

        const figure           = document.createElement("figure")
        const imagem           = document.createElement("img")
        const main             = document.createElement("main")
        const h3Nome           = document.createElement("h3")
        const divQuantidade    = document.createElement("div")
        const spanMenos        = document.createElement("span")
        const inputValor       = document.createElement("input")
        const spanMais         = document.createElement("span")
        const spanValor        = document.createElement("span")
        const spanLixo         = document.createElement("span")
        const lixoImg          = document.createElement("img")

        divCard.classList.add("content__product") 
        inputValor.classList.add("quantidadeItens")
        divQuantidade.classList.add("quantidade")
        spanMenos.classList.add("menos")
        spanMais.classList.add("mais")
        spanValor.classList.add("valor")
        spanLixo.classList.add("icon__lixeira")
        spanLixo.id = id
        divCard.id = id
    
        
        inputValor.value = 1
        imagem.src = img
        h3Nome.innerText = nomes
        spanMenos.innerText = "-"
        inputValor.type = "text"
        h3Nome.innerText = nomes
        spanMais.innerText = "+"
        spanValor.innerText = preco
        lixoImg.src = "./icon/lixeira.png"
        
        divQuantidade.append(spanMenos,inputValor,spanMais)
        spanLixo.append(lixoImg)
        main.append(h3Nome, divQuantidade, spanValor, spanLixo)
        figure.append(imagem)
        divCard.append(figure, main)  
        
      

        if(divCard.id == ids){
            return divCard
        }
        
    }
}


carrinhoVazio(carrinhoLoja)

function carrinhoVazio(vazio){
    
    const divVazio = document.createElement("div")
    if(carrinhoItens.length == 0){
        //console.log(carrinhoItens)
        carrinhoLoja.innerHTML = ""
        
        divVazio.classList.add("vazio")
        divVazio.innerHTML = `
           <p class="status">Carrinho vazio</p>
           <p class="value">Adicione itens</p>
       `      
       vazio.append(divVazio)
    }
    
}





btnAcessorios.addEventListener("click", function(event){
    let resultadoBusca = []
    for(let i = 0; i < data.length; i++){
        

        if(data[i].tag == "Acessórios"){
            resultadoBusca.push(data[i])
        }
    }
    listandoCard(resultadoBusca)
})




btnCamisetas.addEventListener("click", function(event){
    let resultadoBusca = []
    for(let i = 0; i < data.length; i++){
        

        if(data[i].tag == "Camisetas"){
            resultadoBusca.push(data[i])
        }
    }
    listandoCard(resultadoBusca)
})

btnCalcados.addEventListener("click", function(event){
    let resultadoBusca = []
    for(let i = 0; i < data.length; i++){
        

        if(data[i].tag == "Calçados"){
            resultadoBusca.push(data[i])
        }
    }
    listandoCard(resultadoBusca)
})



btnTodos.addEventListener("click", function(event){
    let resultadoBusca = []
    for(let i = 0; i < data.length; i++){
        

        
            resultadoBusca.push(data[i])
        
    }
    listandoCard(resultadoBusca)
})



botaoPesquisa.addEventListener("click", function(event){
    
    let pesquisaUsuario = inputPesquisa.value
    
    let resultadoBusca  = busca(pesquisaUsuario)
    
    listandoCard(resultadoBusca)
    inputPesquisa.value = ""
})

function busca(valorPesquisa){
    let resultadoBusca = []

   
    for(let i = 0; i < data.length; i++){
        
        let pesquisa     = valorPesquisa.toLowerCase()
        let nomeProduto  = data[i].nameItem.toLowerCase()
        let departamento = data[i].tag.toLowerCase()
        
        if(nomeProduto.includes(pesquisa) || departamento.includes(pesquisa)){
            resultadoBusca.push(data[i])
   
        }
    }
            return resultadoBusca
}