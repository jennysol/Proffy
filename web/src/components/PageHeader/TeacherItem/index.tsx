import React from 'react';

import whatsappIcon from '../../../assets/images/icons/whatsapp.svg';

import './styles.css';
function TeacherItem() {
    return (
            <article className="teacher-item">
            <header>
                <img src="https://avatars0.githubusercontent.com/u/62623621?s=460&u=822bcb321540fc383462a036105119640c2d903e&v=4" alt="Jennifer Soliver"/>
                <div>
                    <strong>Jennifer Soliver</strong>
                    <span>React</span>
                </div>
            </header>

            <p>
            Formou-se em letras e pedagogia, com especialização em língua portuguesa <br /><br />
            pela Universidade Estadual de Campinas
            </p>
            
            <footer>
                <p>
                    Preço.hora
                    <strong>R$ 80,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    );
}

export default TeacherItem;