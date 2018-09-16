const serverUrl = 'http://localhost:3000';
const serviceEndpointSuffix = '/products';
const serviceEndpoint = `${serverUrl}${serviceEndpointSuffix}`;

/* eslint-disable */
class ProductService {
  constructor({ fetch }) {
    this.fetch = fetch;
  }

  getData() {
    const promise = this.fetch(serviceEndpoint);
    return promise;
  }
}

export default function(fetch) {
  return new ProductService({ fetch });
};
