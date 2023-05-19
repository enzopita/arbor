const products = [
  {
    id: 1,
    name: 'Caliandra Rosa',
    image: `/assets/images/products/caliandra-rosa.png`,
    price: 595,
    shortDescription: 'Caliandra é o nome comum dado a várias espécies do gênero Calliandra, também conhecidas como esponjinha vermelha ou de sangue.',
    longDescription: 'Na natureza, são arbustos que podem chegar a formar pequenas árvores. Apresentam em sua maioria, folhas perenes e delicadas, que se fecham à noite ou quando a planta sofre um déficit hídrico. As flores podem ser brancas, rosas, vermelhas e amarelas de diversas tonalidades e sempre com o aspecto globoso com forma de pompom, característica típica destas espécies.',
    cardDescription: 'Arbustos que podem chegar a formar pequenas árvores.',
  },
  // {
  //   id: 2,
  //   name: 'Céltis',
  //   image: `/assets/images/products/celtis.png`,
  //   price: 389.99,
  //   shortDescription: 'Eles podem viver por mais de 600 anos e produzir frutos vermelhos comestíveis.',
  //   longDescription: 'Árvore de médio porte, folhas dentadas, ovaladas, largas, de cor verde claro brilhante. Em lugares com inverno rigoroso muda a cor da folhagem para amarelo e às perde totalmente, mas em regiões com temperatura mais amena mantém-se sempre verde. A casca das árvores mais velhas tem um tom cinza-claro e são lisas. Uma das melhores espécies para o cultivo de árvore de pequeno porte devido a possibilidade de redução das folhas e também pela fina e densa ramificação.',
  //   cardDescription: 'Suas cores variam dependendo do clima.',
  // },
  {
    id: 3,
    name: 'Cereja Silvestre',
    image: `/assets/images/products/cereja-silvestre.png`,
    price: 299.99,
    shortDescription: 'A cereja silvestre é uma árvore de pequeno porte, que pode atingir até 10 metros de altura.',
    longDescription: 'Apresenta na natureza uma forma de arbusto de porte médio e é originária de regiões da América tropical e subtropical. Produz frutos comestíveis de cor vermelho intenso e é uma planta bastante precoce, ou seja, começa a produção de frutos a partir de um a dois anos de idade. Floresce varias vezes ao longo do ano, mas o início da primavera é o momento em que a floração ocorre com mais intensidade.',
    cardDescription: 'Produz frutos comestíveis de cor vermelho intenso.',
  },
  {
    id: 4,
    name: 'Grewia Occidentalis',
    image: `/assets/images/products/grewia-occidentalis.png`,
    price: 199.99,
    shortDescription: 'Pode atrair borboletas e pássaros.',
    longDescription: 'Flor de Lótus é uma árvore de folhas brilhantes, verdes escuras e flores roxas. Estes atributos tornam a Grewia occidentalis (Flor de Lótus) um arbusto muito útil para o jardim e facilmente pode ser transformado em Bonsai porque aceita muito bem podas severas. Em seu habitat natural, a Grewia cresce lentamente e desordenadamente.',
    cardDescription: 'Folhas brilhantes, verdes escuras e flores roxas.',
  },
  {
    id: 5,
    name: 'Juniperus Procumbens',
    image: `/assets/images/products/juniperus-procumbens.png`,
    price: 299.99,
    shortDescription: 'É uma planta prostrada que pode crescer até 4 metros de largura e tem folhas em forma de agulha ou escama',
    longDescription: 'O Juniperus procumbens é uma das coníferas mais populares dentro do mundo. O tronco cresce naturalmente com muitas sinuosidades e se torna sutilmente avermelhado quando é escovado. Sua folhagem em forma de acículas compactas apresenta uma coloração verde clara e levemente azulada, sendo uma das muitas espécies de coníferas que também se sujeitam ao trabalho com madeira morta.',
    cardDescription: null,
  },
  {
    id: 6,
    name: 'Pitanga',
    image: `/assets/images/products/pitanga.png`,
    price: 199.99,
    shortDescription: 'Pode produzir frutos vermelhos, amarelos ou pretos, que são ricos em cálcio e têm sabor agridoce.',
    longDescription: 'Apesar de ser nativa da Mata Atlântica brasileira, a Eugenia uniflora (Pitangueira / Pitanga) é encontrada em vários países. Possui tronco liso de cor bege-acinzentado. Sua folhagem é densa e verde escura, com folhas pequenas, brilhantes e aromáticas. Suas pequenas flores são brancas. Os frutos são comestíveis, e têm o formato de pequenas abóboras (aproximadamente, 2 cm de diâmetro).',
    cardDescription: null,
  },
  {
    id: 7,
    name: 'Shimpaku',
    image: `/assets/images/products/shimpaku.png`,
    price: 299.99,
    shortDescription: 'Shimpaku é que ele é um tipo de bonsai de junípero originário da China e muito utilizado no Japão, sendo apreciado pela sua madeira morta branca e reluzente (Jin e Shari) que contrasta com a folhagem verde escura.',
    longDescription: 'É uma conífera que pode variar de aspecto em função da idade: as agulhas jovens são largas, de cor clara e compactas, tornando-se pequenas com a idade, em forma de escamas. O mesmo exemplar pode apresentar folhagens jovens e adultas. O tronco é escuro e levemente avermelhado, desprendendo a casca com facilidade. É uma das espécies que melhor propicia o trabalho com madeira morta (Jin e Shari), pois em seu habitat de origem apresentam naturalmente estas características.',
    cardDescription: null,
  }
];

