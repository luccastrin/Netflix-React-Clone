import React from 'react';
import arrowRight from '../Assets/arrow-right.svg';

function Input() {
    return (
        <>
            <div className="sign-up">
                <div className="inputs">
                    <input type="text" placeholder="Email"/>
                    <input type="submit" value="Assine a netflix"/>
                    <img className="arrow" src={arrowRight} alt="Arrow"/> 
                </div>

                <p>Pronto para assistir? Informe seu email para criar ou reiniciar sua assinatura.</p>
            </div>
        </>
    )
}

export default Input;
