import React, { useState } from "react";

export default function Cadastro() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [idade, setIdade] = useState('');
  const [dados, setDados] = useState(null);

  function handleRegistro() {
    setDados({
      nome: name,
      email: email,
      idade: idade
    });
  }

  return (
    <>
      <label>Nome</label>
      <br />
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <br />
      <label>Email</label>
      <br />
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <br />
      <label>Idade</label>
      <br />
      <input type="number" value={idade} onChange={(e) => setIdade(e.target.value)} />
      <br />
      <button onClick={handleRegistro}>Registrar</button>
      {dados && (
        <div>
          <p>Bem vindo, {dados.nome}</p>
          <p>Email: {dados.email}</p>
          <p>Idade: {dados.idade}</p>
        </div>
      )}
    </>
  );
}
