import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Garmin from "../../assets/projects/Fullscreen-Garmin.png"
import Garminmob from '../../assets/projects/Mobile-Garmin.png'

export default function ModalGarmin() {
    const [show, setShow] = useState(false);
  
    return (
<>
<button className='button-modal' onClick={() => setShow(true)}>
  <h2>Garmin Smart Watches</h2>
  <img src={Garminmob} className="img-mobile-size" alt='Garmin screenshot website'></img>
</button>

<Modal 
  show={show}
  onHide={() => setShow(false)}
  size="lg"
  aria-labelledby="example-custom-modal-styling-title"
>
  <Modal.Header closeButton>
    <Modal.Title id="example-custom-modal-styling-title">
      Garmin Smartwatches
    </Modal.Title>
  </Modal.Header>
  <Modal.Body>
  <p className='modal-para'>
      Role:  Web Developer. Updated sites with advertisements and Ad Tags.<br/>
      Tech:  HTML, CSS, JavaScript, JSON, Nuxt.js.<br/>
      Tools: Adobe Illustrator, Google Analytics, Google Tag Manager
    </p>
    <img src={Garmin} className="modal-large" alt='Garmin screenshot website'></img>
  </Modal.Body>
</Modal>
</>
);
}