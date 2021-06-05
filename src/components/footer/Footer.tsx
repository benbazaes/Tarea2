import React from 'react';
import ContactForm from '../contact-form/ContactForm';
const Footer = () => {
    const[open, setOpen] = React.useState<boolean>(false);
    
    const handleClose = () => {
        setOpen(false)
    };
    return(
        <footer className="my-5 pt-5 text-muted text-center text-small">
        <p className="mb-1">© 2017–2021 Company Name</p>
        <ul className="list-inline">
        <li className="list-inline-item"><a href="#">Privacy</a></li>
        <li className="list-inline-item"><a href="#">Terms</a></li>
        <li className="list-inline-item"><a onClick={()=> setOpen(true)}>Formulario Contacto</a></li>
        </ul>
        <ContactForm
            show={open}
            onButtonClose={handleClose}
        />
        </footer>
       
    );
}
export default Footer;
