import { useEffect, useState } from "react";
import { Button } from "./components/Button";
import { Container } from "./components/Container";
import { CounterDisplay } from "./components/CounterDisplay";
import { Notification } from "./components/Notification";

function App() {
  const [count, setCount] = useState(0);
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    if (count % 10 === 0 && count !== 0) {
      setShowNotification(true);
      setTimeout(() => {
        setShowNotification(false);
      }, 3000);
    }
  }, [count]);
  return (
    <>
      <Container>
        <CounterDisplay>Contador: {count}</CounterDisplay>
        {/* contador */}
        {/* botón para incrementarlo */}
        <Button onClick={() => setCount(count + 1)}>Incrementar</Button>
        {showNotification && (
          <Notification>¡Has alcanzado un múltiplo de 10!</Notification>
        )}
      </Container>
    </>
  );
}

export default App;
