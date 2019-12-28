import React from 'react';
import './style.css';

function Rodape() {
    return(
        <div id="rodape">
            <div id="right">
                <div id="telefones">
                    <p id="telefone_description">
                        CONTATOS
                    </p>
                    <p className="contatos_d">
                        17 99767-9786
                    </p>
                    <p className="contatos_d">
                        contatospetacular@gmail.com
                    </p>
                </div>
            </div>
            <div id="logo_div">
                <img
                    id="image_logo"
                    title="Logo rodapé"
                    alt="logo"
                    src="/logo.png"
                />            
            </div>
        </div>
    );
}

export default Rodape;