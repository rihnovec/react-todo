import MyButton from './components/MyButton'

window.appData = {
  user: 'Anton'
}

let content
if (window.appData.user) {
  content = <div>Добро пожаловать, {window.appData.user}!</div>
} else {
  content = <div>Выполните вход</div>
}

const component = () => (
  <div className="app">
    <MyButton />
    {content}
  </div>
)

export default component