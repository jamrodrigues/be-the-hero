import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom'

import './styles.css';
import logo from '../../assets/logo.svg';
import { FiArrowLeft } from 'react-icons/fi';
import api from '../../services/api';

export default function NewIncident() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');
    const ongId = localStorage.getItem('ongId');

    const history = useHistory();

    const data = { title, description, value};

    function handleNewIncident(e){
        e.preventDefault();
        try {
            api.post('incidents', data, {
                headers : {
                    Authorization: ongId
                }
            });
            alert('Cado cadastrodo com sucesso!');
            history.push('/profile');
        }catch (err) {
            alert('Erro ao cadastrar caso, tente novamente.')
        }
    }
    return (
        <div className="new-incident-container">
            <div className="content">
                <section>
                <img src={logo} alt="Be The Hero" />
                <h1>Cadastrar novo caso</h1>
                <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>
                
                <Link className="back-link" to="/profile">
                        <FiArrowLeft size={32} color="#e02041" />
                        Voltar para home
                </Link>
                </section>
                <form onSubmit={handleNewIncident}>
                    <input 
                        type="text"
                        value={title}
                        onChange={ e => setTitle(e.target.value) } 
                        placeholder="Título do caso"/>
                    <textarea 
                        value={description}
                        onChange={ e => setDescription(e.target.value) } 
                        placeholder="Descrição" ></textarea>
                    <input 
                        type="text"
                        value={value}
                        onChange={ e => setValue(e.target.value) } 
                        placeholder="Valor em reais"/>
                    <button 
                        type="submit" className="button">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}