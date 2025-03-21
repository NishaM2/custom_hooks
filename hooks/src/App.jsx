import { useEffect, useState } from "react";

function useDebounce(value, timeout) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    let timer = setTimeout(() => {
      setDebouncedValue(value);
    }, timeout);

    return () => {
      clearTimeout(timer);
    }
  }, [value]);

  return debouncedValue;
}

function App() {
  const [value, setValue] = useState(0);
  const debouncedValue = useDebounce(value, 500);

  useEffect(() => {
    fetch("")
  }, [debouncedValue])

  return (
    <div>
      Debounced value is {debouncedValue}
      <input type="text" onChange={e => setValue(e.target.value)} />
    </div>
  )
}

export default App