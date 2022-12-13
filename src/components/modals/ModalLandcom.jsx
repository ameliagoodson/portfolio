import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Landcom from '../../assets/projects/Fullscreen-Landcom.png'
import Landcommob from '../../assets/projects/Mobile-Landcom.png'

export default function ModalLandcom() {
    const [show, setShow] = useState(false);
  
    return (
<>
<button className="button-modal" onClick={() => setShow(true)}>
  <h2>Government Housing</h2>
  <img src={Landcommob} className="img-mobile-size" alt='Landcom government property organisation screenshot mobile website'></img>
</button>

<Modal 
  show={show}
  onHide={() => setShow(false)}
  size="lg"
  aria-labelledby="example-custom-modal-styling-title"
>
  <Modal.Header closeButton>
    <Modal.Title id="example-custom-modal-styling-title">
      Landcom Government Property Organisation
    </Modal.Title>
  </Modal.Header>
  <Modal.Body>
    <p className='modal-para'>
      Role:  Web Developer and Content Manager.<br/>
      Tech:  Silverstripe CMS and WordPress CMS for microsites. HTML, CSS, JavaScript, PHP.<br/>
      Tools: Google Analytics, Google Tag Manager, MailChimp, Crazy Egg Website Optimization, social media integration
    </p>
    <img src={Landcom} className="modal-large" alt='Landcom government property organisation screenshot website'></img>
  </Modal.Body>
</Modal>
</>
);
}