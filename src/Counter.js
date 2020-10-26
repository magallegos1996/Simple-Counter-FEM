import React from 'react';

const Counter = ({max}) => {
  const getStateFromLocalStorage = () => {
    const storage = localStorage.getItem('counterState');
    if (storage) return JSON.parse(storage);
    return { count: 0 };
  };
  const useLocalStorage = (defaultValue, key) => {
    const initialValue = getStateFromLocalStorage(defaultValue, key);
    const [value, setValue] = React.useState(initialValue);
    React.useEffect(() => {
      localStorage.setItem(key, JSON.stringify({ value }));
    }, [value]);

    return [value, setValue];
  };
  const [count, setCount] = useLocalStorage(0, 'count');

  const increment = () => {
    setCount(c => {
      if (c >= max) return c;
      return c + 1;
    });
  }
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <main className="Counter">
      <p className="count">{count}</p>
      <section className="controls">
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </section>
    </main>
  );

}

export default Counter;
