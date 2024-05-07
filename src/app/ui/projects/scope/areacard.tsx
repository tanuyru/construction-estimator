import styles from "@/app/page.module.css";
import { components }  from '@/app/lib/nettlesbackend';
import React from 'react';
import {Link} from 'react-router-dom';
import nettlesStyles from "@/app/nettles.module.css";

export default function AreaCard(props) {

return (
 
      <li className={nettlesStyles.cardchild}>
           <h2>{props.area.areaName}</h2>
          <p>This is an area for a scope with a size of {props.area.sizeSqFt} square feet</p>
      </li>
);
}

