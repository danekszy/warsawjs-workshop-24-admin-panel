const renderDescription = product => `<p>${product.getDescription()}</p>`;

const renderProduct = (product, index) => `<li style="clear: both;">
  <img src="http://placeimg.com/80/80/animals?${index}" alt="${product.name}" style="float: left;"/>
  <h2>${product.name}</h2>
  ${renderDescription(product)}
</li>`;


export default function Products(list) {
  return `<ul data-role="product-list">
    ${list.map(renderProduct).join('')}
  </ul>`;
}
