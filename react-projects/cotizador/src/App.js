import Header from "./components/Header";
import styled from "@emotion/styled";
import Form from "./components/Form";
import { useState } from "react";
import Summary from "./components/Summary";
import Result from "./components/Result";
import Spinner from "./components/Spinner";

const Container = styled.div`
  max-width: 600px;
  margin-block: 0;
  margin-inline: auto;
`;

const ContainerForm = styled.div`
  background-color: #fff;
  padding: 3rem;
`;

function App() {
  const [summary, setSummary] = useState({
    cotizacion: 0,
    datas: {
      marca: "",
      year: "",
      plan: "",
    },
  });

  const [loader, setLoader] = useState(false);

  const { datas, cotizacion } = summary;

  return (
    <Container className="App">
      <Header titulo="Cotizador de Seguros" />

      <ContainerForm>
        <Form setSummary={setSummary} setLoader={setLoader} />

        {loader ? <Spinner /> : <Summary datas={datas} />}
        {!loader ? <Result cotizacion={cotizacion} /> : null}
      </ContainerForm>
    </Container>
  );
}

export default App;
