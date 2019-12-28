// React
import React from 'react';

// Modules

// Components
import Menu from '../../components/Menu';
import Rodape from '../../components/Rodape';

// Path only

// Path local
import './style.css';


function Main() {
    return(
        <>
            <Menu />
            <h1 id="not-infos">
                Notícias
            </h1>
            <div id="noticias">
                <div className="not-example">
                    <h1 className="title">
                        VENDAS COM SMOKEZIN.
                    </h1>
                    <p className="description">
                        Todos os itens da loja estão em stock!!
                    </p>
                    <img src="/smoke.png" className="perfil" alt="smoke" />
                    <p className="date">
                        25/12/2019 - 15:30:50
                    </p>
                </div>
            </div>
            <Rodape />
        </>
    );
}

export default Main;