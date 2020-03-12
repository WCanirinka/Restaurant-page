
import renderHeader from './header';
import renderHome from './home';
import renderAbout from './about';
import renderMenu from './chef-menu';

const contentContainer = document.querySelector('#container');

const clearContent = () => {
  contentContainer.innerHTML = '';
};

const home = () => {
  clearContent();
  renderHeader();
  renderHome();
};

const menu = () => {
  clearContent();
  renderHeader();
  renderMenu();
};

const about = () => {
  clearContent();
  renderHeader();
  renderAbout();
};

home();

document.addEventListener('click', e => {
  if (e.target.innerText === 'Home') home();

  if (e.target.innerText === 'Menu' || e.target.innerText === 'Go to Menu') menu();

  if ((e.target.innerText === 'About Us')) about();
});

export default clearContent;