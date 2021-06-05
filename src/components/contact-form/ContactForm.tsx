import React from 'react';
import {Modal,Button} from 'react-bootstrap';

type ContactFormProps = {
    show : boolean;
    onButtonClose : Function;
};

const ContactForm = (props:ContactFormProps) => {
    const [name, setName] = React.useState<string>();
    const [correo, setCorreo] = React.useState<string>();
    const [motivo, setMotivo] = React.useState<string>();
    const [mensaje, setMensaje] = React.useState<string>();
    const handleSubmit = () => {
        alert(`Nombre:${name}; Correo:${correo}; Motivo:${motivo}; Mensaje:${mensaje}`);
    };

    return(
    <form 
        id="contact-form" className="text-center"
        style={{width: '100%', maxWidth: '300px'}} 
        onSubmit={handleSubmit}
    >
      <Modal show={props.show} onHide={props.onButtonClose}>
        <Modal.Header closeButton>
          <Modal.Title>Formulario de Contacto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {/* Name input */}
            <div className="form-outline mb-4">
                <input type="text" id="name" name="name" className="form-control" required onChange={(e)=>setName(e.target.value)}/>
                <label className="form-label" htmlFor="name" style={{marginLeft: '0px'}}>Nombre</label>
                <div className="form-notch">
                    <div className="form-notch-leading" style={{width: '9px'}} />
                    <div className="form-notch-middle" style={{width: '42.4px'}} />
                    <div className="form-notch-trailing" />
                </div>
            </div>
            {/* Email input */}
            <div className="form-outline mb-4">
                <input type="email" id="email" name="email" className="form-control" required onChange={(e)=>setCorreo(e.target.value)}/>
                <label className="form-label" htmlFor="email" style={{marginLeft: '0px'}}>Correo</label>
                <div className="form-notch">
                    <div className="form-notch-leading" style={{width: '9px'}} />
                    <div className="form-notch-middle" style={{width: '88.8px'}} />
                    <div className="form-notch-trailing" />
                </div>
            </div>
            {/* Subject input */}
            <div className="form-outline mb-4">
                <input type="text" id="subject" name="subject" className="form-control" required onChange={(e)=>setMotivo(e.target.value)}/>
                <label className="form-label" htmlFor="subject" style={{marginLeft: '0px'}}>Motivo</label>
                <div className="form-notch">
                    <div className="form-notch-leading" style={{width: '9px'}} />
                    <div className="form-notch-middle" style={{width: '50.4px'}} />
                    <div className="form-notch-trailing" />
                </div>
            </div>
            {/* Message input */}
            <div className="form-outline mb-4">
                <textarea className="form-control" id="message" name="message" rows={4} spellCheck="false" defaultValue={""} required onChange={(e)=>setMensaje(e.target.value)}/>
                <label className="form-label" htmlFor="message" style={{marginLeft: '0px'}}>Mensaje</label>
                <div className="form-notch">
                    <div className="form-notch-leading" style={{width: '9px'}} />
                    <div className="form-notch-middle" style={{width: '60px'}} />
                    <div className="form-notch-trailing" />
                </div>
            </div>
            {/* Submit button */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => props.onButtonClose()}>
            Close
          </Button>
          <Button type="submit" variant="primary" onClick={()=>handleSubmit()}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
  </form>
    );
}

export default ContactForm;