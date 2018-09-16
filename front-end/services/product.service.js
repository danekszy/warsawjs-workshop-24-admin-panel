const serverUrl = 'http://localhost:3000';
const serviceEndpointSuffix = '/products';
const serviceEndpoint = `${serverUrl}${serviceEndpointSuffix}`;

const CACHE_EXPIRY_TIME = 5 * 60 * 1000;

const getJSONFromResponse = body => body.json();

class ProductService {
  constructor() {
    this.cache = {
      fetchTime: 0,
      promise: null,
    };
  }

  setFetcher(fetch) {
    this.fetch = fetch;
  }

  updateCache(promise) {
    this.cache = {
      fetchTime: Date.now(),
      promise,
    };
  }

  hasValidCache() {
    return this.cache.fetchTime > Date.now() - CACHE_EXPIRY_TIME;
  }

  getProductsFromCache() {
    return this.cache.promise;
  }

  fetchProducts() {
    return this.fetch(serviceEndpoint).then(getJSONFromResponse);
  }

  getProducts() {
    if (this.hasValidCache()) {
      return this.getProductsFromCache();
    }
    const promise = this.fetchProducts();
    this.updateCache(promise);
    return promise;
  }
}

const instance = new ProductService();

export default function (fetch) {
  instance.setFetcher(fetch);
  return instance;
}
