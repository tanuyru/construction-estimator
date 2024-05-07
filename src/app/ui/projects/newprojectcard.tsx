'use client'
import BaseCard from "../util/basecard";

import styles from "@/app/page.module.css";
import nettlesStyles from "@/app/nettles.module.css";
import { components }  from '@/app/lib/nettlesbackend';
import React from 'react';
import {Link,} from 'react-router-dom';
import CostItemCard from "@/app/ui/util/costitemcard";
export default function NewProjectCard(props) {

  function newProject(projectName){
    console.log('removing project with id: '+id);
  }
const projectUrl:string = "/ui/projects/details/"+props.proj.id;
  return (
    <BaseCard costTreeItem={props.proj} onClick={removeProject}>
   <a href={projectUrl}>
      
           <h2>{props.proj.projectName}</h2>
          <CostItemCard costItem={props.proj} />
  
      </a>

    </BaseCard>
 
);
}

