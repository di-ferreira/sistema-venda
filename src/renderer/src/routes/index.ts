import CreateBotScreen from '../screens/bot'
import CreateHomeScreen from '../screens/home'
import CreateProductScreen from '../screens/produtos'
import CreateRelScreen from '../screens/relatorios'
import CreateVendasScreen from '../screens/vendas'
import CreateConfigScreen from '../screens/configuracoes'

const Container = document.querySelector('#MainContainer')
const containerMenu = document.querySelector('.containerMenu')

const screens = ['HOME', 'PRODUTOS', 'VENDAS', 'RELATORIOS', 'BOT', 'CONFIGURACOES'] as const

type ScreenTypes = typeof screens

type ScreenType = ScreenTypes[number]

const SwitchRoute = (screen: ScreenType): void => {
  Container?.removeChild(Container.children[0])
  const Btns = document.getElementsByClassName('itemMenu')

  for (let i = 0; i < Btns.length; i++) {
    Btns[i].addEventListener('click', function () {
      const currentBtn = containerMenu?.getElementsByClassName('active')
      currentBtn ? currentBtn[0].classList.remove('active') : ''
      Btns[i].classList.add('active')
    })
  }
  switch (screen) {
    case screens[0]:
      CreateHomeScreen()
      // Container?.appendChild()
      break
    case screens[1]:
      CreateProductScreen()
      break
    case screens[2]:
      CreateVendasScreen()
      break
    case screens[3]:
      CreateRelScreen()
      break
    case screens[4]:
      CreateBotScreen()
      break
    case screens[5]:
      CreateConfigScreen()
      break
    default:
      break
  }
}

export default SwitchRoute
