import React from 'react';
import './style.css';

function Menu() {
    return(
        <>
            <div id="menu-pc">
                <img src="/logo.png" alt="logo" title="Logo" className="logo_menu_pc" />
                <ul>
                    <a>
                        <li>
                            Home
                        </li>
                    </a>
                    <a>
                        <li>
                            Contato
                        </li>
                    </a>
                    <a>
                        <li>
                            Minecraft
                        </li>
                    </a>
                    <a>
                        <li>
                            Outros
                        </li>
                    </a>
                </ul>
            </div>
            <div id="menu-cell">
                <img src="/logo2.jpg" alt="logo"/>
                <ul>
                    <li>
                        Home
                    </li>
                    <li>
                        Contato
                    </li>
                    <li>
                        Minecraft
                    </li>
                    <li>
                        Outros
                    </li>
                </ul>
            </div>
        </>
    );
}

export default Menu;