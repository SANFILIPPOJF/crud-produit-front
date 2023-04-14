import React from "react"
import { Produit } from "../App";

export function Table(props: { produits: Produit[] }) {
    console.log(props);
    const listProduits = props.produits.map(produit => {
        return (
            <li className="list-group-item d-flex justify-content-between align-items-start">
                <div className="ms-2 me-auto">
                    <div className="fw-bold">{produit.name}</div>
                    {produit.price}€
                </div>
                <span className="badge bg-primary rounded-pill">{produit.quantity}</span>
            </li>
        )
    })
    return (
        <div>
            <ol className="list-group list-group-numbered">
                {listProduits}
            </ol>

        </div>
    )
};