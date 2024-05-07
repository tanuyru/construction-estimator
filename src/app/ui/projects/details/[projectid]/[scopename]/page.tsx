'use client'
import BaseCard from "@/app/ui/util/basecard";

import AreaCard from "./areacard";
import styles from "@/app/page.module.css";
import { components }  from '@/app/lib/nettlesbackend';
 import {fetchProjectEstimateById} from '@/app/lib/backendapi';
 import React from 'react';
 import { useLocation } from 'react-router-dom';
 import nettlesStyles from "@/app/nettles.module.css";
import NewAreaCard from "./newareacard";
import { addNewAreaToScope } from "@/app/lib/projectutils";
import { getCurrentConfig } from "@/app/lib/storage";

export default async function ScopesHome({ params }: { params: { projectid: string, scopename: string } }) {
  const projName = "Generic construction project";
  const scopeName = "LWIC Roof Areas";
  const decodedScope:string = decodeURIComponent(params.scopename);
console.log('projectid: '+params.projectid+', scopename: '+decodedScope);
  const resp: components["schemas"]["ProjectEstimate"] = await fetchProjectEstimateById(params.projectid);
const projScope: components["schemas"]["ProjectScope"] | undefined = resp.scopes?.find((s) => s.scopeName === decodedScope);
console.log('projScope: '+projScope+' resp: '+resp);  

const config = await getCurrentConfig();

config.projectId = resp.id;
return (
    <main>
         <h2>{resp.projectName}</h2>
         <h3>{projScope?.scopeName}</h3>
      <ul className={nettlesStyles.cardparent}>
     
     {projScope?.areas?.map((area, index) => (
      <AreaCard proj={resp} scopeName={projScope?.scopeName} area={area} />
     ))}
     <NewAreaCard proj={resp} scope={projScope} />
     
      </ul>
    </main>
  );
}
