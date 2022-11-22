import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState('#5F9EA0');

  const handleIncrement = () => setCount(count + 1);
  const handleTheme = () => setTheme('#87CEEB');

  return (
    <section className="buttonSection">
      <div>
        <button
          style={{ backgroundColor: theme }}
          onClick={() => {
            handleIncrement();
            handleTheme();
          }}
        >
          {' '}
          +{count} {count >= 2 ? 'Likes' : 'Like'}
        </button>
      </div>
    </section>
  );
};

export default Counter;
