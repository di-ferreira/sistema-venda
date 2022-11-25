import { makeElement } from '../utils'

const Card = (
  CardTitle: string,
  CardDescription: string,
  BgColor = 'gray',
  Icon = ''
): HTMLElement => {
  const title = makeElement('h2', ['cardTitle'], [CardTitle])
  const description = makeElement('p', ['cardDescription'], [CardDescription])
  let appendElements: (string | Node)[] = [title, description]

  if (Icon != '') {
    const icon = makeElement('i', Icon.split(' '))
    appendElements = [...appendElements, icon]
  }

  const elCard = makeElement('article', ['card'], appendElements)
  elCard.setAttribute('data-color', BgColor)
  return elCard
}

export default Card
