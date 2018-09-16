const DESCRIPTION_LIMIT = 70;

export default class Product {
  constructor({
    id,
    name,
    description,
    image,
  }) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.image = image;
  }

  getDescription() {
    return this.description.length > DESCRIPTION_LIMIT
      ? `${this.description.substr(0, DESCRIPTION_LIMIT).trim()}...`
      : this.description;
  }
}
