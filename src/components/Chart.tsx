import React from 'react';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from 'recharts';

const data = [
  { days: 0, accuracy: 100, dropout: 100 },
  { days: 30, accuracy: 95, dropout: 80 },
  { days: 60, accuracy: 95, dropout: 40 },
  { days: 90, accuracy: 90, dropout: 30 },
  { days: 120, accuracy: 100, dropout: 20 },
];

export const Chart = () => {
  return (
    <div className="h-64 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis 
            dataKey="days" 
            tickLine={false}
            axisLine={true}
            tick={{ fill: '#9CA3AF', fontSize: 12 }}
          />
          <YAxis 
            hide={true}
          />
          <Line 
            type="monotone" 
            dataKey="accuracy" 
            stroke="#F97316" 
            strokeWidth={2}
            dot={false}
          />
          <Line 
            type="monotone" 
            dataKey="dropout" 
            stroke="#93C5FD" 
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}