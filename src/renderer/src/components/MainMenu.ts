import { iMainMenu } from '../../../@types/index'
import { makeElement } from '../utils/index'
const containerMenu = document.querySelector('.containerMenu')

const mainMenu: iMainMenu[] = [
  {
    label: 'home',
    link: (): void => {},
    active: true,
    icon: 'fa-solid fa-house-chimney',
    defaultColor: 'red'
  },
  {
    label: 'produtos',
    link: (): void => {},
    active: false,
    icon: 'fa-solid fa-boxes-packing',
    defaultColor: 'orange'
  },
  {
    label: 'vendas',
    link: (): void => {},
    active: false,
    icon: 'fa-solid fa-hand-holding-dollar',
    defaultColor: 'green'
  },
  {
    label: 'relatórios',
    link: (): void => {},
    active: false,
    icon: 'fa-solid fa-file-lines',
    defaultColor: 'purple'
  },
  {
    label: 'message bot',
    link: (): void => {},
    active: false,
    icon: 'fa-solid fa-robot',
    defaultColor: 'green'
  },
  {
    label: 'configurações',
    link: (): void => {},
    active: false,
    icon: 'fa-sharp fa-solid fa-gears',
    defaultColor: 'red'
  }
]

const LoadMainMenu = (): void => {
  mainMenu.forEach((item) => {
    CreateItemMenu(item)
  })
}

const CreateItemMenu = (item: iMainMenu): void => {
  const icon = makeElement('i', item.icon.split(' '))
  const textBtn = document.createTextNode(item.label)
  const li = makeElement('li', ['itemMenu'], [icon, textBtn])

  li.setAttribute('data-color', item.defaultColor)
  icon.setAttribute('data-color', item.defaultColor)

  if (item.active) {
    li.classList.add('active')
  }

  li.addEventListener('click', (e) => {
    e.preventDefault
    const Btns = document.getElementsByClassName('itemMenu')
    removeActive(Btns, 'active')
    ClickItemMenu(li)
  })

  containerMenu?.appendChild(li)
}

const removeActive = (ElContainer: HTMLCollection, ClassRemove: string): void => {
  for (const El of ElContainer) {
    El.classList.remove(ClassRemove)
  }
}

const ClickItemMenu = (ItemEl: HTMLElement): void => {
  ItemEl.onclick = (): void => {
    ItemEl.classList.add('active')
  }
}

export default LoadMainMenu
