const createHtmlElement = (type, className, textContent = '') => {
  const element = document.createElement(type);

  element.classList.add(className);

  if (textContent !== '') element.innerText = textContent;

  return element;
};

export default createHtmlElement;
