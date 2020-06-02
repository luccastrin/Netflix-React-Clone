import React from "react";
import { Link } from "react-router-dom";
import { FaGlobe } from "react-icons/fa";

import Header from '../../components/Header';

import "./style.scss";

import logoFacebook from "../../Assets/facebook.svg";

function index() {
    return (
        <>
            <Header />

            <section id="form-login">
                <div className="container">

                    <div className="dark-overlay"></div>

                    <div className="flex-direction">
                        <div className="login-container">
                            <h2>Entrar</h2>

                            <input type="text" placeholder="Email ou número de telefone" />
                            <input type="text" placeholder="Senha" />
                            <input type="submit" value="Entrar" />
                            <a href="/profile">Entrar</a>

                            <div className="need-help">
                                <div className="checkbox">
                                    <input type="checkbox" name="Lembre-se de mim" />
                                    <p>Lembre-se de mim</p>
                                </div>

                                <a href="/need">Precisa de ajuda?</a>
                            </div>

                            <div className="social-network">
                                <img
                                    className="facebook"
                                    src={logoFacebook}
                                    alt="Logo Facebook"
                                />
                                <p>Conectar com Facebook</p>
                            </div>

                            <h3>
                                Novo por aqui? <Link to="/teste">Assine agora</Link>
                            </h3>
                            <p>
                                Esta página é protegida pelo Google reCAPTCHA para garantir que
                voce não é um robô. <a href="/">Saiba mais.</a>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="footer-login">
                <div className="footer-content">
                    <h3>
                        Dúvidas? Ligue <span>0800-761-4631</span>
                    </h3>

                    <div className="lists-netflix">
                        <ul>
                            <li>
                                <a href="/">Perguntas frequentes</a>
                            </li>
                        </ul>

                        <ul>
                            <li>
                                <a href="/">Centro de ajuda</a>
                            </li>
                        </ul>

                        <ul>
                            <li>
                                <a href="/">Conta</a>
                            </li>
                        </ul>
                    </div>

                    <div className="select-option">
                        <FaGlobe className="globe" color="#757575" />
                        <select>
                            <option>Português</option>
                            <option>Inglês</option>
                        </select>
                    </div>
                </div>
            </section>
        </>
    );
}

export default index;
