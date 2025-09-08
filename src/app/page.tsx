'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Phone, Mail, MapPin, Clock, Star, Heart, Users, Brain, Shield, ChevronDown } from "lucide-react"
import NextImage from 'next/image'
import { useEffect, useRef, useState } from "react"
import TherapyEnvironmentParallaxSection from "./Components/TherapyEnvironmentParallaxSection"
import TherapyBannerParallaxSection from "./Components/TherapyBannerParallaxSection"
import { TherapyContactParallaxSection } from "./Components/TherapyContactParallaxSection"
import { publicUrl } from "./Components/PublicUrl"

export default function Home() {
  const heroRef = useRef<HTMLDivElement | null>(null)
  const aboutRef = useRef<HTMLDivElement | null>(null)
  const servicesRef = useRef<HTMLDivElement | null>(null)
  const approachRef = useRef<HTMLDivElement | null>(null)
  const testimonialsRef = useRef<HTMLDivElement | null>(null)
  const contactRef = useRef<HTMLDivElement | null>(null)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset
      setScrollY(scrolled)

      // Animações de fade-in
      const fadeElements = document.querySelectorAll('.fade-in')
      fadeElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top
        const elementVisible = 150
        
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('visible')
        }
      })

      // Animações de escala para imagens
      const scaleElements = document.querySelectorAll('.scale-on-scroll')
      scaleElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top
        const elementHeight = element.getBoundingClientRect().height
        const scrollProgress = Math.max(0, Math.min(1, (window.innerHeight - elementTop) / (window.innerHeight + elementHeight)))
        const scale = 1 + (scrollProgress * 0.1)
        element.setAttribute('style', `transform: scale(${scale})`)
      })

      // Animação de flutuação
      const floatingElements = document.querySelectorAll('.floating')
      floatingElements.forEach((element) => {
        const time = Date.now() * 0.001
        const floatY = Math.sin(time + parseFloat(element.getAttribute('data-float-offset') || '0')) * 20
        const currentTransform = element.getAttribute('style') || ''
        const scaleMatch = currentTransform.match(/scale\(([\d.]+)\)/)
        const scale = scaleMatch ? scaleMatch[1] : '1'
        element.setAttribute('style', `transform: translateY(${floatY}px) scale(${scale})`)
      })
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Chamada inicial

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Navegação */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrollY > 100 ? 'bg-black/80 backdrop-blur-md' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
            <NextImage
              src={publicUrl("/icons/psychology.png")}
              alt="Símbolo de Psicologia"
              width={32}
              height={32}
              className="h-8 w-8 object-contain filter brightness-0 invert"
              priority
            />
              <span className="text-xl font-bold text-white">Pedro Sales </span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <button onClick={() => scrollToSection(heroRef)} className="text-white/80 hover:text-white transition-colors">
                Início
              </button>
              <button onClick={() => scrollToSection(aboutRef)} className="text-white/80 hover:text-white transition-colors">
                Sobre
              </button>
              <button onClick={() => scrollToSection(servicesRef)} className="text-white/80 hover:text-white transition-colors">
                Serviços
              </button>
              <button onClick={() => scrollToSection(approachRef)} className="text-white/80 hover:text-white transition-colors">
                Abordagem
              </button>
              <button onClick={() => scrollToSection(contactRef)} className="text-white/80 hover:text-white transition-colors">
                Contato
              </button>
            </div>
            <Button onClick={() => scrollToSection(contactRef)} className="bg-blue-600 hover:bg-blue-700 text-white">
              Agende sua consulta
            </Button>
          </div>
        </div>
      </nav>

      <TherapyBannerParallaxSection
        scrollToSection={scrollToSection}
        contactRef={contactRef}
        heroRef={heroRef}
      />

      {/* Seção Sobre */}
      <section ref={aboutRef} className="relative py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 fade-in">
              <div className="space-y-2">
                <Badge variant="outline" className="bg-blue-50 text-blue-600">Sobre Pedro Sales </Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Psicologia Aplicada
                </h2>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                Com mais de x anos de experiência em psicologia clínica, sou especializada em ajudar pessoas a superar ansiedade, depressão e desafios nos relacionamentos. Minha abordagem combina terapias baseadas em evidências com um cuidado compassivo e personalizado.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Acredito em criar um espaço seguro e sem julgamentos, onde você possa explorar seus pensamentos e sentimentos com tranquilidade. Juntos, trabalharemos para compreender seus desafios e desenvolver estratégias práticas para mudanças duradouras.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="text-center p-4 bg-blue-50 rounded-lg transform hover:scale-105 transition-all duration-300">
                  <div className="text-2xl font-bold text-blue-600">15+</div>
                  <div className="text-sm text-gray-600">Anos de Experiência</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg transform hover:scale-105 transition-all duration-300">
                  <div className="text-2xl font-bold text-green-600">1000+</div>
                  <div className="text-sm text-gray-600">Clientes Atendidos</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="scale-on-scroll rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={publicUrl("/meditation-room.jpg")}
                  alt="Sessão de Terapia" 
                  className="w-full h-96 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Serviços */}
      <section ref={servicesRef} className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 fade-in">
            <Badge variant="outline" className="bg-blue-50 text-blue-600">Nossos Serviços</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-4">
              Serviços Abrangentes de Saúde Mental
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Oferecemos uma variedade de serviços terapêuticos, adaptados às suas necessidades e objetivos individuais.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Brain,
                color: "blue",
                title: "Terapia Individual",
                description: "Sessões individuais para crescimento pessoal e cura",
                items: ["Tratamento de ansiedade e depressão", "Recuperação de trauma e TEPT", "Gerenciamento de estresse", "Fortalecimento da autoestima"]
              },
              {
                icon: Users,
                color: "green",
                title: "Terapia de Casal",
                description: "Fortaleça o relacionamento e a comunicação",
                items: ["Habilidades de comunicação", "Resolução de conflitos", "Questões de intimidade", "Reconstrução do relacionamento"]
              },
              {
                icon: Shield,
                color: "purple",
                title: "Terapia Familiar",
                description: "Cure dinâmicas familiares e melhore os vínculos",
                items: ["Conflitos entre pais e filhos", "Comunicação na família", "Questões em famílias reconstituídas", "Apoio no luto e perdas"]
              },
              {
                icon: Brain,
                color: "orange",
                title: "Terapia Cognitivo-Comportamental",
                description: "Tratamento baseado em evidências para diversas condições",
                items: ["Padrões de pensamento negativos", "Mudanças comportamentais", "Desenvolvimento de habilidades", "Estratégias práticas"]
              },
              {
                icon: Heart,
                color: "red",
                title: "Terapia de Trauma",
                description: "Cuidado especializado para sobreviventes de trauma",
                items: ["Terapia EMDR", "Experiência Somática", "Tratamento de TEPT", "Regulação emocional"]
              },
              {
                icon: Users,
                color: "teal",
                title: "Terapia em Grupo",
                description: "Conecte-se com outros em um ambiente de apoio",
                items: ["Grupos de apoio", "Oficinas de habilidades", "Suporte entre pares", "Cura comunitária"]
              }
            ].map((service, index) => (
              <Card 
                key={index} 
                className="hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <service.icon className={`h-6 w-6 text-${service.color}-600`} />
                    {service.title}
                  </CardTitle>
                  <CardDescription>
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600">
                    {service.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Seção Ambiente de Terapia (Parallax) */}
      <section>
        <TherapyEnvironmentParallaxSection />
      </section>

      {/* Seção Abordagem */}
      <section ref={approachRef} className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 fade-in">
            <Badge variant="outline" className="bg-blue-50 text-blue-600">Nossa Abordagem</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-4">
              Cuidado por Meio de Métodos Baseados em Evidências
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Integramos abordagens terapêuticas comprovadas com um cuidado personalizado para alcançar os melhores resultados.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Brain,
                color: "blue",
                title: "Baseada em Evidências",
                description: "Métodos terapêuticos comprovados pela pesquisa"
              },
              {
                icon: Heart,
                color: "green",
                title: "Compassiva",
                description: "Cuidado acolhedor, empático e sem julgamentos"
              },
              {
                icon: Shield,
                color: "purple",
                title: "Confidencial",
                description: "Sua privacidade e segurança são prioridades"
              },
              {
                icon: Users,
                color: "orange",
                title: "Personalizada",
                description: "Planos de tratamento sob medida para você"
              }
            ].map((approach, index) => (
              <div 
                key={index} 
                className="text-center transform hover:scale-105 transition-all duration-300 fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-16 h-16 mx-auto bg-${approach.color}-100 rounded-full flex items-center justify-center mb-4 floating`} data-float-offset={index}>
                  <approach.icon className={`h-8 w-8 text-${approach.color}-600`} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{approach.title}</h3>
                <p className="text-gray-600">
                  {approach.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção Depoimentos */}
      <section ref={testimonialsRef} className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 fade-in">
            <Badge variant="outline" className="bg-blue-50 text-blue-600">Depoimentos</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-4">
              O que Nossos Clientes Dizem
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Histórias reais de pessoas que encontraram acolhimento e esperança com nossos serviços.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Jane D.",
                service: "Terapia Individual",
                initials: "JD",
                color: "blue",
                text: "A Dra. Johnson me ajudou a superar uma ansiedade que me acompanhava há anos. Sua abordagem compassiva e estratégias práticas transformaram minha vida."
              },
              {
                name: "Mike e Sarah",
                service: "Terapia de Casal",
                initials: "MS",
                color: "green",
                text: "A terapia de casal salvou nosso casamento. Aprendemos a nos comunicar de forma eficaz e reconstruímos nossa conexão. Obrigado por nos devolver o relacionamento."
              },
              {
                name: "Alex L.",
                service: "Terapia de Trauma",
                initials: "AL",
                color: "purple",
                text: "A terapia para trauma que recebi foi transformadora. A Dra. Johnson criou um ambiente seguro para que eu pudesse me curar e encontrar paz novamente."
              }
            ].map((testimonial, index) => (
              <Card 
                key={index} 
                className="hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 bg-${testimonial.color}-100 rounded-full flex items-center justify-center`}>
                      <span className="text-sm font-medium">{testimonial.initials}</span>
                    </div>
                    <div>
                      <p className="font-medium">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.service}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Seção de Contato (Parallax) */}
      <TherapyContactParallaxSection contactRef={contactRef} scrollToSection={scrollToSection} />

      {/* Seção Contato */}
      <section ref={contactRef} className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8 fade-in">
              <div className="space-y-4">
                <Badge variant="outline" className="bg-blue-50 text-blue-600">Fale Conosco</Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Informações de Contato
                </h2>
                <p className="text-lg text-gray-600">
                  Estamos aqui para ajudar você a dar o primeiro passo rumo à sua saúde emocional e crescimento.
                </p>
              </div>
              <div className="space-y-6">
                {[
                  {
                    icon: Phone,
                    color: "blue",
                    title: "Telefone",
                    content: "(555) 123-4567"
                  },
                  {
                    icon: Mail,
                    color: "green",
                    title: "E-mail",
                    content: "pedro_sales@therapy.com"
                  },
                  {
                    icon: MapPin,
                    color: "purple",
                    title: "Endereço",
                    content: "123 Wellness Street, Sala 100\nSan Francisco, CA 94102"
                  },
                  {
                    icon: Clock,
                    color: "orange",
                    title: "Horário",
                    content: "Seg–Sex: 9h às 18h\nSáb: 10h às 14h"
                  }
                ].map((contact, index) => (
                  <div 
                    key={index} 
                    className="flex items-center gap-4 transform hover:scale-105 transition-all duration-300"
                  >
                    <div className={`w-12 h-12 bg-${contact.color}-100 rounded-full flex items-center justify-center floating`} data-float-offset={index}>
                      <contact.icon className={`h-6 w-6 text-${contact.color}-600`} />
                    </div>
                    <div>
                      <p className="font-medium">{contact.title}</p>
                      <p className="text-gray-600 whitespace-pre-line">{contact.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <Card className="shadow-xl fade-in">
              <CardHeader>
                <CardTitle>Agende uma Consulta</CardTitle>
                <CardDescription>
                  Preencha o formulário abaixo para marcar sua consulta inicial
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium">Nome</label>
                    <input className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300" />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Sobrenome</label>
                    <input className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300" />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium">E-mail</label>
                  <input type="email" className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300" />
                </div>
                <div>
                  <label className="text-sm font-medium">Telefone</label>
                  <input type="tel" className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300" />
                </div>
                <div>
                  <label className="text-sm font-medium">Serviço de Interesse</label>
                  <select className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300">
                    <option>Terapia Individual</option>
                    <option>Terapia de Casal</option>
                    <option>Terapia Familiar</option>
                    <option>Terapia de Trauma</option>
                    <option>Terapia em Grupo</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium">Mensagem</label>
                  <textarea rows={4} className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"></textarea>
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 transform hover:scale-105 transition-all duration-300" size="lg">
                  Agendar Consulta
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Rodapé */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Brain className="h-8 w-8 text-blue-400" />
                <span className="text-xl font-bold">Pedro Sales</span>
              </div>
              <p className="text-gray-300">
                Serviços psicológicos profissionais para indivíduos, casais e famílias.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold">Serviços</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="hover:text-blue-400 transition-colors cursor-pointer">Terapia Individual</li>
                <li className="hover:text-blue-400 transition-colors cursor-pointer">Terapia de Casal</li>
                <li className="hover:text-blue-400 transition-colors cursor-pointer">Terapia Familiar</li>
                <li className="hover:text-blue-400 transition-colors cursor-pointer">Terapia de Trauma</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold">Links Rápidos</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="hover:text-blue-400 transition-colors cursor-pointer">Sobre Nós</li>
                <li className="hover:text-blue-400 transition-colors cursor-pointer">Nossa Abordagem</li>
                <li className="hover:text-blue-400 transition-colors cursor-pointer">Depoimentos</li>
                <li className="hover:text-blue-400 transition-colors cursor-pointer">Contato</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold">Informações de Contato</h4>
              <div className="space-y-2 text-gray-300">
                <p>(555) 123-4567</p>
                <p>pedro_sales@therapy.com</p>
                <p>123 Wellness Street<br />San Francisco, CA 94102</p>
              </div>
            </div>
          </div>
          <Separator className="bg-gray-700 mb-8" />
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              © 2024 Dra. Sarah Johnson. Todos os direitos reservados.
            </p>
            <p className="text-gray-300 text-sm">
              Psicóloga Clínica Licenciada | Licença nº PSY12345
            </p>
          </div>
        </div>
      </footer>

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
        
        .floating {
          animation: float 3s ease-in-out infinite;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        .animate-pulse {
          animation: pulse 2s ease-in-out infinite;
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        
        .animate-bounce {
          animation: bounce 2s ease-in-out infinite;
        }
        
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        
        .scale-on-scroll {
          transition: transform 0.1s ease-out;
          will-change: transform;
        }
      `}</style>
    </div>
  )
}