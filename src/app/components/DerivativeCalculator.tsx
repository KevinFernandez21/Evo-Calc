import React, { useState } from 'react';
import { derivative } from 'mathjs';
import Graph from './Graph';

const DerivativeCalculator: React.FC = () => {
    const [expression, setExpression] = useState<string>('');
    const [result, setResult] = useState<string | null>(null);

    const calculateDerivative = () => {
        try {
        const firstDerivative = derivative(expression, 'x').toString();
        setResult(firstDerivative);
        } catch {
        setResult('Error');
        }
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-green-100">
        <div className="bg-white p-6 rounded shadow-md w-96">
            <h2 className="text-3xl font-bold mb-4">Calculadora de Derivadas</h2>
            <input
            type="text"
            value={expression}
            onChange={(e) => setExpression(e.target.value)}
            placeholder="Ingrese la función en x"
            className="w-full p-2 mb-4 border rounded"
            />
            <button
            onClick={calculateDerivative}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            >
            Calcular Derivada
            </button>
            {result && (
            <div className="mt-4">
                <h3 className="text-xl font-bold">Resultado: {result}</h3>
                <Graph expression={result} />
            </div>
            )}
        </div>
        </div>
    );
};

export default DerivativeCalculator;
