import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <span className="text-3xl font-bold underline">Vite + React</span>
      <div>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </div>
  );
}

export default App;
