import ProductServiceFactory from '../services/product.service';
import ProductsComponent from '../components/products.component';


function renderApp(document, list) {
  const { body } = document;
  body.innerHTML = ProductsComponent(list);
}

export default async function init(window, document) {
  const fetcher = window.fetch.bind(window);

  const ProductService = ProductServiceFactory(fetcher);
  const productList = await ProductService.getProducts();
  renderApp(document, productList);
}

init(window, document);
