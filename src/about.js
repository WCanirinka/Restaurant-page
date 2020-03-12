import createHtmlElement from './create';

const renderAbout = () => {
  const contentContainer = document.querySelector('#container');
  const contentHome = createHtmlElement('div', ['content_home']);
  const pic = createHtmlElement('div', ['pic']);
  const about = createHtmlElement('p', [], 'misunderstood chef with great talents and a touch that you will never be able to test');

  contentHome.appendChild(pic);
  contentHome.appendChild(about);
  contentContainer.appendChild(contentHome);
};

export default renderAbout;