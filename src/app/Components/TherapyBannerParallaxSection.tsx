'use client'

import { Button } from "@/components/ui/button"
import { BookOpen, UserCheck, ShieldCheck } from "lucide-react"
import React from "react"
import { publicUrl } from "./PublicUrl"

type TherapyBannerParallaxSectionProps = {
  scrollToSection: (ref: React.RefObject<HTMLDivElement | null>) => void
  contactRef: React.RefObject<HTMLDivElement | null>
  heroRef?: React.RefObject<HTMLDivElement | null>
}

export default function TherapyBannerParallaxSection({
  scrollToSection,
  contactRef,
  heroRef,
}: TherapyBannerParallaxSectionProps) {
  return (
    <section ref={heroRef}>
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Imagem Parallax */}
        <div
          className="parallax-image absolute inset-0 bg-cover bg-center bg-no-repeat"
          data-speed={0.2}
          style={{
            backgroundImage: `url(${publicUrl("/hero-psychologist.jpg")})`,
            willChange: "transform",
          }}
        />
        {/* Overlay para contraste */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
        {/* Conteúdo */}
        <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight fade-in">
            Psicologia com excelência e acolhimento
          </h1>
          <p
            className="text-xl md:text-2xl lg:text-3xl mb-8 opacity-95 fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            Atendimento individual, baseado em evidências e centrado em você.
          </p>

          <div className="fade-in" style={{ animationDelay: "0.4s" }}>
            <Button
              size="lg"
              className="text-lg px-8 py-6 bg-blue-600 hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl mr-4"
              onClick={() => scrollToSection(contactRef)}
              aria-label="Agendar conversa inicial"
              title="Agendar conversa inicial"
            >
              Agendar conversa inicial
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 py-6 bg-white/20 backdrop-blur-sm border-white/30 hover:bg-white/30 transform hover:scale-105 transition-all duration-300 text-white"
              aria-label="Conhecer minha abordagem"
              title="Conhecer minha abordagem"
            >
              Conhecer abordagem
            </Button>
          </div>

          <div
            className="flex flex-wrap items-center justify-center gap-8 mt-8 fade-in"
            style={{ animationDelay: "0.6s" }}
          >
            <div className="flex items-center gap-2 text-white/90">
              <BookOpen className="h-5 w-5 text-[#9BD0FF]" />
              <span className="text-sm font-medium">Prática baseada em evidências</span>
            </div>
            <div className="flex items-center gap-2 text-white/90">
              <UserCheck className="h-5 w-5 text-[#A7F3D0]" />
              <span className="text-sm font-medium">Supervisão clínica contínua</span>
            </div>
            <div className="flex items-center gap-2 text-white/90">
              <ShieldCheck className="h-5 w-5 text-[#34D399]" />
              <span className="text-sm font-medium">Confidencialidade assegurada</span>
            </div>
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
      </div>
    </section>
  )
}