// Seleciona 5 produtos aleatórios para serem exibidos na página inicial
const trendingProducts = products
  .sort(() => Math.random() - 0.5)
  .slice(0, 5);

// Botão de voltar o histórico
const backButton = document.querySelector('#back-button');

/**
 * Cria um card de produto
 * @param {*} product O produto a ser renderizado
 */
const createCard = (product) => {
  const card = document.createElement('div');
  card.classList.add('card');

  const contentContainer = document.createElement('div');
  contentContainer.classList.add('card-content');

  const img = document.createElement('img');
  img.src = product.image;
  img.alt = product.name;


  const name = document.createElement('h3');
  name.textContent = product.name;

  const price = document.createElement('p');
  price.textContent = `Preço: R$ ${product.price}`;

  const button = document.createElement('button');
  button.textContent = 'Visualizar';
  button.classList.add('button');
  button.addEventListener('click', () => {
    window.location.href = `/produto.html?id=${product.id}`;
  });

  contentContainer.appendChild(img);
  contentContainer.appendChild(name);
  contentContainer.appendChild(price);
  contentContainer.appendChild(button);

  card.appendChild(contentContainer);

  return card;
};

/**
 * Cria um carousel de produtos
 * @param {HTMLElement} element O elemento HTML que receberá o carousel
 * @param {HTMLDivElement[]} items A lista de itens a serem renderizados
 */
const createCarousel = (element, items) => {
  const gliderContain = document.createElement('div');
  gliderContain.classList.add('glider-contain');

  const glider = document.createElement('div');
  glider.classList.add('glider');

  const prevButton = document.createElement('button');
  prevButton.classList.add('glider-prev');
  prevButton.innerHTML = '&laquo;';

  const nextButton = document.createElement('button');
  nextButton.classList.add('glider-next');
  nextButton.innerHTML = '&raquo;';

  const dots = document.createElement('div');
  dots.id = 'dots';

  gliderContain.appendChild(glider);
  gliderContain.appendChild(prevButton);
  gliderContain.appendChild(nextButton);
  gliderContain.appendChild(dots);

  items.forEach((card) => glider.appendChild(card));

  element.appendChild(gliderContain);

  new Glider(document.querySelector('.glider'), {
    slidesToShow: 'auto',
    slidesToScroll: 1,
    dragVelocity: 2,
    itemWidth: 233,
    draggable: true,
    scrollLock: false,
    dots: '#dots',
    rewind: true,
    arrows: {
      prev: '.glider-prev',
      next: '.glider-next'
    },
  });
};

const updateProductPage = (productId) => {
  const product = products.find((p) => p.id === productId);

  if (!product) {
    window.location.href = '/mudas-de-arvores.html';
    return;
  }

  const productName = document.querySelector('#product-name');
  const productShortDescription = document.querySelector('#product-short-description');
  const productLongDescription = document.querySelector('#product-long-description');
  const productImage = document.querySelector('#product-image');
  const productPrice = document.querySelector('#product-price');

  productName.textContent = product.name;
  productShortDescription.textContent = product.shortDescription || 'Esse produto não tem uma descrição curta.';
  productLongDescription.textContent = product.longDescription || 'Esse produto não tem uma descrição longa.';
  productImage.src = product.image;
  productImage.alt = product.name;
  productPrice.textContent = `R$ ${product.price}`;

  console.log('Informações do produto atualizado', product);
};

// Executa o código abaixo quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
  const { href, pathname } = window.location;
  const isProductsPage = pathname.includes('mudas-de-arvores.html');
  const isHomePage = pathname.includes('index.html') || pathname === '/';

  const isProductPage = pathname.includes('produto.html');
  const productId = isProductPage && parseInt(href.split('?id=')[1]);

  console.log('Informações de depuração do roteador', {
    href,
    pathname,
    isProductsPage,
    isHomePage,
    isProductPage,
    productId,
  });

  if (backButton) {
    backButton.addEventListener('click', () => {
      window.history.back();
    });
  }

  if (isHomePage) {
    // Renderiza os cards de produtos em tendência.
    const trendingProductsCards = trendingProducts.map(createCard);
    createCarousel(document.querySelector('.cards'), trendingProductsCards);
  }

  if (isProductsPage) {
    // Renderiza os cards de todos os produtos.
    const allProductsCards = products.map(createCard);
    createCarousel(document.querySelector('.cards'), allProductsCards);
  }

  if (isProductPage && productId) {
    updateProductPage(productId);
  }
});
