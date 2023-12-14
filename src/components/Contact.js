import { useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import contactImg from '../assets/images/contact-img.svg';
import emailjs from '@emailjs/browser';

export const Contact = () => {
    const formInitialDetails = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        comercialName: '',
        message: ''
    }

    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState('Enviar');
    const [status, setStatus] = useState({});
    const form = useRef();

    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value,
        });
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        const { firstName, lastName, email, phone, comercialName, message } = formDetails;
        const templateParams = {
            firstName,
            lastName,
            email,
            phone,
            comercialName,
            message
        };
        emailjs.send('service_rj2skf9', 'template_kx9jox6', templateParams, 'uQlAliK1FmxVMhrsL')
            .then((result) => {
                console.log(result.text);
                setStatus({ success: true, message: 'Correo enviado con éxito' });
                setFormDetails(formInitialDetails);
                form.current.reset();
            })
            .catch((error) => {
                console.error('Error al enviar el correo:', error);
                setStatus({ success: false, message: 'Error al enviar el correo' });
            });

    };



    return (
        <section className="contact" id="contact">
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                        <img src={contactImg} alt="Contacta conmigo"></img>
                    </Col>
                    <Col md={6}>
                        <h2>Contacta conmigo</h2>
                        <form ref={form} onSubmit={handleSubmit}>
                            <Row>
                                <Col sm={6} className="px-1">
                                    <input type="text" value={formDetails.firstName} placeholder="Nombre" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="text" value={formDetails.lastName} placeholder="Apellidos" onChange={(e) => onFormUpdate('lastName', e.target.value)} />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="text" value={formDetails.comercialName} placeholder="Nombre Comercial / Empresa" onChange={(e) => onFormUpdate('comercialName', e.target.value)} />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="email" value={formDetails.email} placeholder="Email" onChange={(e) => onFormUpdate('email', e.target.value)} />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="tel" value={formDetails.phone} placeholder="Teléfono" onChange={(e) => onFormUpdate('phone', e.target.value)} />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <textarea row="6" value={formDetails.message} placeholder="Escribe tu mensaje..." onChange={(e) => onFormUpdate('message', e.target.value)} />
                                    <button className="botonSend" type="submit"><span>{buttonText}</span></button>
                                </Col>
                                {status.message && (
                                    <Col>
                                        <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                                    </Col>
                                )}

                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
