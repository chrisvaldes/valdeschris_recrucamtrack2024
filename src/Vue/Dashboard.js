import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom";
 import { database } from "../Service/firebase";

function Dashboard() {

    const [products, setProduct] = useState([]);
    const donneesDeclaration = collection(database, 'vol')

    useEffect(() => {
        const getData = async () => {
            const donnees = await getDocs(donneesDeclaration)
            setProduct(donnees.docs.map(doc=>({...doc.data(), id : doc.id}))) 
        }
        getData()
    })

    return (
        <div>

            <section className="Products">
                <h4 className="product-title">lastest products</h4>
                <div className="box-product">
                    {
                        products.map(product => (
                            <div className="card hoverable" style={{ width: "16rem", height: "27rem", cursor: "pointer" }}>
                                <p style={{ paddingTop: "1rem" }}>{product.derPosition}</p>
                                <p style={{ paddingTop: "1rem" }}>{product.heureVol}</p>
                                <p style={{ paddingTop: "1rem" }}>{product.immatriculation}</p>
                                <p style={{ paddingTop: "1rem" }}>{product.lieuVol}</p>
                                <p style={{ paddingTop: "1rem" }}>{product.responsableVehicule}</p>
                                <p style={{ paddingTop: "1rem" }}>{product.statut}</p>
                                <p style={{ paddingTop: "1rem" }}>{product.typeVehicule}</p>
                                <p style={{ paddingTop: "1rem" }}>{product.ville}</p>
                                <p style={{ paddingTop: "1rem" }}>{product.description}</p>


                            </div>
                        ))
                    }
                </div>
                {/* <CardProduct products = {products}/> */}
            </section>

        </div>
    )
}

export default Dashboard;