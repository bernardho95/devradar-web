import React from 'react';

import './global.css';
import './app.css';
import './sidebar.css'


//Componente bloco isolado de HTML,CSS e JS (template)
//Estado Informações mantidas pelo componente(Bug de atualização em real time das variáveis Lembrar imutabilidade)
//Propriedade informações que o componente pai passa  para o filho

function App() {
  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div class="input-block">
            <label htmlFor="">Usuário do Github </label>
            <input name="github_username" id="github_username" required />
          </div>

          <div class="input-block">
            <label htmlFor=""> Tecnologias </label>
            <input name="techs" id="techs" required />
          </div>

          <div className="input-group">
            <div class="input-block">
              <label htmlFor=""> Latitude </label>
              <input name="latitude" id="latitude" required />
            </div>


            <div class="input-block">
              <label htmlFor=""> Longitude </label>
              <input name="longitude" id="longitude" required />
            </div>
          </div>

          <button type="submit"> Salvar </button>
        </form>
      </aside>
      <main>
      </main>
    </div>
  );
}

export default App;
