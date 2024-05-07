
import {Pie, PieChart} from "recharts";

export const CircleDiagram = ({ data }) => {

 
const internalData = [
    { name: 'Geeksforgeeks', students: 400 },
    { name: 'Technical scripter', students: 700 },
    { name: 'Geek-i-knack', students: 200 },
    { name: 'Geek-o-mania', students: 1000 }
];


return (
    <PieChart width={700} height={700}>
        <Pie data={internalData} dataKey="students" outerRadius={250} fill="green" />
    </PieChart>
);
}
