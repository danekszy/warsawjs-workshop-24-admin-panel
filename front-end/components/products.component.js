const DESCRIPTION_LIMIT = 70;

const renderDescription = (description) => {
  const len = description.length;
  const shortDesc = len > DESCRIPTION_LIMIT
    ? `${description.substr(0, DESCRIPTION_LIMIT).trim()}...`
    : description;
  return `<p>${shortDesc}</p>`;
};

const renderProduct = (product, index) => `<li style="clear: both;">
  <img src="http://placeimg.com/80/80/animals?${index}" alt="${product.name}" style="float: left;"/>
  <h2>${product.name}</h2>
  ${renderDescription(product.description)}
</li>`;


export default function Products(list) {
  return `<ul data-role="product-list">
    ${list.map(renderProduct).join('')}
  </ul>`;
}