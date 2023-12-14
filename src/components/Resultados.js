import elche from '../assets/images/elche.jpg';
import perpignan from '../assets/images/perpignan.jpg';
import { Container, Row, Col } from 'react-bootstrap';



export const Resultados = () => {

    const Resultados = [
    ]
    return (
        <section className='resultados' id="resultados">
            <Container>
                <Row className='align-items-center'>
                    <Col xs={12} md={6} xl={6}>
                        <h2>Mejores resultados<span className='resultados'></span></h2>
                        <ul>
                            <li>Campeón Slam Platja d'Aro - 2022</li>
                            <li>Finalista Gran Slam Natació Lleida - 2022</li>
                            <li>Finalista FIP Star El Cairo, Egipto - 2022</li>
                            <li>Campeón España por equipos 1a Categoria con el RCTB 1899 - 2023</li>
                            <li>Campeón P2000 Perpignan - 2023</li>
                            <li>Premio al mejor deportista del año 2023 Valls</li>
                            <li>Finalista FIP Promotion Elche - 2023</li>
                        </ul>

                    </Col>
                    <Col xs={12} md={6} xl={6} className='imagenesResultados'>
                        <img src={perpignan} alt='Perpignan Img' />
                        <img src={elche} alt='Elche Img' />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
