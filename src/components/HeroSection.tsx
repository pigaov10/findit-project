import { Button } from "@/components/ui/button";
import { Search, ArrowRight, Sparkles } from "lucide-react";
import VirtualAssistant from "./VirtualAssistant";

const HeroSection = ({ onUserMessage }: { onUserMessage: () => void }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-muted py-8 sm:py-12 lg:py-20 min-h-screen flex items-center">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start max-w-7xl mx-auto">
          {/* Left Column - Description */}
          <div className="text-center lg:text-left order-2 lg:order-1 max-w-xl mx-auto lg:mx-0">
            <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-200 via-blue-100 to-blue-200 text-blue-800 px-5 py-2 rounded-full text-sm font-semibold mb-8 shadow-md animate-pulse">
              <Sparkles className="h-6 w-6" />
              <span>Busca Imobiliária Inteligente com IA em Tempo Real</span>
            </div>

            <h1 className="text-3xl sm:text-6xl font-extrabold text-gray-900 leading-tight mb-8 tracking-tight drop-shadow-md">
              Encontre seu imóvel <br />
              <span className="bg-gradient-to-r from-blue-700 via-blue-500 to-blue-400 bg-clip-text text-transparent">
                ideal com inteligência artificial
              </span>
            </h1>

            <p className="text-lg text-gray-700 mb-10 max-w-md leading-relaxed tracking-wide">
              Receba recomendações personalizadas que facilitam sua busca. Converse direto com proprietários e finalize negociações online, de forma rápida, segura e transparente.
            </p>

            {/* Recursos principais */}
            <div className="flex flex-wrap gap-4 mb-12">
              {[
                "🔍 Busca Avançada com IA",
                "💬 Chat Imediato com Proprietários",
                "📅 Agendamento Online Simplificado",
                "🔒 Contratos Digitais Seguros",
              ].map((feature, i) => (
                <span
                  key={i}
                  className="bg-blue-50 text-blue-700 px-5 py-3 rounded-lg text-sm font-semibold shadow-sm hover:shadow-md transition-shadow cursor-default select-none"
                >
                  {feature}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
              <Button
                variant="outline"
                size="lg"
                className="text-sm sm:text-base font-semibold text-blue-700 hover:text-white hover:bg-blue-700 transition-colors"
              >
                Cadastre-se ou faça login
              </Button>
              <Button
                variant="hero"
                size="lg"
                className="group text-sm sm:text-base font-semibold shadow-lg shadow-blue-500/30 hover:shadow-blue-600/50"
              >
                <Search className="h-6 w-6 mr-3" />
                Buscar Imóveis
                <ArrowRight className="h-5 w-5 ml-3 group-hover:translate-x-2 transition-transform duration-300 ease-in-out" />
              </Button>
            </div>
          </div>
          {/* Right Column - Chat */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <VirtualAssistant onUserMessage={onUserMessage} />
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;