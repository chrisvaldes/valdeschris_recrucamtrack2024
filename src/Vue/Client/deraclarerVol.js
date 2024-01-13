import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../Formcss/declaration.css"
import { Navigate } from 'react-router-dom';


function DeclarerVehicule(){

    const [immatriculation, setImatriculation] = useState("");
    const [lieuVol, setLieuVol] = useState("");
    const [heureVol, setHeureVol] = useState("");
    const [ville, setVille] = useState("");
    const [typeVehicule, setTypeVehicule] = useState("");
    const navigate = useNavigate("");
  
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
                             <input type="text" onChange={(e) => setImatriculation(e.target.value)} placeholder="Immatriculation ou châssis vehicule" className="form-control" id="name" style={{padding : "0 7px"}}/>
                        </div>
                        <div className="form-group row">
                             <input type="text" onChange={(e)=>setLieuVol(e.target.value)} placeholder="Lieu vol" className="form-control" />
                        </div>
                        <div className="form-group row">
                             <input type="text" onChange={(e) => setHeureVol(e.target.value)} placeholder="Heure vol" className="form-control"/>
                        </div>
                        <div className="form-group row">
                             <input type="text" onChange={(e) => setVille(e.target.value)} placeholder="Ville" className="form-control" />
                        </div>
                        <div className="form-group row">
                             <input type="text" onChange={(e) => setTypeVehicule(e.target.value)} placeholder="Type vehicule" className="form-control" />
                        </div>  
                        <div className='card-action'>
                            <Link to={{
                            pathname : "/DeclarerVehiculeSuiv",
                            state : {
                                immatriculation : immatriculation,
                                lieuVol : lieuVol, 
                                heureVol : heureVol, 
                                ville : ville,  
                                typeVehicule : typeVehicule 
                            }
                        }}
                            
                            className='btn btn-primary waves-effect waves-light' style={{marginBottom : "10px"}}>Suivant</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DeclarerVehicule;