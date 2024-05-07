import AreaCard from "./areacard";
import styles from "@/app/page.module.css";
import { components }  from '@/app/lib/nettlesbackend';
 import {fetchProjectEstimateById} from '@/app/lib/backendapi';
 import React from 'react';
 import { useLocation } from 'react-router-dom';
 import nettlesStyles from "@/app/nettles.module.css";

export default async function ScopesHome() {
  const projName = "Generic construction project";
  const scopeName = "LWIC Roof Areas";

  const resp: components["schemas"]["ProjectEstimate"] = await fetchProjectEstimateById(projName);
  const projScope: components["schemas"]["ProjectScope"] | undefined = resp.scopes?.find((s) => s.scopeName === scopeName);
  return (
    <main>
         <h2>{resp.projectName}</h2>
         <h3>{projScope?.scopeName}</h3>
      <ul className={nettlesStyles.cardparent}>
     
     {projScope?.areas?.map((area, index) => (
      <AreaCard area={area} />
     ))}
      </ul>
    </main>
  );
}
