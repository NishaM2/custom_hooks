// check auto reloading in inspect

import { useEffect, useState } from 'react'
import axios from 'axios'

function useTodos(n) {
  const [todos, setTodos] = useState([])
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const value = setInterval(() => {
      axios.get('https://dummyjson.com/todos')
        .then(res => {
          setTodos(res.data.todos);
          setLoading(false);
        })
    }, n * 1000)

    axios.get('https://dummyjson.com/todos')
      .then(res => {
        setTodos(res.data.todos);
        setLoading(false);
      })

    return () => {
      clearInterval(value);
    }
  }, [n])

  return {todos, loading};
}

function App() { 
  const {todos, loading} = useTodos(3);

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