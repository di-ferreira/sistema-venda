export const makeElement = (
  el: keyof HTMLElementTagNameMap,
  classList: string[],
  appendList: (string | Node)[] = []
): HTMLElement => {
  const element = document.createElement(el)

  if (classList.length) {
    element.classList.add(...classList)
  }

  if (appendList.length) {
    element.append(...appendList)
  }
  return element
}
