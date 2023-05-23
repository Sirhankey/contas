const Grupo_ = {
    1: { id: 1, nome: 'Conta'},
    2: { id: 2, nome: 'Cartão'},
    3: { id: 3, nome: 'Escola'},
    4: { id: 4, nome: 'Carro'},
    5: { id: 5, nome: 'Apartamento'},
  };

  const Grupo = ['Conta','Cartão','Escola','Carro','Apartamento'];
  
  function getGrupos() {
    return Object.values(Grupo);
  }

  function getGrupoPorId(id) {
    const grupos = Object.values(Grupo_);
    return grupos.find(grupo => grupo.id === id);
  }

  function getIdPorNome(nome) {
    const grupos = Object.values(Grupo_);
    const grupoEncontrado = grupos.find(grupo => grupo.nome === nome);
    return grupoEncontrado ? grupoEncontrado.id : null;
  }

  module.exports = { getGrupos, getGrupoPorId, getIdPorNome }
  