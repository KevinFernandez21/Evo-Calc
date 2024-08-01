"use client";

import React from 'react';
import { InlineMath } from 'react-katex';

interface CalculatorButtonsProps {
  onButtonClick: (value: string) => void;
}

const buttons = [
  { value: '7', label: '7' }, { value: '8', label: '8' }, { value: '9', label: '9' }, { value: '/', label: '\\div' }, 
  { value: '4', label: '4' }, { value: '5', label: '5' }, { value: '6', label: '6' }, { value: '*', label: '\\times' }, 
  { value: '1', label: '1' }, { value: '2', label: '2' }, { value: '3', label: '3' }, { value: '-', label: '-' }, 
  { value: '0', label: '0' }, { value: '.', label: '.' }, { value: '=', label: '=' }, { value: '+', label: '+' },
  { value: 'x', label: 'x' }, { value: 'y', label: 'y' }, { value: 'π', label: '\\pi' }, { value: 'e', label: 'e' },
  { value: '(', label: '(' }, { value: ')', label: ')' }, { value: '^', label: '^' }, { value: 'sqrt(', label: '\\sqrt{}' },
  { value: 'x^2', label: 'x^2' }, { value: '\\frac{}{}', label: '\\frac{}{}' }, { value: 'sin(', label: '\\sin' }, { value: 'cos(', label: '\\cos' }, { value: 'tan(', label: '\\tan' }
];

const CalculatorButtons: React.FC<CalculatorButtonsProps> = ({ onButtonClick }) => {
  return (
    <div className="grid grid-cols-4 gap-2">
      {buttons.map(({ value, label }) => (
        <button
          key={value}
          onClick={() => onButtonClick(value)}
          className="bg-gray-200 p-2 rounded-lg flex items-center justify-center min-h-[3rem] shadow-sm hover:bg-gray-300 transition-colors duration-200"
        >
          <InlineMath>{label}</InlineMath>
        </button>
      ))}
    </div>
  );
};

export default CalculatorButtons;
