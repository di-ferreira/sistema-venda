import { iMainMenu } from '../../../@types/index'
import { makeElement } from '../utils/index'
const containerMenu = document.querySelector('.containerMenu')

const mainMenu: iMainMenu[] = [
  { label: 'home', link: "location.href='#'", active: true, icon: 'fa-solid fa-house-chimney' },
  {
    label: 'produtos',
    link: "location.href='#'",
    active: false,
    icon: 'fa-solid fa-boxes-packing'
  },
  {
    label: 'vendas',
    link: "location.href='#'",
    active: false,
    icon: 'fa-solid fa-hand-holding-dollar'
  },
  {
    label: 'relatórios',
    link: "location.href='#'",
    active: false,
    icon: 'fa-solid fa-file-lines'
  },
  {
    label: 'message bot',
    link: "location.href='#'",
    active: false,
    icon: 'fa-solid fa-robot'
  },
  {
    label: 'configurações',
    link: "location.href='#'",
    active: false,
    icon: 'fa-sharp fa-solid fa-gears'
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
  const button = makeElement('button', ['btnMenu'], [icon, textBtn])
  const li = makeElement('li', ['itemMenu'], [button])

  if (item.active) {
    button.classList.add('active')
  }

  textBtn.addEventListener('click', (e) => {
    e.preventDefault
    const Btns = document.getElementsByClassName('btnMenu')
    removeActive(Btns, 'active')
    ClickItemMenu(button)
  })

  icon.addEventListener('click', (e) => {
    e.preventDefault
    const Btns = document.getElementsByClassName('btnMenu')
    removeActive(Btns, 'active')
    ClickItemMenu(button)
  })

  button.addEventListener('click', (e) => {
    e.preventDefault
    const Btns = document.getElementsByClassName('btnMenu')
    removeActive(Btns, 'active')
    ClickItemMenu(button)
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
