import React, { useState } from 'react';


function Button() {
    const [count, setCount] = useState(0);
  
    return (
      <div>
        <button onClick={() => setCount(count - 1)}>-</button>
        <button>i was clicked {count} times</button>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
    );
  }

export default Button;