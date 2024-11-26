import React from "react";
 
const Foter = () => {
    return(
    <footer className="bg-black border-red-500 border-t-2 border-b-2 bg-opacity-80 mt-10  text-center py-4">
    <nav className="flex justify-center items-center space-x-6">
        <a href="#contacto" className="text-white font-bold hover:text-gray-300">CONTACTO</a>
        <a href="#privacidad" className="text-white font-bold hover:text-gray-300">PRIVACIDAD</a>
        <a href="#terminos" className="text-white font-bold hover:text-gray-300">TÉRMINOS Y CONDICIONES</a>
        <a href="#ayuda" className="text-white font-bold italic hover:text-gray-300">AYUDA</a>
        <a href="#redes" className="text-white font-bold hover:text-gray-300">REDES SOCIALES</a>
        <a href="#soporte" className="text-white font-bold hover:text-gray-300">SOPORTE</a>
    </nav>
    <p className="text-white mt-4 text-sm">© 2024 Darky's. Todos los derechos reservados.</p>
</footer>

    );
};

export default Foter;