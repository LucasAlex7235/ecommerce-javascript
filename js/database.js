// Banco de dados dos produtos

const data = [
  {
    id: 1,
    img: "../img/jaqueta.svg",
    nameItem: "Lightweight Jacket",
    description:
      "Adicione um pouco de energia ao seu guarda-roupa de inverno com esta jaqueta vibrante...",
    value: 100,
    addCart: "Adicionar ao carrinho",
    tag: "Camisetas",
  },
  {
    id: 2,
    img: "../img/gorro.svg",
    nameItem: "Black Hat",
    description:
      "O gorro Next.js chegou! Esta beldade bordada tem um ajuste confortável que garante que...",
    value: 100,
    addCart: "Adicionar ao carrinho",
    tag: "Acessórios",
  },
  {
    id: 3,
    img: "../img/mascara.svg",
    nameItem: "Mask",
    description:
      "Esta máscara facial durável é feita de duas camadas de tecido tratado e possui presilhas...",
    value: 40,
    addCart: "Adicionar ao carrinho",
    tag: "Acessórios",
  },
  {
    id: 4,
    img: "../img/camiseta_preta.svg",
    nameItem: "T-Shirt",
    description:
      "Esta t-shirt é imprescindível no seu guarda-roupa, combinando o caimento intemporal de...",
    value: 100,
    addCart: "Adicionar ao carrinho",
    tag: "Camisetas",
  },
  {
    id: 5,
    img: "../img/camiseta_branca.svg",
    nameItem: "Short-Sleeve T-Shirt",
    description:
      "Agora você encontrou a camiseta básica do seu guarda-roupa. É feito de um mais grosso...",
    value: 100,
    addCart: "Adicionar ao carrinho",
    tag: "Camisetas",
  },
  {
    id: 6,
    img: "../img/moletom.svg",
    nameItem: "Champion Packable Jacket",
    description:
      "Proteja-se dos elementos com esta jaqueta embalável Champion. Esta jaqueta de poliést...",
    value: 100,
    addCart: "Adicionar ao carrinho",
    tag: "Camisetas",
  },
  {
    id: 7,
    img: "../img/kisspng-nike-free-air-force-shoe-sneakers-nike-shoes-transparent-background-5a7931690711e9.802116171517891945029.png",
    nameItem: "Nike air-force",
    description:
      "Pratique seus exercícios sem machucar seus pés...",
    value: 100,
    addCart: "Adicionar ao carrinho",
    tag: "Calçados",
  },

  

  {
    id: 8,
    img: "../img/kisspng-cleveland-cavaliers-sneakers-nike-basketball-shoe-lebron-logo-5b32dd91c9ad08.5761831315300601778261.png",
    nameItem: "Nike basketball shoe lebron",
    description:
      "Pratique seus exercícios sem machucar seus pés...",
    value: 410,
    addCart: "Adicionar ao carrinho",
    tag: "Calçados",
  },
  {
    id: 9,
    img: "../img/kisspng-nike-free-nike-air-max-sneakers-nike-flywire-flat-footwear-5b2ec11e1d4bf6.05896963152979075012.png",
    nameItem: "Nike Air max sneakers",
    description:
      "Pratique seus exercícios sem machucar seus pés...",
    value: 350,
    addCart: "Adicionar ao carrinho",
    tag: "Calçados",
  },
  {
    id: 10,
    img: "../img/kisspng-long-sleeved-t-shirt-long-sleeved-t-shirt-afflicti-5b07ec9073cf02.6841844915272459684744.png",
    nameItem: "Camiseta kiss",
    description:
      "Viva seu momento rock em estilo...",
    value: 59,
    addCart: "Adicionar ao carrinho",
    tag: "Camisetas",
  },
  {
    id: 11,
    img: "../img/kisspng-nike-lebron-soldier-xi-sfg-mens-cleveland-cavalier-5c575a14bc8649.6920631315492285647722.png",
    nameItem: "Nike lebron soldier",
    description:
      "Pratique seus exercícios sem machucar seus pés...",
    value: 670,
    addCart: "Adicionar ao carrinho",
    tag: "Calçados",
  },
  {
    id: 12,
    img: "../img/kisspng-long-sleeved-t-shirt-long-sleeved-t-shirt-clothing-maine-black-bears-women-s-basketball-5b1d25b7765d45.5258439515286368554848.png",
    nameItem: "Camiseta kiss",
    description:
      "Viva seu momento rock em estilo...",
    value: 320,
    addCart: "Adicionar ao carrinho",
    tag: "Camisetas",
  },
  {
    id: 13,
    img: "../img/kisspng-shoe-sneakers-cleveland-cavaliers-nike-air-max-lebron-james-5ac95bf7ae8d99.510380471523145719715.png",
    nameItem: "Cavaliers nike air max",
    description:
      "Pratique seus exercícios sem machucar seus pés...",
    value: 500,
    addCart: "Adicionar ao carrinho",
    tag: "Calçados",
  },
  


  {
    id: 14,
    img: "../img/kisspng-long-sleeved-t-shirt-long-sleeved-t-shirt-sweater-women-luxury-5b4f26dfd7c549.4923877515319139518838.png",
    nameItem: "Camiseta Feminina long sleeved",
    description:
      "Agora você encontrou a camiseta básica do seu guarda-roupa...", 
    value: 89,
    addCart: "Adicionar ao carrinho",
    tag: "Camisetas",
  },
  {
    id: 15,
    img: "../img/kisspng-adidas-stan-smith-adidas-superstar-adidas-original-adidas-neo-5b15b6b230d215.3059151415281496822.png",
    nameItem: "Adidas superstar",
    description:
      "Já pensou em ir para aquele role estiloso e confortavel...",
    value: 449,
    addCart: "Adicionar ao carrinho",
    tag: "Calçados",
  },
  {
    id: 16,
    img: "../img/kisspng-dress-shirt-white-sleeve-blouse-women-039-s-day-5abd122e3863e3.017993071522340398231.png",
    nameItem: "Camiseta feminina sleeve blouse",
    description:
      "Agora você encontrou a camiseta básica do seu guarda-roupa...",
    value: 119,
    addCart: "Adicionar ao carrinho",
    tag: "Camisetas",
  },
  {
    id: 17,
    img: "../img/kisspng-sneakers-adidas-stan-smith-shoe-adidas-originals-memorial-day-5b10f7bea84ba2.5547125315278386546894.png",
    nameItem: "Adidas stan smith",
    description:
    "Já pensou em ir para aquele role estiloso e confortavel...",
    value: 549,
    addCart: "Adicionar ao carrinho",
    tag: "Calçados",
  },
  




];
