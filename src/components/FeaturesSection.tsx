import FeatureCard from "./FeatureCard";
import { Brain, MessageCircle, Calendar, FileSignature } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Brain,
      title: "IA Personalizada",
      description: "Busque o imóvel ideal com inteligência artificial avançada que aprende suas preferências.",
      variant: "primary" as const,
    },
    {
      icon: MessageCircle,
      title: "Chat em Tempo Real",
      description: "Converse diretamente com proprietários e corretores online de forma instantânea.",
      variant: "secondary" as const,
    },
    {
      icon: Calendar,
      title: "Agendamento de Visitas",
      description: "Marque visitas com poucos cliques, direto na plataforma, de forma rápida e eficiente.",
      variant: "accent" as const,
    },
    {
      icon: FileSignature,
      title: "Assinatura Digital",
      description: "Feche negócios com segurança, 100% online e sem papelada desnecessária.",
      variant: "muted" as const,
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              variant={feature.variant}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;