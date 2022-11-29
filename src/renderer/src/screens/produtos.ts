import Card from '../components/Card'
import { makeElement } from '../utils'
import * as ProductController from '../../../database/controllers/ProductController'

const MainContainer: HTMLElement | null = document.querySelector('#MainContainer')

const CreateProductScreen = (): void => {
  ProductController.create({ name: 'Hambuguer', price: 15.0, inventory: 10 })
  console.log('produtos ->', ProductController.getAll())
  const CardContainer = makeElement(
    'section',
    ['CardContainer'],
    [Card('Produtos', 'Desc produtos', 'orange', 'fa-solid fa-boxes-packing')]
  )
  const dashboard = makeElement('section', ['dashboard'], [CardContainer])

  MainContainer?.appendChild(dashboard)
}

export default CreateProductScreen
