"use client";

import React, { useState } from "react";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button"
import { useI18n } from "@/hooks/use-i18n";

 const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

type ServicioKey =
  | "titulo0"
  | "descripcion0"
  | "titulo1"
  | "descripcion1"
  | "descripcion11"
  | "titulo2"
  | "descripcion2"

const servicios: { titulo: ServicioKey; descripcion: ServicioKey; subdescripcion?: ServicioKey }[] = [
  {
    titulo: "titulo0",
    descripcion: "descripcion0",
  },
  {
    titulo: "titulo1",
    descripcion: "descripcion1",
    subdescripcion: "descripcion11"
  },
  {
    titulo: "titulo2",
    descripcion: "descripcion2",
  }
];

const CarouselSection = () => {
  const { t } = useI18n()
  const ref = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const serviciosDuplicados = [...servicios, ...servicios];
  const totalServicios = servicios.length;

  console.log(currentIndex * 100)

  const irIzquierda = () => {
    setCurrentIndex((prev) => {
      const newIndex = prev - 1;
      // Si llegamos al inicio, saltamos al final de la primera serie
      return newIndex < 0 ? totalServicios - 1 : newIndex;
    });
  };

  const irDerecha = () => {
    setCurrentIndex((prev) => {
      const newIndex = prev + 1;
      // Si llegamos al final de la primera serie, saltamos al inicio
      return newIndex >= totalServicios ? 0 : newIndex;
    });
  };

  return (
    <main ref={ref} className="py-10">

      <div className="relative h-[50vh] z-0 w-full m-0 p-0 xl:h-80 overflow-hidden">
      {/* Botón Izquierda */}
      <button
        onClick={irIzquierda}
        className="absolute left-5 xl:left-60 top-1/2 transform -translate-y-1/2 z-20 
                   bg-white/80 hover:bg-white shadow-lg rounded-full p-3 
                   transition-all duration-200 hover:scale-110 cursor-pointer"
        aria-label="Servicio anterior"
      >
        <ChevronLeft size={24} className="text-gray-800" />
      </button>

      {/* Botón Derecha */}
      <button
        onClick={irDerecha}
        className="absolute right-5 xl:right-60 top-1/2 transform -translate-y-1/2 z-20 
                   bg-white/80 hover:bg-white shadow-lg rounded-full p-3 
                   transition-all duration-200 hover:scale-110 cursor-pointer"
        aria-label="Siguiente servicio"
      >
        <ChevronRight size={24} className="text-gray-800" />
      </button>

      {/* Contenedor del carrusel */}
    
        <div 
          className="absolute z-10 bottom-0 top-0 left-0 right-0 flex justify-center items-center min-w-max h-full transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}vw)`}}
        >
          {serviciosDuplicados.map((servicio, index) => (
            <div key={index} className="flex flex-col items-center text-center w-[100vw] m-0 gap-2 sm:gap-5">
              <h3 className="text-lg sm:text-3xl lg:text-5xl font-semibold mb-2">{t(servicio.titulo)}</h3>
              <p className="text-gray-600 sm:text-lg lg:text-2xl w-1/2">{t(servicio.descripcion)}</p>
              {
                servicio.subdescripcion &&
                <p className="text-gray-600 sm:text-lg lg:text-2xl w-1/2">{t(servicio.subdescripcion)}</p>
              }
               <div>
                  <Button
                    onClick={scrollToContact}
                    size="lg"
                    className="bg-chart-3 hover:bg-chart-4 text-white px-8 py-3 text-lg transition-all duration-300 transform hover:scale-105 cursor-pointer"
                  >
                    {t("btnCarrusel")}
                  </Button>
                </div>
            </div>
          ))}
        </div>

      {/* Indicadores opcionales */}
      <div className="absolute bottom-0 xl:bottom-0 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
        {servicios.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              currentIndex === index 
                ? 'bg-chart-1' 
                : 'bg-gray-200 hover:bg-gray-400'
            }`}
            aria-label={`Ir al servicio ${index + 1}`}
          />
        ))}
      </div>
    </div>
    </main>
  );
};

export default CarouselSection;
