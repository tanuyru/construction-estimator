import ProjectCard from "./projectcard";
import ChildComponent from "./projectcard";
import styles from "../../page.module.css";
import nettleStyles from "@/app/nettles.module.css"
import { components }  from '@/app/lib/nettlesbackend';
 import {fetchProjectEstimates} from '@/app/lib/backendapi';
 import React from 'react';

export default async function ProjectsHome() {
  const resp = await fetchProjectEstimates();
  const keys = Object.keys(resp);
  console.log('Loaded json: '+keys.length+' properties, first: '+keys[0]);
  return (
    <main >
      <ul className={nettleStyles.cardparent}>
      {resp.map((project: components["schemas"]["ProjectEstimate"], index) => (
 
        <ProjectCard proj={project} />

      ))}
      </ul>
    </main>
  );
}
