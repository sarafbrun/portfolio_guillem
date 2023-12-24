import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from '../assets/images/nav-icon1.svg';
import navIcon2 from '../assets/images/nav-icon2.svg';
import navIcon3 from '../assets/images/nav-icon3.svg';

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">

                    <Col size={12} sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a target='_blank' href="https://www.linkedin.com/in/guillem-figuerola-santiago-60086a230/"><img src={navIcon1} /></a>
                            <a target='_blank' href="https://www.facebook.com/guillem.figuerolasantiago"><img src={navIcon2} /></a>
                            <a target='_blank' href="https://www.instagram.com/guillemfiguerola98/"><img src={navIcon3} /></a>
                        </div>
                        <p>Copyright 2023. All Rights Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}