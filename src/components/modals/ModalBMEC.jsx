import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import BMEC from "../../assets/projects/Fullscreen-BMEC.png"
import BMECmob from '../../assets/projects/Mobile-BMEC.png'

export default function ModalBMEC() {
    const [show, setShow] = useState(false);
  
    return (
<>
<button className='button-modal' onClick={() => setShow(true)}>
  <h2>Entertainment Center</h2>
  <img src={BMECmob} className="img-mobile-size" alt='Bathurst Memorial Entertainment Centre screenshot mobile website'></img>
</button>

<Modal 
  show={show}
  onHide={() => setShow(false)}
  size="lg"
  aria-labelledby="example-custom-modal-styling-title"
>
  <Modal.Header closeButton>
    <Modal.Title id="example-custom-modal-styling-title">
      Bathurst Memorial Entertainment Centre
    </Modal.Title>
  </Modal.Header>
  <Modal.Body>
  <p className='modal-para'>
      Role:  Full Stack Software Developer. Updated Linux (Ubuntu), PHP and frontend software.<br/>
      Tech:  LAMP stack (Linux, Apache, MySQL, PHP). Joomla! CMS frontend.<br/>
      Tools: AWS (Elastic Beanstalk, EC2, S3, RDS), DNSMadeEasy, WebCentral
    </p>
    <img src={BMEC} className="modal-large" alt='Bathurst Memorial Entertainment Centre screenshot website'></img>
  </Modal.Body>
</Modal>
</>
);
}