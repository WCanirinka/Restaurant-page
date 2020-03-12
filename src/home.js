import createHtmlElement from './create';

const renderHome = () => {
  const contentContainer = document.querySelector('#container ');
  const contentHome = createHtmlElement('div', 'content-home');
  const title = createHtmlElement(
    'h1',
    'head-content',
    'Come and witness the greatest meals ever',
  );
  const paragraph = createHtmlElement(
    'p',
    'item-par',
    'It has been a pleasure serving you the greatest taste of all time. You might underestimate us because you are yet to try us. This is my invite to you to cone and test the wonders of our cuisine and we promise you will never remain the same',
  );
  const buttonClick = createHtmlElement('btn', 'btn', 'Go to menu');

  contentHome.appendChild(title);
  contentHome.appendChild(paragraph);
  contentHome.appendChild(buttonClick);
  contentContainer.appendChild(contentHome);
};

export default renderHome;
