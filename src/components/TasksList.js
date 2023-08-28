export default function TasksList() {
  const tasksList = [
    { name: 'Подключить автопрефиксер' },
    { name: 'Настроить минификатор' },
    { name: 'Подключить репозиторий' }
  ].map(({name}, id) => ({
    name,
    id: id + 1
  }))

  const listContent = tasksList.map(({ id, name }) => (
    <li className="tasks-list-item" key={id}>{name}</li>
  ))

  return (
    <ul className="tasks-list">
      {listContent}
    </ul>
  )
}