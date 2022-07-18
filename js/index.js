const li = document.querySelector(".seletor")
const ul = document.querySelector('#sub')
const carrinhoLoja = document.querySelector(".content__main")
const sectionProdutos   = document.querySelector(".content__products")
const ulProdudos        = document.createElement("ul")
ulProdudos.classList.add("content__list")
sectionProdutos.append(ulProdudos)



li.addEventListener("click", function(event){
    ul.classList.toggle('hide')

})

listandoCard(data)

function listandoCard(products){
    
    for(let i = 0; i < products.length; i++){
        // console.log(products[i])
        let produtos            = criandoCard(products[i])
        
        // console.log(products[i])
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
    
    ulProdudos.insertAdjacentHTML("afterbegin", `
    <li class="card">
    <figure id="figure" class="figure__on">
        <img src="${img}" alt="${nome}">
    </figure>

    <article>
        <header class="cabecalho__product">
            <div class="departamento">
                <p>${departamento}</p>
                <span class="valor">R$ ${preco},00</span>
            </div>
            <div class="title">
                <h3>${nome}</h3>
            </div>
        </header>   

        <main>
            <p>${descricao}</p>
            <span>R$ ${preco},00</span>
            <span id="${id}" class="button">${addCart}</button>
        </main>

    </article>
</li> 
    `)

    

    const lis = document.querySelector("#figure")

    const cardLi    = document.querySelector(".card")
    const spanValor = document.querySelector(".valor")
    spanValor.classList.add("hiden")

    

    cardLi.addEventListener("mouseover", function(event){
        
        // const lis = document.querySelector("#figure")
        lis.classList.remove("figure__on") 
        lis.classList.add("figure__off")
        // spanValor.classList.add("hiden")
        // console.log(spanValor)
        // console.log(event.target)
        spanValor.classList.remove("valor")
    })

    cardLi.addEventListener("mouseout", function(){
        lis.classList.remove("figure__off") 
        lis.classList.add("figure__on")
        // spanValor.classList.remove("hiden")
        spanValor.classList.add("valor")
    })


    // const addCar = document.querySelector(".button")
    // eventoCarrinho(addCar)

    carrinho(produtos, cardLi)

}




// function eventoCarrinho(add){
//     add.addEventListener("click", )
// }




function carrinho(produtos, li){
    let nome         = produtos.nameItem
    let descricao    = produtos.description
    let preco        = produtos.value
    let addCart      = produtos.addCart
    let departamento = produtos.tag
    let img          = produtos.img
    let id           = produtos.id
    
    

    let button = li.querySelector(".button")
    
    
    
    button.addEventListener("click", function(event){
            let btn = event.target
            const divCard = document.createElement("div")
            divCard.classList.add("content__product") 
            //let cardElement = btn.parentElement.parentElement.parentElement
            if(btn.tagName == "SPAN"){
                divCard.insertAdjacentHTML("afterbegin", `
                <figure>
                      <img src="${img}" alt="">
                </figure>

                <main>
                    <h3>${nome}</h3>
                    <div class="quantidade">
                        <span class="menos">-</span> 
                        <input type="text">
                        <span class="mais">+</span>
                    </div>

                    <span class="valor">R$ ${preco},00</span>
                    <span class="icon__lixeira"><img src="./icon/lixeira.png" alt=""></span>
                </main>
                `)
                
                
                carrinhoLoja.append(divCard)
            }
            // let cardElement = btn.parentElement.parentElement.parentElement
            // console.log(cardElement)
        })
    
}












{/* <li>
<figure class="figure__off">
    <img src="./src/img/93a3a145714c7410793c2190460ab2a3.png" alt="">
</figure>
<article>
    <header class="cabecalho__product">
        <div class="departamento">
            <p>Camisetas</p>
        </div>
        <div class="title">
            <h3>Lightweight Jacket</h3>
        </div>
    </header>   

    <main>
        <p>Adicione um pouco de energia ao seu guarda-roupa de inverno com esta jaqueta vibrante...</p>
        <span>R$ 100.00</span>
        <span class="button">Adicionar ao carrinho</button>
    </main>

</article>
</li> */}

