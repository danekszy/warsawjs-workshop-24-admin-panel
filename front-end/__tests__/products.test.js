import { JSDOM } from 'jsdom';
import dummy from './products.dummy';
import initProducts from '../scripts/main';

const {
  window: {
    document,
  },
} = new JSDOM();

window.fetch = jest.fn(() => Promise.resolve({
  json: () => dummy,
}));

describe('Products component', () => {
  beforeEach(() => {
    global.window = window;
    global.document = document;
  });

  afterEach(() => {
    global.window = undefined;
    global.document = undefined;
  });

  test('should render product list', async () => {
    await initProducts(window, document);
    const productsContainer = document.querySelectorAll('[data-role="product-list"]');
    expect(productsContainer.length).toBe(1);
  });

  test('should render product items', async () => {
    await initProducts(window, document);
    const productsContainer = document.querySelectorAll('[data-role="product-list"] li');
    expect(productsContainer.length).toBe(2);
  });

  test('should render product title', async () => {
    await initProducts(window, document);
    const title = document.querySelector('[data-role="product-list"] li h2');
    expect(title.innerHTML).toBe('abc');
  });

  test('should render product description', async () => {
    await initProducts(window, document);
    const title = document.querySelector('[data-role="product-list"] li p');
    expect(title.innerHTML).toBe('def');
  });

  test('should render product image', async () => {
    await initProducts(window, document);
    const image = document.querySelector('[data-role="product-list"] li img');
    expect(image.src).toContain('placeimg.com');
  });
});
