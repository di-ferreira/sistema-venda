import Card from '../components/Card'
import CreateChart from '../components/Chart'
import { makeElement } from '../utils'

const MainContainer: HTMLElement | null = document.querySelector('#MainContainer')

const CreateHomeScreen = (): void => {
  const chart = makeElement('article', ['chart'])
  const CardContainer = makeElement(
    'section',
    ['CardContainer'],
    [
      Card('Produtos', 'Desc produtos', 'orange', 'fa-solid fa-boxes-packing'),
      Card('Vendas', 'Desc Vendas', 'blue', 'fa-solid fa-hand-holding-dollar'),
      Card('Relatórios', 'Desc Relatórios', 'purple', 'fa-solid fa-file-lines'),
      Card('Bot', 'Desc bot', 'green', 'fa-solid fa-robot')
    ]
  )
  const dashboard = makeElement('section', ['dashboard'], [chart, CardContainer])

  MainContainer?.appendChild(dashboard)
  CreateChart('.chart')
}

export default CreateHomeScreen
