import React, { useState, useEffect } from 'react';
import './Styles.css'

function DevForm({ onSubmit }) {
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    const [github_username, setGithub_username] = useState('');
    const [techs, seTtechs] = useState('');

    // Usando Geolocalização e preehcnedo as variáveis de Geo.
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                setLatitude(latitude);
                setLongitude(longitude);
            },
            (err) => {
                console.log(err);
            },
            {
                timeout: 30000,
            }
        );
    }, []);


    async function handleSubmit(e) {
        e.preventDefault();
        await onSubmit({
            github_username,
            techs,
            latitude,
            longitude,
        });

        setGithub_username('');
        seTtechs('');
    }

    return (
        <form onSubmit={handleSubmit}>
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
                    <input type="number" name="longitude" id="longitude" value={longitude} onChange={e => setLongitude(e.target.value)} required />
                </div>
            </div>

            <button type="submit"> Salvar </button>
        </form>
    );

}

export default DevForm;