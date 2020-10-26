import React from 'react';

const Counter = ({max}) => {
  const getStateFromLocalStorage = (defaultValue, key) => {
    const storage = localStorage.getItem(key);
    if (storage) return JSON.parse(storage).value;
    return defaultValue;
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
  const countRef = React.useRef();
  let message = '';

  if (countRef.current < count) message = 'Higher';
  if (countRef.current > count) message = 'Lower';

  countRef.current = count;

  React.useEffect(() => {
    setTimeout(() => {
      console.log(`You clicked ${countRef.current} times`);
    }, 3000);
  }, [count]);

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
      <p>{message}</p>
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
