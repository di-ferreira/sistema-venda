export function init(): void {
  window.addEventListener('DOMContentLoaded', () => {
    doAThing()
  })
}

function doAThing(): void {
  const versions = window.electron.process.versions
  replaceText('.electron-version', `Electron v${versions.electron}`)
  replaceText('.chrome-version', `Chromium v${versions.chrome}`)
  replaceText('.node-version', `Node v${versions.node}`)
  replaceText('.v8-version', `V8 v${versions.v8}`)
}

function replaceText(selector: string, text: string): void {
  const element = document.querySelector<HTMLElement>(selector)
  if (element) {
    element.innerText = text
  }
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

  li.classList.add('itemMenu')
  button.classList.add('btnMenu')

  if (item.active) {
    button.classList.add('active')
  }
  button.append(item.label)

  icon.classList.add(item.icon)

  li.append(icon)
  li.append(button)

  containerMenu?.appendChild(li)
}

init()
