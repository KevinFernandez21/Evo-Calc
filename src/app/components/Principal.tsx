"use client";
import React from 'react';

interface NavbarProps {
    setActivePage: (page: string) => void;
}

const Principal: React.FC<NavbarProps> = ({ setActivePage }) => { 
    return (
        <div className='px-5 py-5'>
            <div className='py-5 '>
                <h1 className='text-center text-[80px] font-bold py-5 text-[rgb(27,41,55)]'>Evo-Calc</h1>
                <h1 className='hidden xl:flex text-center text-[30px] px-12'>Evo-Calc es un proyecto increíble que hemos creado para ayudarles a explorar y aprender más sobre matemáticas de una manera divertida y sencilla.</h1>
            </div>
            <div className='py-5'>
                <div className='text-center text-[35px] bg-[rgb(27,41,55)] text-white uppercase p-4'>Evo-cal, simplifica las matematicas</div>
                <ul className='xl:flex py-5'>
                    <li className='xl:w-1/2 px-4'>
                        <div className='text-[25px] text-center py-4'>Calculadora Básica 📊</div>
                        <div className='justify-normal py-4'>Esta calculadora les permitirá realizar operaciones matemáticas básicas como suma, resta, multiplicación y división. Es perfecta para resolver problemas rápidos y aprender los fundamentos de las matemáticas.</div>
                        <div>
                            <div>
                                <iframe src="https://giphy.com/embed/l4Jz19hgVBnCCM8uY" width="100%" height="100%" frameBorder="0" allowFullScreen></iframe>
                            </div>
                            <p>
                                <a href="https://giphy.com/gifs/maths-sums-addition-l4Jz19hgVBnCCM8uY"></a>
                            </p>
                        </div>
                        <div className='text-center'>
                            <button onClick={() => setActivePage('basic')} className='rounded-xl bg-[rgb(27,41,55)] m-4 p-4 text-white'>Calculadora Básica</button>
                        </div>
                    </li>
                    <li className='xl:w-1/2 px-5 '>
                        <div className='text-[25px] text-center py-4'>Calculadora de Gráfica 📐</div>
                        <div className='justify-normal py-4'>Aquí es donde las cosas se ponen interesantes. Con esta calculadora, podrán introducir funciones matemáticas y obtener sus derivadas. Además, ¡también podrán ver gráficas de las funciones!.</div>
                        <div>
                            <div>
                                <iframe src="https://giphy.com/embed/zPbnEgxsPJOJSD3qfr" width="100%" height="100%" frameBorder="0" allowFullScreen></iframe>
                            </div>
                            <p>
                                <a href="https://giphy.com/gifs/jk-maru-marujon-zPbnEgxsPJOJSD3qfr"></a>
                            </p>
                        </div>
                        <div className='text-center '>
                            <button onClick={() => setActivePage('derivative')} className='rounded-xl bg-[rgb(27,41,55)] m-4 p-4 text-white'>Calculadora de Derivadas</button>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Principal;
