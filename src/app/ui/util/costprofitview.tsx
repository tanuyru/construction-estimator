'use client'
import React from 'react';
import styles from "@/app/page.module.css";
import nettleStyles from "@/app/nettles.module.css";
import SimplePieChart from "../projects/charts/simplepiechart";

const CostProfitView = ({ costTreeItem }) => {
  const mapData = Object.keys(costTreeItem.costPerType)
  .map(key => ({ key: key, name: key, value: costTreeItem.costPerType[key] }));

  const grossProfit = costTreeItem.proposedAmount - costTreeItem.costForSize;
  const netProfit = grossProfit * 0.75;
  return (
   
    <div>

<table>
  <tbody>
    <tr>
      <td>

      <table>
         <tbody>{Object.keys(costTreeItem.costPerType)
         .map((key, idx) =>(
              
              <tr>
                   <td>
                        {key}:
                   </td>
                   <td>${(costTreeItem.costPerType[key].toFixed(2))}</td>
              </tr>
         ))}
         <tr>
              <td>Total costs:</td>
              <td>${costTreeItem.costForSize.toFixed(2)}</td>
              </tr>
              <tr>
              <td>Total / sqFt:</td>
              <td>${costTreeItem.costPerSqFt.toFixed(2)}/sqFt</td>
              </tr>
   <tr>
   <td>Proposed amount:</td>
   <td>${costTreeItem.proposedAmount.toFixed(2)}</td>
   </tr>
   <tr>
   <td>Net profit</td>
   <td>${netProfit.toFixed(2)}/sqFt</td>
   </tr>  
   
           
              
              </tbody>
    </table>

      </td>

      <td>
      <SimplePieChart keyCol="name" valCol="value" argData={mapData} />

      </td>
    </tr>
  </tbody>
</table>
  
 
</div>
    
  );
}

export default CostProfitView;