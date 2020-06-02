import React from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../Assets/logo.png';

function Header(args) {

    console.log(args)

    return (
        <header id="header">
            <div className="container">
                <div className="flex-position">
                    <div className="header-logo">
                        <img src={logoImg} alt="Logo Netflix" />
                        <Link to="/login">Entrar</Link>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;