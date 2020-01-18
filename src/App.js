import React, {useState ,useEffect} from 'react';
import api from './services/api';

import './global.css';
import './app.css';
import './sidebar.css';
import './main.css';

//Componente bloco isolado de HTML,CSS e JS (template)
//Estado Informações mantidas pelo componente(Bug de atualização em real time das variáveis Lembrar imutabilidade)
//Propriedade informações que o componente pai passa  para o filho
//Endereco backend https://api-devradar.herokuapp.com/


function App() {

  
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [github_username, setGithub_username] = useState('');
  const [techs, seTtechs] = useState('');



  // Usando Geolocalização e preehcnedo as variáveis de Geo.
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const {latitude, longitude} = position.coords;
        setLatitude(latitude);
        setLongitude(longitude);
      },
      (err)=> {
        console.log(err);
      },
      {
        timeout: 30000,
      }
    );
  },[]);


  async function handleAddDev(e) {
    e.preventDefault();
    const response = await api.post('/devs', {
      github_username,
      techs,
      latitude,
      longitude,
    });
    console.log(response.data);
  }

  

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form onSubmit ={handleAddDev}>
          <div className="input-block">
            <label htmlFor="">Usuário do Github </label>
            <input name="github_username" id="github_username" value={github_username} onChange={e => setGithub_username(e.target.value)} required />
          </div>

          <div className="input-block">
            <label htmlFor=""> Tecnologias </label>
            <input name="techs" id="techs" value={techs} onChange={e => seTtechs(e.target.value)} required />
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor=""> Latitude </label>
              <input type="number" name="latitude" id="latitude" value={latitude} onChange={e => setLatitude(e.target.value)} required />
            </div>


            <div className="input-block">
              <label htmlFor=""> Longitude </label>
              <input type="number" name="longitude" id="longitude" value={longitude} value={longitude} onChange={e => setLatitude(e.target.value)} required />
            </div>
          </div>

          <button type="submit"> Salvar </button>
        </form>
      </aside>
      <main>
        <ul>
          <li className="dev-item">
            <header>
            <img src="https://avatars0.githubusercontent.com/u/59941918?s=460&v=4" alt="Profile Image of Dev" />
              <div className="user-info">
                <strong>Bernardo Cordeiro </strong>
                <span>C,C++,React</span>
              </div>
            </header>
            <p>Minha bio muito maneira</p>
            <a href="https://github.com/bernardho95">Acessar perfil no Github </a>
          </li>


          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/59941918?s=460&v=4" alt="Profile Image of Dev" />
              <div className="user-info">
                <strong>Bernardo Cordeiro </strong>
                <span>C,C++,React</span>
              </div>
            </header>
            <p>Minha bio muito maneira</p>
            <a href="https://github.com/bernardho95">Acessar perfil no Github </a>
          </li>


          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/59941918?s=460&v=4" alt="Profile Image of Dev" />
              <div className="user-info">
                <strong>Bernardo Cordeiro </strong>
                <span>C,C++,React</span>
              </div>
            </header>
            <p>Minha bio muito maneira</p>
            <a href="https://github.com/bernardho95">Acessar perfil no Github </a>
          </li>


          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/59941918?s=460&v=4" alt="Profile Image of Dev" />
              <div className="user-info">
                <strong>Bernardo Cordeiro </strong>
                <span>C,C++,React</span>
              </div>
            </header>
            <p>Minha bio muito maneira</p>
            <a href="https://github.com/bernardho95">Acessar perfil no Github </a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;