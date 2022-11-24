import Card from '../components/Card'
import CreateChart from '../components/Chart'
import { makeElement } from '../utils'

const MainContainer: HTMLElement | null = document.querySelector('#MainContainer')

const CreateHomeScreen = (): void => {
  const chart = makeElement('article', ['chart'])
  const dashboard = makeElement(
    'section',
    ['dashboard'],
    [
      chart,
      Card('Produtos', 'Desc produtos'),
      Card('Vendas', 'Desc Vendas'),
      Card('Relatórios', 'Desc Relatórios'),
      Card('Bot', 'Desc bot')
    ]
  )

  MainContainer?.appendChild(dashboard)
  CreateChart('.chart')
}

export default CreateHomeScreen
