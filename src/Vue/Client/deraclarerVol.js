import React, { useState, useEffect } from "react";
import "../../Formcss/declaration.css"
import { insertData} from "../../Service/backend";
import { Navigate, useNavigate } from "react-router-dom";

function DeclarerVehicule() {

    const [immatriculation, setImatriculation] = useState("");
    const [lieuVol, setLieuVol] = useState("");
    const [heureVol, setHeureVol] = useState("");
    const [ville, setVille] = useState("");
    const [typeVehicule, setTypeVehicule] = useState("");
    const [responsableVehicule, setResponsablevehicule] = useState("");
    const [statut, setStatut] = useState("");
    const [derPosition, setDerPosition] = useState("");
    const [decription, setDescription] = useState("");

    const navigate = useNavigate("");


    const DeclarerVol = async (event) => {
        event.preventDefault();

        const formData = {
            immatriculation: immatriculation,
            lieuVol: lieuVol,
            heureVol: heureVol,
            ville: ville,
            typeVehicule: typeVehicule,
            responsableVehicule: responsableVehicule,
            statut: statut,
            derPosition: derPosition,
            decription: decription

        }

        try {
            const docId = await insertData('Vol', formData);
            console.log('ID du document inséré :', docId);
            navigate('/Dashboard')

        } catch (error) {
            console.log(error)
        }

    }

    return (

        <div className="declaration-Container">
            <div className="row" >
                <div className="col s12 m8 offset-m2">
                    <div className="card hoverable" style={{ padding: "0 2rem" }}>
                        <div className="card-title" >
                            <h4 style={{ padding: "25px 0" }}>Declaration de vol</h4>
                        </div>

                        <div class="row">
                            <div class="input-field col s6">
                                <input onChange={(e) => setImatriculation(e.target.value)} placeholder="Immatriculation ou châssis vehicule" type="text" class="validate" />
                            </div>
                            <div class="input-field col s6">
                                <input onChange={(e) => setLieuVol(e.target.value)} placeholder="Lieu vol" type="text" class="validate" />
                            </div>
                        </div>
                        <div class="row">
                            <div class="input-field col s6">
                                <input onChange={(e) => setHeureVol(e.target.value)} placeholder="Heure vol" type="text" class="validate" />
                            </div>
                            <div class="input-field col s6">
                                <input onChange={(e) => setVille(e.target.value)} placeholder="Ville" type="text" class="validate" />
                            </div>
                        </div>
                        <div class="row">
                            <div class="input-field col s6">
                                <input onChange={(e) => setTypeVehicule(e.target.value)} placeholder="Type vehicule" type="text" class="validate" />
                            </div>
                            <div class="input-field col s6">
                                <input onChange={(e) => setResponsablevehicule(e.target.value)} placeholder="Responsable Vehicule" type="text" class="validate" />
                            </div>
                        </div>
                        <div class="row">
                            <div class="input-field col s6">
                                <input onChange={(e) => setDerPosition(e.target.value)} placeholder="Derniere position" type="text" class="validate" />
                            </div>
                            <select className="input-field col s6" style={{padding : "1rem 1rem"}}>
                                <option value="" disabled selected>Choose your option</option>
                                <option value="1">Récupérer</option>
                                <option value="2">Perdu</option>
                                <option value="3">Recherche en cours</option>
                            </select>
                            {/* <div class="input-field col s6">
                                <input onChange={(e) => setStatut(e.target.value)} placeholder="user Name" type="text" class="validate" />
                            </div> */}
                        </div>

                        <div className="form-group row">
                            <textarea name="message" onChange={(e) => setDescription(e.target.value)} className="form-control" placeholder="enter your message" id="" cols="30" rows="10" style={{ height: "8rem", padding: "1rem" }}></textarea>
                        </div>
                        <div className="card-action">
                            <button onClick={DeclarerVol} class="btn btn-primary waves-effect waves-light">
                                DeclarerVol
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DeclarerVehicule;