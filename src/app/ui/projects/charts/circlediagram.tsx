
'use client'
import {Pie, PieChart} from "recharts";

export const CircleDiagram = ({ data }) => {

  const keys = Object.keys(data);
  const money = Object.values(data);
  if (keys){
    keys.map((k, _)=>{
      console.log('found key '+k);
    });

  }else{
    console.log('no keys found in data '+data);
  }
  const mappedData = keys.map(k => {
    return {name: k, data: data[k]}
  }
  );
const internalData = [
    { name: 'Geeksforgeeks', students: 400 },
    { name: 'Technical scripter', students: 700 },
    { name: 'Geek-i-knack', students: 200 },
    { name: 'Geek-o-mania', students: 1000 }
];

  return (
    <div>
    <PieChart width={100} height={100}>
        <Pie data={mappedData} nameKey="name" dataKey="data"  outerRadius={80}  />
    </PieChart>
    </div>
  );
}

export default CircleDiagram;
