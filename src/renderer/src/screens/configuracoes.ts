import Card from '../components/Card'
import { makeElement } from '../utils'

const MainContainer: HTMLElement | null = document.querySelector('#MainContainer')

const CreateConfigScreen = (): void => {
  const CardContainer = makeElement(
    'section',
    ['CardContainer'],
    [Card('Configurações', 'Desc produtos', 'red', 'fa-solid fa-boxes-packing')]
  )
  const dashboard = makeElement('section', ['dashboard'], [CardContainer])

  MainContainer?.appendChild(dashboard)
}

export default CreateConfigScreen
