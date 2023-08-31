import Button from "./components/Button";
import Card from "./components/Card";
import Saludo from "./components/Saludo";

function App() {
  return (
    <section
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "2rem",
        flexDirection: "column",
      }}
    >
      <Card orientation={"horizontal"}>
        <Saludo text="Bienvenidos a la clase 3 de React">
          <p>Esto es un parrafo</p>
          <Button size="big" color="#4f46e5">
            Soy un boton
          </Button>
        </Saludo>
      </Card>
    </section>
  );
}

export default App;
