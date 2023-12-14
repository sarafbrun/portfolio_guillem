import { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

import navIcon1 from '../assets/images/nav-icon1.svg';
import navIcon2 from '../assets/images/nav-icon2.svg';
import navIcon3 from '../assets/images/nav-icon3.svg';


export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('inicio');
    //desplazamiento del usuario en la web
    const [scrolled, seScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                seScrolled(true);
            } else {
                seScrolled(false);
            }
        }
        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
        <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#inicio" className={activeLink === 'banner' ? 'active navbar-link' : 'navbar-link'} onClick={() =>
                            window.scrollTo({
                                top: 0,
                                behavior: 'smooth'
                            })}>Inicio</Nav.Link>
                        <Nav.Link href="#perfil" className={activeLink === 'perfil' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('perfilProfesional')}>Perfil profesional</Nav.Link>
                        <Nav.Link href="#resultados" className={activeLink === 'resultados' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('resultados')}>Mejores Resultados</Nav.Link>
                        <Nav.Link href="#patrocinio" className={activeLink === 'patrocinio' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('patrocinio')}>Patrocinio</Nav.Link>

                    </Nav>
                    <span className="navbar-text">
                        <div className="social-icon">
                            <a target='_blank' href="https://www.linkedin.com/in/guillem-figuerola-santiago-60086a230/"><img src={navIcon1} /></a>
                            <a target='_blank' href="https://www.facebook.com/guillem.figuerolasantiago"><img src={navIcon2} /></a>
                            <a target='_blank' href="https://www.instagram.com/guillemfiguerola98/"><img src={navIcon3} /></a>
                        </div>
                        <Nav.Link href="#contact">
                            <button className="vvdon" >
                                <span >Contáctame</span>
                            </button>
                        </Nav.Link>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}



/*  */