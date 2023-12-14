import Carousel from 'react-multi-carousel';
import { Col, Row } from 'react-bootstrap';
import { FaLocationDot } from 'react-icons/fa6';
import 'react-multi-carousel/lib/styles.css';
import foto2 from "../assets/images/black.jpg";
import foto3 from "../assets/images/fcp.jpg";
import foto4 from "../assets/images/chocandoMano.jpg";
import foto5 from "../assets/images/rojo.jpg";



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
        <div className='background-image-left'>
            <section className="perfil" id="perfil">

                <Row>
                    <Col>
                        <div className="perfil-bx">
                            <h2>Perfil profesional</h2>

                            <p><FaLocationDot color='white' /> Valls, Tarragona. <br></br>Actualmente 250 del ránking Fip y 11 del ránquing autonómico de Cataluña. </p>
                            <Carousel responsive={responsive} infinite={true} className="perfil-slider">
                                <div className="item">
                                    <img src={foto4} alt="Image4" />
                                </div>
                                <div className="item">
                                    <img src={foto2} alt="Image2" />
                                </div>
                                <div className="item">
                                    <img src={foto3} alt="Image3" />
                                </div>
                                <div className="item">
                                    <img src={foto5} alt="Image5" />
                                </div>

                            </Carousel>
                        </div>
                    </Col>
                </Row>




            </section >
        </div>
    )
}