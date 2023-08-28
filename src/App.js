import { useState } from 'react'

import MyButton from './components/MyButton'
import TasksList from './components/TasksList'

window.appData = {
  user: 'Anton'
}

const defaultContent = window.appData.user ? `Добро пожаловать, ${window.appData.user}!` : 'Выполните вход'

const App = () => {
  const [content, setContent] = useState(defaultContent)

  function onClickHandler() {
    const newContent = prompt('Введите новый контент', '')

    setContent(newContent)
  }

  return (
    <div className="app">
      <MyButton onClick={onClickHandler} />
      <div className="app-content">{content}</div>
      <TasksList />
    </div>
  )
}

export default App