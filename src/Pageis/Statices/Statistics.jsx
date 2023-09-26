
import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

import { PieChart, Pie, Cell, Legend, Tooltip } from 'recharts';
const Statistics = () => {
 
   const [tadded,setTadded] =useState()
  useEffect(()=>{
    const i = JSON.parse(localStorage.getItem("price"));
    const your_doned = i.length; 
   setTadded(your_doned)
  },[])
    const loader = useLoaderData();
    const total = loader.length;
  const data = [
    { name: 'Your Doned', value:tadded},
    { name: 'Total Doned', value: total},
  ];

  const COLORS = ['#0088FE', '#00C49F'];
  const RADIAN = (tadded/total);
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

  return (
<div className='container mx-auto flex justify-center items-center'>
      <PieChart width={600} height={500}>
      <Pie
        data={data}
        dataKey="value"
        cx={300}
        cy={200}
        outerRadius={140}
        fill="#f542aa"
        labelLine={false}
        label={renderCustomizedLabel}
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
    </div> 
  );
};

export default Statistics;
