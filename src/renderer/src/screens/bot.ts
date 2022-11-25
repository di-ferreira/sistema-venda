import Card from '../components/Card'
import { makeElement } from '../utils'

const MainContainer: HTMLElement | null = document.querySelector('#MainContainer')

const CreateProductScreen = (): void => {
  const CardContainer = makeElement(
    'section',
    ['CardContainer'],
    [Card('Bot', 'Desc Bot', 'green', 'fa-solid fa-boxes-packing')]
  )
  const dashboard = makeElement('section', ['dashboard'], [CardContainer])

  MainContainer?.appendChild(dashboard)
}

export default CreateProductScreen
