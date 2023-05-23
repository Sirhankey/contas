import React, { useState } from 'react';
import {getGrupos} from '../utils/grupo.js'

function ComboGrupo() {
  const [opcaoSelecionada, setOpcaoSelecionada] = useState('');

  const opcoes = getGrupos();

  const handleSelecionarOpcao = (event) => {
    setOpcaoSelecionada(event.target.value);
  };

  return (
    <div>
      <label htmlFor="combo">Selecione uma opção:</label>
      <select id="combo" value={opcaoSelecionada} onChange={handleSelecionarOpcao}>
        <option value="">Selecione...</option>
        {opcoes.map((opcao, index) => (
          <option key={index} value={opcao}>{opcao}</option>
        ))}
      </select>
      <p>Opção selecionada: {opcaoSelecionada}</p>
    </div>
  );
}

export default ComboGrupo;
