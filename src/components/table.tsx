import React from "react"
import { Produit } from "../App";
import Table from 'react-bootstrap/Table';

export function Tableau(props: { produits: Produit[] }) {
    console.log(props);
    const listProduits = props.produits.map(produit => {
        return (
            <tr key={produit.id}>
                <td>{produit.name}</td>
                <td>{produit.price}€</td>
                <td>{produit.quantity}</td>
            </tr>
        )
    })
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">Quantity</th>
                </tr>
            </thead>
            <tbody>
                {listProduits}
            </tbody>
        </Table>
    )
};