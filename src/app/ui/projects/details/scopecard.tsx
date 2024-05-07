'use client'
import BaseCard from "@/app/ui/util/basecard";

import styles from "@/app/page.module.css";
import { components }  from '@/app/lib/nettlesbackend';
import React from 'react';
import nettlesStyles from "@/app/nettles.module.css";
import CostItemCard from "@/app/ui/util/costitemcard";

import {Link} from 'react-router-dom';
import { removeScopeFromProject } from "@/app/lib/projectutils";
export default function ScopeCard(props) {
     async function removeScope(){
          console.log('removing scope with name: '+props.scope.scopeName);
          await removeScopeFromProject(props.proj, props.scope.scopeName)
        }
const projectUrl:string = "/ui/projects/details/"+props.proj.id+"/"+props.scope.scopeName;

return (
     <BaseCard costTreeItem={props.scope} onClick={removeScope}>

      <a href={projectUrl}>
           <h2>{props.scope.scopeName}</h2>
          <p>This is a project scope with {props.scope.areas.length} different areas </p>
          <CostItemCard costItem={props.scope} />
      </a>

      </BaseCard>
);
}

