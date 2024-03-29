
import { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

import navIcon1 from '../assets/images/nav-icon1.svg';
import navIcon2 from '../assets/images/nav-icon2.svg';
import navIcon3 from '../assets/images/nav-icon3.svg';


export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
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
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
            <Container>
                <Navbar.Brand href="#home">
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                        <Nav.Link href="#perfil" className={activeLink === 'perfil' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('perfil')}>Perfil profesional</Nav.Link>
                        <Nav.Link href="#temporada" className={activeLink === 'temporada' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('temporada')}>Temporada 2023</Nav.Link>
                        <Nav.Link href="#patrocinio" className={activeLink === 'patrocinio' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('patrocinio')}>Patrocinio</Nav.Link>

                    </Nav>
                    <span className="navbar-text">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/guillem-figuerola-santiago-60086a230/"><img src={navIcon1} /></a>
                            <a href="https://www.facebook.com/guillem.figuerolasantiago"><img src={navIcon2} /></a>
                            <a href="https://www.instagram.com/guillemfiguerola98/"><img src={navIcon3} /></a>
                        </div>
                        <button className="vvdon" onClick={() => console.log('connect')}><span>Contáctame</span></button>
                    </span>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}