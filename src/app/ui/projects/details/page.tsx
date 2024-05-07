'use client'
import BaseCard from "@/app/ui/util/basecard";

import ScopeCard from "./scopecard";
import styles from "@/app/page.module.css";
import nettlesStyles from "@/app/nettles.module.css";
import { components }  from '@/app/lib/nettlesbackend';
 import {fetchProjectEstimateById} from '@/app/lib/backendapi';
 import { useRouter } from 'next/router'
 import { useLocation } from 'react-router-dom';
 import React from 'react'; 
 import { useParams } from 'react-router-dom';
 import CostProfitView from "@/app/ui/util/costprofitview";
import NewScopeCard from "./newscopecard";
export default async function DetailsHome({projectId}) {
  
  console.log('calling with id'+projectId);
  const resp = await fetchProjectEstimateById(1);
    console.log('Received project estimate: '+resp);
  

  return (
    
    <main>

         <h2>{resp.projectName} UPDATING</h2>
         <div>
          <CostProfitView /> 
         </div>
      <ul className={nettlesStyles.cardparent}>
     
     {resp.scopes?.map((scope, index) => (
      <ScopeCard proj={resp} scope={scope} />
     ))
     }
     <NewScopeCard proj={resp} />
      </ul>
    </main> 
  );
}
