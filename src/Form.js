import React, { useEffect, useState } from "react";
import { FormGroup } from "./FormGroup";

function Title({ title = "teste" }) {
  return <h1>{title}</h1>;
}

export function Form() {
  const [logradouro, setLogradouro] = React.useState(null);
  const [cidade, setCidade] = React.useState(null);
  const [uf, setUf] = React.useState(null);
  const [bairro, setBairro] = React.useState(null);
  const [erro, setErro] = React.useState(null);

  const handleChange = async (e) => {
    if (e.target.value.length === 8) {
      let dados = {};
      await fetch(`https://viacep.com.br/ws/${e.target.value}/json/`)
        .then((res) => res.json())
        .then((res) => {
          if (res.erro) {
            console.log("CEP inválido");
          } else {
            return res;
          }
        })
        .then((data) => {
          setLogradouro(data.logradouro);
          setCidade(data.localidade);
          setUf(data.uf);
          setBairro(data.bairro);
        });
    } else {
      setLogradouro("");
      setCidade("");
      setUf("");
      setBairro("");
    }
  };

  return (
    <div className="container">
      <Title title="Digite um CEP" />
      <form>
        <FormGroup
          label="inputCep"
          description="cep"
          placeholder="xxxxx-xxx"
          func={handleChange}
        />

        {/*  value={dados !== null ? dados.logradouro : ""} */}
        <FormGroup
          label="inputLogradouro"
          description="Logradouro"
          placeholder="logradouro"
          value={logradouro !== null ? logradouro : undefined}
          readOnly={true}
        />
        <FormGroup label="inputNumero" description="Número" placeholder="N°" />
        <FormGroup
          label="inputCidade"
          description="cidade"
          placeholder="Cidade"
          value={cidade !== null ? cidade : undefined}
          readOnly={true}
        />
        <FormGroup
          label="inputBairro"
          description="Bairro"
          placeholder="Bairro"
          value={bairro !== null ? bairro : undefined}
          readOnly={true}
        />
        <FormGroup
          label="inputUF"
          description="Estado"
          placeholder="Estado"
          value={uf !== null ? uf : undefined}
          readOnly={true}
        />
      </form>
    </div>
  );
}
