'use client'
import React from 'react';
import styles from "@/app/page.module.css";
import nettleStyles from "@/app/nettles.module.css";
const BaseCard = ({ children, onClick, costTreeItem }) => {
  return (
   
    <li className={nettleStyles.cardchild}>
      <div className={nettleStyles.flexdiv}>
        {children}
        </div>
        <div className={nettleStyles.flexdiv}>
        <button
       // style={{ position: 'relative', bottom: '0px', right: '0px', padding: '1px 1px', marginTop: '50px' }}
        onClick={onClick}
      >
        Remove
    </button>
   
   <div className={nettleStyles.flexdiv}>
            <p>{costTreeItem?.costPerSqFt} USD/SqFt</p>
            </div>
            
    </div>
     </li>
    
  );
}

export default BaseCard;