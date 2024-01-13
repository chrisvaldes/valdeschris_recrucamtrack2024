import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../Formcss/declaration.css"
import { useLocation } from "react-router-dom";
 

function DeclarerVehiculeSuiv( ){

    const location = useLocation();

    const {immatriculation, lieuVol, heureVol, ville, typeVehicule } = location.state;

    const [responsableVehicule , setResponsableVehicule] = useState("");
    const [statut, setStatut] = useState("");
    const [derPosition, setDerPosition] = useState("");
    const [decription, setDescription] = useState("");
  
    function handleRegister(){
        
    }

    return (
        <div className="declaration-Container">
            <div className="row" >
                <div className="col s12 m8 offset-m2">
                    <div className="card hoverable" style={{padding : "0 2rem"}}>
                        <div className="card-title" >
                            <h4 style={{padding : "25px 0"}}>Declaration de vol</h4>
                        </div>
                        
                        <div className="form-group row">
                             <input type="text" onChange={(e) => setResponsableVehicule(e.target.value)} placeholder="Responsable Vehicule" className="form-control" />
                        </div>
 
                        <div className="form-group row">
                             <input type="text" onChange={(e) => setDerPosition(e.target.value)} placeholder="Derniere position" className="form-control"/>
                        </div>
                        <div className="form-group row">
                              <input type="text" onChange={(e) => setStatut(e.target.value)} placeholder="user Name" className="form-control" />
                        </div>
                        <div className="form-group row">
                        <textarea name="message"  onChange={(e) => setDescription(e.target.value)} className="form-control" placeholder="enter your message" id="" cols="30" rows="10" style={{height : "8rem", padding : "1rem"}}></textarea>
                        </div>

                        <h2>Page 2</h2>
                        <p>Immatriculation: {props.immatriculation}</p>
                        <p>Lieu de vol: {lieuVol}</p>
                        <p>Heure de vol: {heureVol}</p>
                        <p>Ville: {ville}</p>
                        <p>Type de véhicule: {typeVehicule}</p>
                        {/* Reste du contenu de la page 2 */}
                         
                        <div className='card-action'>
                            <button className='btn btn-primary waves-effect waves-light' onClick={handleRegister} style={{marginBottom : "10px"}}>Declarer</button>
                        </div>

                    </div>
                </div>
            </div> 
            </div>
    );
}

export default DeclarerVehiculeSuiv;