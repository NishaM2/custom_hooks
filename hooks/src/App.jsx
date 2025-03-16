import { useEffect, useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const useInterval = (callback, delay) => {
    useEffect(() => {
      const intervalId = setInterval(callback, delay);
  
      return () => clearInterval(intervalId);
    }, [callback, delay]);
  };
  
  useInterval(() => {
    setCount(c => c + 1);
  }, 1000)

  return (
    <>
      Timer is at {count}
    </>
  )
}

export default App