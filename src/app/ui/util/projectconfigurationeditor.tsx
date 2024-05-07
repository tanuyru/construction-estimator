'use client'

import { fetchDefaultConfig } from '@/app/lib/backendapi';
import { components } from '@/app/lib/nettlesbackend';
import React, { useState } from 'react';


const ProjectConfigurationEditor = ({itemKeys, currentConfig}) => {
    const setName = (newName) =>{
        currentConfig.name = newName;
    }
    const onTodoChange = (value, el) =>{
        el.value=  value;
    }
    const handleSave = async () => {
        // Implement save functionality here
      //  currentConfig = await fetchDefaultConfig();
        reloadCfg(currentConfig);
    };

    const setHourUnitPrice = (price) => {
        currentConfig.hourUnitPrice = price;
    }
    
    const setDefaultPricePerUnit = (price) => {
        currentConfig.defaultPricePerUnit = price;
    }   
    
    const setIndirectCost = (price) => {
        currentConfig.indirectCostFactor = price;
    }
    const setItemCost = (itemName, price) => {
        console.log('setting itemName '+itemName+' to '+price);
        currentConfig.pricePerUnitPerCostItem[itemName] = price;
    }
    const reloadCfg = (cfg) => {
        const defEl = document.getElementById('cfgPricePerUnit');
        const hourEl = document.getElementById('cfgHourUnitPrice');
        const indirectEl = document.getElementById('cfgIndirectCostFactor');
        if (!defEl || !hourEl || !indirectEl){
            return;
        }
        defEl.value = cfg.defaultPricePerUnit;
        hourEl.value = cfg.hourUnitPrice;
        indirectEl.value = cfg.indirectCostFactor;
        {cfg.pricePerUnitPerCostItem ? Object.entries(cfg.pricePerUnitPerCostItem).map(([key, value]) => 
            {
                const id = "cfg"+key;
                const el = document.getElementById(id);
                if (el){
                    el.value = value;
                }

            }
        ) : {}}
        console.log('reloaded cfg '+cfg.id);
    }

    return (
        <div>


        <label>Default Price Per Unit: </label>
        <input type="number" id="cfgPricePerUnit" onChange={(e) => setDefaultPricePerUnit(parseFloat(e.target.value))} />
        <br />

        <label>Hour Unit Price: </label>
        <input type="number" id="cfgHourUnitPrice" onChange={(e) => setHourUnitPrice(parseFloat(e.target.value))}/>
        <br />

        <label>Indirect Cost Factor: </label>
        <input type="number" id="cfgIndirectCostFactor" onChange={(e) =>  setIndirectCost(parseFloat(e.target.value))} />
        <br />

        <label>Price Per Unit Per Cost Item: </label>
        {itemKeys != null ? Object.entries(itemKeys).map(([key, value]) => 
            <div key={key}>
                <span>{key}: </span>
                <input type="number" id={"cfg"+key} onChange={(e) => setItemCost(key, parseFloat(e.target.value))} />
            </div>
        ) : (<div></div>) }

        <button onClick={handleSave}>Load default</button>
    </div>
        );
}

export default ProjectConfigurationEditor;