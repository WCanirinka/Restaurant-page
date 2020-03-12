import createHtmlElement from './create';

const renderHeader = () => {
  const contentContainer = document.querySelector('#container');
  const navBar = createHtmlElement('nav', ['nav']);
  const logo = createHtmlElement('p', ['logo'], 'Wilos Restaurant');
  const menuLi = createHtmlElement('ul', ['menu']);
  const menuItems = ['Home', 'About Us', 'Contacts', 'Chef Menu'];

  menuItems.forEach(menu => {
    const navItems = createHtmlElement('li', ['nav-items', menu]);
    menuLi.appendChild(navItems);
  });

  navBar.appendChild(logo);
  navBar.appendChild(menuLi);
  contentContainer.appendChild(navBar);
  return (contentContainer);
};

export default renderHeader;
