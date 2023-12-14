import React from 'react';
import { Container } from 'react-bootstrap';
import imagen1 from '../assets/images/logoPeque.png';
import imagen2 from '../assets/images/logoMediano.png';
import imagen3 from '../assets/images/logoGrande.png';
import { ArrowRightCircle } from 'react-bootstrap-icons';

export const Patrocinio = () => {
    return (
        <div>
            <section className='patrocinio' id='patrocinio'>

                <Container>
                    <div className='patrocinio-bx'>
                        <h2>Patrocinio</h2>
                        <p className='beneficios'>Beneficios del patrocinador: Clínics, exhibiciones o eventos de empresa, publicidad en todos los torneos tanto a nivel nacional como internacional, publicidad en redes sociales en actos como torneos, entrenamientos o clínics.</p>
                        <div className='camisetas'>
                            <article className='camiseta'>
                                <img src={imagen1} alt='imagen camiseta' />
                                <p>Logo de 8x8 cm en la parte inferior frontal o posterior o en las mangas.</p>
                            </article>

                            <article className='camiseta' alt='imagen camiseta'>
                                <img src={imagen2} />
                                <p>Logo de 15x10 cm en la parte frontal o posterior.</p>
                            </article>

                            <article className='camiseta' alt='imagen camiseta'>
                                <img src={imagen3} />
                                <p>Logo de 25x15 cm en la parte inferior frontal o posterior.</p>
                            </article>
                        </div>

                        <button className='contactar' onClick={() => console.log('connect')}>Si quieres más información no dudes en contactar conmigo <ArrowRightCircle size={25} /></button>
                    </div>

                </Container>
            </section>
        </div>
    )
}
