

import ScopeCard from "@/app/ui/projects/details/scopecard";
import styles from "@/app/page.module.css";
import nettlesStyles from "@/app/nettles.module.css";
import { components }  from '@/app/lib/nettlesbackend';
 import {fetchProjectEstimateById} from '@/app/lib/backendapi';
type Params = {
    projectid: string
  }


export async function GET(request: Request, context: { params: Params }) {
    const projectid = context.params.projectid // '1'

    
    console.log('calling with id'+projectId);
    const resp = await fetchProjectEstimateById(1);
      console.log('Received project estimate: '+resp);
    
  
    return {
     body:( 
     <main>
  
           <h2>{resp.projectName}</h2>
        <ul className={nettlesStyles.cardparent}>
       
       {resp.scopes?.map((scope, index) => (
        <ScopeCard proj={resp} scope={scope} />
       ))
       }
        </ul>
      </main> 
    )
  }
}
