import LoadMainMenu from './components/MainMenu'
import CreateHomeScreen from './screens/home'

export function init(): void {
  window.addEventListener('DOMContentLoaded', () => {
    LoadMainMenu()
    CreateHomeScreen()
  })
}

init()
