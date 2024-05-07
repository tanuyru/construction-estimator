
import styles from "@/app/page.module.css";
import { components }  from '@/app/lib/nettlesbackend';
import React from 'react';
import nettlesStyles from "@/app/nettles.module.css";

import {Link} from 'react-router-dom';
import SimplePieChart from "../projects/charts/simplepiechart";

export default function CostItemCard(props) {
     console.log('costPerTYpe exists!? '+props.costItem.costPerType)
     const mapData = Object.keys(props.costItem.costPerType)
     .map(key => ({ key: key, name: key, value: props.costItem.costPerType[key] }));
     console.log('mappedData length '+mapData?.length);
return (
 <div>

     <table>
          <tbody>{Object.keys(props.costItem.costPerType)
          .map((key, idx) =>(
               
               <tr key={key}>
                    <td>
                         {key}:
                    </td>
                    <td>${(props.costItem.costPerType[key].toFixed(2))}</td>
               </tr>
          ))}
          <tr>
               <td>Total:</td>
               <td>${props.costItem.costForSize.toFixed()}</td>
               </tr>
               <tr>
               <td>Total / sqFt:</td>
               <td>${props.costItem.costPerSqFt.toFixed(2)}/sqFt</td>
               </tr>
               </tbody>
     </table>
  
     <SimplePieChart keyCol="name" valCol="value" argData={mapData} />
 </div>

);
}
