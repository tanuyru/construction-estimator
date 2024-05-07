'use client'
import BaseCard from "@/app/ui/util/basecard";

import styles from "@/app/page.module.css";
import nettlesStyles from "@/app/nettles.module.css";
import { components }  from '@/app/lib/nettlesbackend';
import React from 'react';
import {Link,} from 'react-router-dom';
import NewItemBaseCard from "@/app/ui/util/newitembasecard";
import {addNewAreaToScope} from "@/app/lib/projectutils";
export default function NewAreaCard(props) {

  async function newArea(){
    const newAreaName = document.getElementById("newAreaInput")?.value;
    const newAreaSize = parseFloat(document.getElementById("newAreaSizeSqFt")?.value);

    await addNewAreaToScope(props.proj, props.scope, newAreaName, newAreaSize);
  }
  return (
    <NewItemBaseCard onClick={newArea}>
      <div>
 <h3>New area...</h3>
<table>
  <tbody>
  <tr>
    <td>Area name name:</td>
    <td><input type="text" id="newAreaInput"></input></td>
  </tr>
  <tr>
    <td>Area size (sqFt):</td>
    <td><input type="text" id="newAreaSizeSqFt"></input></td>
  </tr>
  </tbody>
</table>
</div>
    </NewItemBaseCard>
 
);
}

