import ProductServiceFactory from '../services/product.service';

const dummy = [
  {
    id: 1,
    name: 'abc',
    image: 'http://example.com',
    description: 'def',
  },
  {
    id: 1,
    name: 'abc',
    image: 'http://example.com',
    description: 'def',
  },
];

const fetchStub = jest.fn(() => Promise.resolve({
  json: () => dummy,
}));

const ProductService = ProductServiceFactory(fetchStub);

describe('getData', () => {
  test('should exist', () => {
    expect(ProductService.getProducts()).toBeDefined();
  });

  test('should return Promise', () => {
    expect(ProductService.getProducts()).toBeInstanceOf(Promise);
  });

  test('should return Promise which resolves to array of products', async () => {
    const result = await ProductService.getProducts();
    expect(result).toBeInstanceOf(Array);
  });
});
