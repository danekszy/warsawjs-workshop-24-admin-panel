import ProductModel from '../models/product.model';

const dummy = {
  id: '1234',
  name: 'abc def',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
  image: 'http://example.com/image.jpg',
};

test('should set standard fields', () => {
  const product = new ProductModel(dummy);
  expect(product.id).toBe('1234');
  expect(product.name).toBe('abc def');
  expect(product.image).toBe('http://example.com/image.jpg');
});

test('should provide getDescription method', () => {
  const product = new ProductModel(dummy);
  expect(product.getDescription).toBeDefined();
});

test('should return short descriptions', () => {
  const product = new ProductModel(dummy);
  expect(product.getDescription()).toBe('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo...');
});
