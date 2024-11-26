"use client"; // Necesario si estás usando Next.js con Client Components.

import { useState } from "react";

const images = [
    "/images/photo1.jpg",
    "/images/photo2.jpg",
    "/images/photo3.jpg",
];

export default function Carousel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className="relative w-screen h-screen overflow-hidden bg-black">
            {/* Contenedor de imágenes */}
            <div
                className="flex h-screen transition-transform duration-100 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {images.map((image, index) => (
                    <div key={index} className="w-screen h-screen flex-shrink-0">   
                        <img
                            src={image}
                            alt={`Slide ${index + 1}`}
                            className="w-screen h-screen object-cover"
                        />
                    </div>
                ))}
            </div>

            {/* Botones de navegación */}
            <button
                onClick={handlePrev}
                className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-opacity-0 text-white text-5xl px-4 py-2 rounded-full hover:bg-opacity-75"
            >
                ‹
            </button>
            <button
                onClick={handleNext}
                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-opacity-0 text-white text-5xl px-4 py-2 rounded-full hover:bg-opacity-75"
            >
                ›
            </button>

            {/* Indicadores */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-3 h-3 rounded-full ${
                            index === currentIndex
                                ? "bg-white"
                                : "bg-gray-500"
                        }`}
                    />
                ))}
            </div>
        </div>
    );
}
