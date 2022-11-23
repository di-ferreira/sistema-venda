export function init(): void {
  window.addEventListener('DOMContentLoaded', () => {
    LoadMainMenu()
  })
}

const containerMenu = document.querySelector('.containerMenu')

interface iMainMenu {
  label: string
  icon: string
  link: string
  active: boolean
}

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
  const li = document.createElement('li')
  const button = document.createElement('button')
  const icon = document.createElement('i')
  const textBtn = document.createTextNode(item.label)
  const listClassIcon = item.icon.split(' ')

  li.classList.add('itemMenu')
  button.classList.add('btnMenu')

  listClassIcon.forEach((c) => {
    icon.classList.add(c)
  })

  button.append(icon)

  if (item.active) {
    button.classList.add('active')
  }
  button.append(textBtn)

  button.addEventListener('click', (e) => {
    e.preventDefault
    const Btns = document.getElementsByClassName('btnMenu')
    removeActive(Btns, 'active')
    ClickItemMenu(button)
  })
  li.append(button)
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

init()
