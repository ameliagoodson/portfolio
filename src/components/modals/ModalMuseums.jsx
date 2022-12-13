import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Museums from "../../assets/projects/Fullscreen-Museums.png"
import Museumsmob from '../../assets/projects/Mobile-Museums.png'

export default function ModalLandcom() {
    const [show, setShow] = useState(false);
  
    return (
<>
<button className='button-modal' onClick={() => setShow(true)}>
  <h2>Regional Council Museums</h2>
  <img src={Museumsmob} className="img-mobile-size" alt='Bathurst Regional Council Museums screenshot mobile website'></img>
</button>

<Modal 
  show={show}
  onHide={() => setShow(false)}
  size="lg"
  aria-labelledby="example-custom-modal-styling-title"
>
  <Modal.Header closeButton>
    <Modal.Title id="example-custom-modal-styling-title">
      Bathurst Council Museums site and microsites
    </Modal.Title>
  </Modal.Header>
  <Modal.Body>
  <p className='modal-para'>
      Role:  Full Stack Software Developer. Updated Linux (Ubuntu), PHP and frontend software.<br/>
      Tech:  LAMP stack (Linux, Apache, MySQL, PHP). WordPress CMS frontend.<br/>
      Tools: AWS (Elastic Beanstalk, EC2, S3, RDS), DNSMadeEasy, WebCentral
    </p>
    <img src={Museums} className="modal-large" alt="Bathurst Regional Council Museums screenshot website"></img>
  </Modal.Body>
</Modal>
</>
);
}