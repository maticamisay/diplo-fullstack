// Ejemplo de función asincrónica con async/await
function delay(ms) {
  // Simula una operación asincrónica, muestra un mensaje por consola
  return new Promise((resolve, reject) =>
    setTimeout(() => {
      console.log("Operación asincrónica completada.");
      reject();
    }, [ms])
  );
}

async function main() {
  console.log("Inicio de la ejecución.");

  await delay(5000);
  console.log("Mensaje post promise");

  console.log("Fin de la ejecución.");
}

main();
