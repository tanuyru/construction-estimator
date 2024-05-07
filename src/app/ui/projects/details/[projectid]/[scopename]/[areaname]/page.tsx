'use client'
import BaseCard from "@/app/ui/util/basecard";

import ProductCard from "./productcard";
import styles from "@/app/page.module.css";
import { components }  from '@/app/lib/nettlesbackend';
 import {fetchAllProducts, fetchProjectEstimateById} from '@/app/lib/backendapi';
 import React from 'react';
 import { useLocation } from 'react-router-dom';
 import nettlesStyles from "@/app/nettles.module.css";
import AddProductCard from "./addproductcard";

export default async function AreasHome({ params }: { params: { projectid: string, scopename: string, areaname: string } }) {
  const projName = "Generic construction project";
  const scopeName = "LWIC Roof Areas";
  const decodedScope:string = decodeURIComponent(params.scopename);
  const decodedArea:string = decodeURIComponent(params.areaname)?.trim();
console.log('projectid: '+params.projectid+', scopename: '+decodedScope+', areaname: '+decodedArea);
const resp: components["schemas"]["ProjectEstimate"] = await fetchProjectEstimateById(params.projectid);
const products: Array<components["schemas"]["Product"]> = await fetchAllProducts();
const projScope: components["schemas"]["ProjectScope"] | undefined = resp.scopes?.find((s) => s.scopeName === decodedScope);
  const scopeArea: components["schemas"]["ProjectArea"] | undefined = projScope?.areas?.find((s) => s.name === decodedArea);
  if (!scopeArea){
    console.log(projScope?.areas.map((a, _) =>{
      console.log('Couldnt find '+decodedArea+' ('+decodedArea.length+') among '+a.name+' ('+a.name.length+')');
    }));
  }

console.log('projScope: '+projScope+' project: '+resp+', area: '+scopeArea);  
return (
    <main>
         <h2>{resp.projectName}</h2>
         <h3>{projScope?.scopeName}</h3>
         <h4>{scopeArea?.name}</h4>
      <ul className={nettlesStyles.cardparent}>
     
     {scopeArea?.appliedProducts?.map((prod, index) => (
      <ProductCard project={resp} areaName={scopeArea?.name} scopeName={projScope?.scopeName} product={prod} />
     ))}
      </ul>
      <AddProductCard area={scopeArea} project={resp} products={products}/>
    </main>
  );
}
