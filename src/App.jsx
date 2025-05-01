import "./App.css";
import { Paragraph } from "./components/paragraph/paragraph";
import { Button } from "./components/button/button";

function App() {
  return (
    <>
      <Paragraph text="Este é o parágrafo cujo texto vai mudar de cor e vai alternar entre maiúsculas e minúsculas, quando receber um 'clique'. Experimente, CLIQUE AQUI!"/>

      <br/>
      <br/>
      <br/>
      

      <Button label='Aprender React!'/>
      
    </>
  );
}

export default App;
