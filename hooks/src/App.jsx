import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    axios.get('https://dummyjson.com/todos')
      .then(res => {
        setTodos(res.data.todos);
      })
  }, [])

  return (
    <>
      {todos.map(todos => <Track todos={todos} />)}
    </>
  )
}

function Track({ todos }) {
  return <div>
    {todos.id}
    <br />
    {todos.todo}
  </div>
}

export default App