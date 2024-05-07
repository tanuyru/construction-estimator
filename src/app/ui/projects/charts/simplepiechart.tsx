import React from 'react';
import { PureComponent } from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'A', value: 20 },
  { name: 'B', value: 30 },
  { name: 'C', value: 50 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28','#0000FE', '#0AC29F', '#F0DA28'];

const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
  const RADIAN = Math.PI / 180;
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const SimplePieChart = ({argData, keyCol = 'name', valCol = 'value'})  =>{
    console.log('rendering piechart with '+argData.length+' items');

return (
  <div>
  <PieChart id="simplpiechart" width={200} height={200}>
    <Pie
    isAnimationActive={false}
      data={argData}
      dataKey={valCol}
      nameKey={keyCol}
      cx={100}
      cy={100}
      labelLine={false}
      label={renderCustomizedLabel}
      outerRadius={80}
      fill="#8884d8"
    >
      {
        data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))
      }
    </Pie>
    <Tooltip />
  </PieChart>
  </div>
);
}
export default SimplePieChart;