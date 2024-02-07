"use client"
import '@/app/globals.css'

import { useState } from 'react';

export default function CategoriesGrid(){

    const [hoveredIndex, setHoveredIndex] = useState<null | number>(null);

    return (
        <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-6">

            <div className="relative w-full h-[300px] md:h-[80vh] md:col-span-2 md:row-span-2 main-sneaker">
                <div 
                    className="relative w-full h-[300px] md:h-[80vh]"
                    onMouseEnter={() => setHoveredIndex(0)}
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    <div className={`absolute cursor-pointer inset-0 bg-black bg-opacity-90 duration-500 flex items-center justify-center ${hoveredIndex === 0 ? 'opacity-100' : 'opacity-0'}`}>
                        <p className="text-white text-center text-2xl font-bold">SHOES COLLECTION</p>
                    </div>
                </div>
            </div>

            <div 
                className="border men-sneaker-col md:min-w-[150px] min-h-[100px] relative"
                onMouseEnter={() => setHoveredIndex(1)}
                onMouseLeave={() => setHoveredIndex(null)}
            >
                <div className={`absolute inset-0 cursor-pointer bg-black bg-opacity-90 flex duration-300 items-center justify-center ${hoveredIndex === 1 ? 'opacity-100' : 'opacity-0'}`}>
                    <p className="text-white text-center text-2xl font-bold">MEN COLLECTION</p>
                </div>
            </div>
            <div 
                className="border woman-sneaker-col md:min-w-[150px] min-h-[100px] relative"
                onMouseEnter={() => setHoveredIndex(2)}
                onMouseLeave={() => setHoveredIndex(null)}
            >
                <div className={`absolute cursor-pointer  inset-0 bg-black bg-opacity-90 flex duration-300 items-center justify-center ${hoveredIndex === 2 ? 'opacity-100' : 'opacity-0'}`}>
                    <p className="text-white text-center text-2xl font-bold">WOMEN COLLECTION</p>
                </div>
            </div>
            <div 
                className="border kids-sneaker-col md:min-w-[150px] min-h-[100px] relative"
                onMouseEnter={() => setHoveredIndex(3)}
                onMouseLeave={() => setHoveredIndex(null)}
            >
                <div className={`absolute inset-0 bg-black cursor-pointer bg-opacity-90 flex duration-300 items-center justify-center ${hoveredIndex === 3 ? 'opacity-100' : 'opacity-0'}`}>
                    <p className="text-white text-center text-2xl font-bold">KIDS COLLECTION</p>
                </div>
            </div>
            <div 
                className="border new-sneaker-col md:min-w-[150px] min-h-[100px] relative"
                onMouseEnter={() => setHoveredIndex(4)}
                onMouseLeave={() => setHoveredIndex(null)}
            >
                <div className={`absolute inset-0 bg-black cursor-pointer bg-opacity-90 flex duration-300 items-center justify-center ${hoveredIndex === 4 ? 'opacity-100' : 'opacity-0'}`}>
                    <p className="text-white text-center text-2xl font-bold">NEW ARRIVALS</p>
                </div>
            </div>
        </div>
    );
}

