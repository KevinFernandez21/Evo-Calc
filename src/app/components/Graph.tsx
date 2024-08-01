"use client";

import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';
import { evaluate } from 'mathjs';

// Registrando los módulos necesarios de chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface GraphProps {
  expression: string;
}

const Graph: React.FC<GraphProps> = ({ expression }) => {
  const data = {
    labels: Array.from({ length: 21 }, (_, i) => i - 10),
    datasets: [
      {
        label: 'Función Derivada',
        data: Array.from({ length: 21 }, (_, i) => {
          const x = i - 10;
          try {
            return evaluate(expression, { x });
          } catch {
            return null;
          }
        }),
        borderColor: 'rgba(75,192,192,1)',
        fill: false,
      },
    ],
  };

  return (
    <div className="w-full mx-auto mt-6">
      <Line data={data} />
    </div>
  );
};

export default Graph;
