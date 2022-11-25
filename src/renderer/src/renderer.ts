import LoadMainMenu from './components/MainMenu'
import SwitchRoute from './routes'
import CreateHomeScreen from './screens/home'

export function init(): void {
  window.addEventListener('DOMContentLoaded', () => {
    LoadMainMenu()
    CreateHomeScreen()
    SwitchRoute('HOME')
  })
}

init()
