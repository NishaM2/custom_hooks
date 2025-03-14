import { useEffect, useState } from 'react'
import axios from 'axios'

function useTodos() {
  const [todos, setTodos] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios.get('https://dummyjson.com/todos')
      .then(res => {
        setTodos(res.data.todos);
        setLoading(false);
      })
  }, [])

  return {todos, loading};
}

function App() { 
  const {todos, loading} = useTodos();

  if(loading) {
    return <div>Loading...</div>
  }
  
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