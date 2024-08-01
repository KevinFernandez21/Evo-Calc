"use client";
import React from 'react';
const Principal: React.FC = () => { 
    return(
        <div className='px-5 py-5'>
            <div className='py-5'>
                <h1 className='text-center text-[50px] font-bold py-5'>Evo-cals</h1>
                <h1 className='text-center'>Evo-Calc es un proyecto increíble que hemos creado para ayudarles a explorar y aprender más sobre matemáticas de una manera divertida y sencilla.</h1>
            </div>
            <div className='py-5'>
                <div className='text-center'>Evo-cal, simplifica las matematicas</div>
                <ul className='flex py-5'>
                    <li className='w-1/2 px-4'>
                        <div className='text-center'>Calculadora Básica 📊</div>
                        <div>Esta calculadora les permitirá realizar operaciones matemáticas básicas como suma, resta, multiplicación y división. Es perfecta para resolver problemas rápidos y aprender los fundamentos de las matemáticas.</div>
                        <div><div ><iframe src="https://giphy.com/embed/l4Jz19hgVBnCCM8uY" width="100%" height="100%"  frameBorder="0"  allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/maths-sums-addition-l4Jz19hgVBnCCM8uY"></a></p></div>
                        <div className='text-center'>
                        <button>Calculadora de Derivadas</button>
                        </div>
                    </li>
                    <li className='w-1/2 px-5 '>
                        <div className='text-center'>Calculadora de Derivadas 📐</div>
                        <div>Aquí es donde las cosas se ponen interesantes. Con esta calculadora, podrán introducir funciones matemáticas y obtener sus derivadas. Además, ¡también podrán ver gráficas de las funciones!.</div>
                        <div><div ><iframe src="https://giphy.com/embed/l4Jz19hgVBnCCM8uY" width="100%" height="100%"  frameBorder="0"  allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/maths-sums-addition-l4Jz19hgVBnCCM8uY"></a></p></div>
                        <div className='text-center'>
                        <button>Calculadora de Derivadas</button>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}
export default Principal;