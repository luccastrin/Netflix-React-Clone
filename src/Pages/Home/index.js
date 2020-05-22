import React from 'react';
import './style.scss';

import logoImg from '../../Assets/logo.png';
import arrowRight from '../../Assets/arrow-right.svg';
import tvImage from '../../Assets/tv.png';
import mobile from '../../Assets/stranger-things.jpg';
import strangerCover from '../../Assets/strangers-page.png';
import animatedGif from '../../Assets/download-icon.gif';
import imacImage from '../../Assets/device-pile.png';
import plusLogo from '../../Assets/plus.svg';

function index() {
    return (
        <>
            <header id="header">
                <div className="container">

                    <div className="dark-overlay"></div>

                    <div className="flex-position">
                        <div className="header-logo">
                            <img src={logoImg} alt="Logo Netflix"/> 
                            <a href="login.html">Entrar</a>
                        </div>

                        <div className="header-content">
                            <h1>Filmes, séries e muito mais. Sem limites.</h1>
                            <h2>Assista onde quiser. Cancele quando quiser.</h2>
                        </div>

                        <div className="sign-up">
                            <div className="inputs">
                                <input type="text" placeholder="Email"/>
                                <input type="submit" value="Assine a netflix"/>
                                <img className="arrow" src={arrowRight} alt="Arrow"/> 
                            </div>

                            <p>Pronto para assistir? Informe seu email para criar ou reiniciar sua assinatura.</p>
                        </div>
                    </div>

                </div>
            </header>

            <section id="enjoy-tv">
                <div className="container">

                    <div className="tv-content">
                        <div className="tv-texts">
                            <h1>Aproveite na TV.</h1>
                            <h2>Assista em Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, aparelhos de Blu-ray e outros aparelhos.</h2>
                        </div>

                        <div className="tv-image">
                            <img src={tvImage} alt="TV"/>
                        </div>
                    </div>

                </div>
            </section>

            <section id="offline-series">
                <div className="container">

                    <div className="tv-content">
                        <div className="tv-image">
                            <img src={mobile} alt="Mobile"/>
                            <div className="card-animation">
                                <img className="cover" src={strangerCover} alt="Cover"/>
                                <div className="card-content">
                                    <p>Stranger Things</p>
                                    <span>Download em andamento...</span>
                                </div>
                                <img className="gif" src={animatedGif} alt="Gif"/>
                            </div>
                        </div>

                        <div className="tv-texts">
                            <h1>Baixe séries para assistir offline.</h1>
                            <h2>Salve seus títulos favoritos e sempre tenha algo para assistir.</h2>
                        </div>
                    </div>

                </div>
            </section>

            <section id="watch">
                <div className="container">

                    <div className="tv-content">
                        <div className="tv-texts">
                            <h1>Assista quando quiser.</h1>
                            <h2>Assista no celular, tablet, smart TV ou notebook sem pagar a mais por isso.</h2>
                        </div>

                        <div className="tv-image">
                            <img src={imacImage} alt="iMac"/>
                        </div>
                    </div>

                </div>
            </section>

            <section id="questions">
                <div className="container">
                    <div className="questions-content">
                        <h1>Perguntas frequentes</h1>

                        <ul>
                            <li>
                                <h2>O que é a Netflix?</h2>
                                <img src={plusLogo} alt="Plus"/>
                            </li>
                            <li>
                                <h2>Quanto custa a Netflix?</h2>
                                <img src={plusLogo} alt="Plus"/>
                            </li>
                            <li>
                                <h2>Onde posso assistir?</h2>
                                <img src={plusLogo} alt="Plus"/>
                            </li>
                            <li>
                                <h2>Como faço para cancelar?</h2>
                                <img src={plusLogo} alt="Plus"/>
                            </li>
                            <li>
                                <h2>O que eu posso assistir na Netflix?</h2>
                                <img src={plusLogo} alt="Plus"/>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <p>Lorem ipsum dolor sit amet.</p>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Lorem ipsum dolor sit amet.</p>

        </>
    )
}

export default index;
