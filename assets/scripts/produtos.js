// Lista de produtos
const produtos = [
  {
    type: 'bonsai',
    name: 'Bonsai 1',
    description: 'Uma descrição qualquer...',
    imageUrl: '/assets/images/bonsai-1.webp',
    price: 50,
  },
  {
    type: 'bonsai',
    name: 'Bonsai 2',
    description: 'Uma descrição qualquer...',
    imageUrl: '/assets/images/bonsai-2.webp',
    price: 100,
  },
  {
    type: 'bonsai',
    name: 'Bonsai 3',
    description: 'Uma descrição qualquer...',
    imageUrl: '/assets/images/bonsai-3.webp',
    price: 150,
  }
];

// Seletor do container de cards
const cardContainer = document.querySelector('#mudas-de-arvores > .section-content > .cards');

// Função para renderizar um card
const renderCard = (produto) => {
  const card = document.createElement('div');
  card.classList.add('card');

  const cardImage = document.createElement('img');
  cardImage.src = produto.imageUrl;
  cardImage.alt = produto.name;

  const cardText = document.createElement('div');
  cardText.classList.add('text');

  const cardTitle = document.createElement('h3');
  cardTitle.textContent = produto.name;

  const cardDescription = document.createElement('p');
  cardDescription.textContent = produto.description;

  const cardPrice = document.createElement('p');
  cardPrice.classList.add('price');
  cardPrice.textContent = `Preço: R$ ${produto.price}`;

  const buyButton = document.createElement('button');
  buyButton.classList.add('button');
  buyButton.textContent = 'Comprar';

  buyButton.addEventListener('click', () => {
    alert(`O produto "${produto.name}" não foi adicionado ao carrinho porque é uma página de exemplo.`);
  });

  cardText.appendChild(cardTitle);
  cardText.appendChild(cardDescription);
  cardText.appendChild(cardPrice);
  cardText.appendChild(buyButton);

  card.appendChild(cardImage);
  card.appendChild(cardText);

  return card;
};

// Renderiza os cards quando o script é carregado
produtos.forEach((produto) => {
  const card = renderCard(produto);
  cardContainer.appendChild(card);
});
