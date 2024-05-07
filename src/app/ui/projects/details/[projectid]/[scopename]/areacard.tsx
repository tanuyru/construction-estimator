'use client'
import BaseCard from "@/app/ui/util/basecard";

import styles from "@/app/page.module.css";
import { components }  from '@/app/lib/nettlesbackend';
import React from 'react';
import {Link} from 'react-router-dom';
import nettlesStyles from "@/app/nettles.module.css";
import {removeAreaFromScope} from "@/app/lib/projectutils"
import CostItemCard from "@/app/ui/util/costitemcard";

export default function AreaCard(props) {
      async function removeArea(){
            console.log('removing scope with name: '+props.scopeName);
            await removeAreaFromScope(props.proj, props.scopeName, props.area.name);
          }
      const projectUrl:string = "/ui/projects/details/"+props.proj.id+"/"+props.scopeName+"/"+props.area.name;
return (
 
      <BaseCard costTreeItem={props.area} onClick={removeArea}>
       
      <a href={projectUrl}>
    
           <h2>{props.area.name}</h2>
          <p>This is an area for a scope with a size of {props.area.sizeSqFt} square feet and {props.area.appliedProducts?.length} applied products</p>
          <CostItemCard costItem={props.area} />
      </a>
     

      </BaseCard>
);
}

