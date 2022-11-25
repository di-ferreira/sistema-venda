const Container = document.querySelector('#MainContainer')

const screens = ['HOME', 'PRODUTOS', 'VENDAS', 'RELATORIOS', 'BOT', 'CONFIGURACOES'] as const

type ScreenTypes = typeof screens

type ScreenType = ScreenTypes[number]

const SwitchRoute = (screen: ScreenType): void => {
  console.log(screen)
  console.log(screen + '->', Container?.children)
  Container?.removeChild(Container.children[0])
  // Container?.appendChild()
}

export default SwitchRoute
