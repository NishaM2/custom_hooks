import React, { useEffect, useState } from 'react';
import './App.css'

function App() {
  const [render, setRender] = useState(true);

  useEffect(() => {
    setInterval(() => {
      setRender(r => !r);
    }, 5000)
  }, []);

  return (
    <>
      {render ? <MyComponent/> : <div></div>}
    </>
  )
}


class MyComponent extends React.Component {
  componentDidMount() {
    console.log('component mounted');
  }

  componentWillUnmount() {
    console.log('component unmounted');
  }

  render() {
    return <div>hi there</div>
  }
}

export default App
