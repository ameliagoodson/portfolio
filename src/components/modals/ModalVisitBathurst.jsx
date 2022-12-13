import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Visit from "../../assets/projects/Fullscreen-Visit.png"
import Visitmob from "../../assets/projects/Mobile-Visit-Bathurst.png"

export default function ModalVisit() {
    const [show, setShow] = useState(false);
  
    return (
<>
<button className="button-modal" onClick={() => setShow(true)}>
  <h2>Local Council Tourism</h2>
  <img src={Visitmob} className="img-mobile-size" alt='Bathurst Regional Council Tourism screenshot mobile website'></img>
</button>

<Modal 
  show={show}
  onHide={() => setShow(false)}
  size="lg"
  aria-labelledby="example-custom-modal-styling-title"
>
  <Modal.Header closeButton>
    <Modal.Title id="example-custom-modal-styling-title">
      Bathurst Regional Tourism
    </Modal.Title>
  </Modal.Header>
  <Modal.Body>
  <p className='modal-para'>
      Role:  Web Developer. Update custom themes and site maintenance. <br/>
      Tech:  WordPress CMS. HTML, CSS, JavaScript, PHP.<br/>
      Tools: Google Analytics, Google Tag Manager, Hosting, DNS and server management 
    </p>
    <img src={Visit} className="modal-large" alt="Bathurst Regional Council Tourism screenshot mobile website"></img>
  </Modal.Body>
</Modal>
</>
);
}