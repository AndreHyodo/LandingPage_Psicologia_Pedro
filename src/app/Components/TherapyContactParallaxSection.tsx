import React from "react";
import { Button } from "@/components/ui/button"

const ParallaxSection = ({ 
    image, 
    title, 
    subtitle, 
    children, 
    speed = 0.1,
    overlay = true,
    className = ""
  }: {
    image: string
    title?: string
    subtitle?: string
    children?: React.ReactNode
    speed?: number
    overlay?: boolean
    className?: string
  }) => (
    <div className={`relative h-screen flex items-center justify-center overflow-hidden ${className}`}>
      <div 
        className="parallax-image absolute inset-0 bg-cover bg-center bg-no-repeat"
        data-speed={speed}
        style={{ 
          backgroundImage: `url(${image})`,
          willChange: 'transform'
        }}
      />
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
      )}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        {title && (
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight fade-in">
            {title}
          </h1>
        )}
        {subtitle && (
          <p className="text-xl md:text-2xl lg:text-3xl mb-8 opacity-90 fade-in" style={{ animationDelay: '0.2s' }}>
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </div>
  )

// Passe contactRef e scrollToSection como props se necessário
export function TherapyContactParallaxSection({ contactRef, scrollToSection }) {
  return (
    <section>
      <ParallaxSection
        image="/reception-area.jpg"
        title="Comece sua jornada"
        subtitle="Dê o primeiro passo rumo ao bem-estar hoje"
        speed={0.3}
        overlay={true}
      >
        <div className="fade-in" style={{ animationDelay: '0.3s' }}>
          <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
            Nosso ambiente acolhedor e equipe profissional estão aqui para apoiar você em sua jornada de saúde mental e crescimento pessoal.
          </p>
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            onClick={() => scrollToSection(contactRef)}
          >
            Agendar Consulta
          </Button>
        </div>
      </ParallaxSection>
    </section>
  );
}