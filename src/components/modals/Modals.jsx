import "./modals.scss"
import "../../global.scss"
import ModalLandcom from './ModalLandcom';
import ModalMuseums from './ModalMuseums'
import Modalvisit from "./ModalVisitBathurst"
import ModalGarmin from "./ModalGarmin"
import ModalBMEC from "./ModalBMEC"


export default function Modals() {

  return (
    <div className="container-modal">
      <h1 className="page-subheading">Front-end Frameworks and CMS</h1>
      <p>Click to see full page image</p>
      <div className="modal-div">
        <ModalLandcom/>
        <ModalMuseums/>
        <Modalvisit/>
        
        <ModalGarmin/>
        <ModalBMEC/>
        </div>
  
    </div>
  );
}


