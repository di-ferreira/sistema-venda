import { makeElement } from '../utils'

const Card = (CardTitle: string, CardDescription: string): HTMLElement => {
  const title = makeElement('h2', ['cardTitle'], [CardTitle])
  const description = makeElement('p', ['cardDescription'], [CardDescription])

  const elCard = makeElement('article', ['card'], [title, description])
  return elCard
}

export default Card
