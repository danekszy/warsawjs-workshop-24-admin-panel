import ProductServiceFactory from '../product.service';

const fetcher = window.fetch.bind(window);
const renderProduct = product => `<li>
  <h2>${product.name}</h2>
  <p>${product.description}</p>
  <img src="${product.image}" alt="${product.name}"/>
</li>`;

const renderTiles = products => `<ul>
  ${products.map(renderProduct)}
</ul>`;

const embedHTML = (html) => {
  document.body.innerHTML = html;
};

const ProductService = ProductServiceFactory(fetcher);
ProductService.getProducts()
  .then(renderTiles)
  .then(embedHTML);

  ProductService.getProducts()
    .then(renderTiles)
    .then(embedHTML);

    ProductService.getProducts()
      .then(renderTiles)
      .then(embedHTML);
