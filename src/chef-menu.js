import createHtmlElement from './create';

const menuChef = [
  ['Matoke', 'BIF2000', 'Native banana'],
  ['Ugali', 'BIF1500', 'Maize/Cassava'],
  ['Maharagwe', 'BIF2500', 'soft/hard'],
  ['Chapati', 'BIF3000', 'Brown or White'],
];

const renderMenu = () => {
  const contentContainer = document.querySelector('#container');
  const contentHome = createHtmlElement('div', ['content-home']);
  menuChef.forEach(item => {
    const menuDiv = createHtmlElement('div', ['menu-sec']);
    const foodName = createHtmlElement('p', ['food-name'], item[0]);
    const price = createHtmlElement('p', ['price'], item[1]);
    const description = createHtmlElement('p', ['description'], item[2]);

    menuDiv.appendChild(foodName);
    menuDiv.appendChild(price);
    menuDiv.appendChild(description);
    contentHome.appendChild(menuDiv);
    contentContainer.appendChild(contentHome);
  });
};

export default renderMenu;