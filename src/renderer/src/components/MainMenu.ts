import { iMainMenu } from '../../../@types/index'
import SwitchRoute from '../routes'
import { makeElement } from '../utils/index'
const containerMenu = document.querySelector('.containerMenu')

const mainMenu: iMainMenu[] = [
  {
    label: 'home',
    link: (): void => SwitchRoute('HOME'),
    active: true,
    icon: 'fa-solid fa-house-chimney',
    defaultColor: 'red'
  },
  {
    label: 'produtos',
    link: (): void => SwitchRoute('PRODUTOS'),
    active: false,
    icon: 'fa-solid fa-boxes-packing',
    defaultColor: 'orange'
  },
  {
    label: 'vendas',
    link: (): void => SwitchRoute('VENDAS'),
    active: false,
    icon: 'fa-solid fa-hand-holding-dollar',
    defaultColor: 'green'
  },
  {
    label: 'relatórios',
    link: (): void => SwitchRoute('RELATORIOS'),
    active: false,
    icon: 'fa-solid fa-file-lines',
    defaultColor: 'purple'
  },
  {
    label: 'message bot',
    link: (): void => SwitchRoute('BOT'),
    active: false,
    icon: 'fa-solid fa-robot',
    defaultColor: 'green'
  },
  {
    label: 'configurações',
    link: (): void => SwitchRoute('CONFIGURACOES'),
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
    item.link()
  })

  containerMenu?.appendChild(li)
}

export default LoadMainMenu
