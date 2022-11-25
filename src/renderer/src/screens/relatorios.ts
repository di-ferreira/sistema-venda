import Card from '../components/Card'
import { makeElement } from '../utils'

const MainContainer: HTMLElement | null = document.querySelector('#MainContainer')

const CreateRelScreen = (): void => {
  const CardContainer = makeElement(
    'section',
    ['CardContainer'],
    [Card('Relatórios', 'Desc produtos', 'gray', 'fa-solid fa-boxes-packing')]
  )
  const dashboard = makeElement('section', ['dashboard'], [CardContainer])

  MainContainer?.appendChild(dashboard)
}

export default CreateRelScreen
