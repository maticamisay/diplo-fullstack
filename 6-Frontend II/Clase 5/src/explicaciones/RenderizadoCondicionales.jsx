import { useState } from "react";

function App() {
  const framework = "Vue";
  const [count, setcount] = useState(0);
  const [name, setName] = useState(null);

  return (
    <>
      {framework === "React" ? (
        <h1>Hello React</h1>
      ) : (
        <h1>Hello {framework}</h1>
      )}
      {count === 0 ? <h1>Zero</h1> : <h1>{count}</h1>}
      <button onClick={() => setcount(count + 1)}>Increment</button>
      {name && <h1>Hello {name}</h1>}
    </>
  );
}

export default App;
