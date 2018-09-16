import fetch from 'node-fetch';
import ProductServiceFactory from '../product.service';

const ProductService = ProductServiceFactory(fetch);

describe('getData', () => {
  test('should exist', () => {
    expect(ProductService.getData()).toBeDefined();
  });

  test('should return Promise', () => {
    expect(ProductService.getData()).toBeInstanceOf(Promise);
  });
});
