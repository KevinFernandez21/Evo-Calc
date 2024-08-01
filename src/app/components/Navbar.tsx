import React from 'react';

interface NavbarProps {
    setActivePage: (page: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ setActivePage }) => (
    <nav className="bg-gray-800 p-4">
        <div className="flex justify-between">
        <div className="text-white text-xl font-bold">Calculadora Científica</div>
        <div>
            <button
            onClick={() => setActivePage('basic')}
            className="text-white mx-2"
            >
            Básica
            </button>
            <button
            onClick={() => setActivePage('derivative')}
            className="text-white mx-2"
            >
            Derivadas
            </button>
        </div>
        </div>
    </nav>
);

export default Navbar;