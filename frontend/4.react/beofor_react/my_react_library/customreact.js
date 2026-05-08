export function customCreateElement(type, props, ...children) {
  return {
    type,
    props: props || {},
    children: children.length === 1 ? children[0] : children,
  };
}

export default function customRender(reactElement, container) {
  const domElement = document.createElement(reactElement.type);

  if (typeof reactElement.children === 'string') {
    domElement.innerHTML = reactElement.children;
  } else if (Array.isArray(reactElement.children)) {
    reactElement.children.forEach(child => {
      if (typeof child === 'string') {
        domElement.appendChild(document.createTextNode(child));
      } else {
        customRender(child, domElement);
      }
    });
  }

  for (const prop in reactElement.props) {
    if (prop === 'children') continue;
    domElement.setAttribute(prop, reactElement.props[prop]);
  }

  container.appendChild(domElement);
}
