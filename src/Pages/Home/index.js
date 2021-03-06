import React from 'react';
import { MdAdd } from 'react-icons/md';
import { FaGlobe } from 'react-icons/fa';

import Header from '../../components/Header';
import Input from '../../components/Input';

import './style.scss';

import tvImage from '../../Assets/tv.png';
import mobile from '../../Assets/stranger-things.jpg';
import strangerCover from '../../Assets/strangers-page.png';
import animatedGif from '../../Assets/download-icon.gif';
import imacImage from '../../Assets/device-pile.png';

import video1 from '../../Assets/video.m4v';
import video2 from '../../Assets/stranger.m4v';

function index() {

    return (
        <>
            <Header />

            <section id="bg-movies">
                <div className="container">
                    <div className="dark-overlay"></div>

                    <div className="flex-position">
                        <div className="header-content">
                            <h1>Filmes, séries e muito mais. Sem limites.</h1>
                            <h2>Assista onde quiser. Cancele quando quiser.</h2>
                        </div>

                        <Input />
                    </div>

                </div>
            </section>

            <section id="enjoy-tv">
                <div className="container">

                    <div className="tv-content">
                        <div className="tv-texts">
                            <h1>Aproveite na TV.</h1>
                            <h2>Assista em Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, aparelhos de Blu-ray e outros aparelhos.</h2>
                        </div>

                        <div className="tv-image">
                            <img src={tvImage} alt="TV" />
                            <video class="video-loop" autoplay="true" loop muted>
                                <source src={video1} />
                            </video>
                        </div>
                    </div>

                </div>
            </section>

            <section id="offline-series">
                <div className="container">

                    <div className="tv-content">
                        <div className="tv-image">
                            <img src={mobile} alt="Mobile" />
                            <div className="card-animation">
                                <img className="cover" src={strangerCover} alt="Cover" />
                                <div className="card-content">
                                    <p>Stranger Things</p>
                                    <span>Download em andamento...</span>
                                </div>
                                <img className="gif" src={animatedGif} alt="Gif" />
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
                            <img src={imacImage} alt="iMac" />
                            <video class="video-loop-2" autoplay="true" loop muted>
                                <source src={video2} />
                            </video>
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
                                <MdAdd size="38" />
                            </li>
                            <li>
                                <h2>Quanto custa a Netflix?</h2>
                                <MdAdd size="38" />
                            </li>
                            <li>
                                <h2>Onde posso assistir?</h2>
                                <MdAdd size="38" />
                            </li>
                            <li>
                                <h2>Como faço para cancelar?</h2>
                                <MdAdd size="38" />
                            </li>
                            <li>
                                <h2>O que eu posso assistir na Netflix?</h2>
                                <MdAdd size="38" />
                            </li>
                        </ul>

                        <Input />
                    </div>
                </div>
            </section>

            <section id="footer">
                <div className="container">

                    <div className="footer-content">

                        <h3>Dúvidas? Ligue <span>0800-761-4631</span></h3>

                        <div className="lists-netflix">
                            <ul>
                                <li>
                                    <a href="/">Perguntas frequentes</a>
                                </li>
                                <li>
                                    <a href="/">Relações com investidores</a>
                                </li>
                                <li>
                                    <a href="/">Formas de assistir</a>
                                </li>
                                <li>
                                    <a href="/">Informações corporativas</a>
                                </li>
                                <li>
                                    <a href="/">Originais Netflix</a>
                                </li>
                            </ul>

                            <ul>
                                <li>
                                    <a href="/">Centro de ajuda</a>
                                </li>
                                <li>
                                    <a href="/">Carreiras</a>
                                </li>
                                <li>
                                    <a href="/">Termos de uso</a>
                                </li>
                                <li>
                                    <a href="/">Entre em contato</a>
                                </li>
                            </ul>

                            <ul>
                                <li>
                                    <a href="/">Conta</a>
                                </li>
                                <li>
                                    <a href="/">Resgatar cartão pré-pago</a>
                                </li>
                                <li>
                                    <a href="/">Privacidade</a>
                                </li>
                                <li>
                                    <a href="/">Teste de velocidade</a>
                                </li>
                            </ul>

                            <ul>
                                <li>
                                    <a href="/">Imprensa</a>
                                </li>
                                <li>
                                    <a href="/">Comprar cartão pré-pago</a>
                                </li>
                                <li>
                                    <a href="/">Preferência de cookies</a>
                                </li>
                                <li>
                                    <a href="/">Avisos legais</a>
                                </li>
                            </ul>
                        </div>

                        <div className="select-option">
                            <FaGlobe className="globe" color="#757575" />
                            <select>
                                <option>Português</option>
                                <option>Inglês</option>
                            </select>

                            <p>Netflix Brasil</p>
                        </div>
                    </div>


                </div>
            </section>
        </>
    )
}

export default index;