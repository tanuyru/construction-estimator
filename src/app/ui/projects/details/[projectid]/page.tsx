
'use client'
import ScopeCard from "@/app/ui/projects/details/scopecard";
import styles from "@/app/page.module.css";
import nettlesStyles from "@/app/nettles.module.css";
import { components }  from '@/app/lib/nettlesbackend';
 import {fetchDefaultConfig, fetchProjectEstimateById} from '@/app/lib/backendapi';
 import { useRouter } from 'next/router'
 import { useLocation } from 'react-router-dom';
 import React,{useState} from 'react'; 
 import { useParams } from 'react-router-dom';
 import CostProfitView from "@/app/ui/util/costprofitview";
 import NewScopeCard from "../newscopecard";
import { EditCfgDialogue } from "@/app/ui/util/editcfgdialogue";
import { getCurrentConfig } from "@/app/lib/storage";

export default async function DetailsHome({ params }: { params: { projectid: string } }) {
  
  const [isOpen, setIsOpen] = useState(false);
  console.log('calling with id'+params.projectid);
  var existing
  const resp = await fetchProjectEstimateById(params.projectid);
  const config = await getCurrentConfig();

  config.projectId = resp.id;
  console.log('Received project estimate: '+resp+' and config '+config);

  
  return (
    <main>

         <h2>{resp.projectName}</h2>
         <EditCfgDialogue  config={config} />
         <div>
          <CostProfitView costTreeItem={resp} /> 
         </div>
      <ul className={nettlesStyles.cardparent}>
     
     {resp.scopes?.map((scope, index) => (
      <ScopeCard key={scope.scopeName} proj={resp} scope={scope} />
     ))
     }
          <NewScopeCard proj={resp} />
      </ul>
    </main> 
  );
}
