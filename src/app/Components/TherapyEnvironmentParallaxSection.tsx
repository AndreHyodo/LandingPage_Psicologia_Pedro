'use client'

import React from "react";
import ParallaxSection from "./ParallaxSection"; 
import { Button } from "@/components/ui/button" 
import { publicUrl } from "./PublicUrl";

export default function MeditationRoomParallaxSection() {
  return (
    <ParallaxSection
      image={publicUrl("/meditation-room.jpg")}
      title="Comece sua jornada"
      subtitle="Dê o primeiro passo rumo ao bem-estar hoje"
      speed={0.4}
      overlay={true}
    >
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight fade-in">
          Um espaço seguro para a cura
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl mb-8 opacity-90 fade-in" style={{ animationDelay: '0.2s' }}>
          Vivencie tranquilidade em nosso ambiente terapêutico moderno
        </p>
        <div className="fade-in" style={{ animationDelay: '0.3s' }}>
          <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
            Nossas salas de terapia, cuidadosamente projetadas, oferecem o ambiente ideal para a sua jornada de bem-estar e autoconhecimento.
          </p>
          <Button
            size="lg"
            className="bg-white/20 backdrop-blur-sm border-white/30 hover:bg-white/30 text-white transform hover:scale-105 transition-all duration-300"
          >
            Faça um tour virtual
          </Button>
        </div>
      </div>
      <style jsx global>{`
        .parallax-image {
          will-change: transform;
          transition: transform 0.1s ease-out;
        }
        .fade-in {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease-out;
        }
        .fade-in.visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </ParallaxSection>
  );
}