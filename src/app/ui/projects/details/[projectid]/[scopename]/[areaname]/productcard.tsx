'use client'
import BaseCard from "@/app/ui/util/basecard";

import styles from "@/app/page.module.css";
import { components }  from '@/app/lib/nettlesbackend';
import React from 'react';
import {Link} from 'react-router-dom';
import nettlesStyles from "@/app/nettles.module.css";
import {removeProductFromArea} from "@/app/lib/projectutils"
import { redirect } from 'react-router-dom';
import CostItemCard from "@/app/ui/util/costitemcard";
export default function ProductCard(props) {

      async function removeProduct(){
            console.log('removing product with name: '+props.scopeName);
            await removeProductFromArea(props.project, props.scopeName, props.areaName, props.product.name);

         //   removeAreaFromScope(props.proj, props.scopeName, props.product.name);
          }

    //  const projectUrl:string = "/ui/projects/details/"+props.proj.id+"/"+props.scope?.scopeName+"/"+props.area?.name;
return (
 
      <BaseCard costTreeItem={props.product} onClick={removeProduct}>

           <h2>{props.product.name}</h2>
          <p>This is a product applied to an area and it contains {props.product?.costItems?.length} items and costs ${props.product.costPerSqFt} / square foot</p>
          <CostItemCard costItem={props.product} />
      </BaseCard>
);
}

