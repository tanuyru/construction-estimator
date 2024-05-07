'use client'
import BaseCard from "@/app/ui/util/basecard";

import styles from "@/app/page.module.css";
import nettlesStyles from "@/app/nettles.module.css";
import { components }  from '@/app/lib/nettlesbackend';
import React from 'react';
import {Link,} from 'react-router-dom';
import NewItemBaseCard from "@/app/ui/util/newitembasecard";
import {addNewScopeToProject} from "@/app/lib/projectutils";
export default function NewScopeCard(props) {

  async function newScope(){
    const newScopeNameElement = document.getElementById("newScopeNameInput");
    if (newScopeNameElement){
      console.log('found input element getting val');
      const scopeName = newScopeNameElement.value;
      console.log('Found value' +scopeName);
      if (scopeName){
        await addNewScopeToProject(props.proj, scopeName);

      }
    }
  }
  return (
    <NewItemBaseCard onClick={newScope}>
      <div>
 <h3>New scope...</h3>
<table>
  <tbody>
  <tr>
    <td>Scope name:</td>
    <td><input type="text" id="newScopeNameInput"></input></td>
  </tr>
  </tbody>
</table>
</div>
    </NewItemBaseCard>
 
);
}

