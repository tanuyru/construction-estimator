'use client'
import BaseCard from "@/app/ui/util/basecard";

import styles from "@/app/page.module.css";
import nettlesStyles from "@/app/nettles.module.css";
import { components }  from '@/app/lib/nettlesbackend';
import React from 'react';
import {Link,} from 'react-router-dom';
import NewItemBaseCard from "@/app/ui/util/newitembasecard";
import {addNewAreaToScope } from "@/app/lib/projectutils";
import {fetchAllProducts, updateProjectEstimate} from "@/app/lib/backendapi";

export default function AddProductCard(props) {


  async function addProduct(){
    const productId = document.getElementById("newProductId").value;
    const product = props.products.find(p => p.id == productId);
    props.area.appliedProducts.push(product);

    console.log('adding product id '+product.id+' to project with id '+props.project.id+' have '+props.area.appliedProducts.length+' applied prods');
    await updateProjectEstimate(props.project);
  }
  return (
    <NewItemBaseCard onClick={addProduct}>
      <div>
 <h3>Select product to add...</h3>
<table>
  <tbody>
  <tr>
    <td>Product to add:</td>
    <td>
      <select id="newProductId">
      {props.products.map((prod, idx) =>(
        <option value={prod.id}>{prod.name}</option>
      )
      )}
      </select></td>
  </tr>
 
  </tbody>
</table>
</div>
    </NewItemBaseCard>
 
);
}

