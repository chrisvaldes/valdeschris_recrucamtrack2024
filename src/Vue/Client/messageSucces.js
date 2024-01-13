import React, {useEffect} from "react";
import M from "materialize-css"
import { Link } from "react-router-dom";

export default function MessageSucces(){

    // modal button
    useEffect(() => {
        const elems = document.querySelectorAll('.modal');
        M.Modal.init(elems, {});
    }, []);

    return(
        <> 
            {/* Modal bottom sheet style */}
            <a class="waves-effect waves-light btn modal-trigger" href="#modal1">Modal</a>
            
            <div id="modal1" class="modal bottom-sheet">
                <div class="modal-content">
                <h4>DECLARATION DE VOL</h4>
                <p>Votre declaration a été envoyer avec Succes</p>
                </div>
                <div class="modal-footer">
                <Link to="/DeclarerVehicule">Ok</Link>
                </div>
            </div>
          
        </>
    )

} 