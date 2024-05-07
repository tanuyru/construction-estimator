'use client'
import BaseCard from "../../../util/basecard";

import styles from "@/app/page.module.css";
import nettlesStyles from "@/app/nettles.module.css";
import { components }  from '@/app/lib/nettlesbackend';
import React from 'react';
import {Link,} from 'react-router-dom';
import CostItemCard from "@/app/ui/util/costitemcard";
import {removeProjectEstimateById} from "@/app/lib/backendapi"

export default function ProjectDetails(props) {

  async function removeProject(){
    console.log('removing project with id: '+id);

    await removeProjectEstimateById(props.proj.id);
  }
const projectUrl:string = "/ui/projects/details/"+props.proj.id;
  return (
    <div>
      <table>
      <tbody>
        <tr>
          <td></td>
        </tr>
        </tbody>
      </table>
    </div>
 
);
}

