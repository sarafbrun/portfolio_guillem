import Carousel from 'react-multi-carousel';
import { Container, Col, Row } from 'react-bootstrap';
import 'react-multi-carousel/lib/styles.css';
import meter1 from "../assets/images/pegando.jpeg";
import meter2 from "../assets/images/black.jpg";
import meter3 from "../assets/images/fcp.jpg";
import meter4 from "../assets/images/chocandoMano.jpg";
import meter5 from "../assets/images/saludando.jpg";
import colorSharp from "../assets/images/color-sharp.png";


export const PerfilProfesional = () => {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section className="perfil" id="perfil">
            <Container>
                <Row>
                    <Col>
                        <div className="perfil-bx">
                            <h2>Perfil profesional</h2>
                            <p><a href="https://www.flaticon.es/iconos-gratis/localizacion" title="localización iconos"></a>Valls Tarragona<br></br> Lorem Ipsum has been the industry's standard dummy text.</p>
                            <Carousel responsive={responsive} infinite={true} className="perfil-slider">
                                <div className="item">
                                    <img src={meter4} alt="Image" />
                                </div>
                                <div className="item">
                                    <img src={meter2} alt="Image" />
                                </div>
                                <div className="item">
                                    <img src={meter3} alt="Image" />
                                </div>
                                <div className="item">
                                    <img src={meter5} alt="Image" />
                                </div>
                                <div className="item">
                                    <img src={meter1} alt="Image" />
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp} alt="Image" />
        </section>
    )
}