import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import headerImg from "../assets/images/jugando.jpeg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { isVisible } from '@testing-library/user-event/dist/utils';

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    //const toRotate = ["profesional de pádel"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [index, setIndex] = useState(1);
    const period = 2000;

    // useEffect(() => {
    //     let ticker = setInterval(() => {
    //         tick();
    //     }, delta)

    //     return () => { clearInterval(ticker) };
    // }, [text])

    // const tick = () => {
    //     let i = loopNum % toRotate.length;
    //     let fullText = toRotate[i];
    //     let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    //     setText(updatedText);

    //     if (isDeleting) {
    //         setDelta(prevDelta => prevDelta / 2)
    //     }

    //     if (!isDeleting && updatedText === fullText) {
    //         setIsDeleting(true);
    //         setIndex(prevIndex => prevIndex - 1);
    //         setDelta(period);
    //     } else if (isDeleting && updatedText === '') {
    //         setIsDeleting(false);
    //         setLoopNum(loopNum + 1);
    //         setDelta(500);
    //     } else {
    //         setIndex(prevIndex => prevIndex + 1);
    //     }
    // }


    return (
        <section className='banner' id="home">
            <Container>
                <Row className='align-items-center'>
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animated__animated animate__fadeIn" : ""}>
                                    <span className='tagline'>Bienvenido a mi página web</span>
                                    <h1>{'Guillem Figuerola jugador profesional de pádel'} <span className='wrap'>{text}</span></h1>
                                    <p>Empieza una nueva temporada como jugador profesional. Es un camino duro y de continuo aprendizaje, pero estoy preparado para las derrotas y las victorias que vengan, ya que me harán crecer como persona y me harán mejor jugador. Dedicarse profesionalmente a lo que a uno le gusta es difícil, pero ¿por qué no intentarlo si ese es el camino a la felicidad?</p>
                                    <a className='contactame' href='#contact'>
                                        <button className='contactame'>Contacta conmigo si quieres participar en mi proyecto y ayudarme a conseguir mis objetivos <ArrowRightCircle size={25} /></button>
                                    </a>
                                </div>}
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img style={{ borderRadius: "10px" }} src={headerImg} alt='Headder Img' />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
