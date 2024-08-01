"use client";

import React, { useState } from 'react';
import { derivative, evaluate } from 'mathjs';
import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import Graph from './Graph';
import CalculatorButtons from './CalculatorButtons';

const DerivativeCalculator: React.FC = () => {
  const [expression, setExpression] = useState<string>('');
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleButtonClick = (value: string) => {
    setExpression((prev) => prev + value);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setExpression(e.target.value);
  };

  const calculateDerivative = () => {
    try {
      setError(null);
      const sanitizedExpression = expression.replace(/\\/g, '');
      const firstDerivative = derivative(sanitizedExpression, 'x').toString();
      setResult(firstDerivative);
    } catch (err) {
      setResult(null);
      setError('No se puede calcular la derivada de la expresión dada.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-100 p-4">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <h2 className="text-3xl font-bold mb-4 text-center">Calculadora de Derivadas</h2>
        <input
          type="text"
          value={expression}
          onChange={handleChange}
          placeholder="Ingrese la función en x"
          className="w-full p-2 mb-4 border rounded text-center"
        />
        <CalculatorButtons onButtonClick={handleButtonClick} />
        <button
          onClick={calculateDerivative}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4 w-full"
        >
          Calcular Derivada
        </button>
        {result && (
          <div className="mt-4">
            <h3 className="text-xl font-bold">Resultado:</h3>
            <BlockMath>{`\\frac{d}{dx}(${expression}) = ${result}`}</BlockMath>
            <Graph expression={result} />
          </div>
        )}
        {error && (
          <div className="mt-4 text-red-500">
            <h3 className="text-xl font-bold">Error:</h3>
            <p>{error}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DerivativeCalculator;
