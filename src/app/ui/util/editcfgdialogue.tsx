import React, { useState } from 'react';
import ProjectConfigurationEditor from './projectconfigurationeditor.tsx';
import Dialogue from './dialogue';
import {applyConfiguration} from "@/app/lib/backendapi"
export const EditCfgDialogue = ({config}) => {
    const [result, setResult] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    const handleOpenDialogue = () => {
        console.log('handle open dialogue');
        setIsOpen(true);
      };
   
    
      const handleCloseDialogue = () => {
        setIsOpen(false);
      };

    
  const handleConfirm = (confirmed) => {
    console.log('handle confirm: '+confirmed);
    setIsOpen(false);

    applyConfiguration(confirmed);
  };
    return( 
        <div>
        <Dialogue confirmParam={config} isOpen={isOpen} onClose={handleCloseDialogue} onConfirm={handleConfirm}>
        <ProjectConfigurationEditor currentConfig={config} itemKeys={config.pricePerUnitPerCostItem} />
        </Dialogue>
        <button onClick={handleOpenDialogue}>Open Dialogue</button>
        
        </div>
    )
}