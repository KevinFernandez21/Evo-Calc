"use client";

import React, { useState } from 'react';
import { evaluate } from 'mathjs';

interface HistoryItem {
    expression: string;
    result: string;
}

const BasicCalculator: React.FC = () => {
    const [expression, setExpression] = useState<string>('');
    const [result, setResult] = useState<string>('');
    const [history, setHistory] = useState<HistoryItem[]>([]);

    const handleButtonClick = (value: string) => {
        setExpression((prev) => prev + value);
    };

    const calculateResult = () => {
        try {
        const evaluatedResult = evaluate(expression).toString();
        setResult(evaluatedResult);
        setHistory([{ expression, result: evaluatedResult }, ...history]);
        } catch {
        setResult('Error');
        }
    };

    const clear = () => {
        setExpression('');
        setResult('');
    };

    const loadFromHistory = (item: HistoryItem) => {
        setExpression(item.expression);
        setResult(item.result);
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <div className="bg-white p-6 rounded shadow-md w-96">
            <div className="text-3xl font-bold mb-4">Calculadora Básica</div>
            <input
            type="text"
            value={expression}
            readOnly
            className="w-full p-2 mb-4 border rounded text-right"
            />
            <div className="grid grid-cols-4 gap-2">
            {['7', '8', '9', '/'].map((value) => (
                <button
                key={value}
                onClick={() => handleButtonClick(value)}
                className="bg-gray-200 p-2 rounded"
                >
                {value}
                </button>
            ))}
            {['4', '5', '6', '*'].map((value) => (
                <button
                key={value}
                onClick={() => handleButtonClick(value)}
                className="bg-gray-200 p-2 rounded"
                >
                {value}
                </button>
            ))}
            {['1', '2', '3', '-'].map((value) => (
                <button
                key={value}
                onClick={() => handleButtonClick(value)}
                className="bg-gray-200 p-2 rounded"
                >
                {value}
                </button>
            ))}
            {['0', '.', '=', '+'].map((value) => (
                <button
                key={value}
                onClick={() => (value === '=' ? calculateResult() : handleButtonClick(value))}
                className={`p-2 rounded ${value === '=' ? 'bg-green-500 text-white' : 'bg-gray-200'}`}
                >
                {value}
                </button>
            ))}
            </div>
            <button onClick={clear} className="mt-4 bg-red-500 text-white p-2 rounded w-full">
            Clear
            </button>
            <div className="mt-4 text-right text-2xl">{result}</div>
            <div className="mt-4">
            <h3 className="text-xl font-bold mb-2">Historial</h3>
            <ul className="list-disc list-inside">
                {history.map((item, index) => (
                <li key={index} onClick={() => loadFromHistory(item)} className="cursor-pointer">
                    {item.expression} = {item.result}
                </li>
                ))}
            </ul>
            </div>
        </div>
        </div>
    );
};

export default BasicCalculator;
