import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

import api from '../../services/api'
import './style.css';

import logoimg from '../../assets/logo.svg';

export default function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUF] = useState('');

    const history = useHistory();

    async function handleRegister(e){
        e.preventDefault();

        const data = {
            name,
            email,
            whatsapp,
            city,
            uf
        };

        try {
            const response = await api.post('ongs', data);
            alert(`seu ID de acesso: ${response.data.id}`);

            history.push('/')
        } catch (err) {
            alert('não foi possivel cadastrar usuario')
        }
    }

    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoimg} alt="be-the-hero"/>

                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontr os casos da sua ONG</p>

                    <Link className="backlink" to="/">
                            <FiArrowLeft size={16} color="#e02041"/>
                        Já possuo cadastro
                    </Link>
                </section>

                <form onSubmit = {handleRegister}>
                    <input 
                        type="text" 
                        placeholder="Nome da ONG"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        required
                    />

                    <input 
                        type="email" 
                        placeholder="e-mail"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                    />

                    <input 
                        type="tel" 
                        placeholder="Whatsapp"
                        value={whatsapp}
                        onChange={e => setWhatsapp(e.target.value)}
                        required
                    />

                    <div className="input-group">
                        <input 
                            type="text" 
                            placeholder="Cidade"
                            value={city}
                            onChange={e => setCity(e.target.value)}
                            required
                        />

                        <input 
                            type="text" 
                            placeholder="UF" 
                            style={ {width: 80 }}
                            value={uf}
                            onChange={e => setUF(e.target.value)}
                            required
                        />
                    </div>
                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}