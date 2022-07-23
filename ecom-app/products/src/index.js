let products = '';

for (let i = 0; i < 10; i++) {
	products += `<div>\u25C9 ${i + 1} product </div>\n`;
}

document.querySelector('#dev-products').innerHTML = products;

console.log(products);

// export default products;
