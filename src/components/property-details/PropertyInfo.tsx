import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Wifi,
  Flame,
  Snowflake,
  WashingMachine,
  Leaf,
  ShieldCheck,
  Dumbbell,
  PartyPopper,
  Baby,
  Utensils,
  Waves,
} from "lucide-react";

interface Props {
  property: any;
  matchPercentage?: number;
}

const features = [
  { label: "Wi-Fi", icon: <Wifi className="w-4 h-4" /> },
  { label: "Lareira", icon: <Flame className="w-4 h-4" /> },
  { label: "Ar-condicionado", icon: <Snowflake className="w-4 h-4" /> },
  { label: "Área de serviço", icon: <WashingMachine className="w-4 h-4" /> },
  { label: "Jardim", icon: <Leaf className="w-4 h-4" /> },
  { label: "Segurança 24h", icon: <ShieldCheck className="w-4 h-4" /> },
];

const amenities = [
  { label: "Piscina", icon: <Waves className="w-4 h-4" /> },
  { label: "Academia", icon: <Dumbbell className="w-4 h-4" /> },
  { label: "Salão de festas", icon: <PartyPopper className="w-4 h-4" /> },
  { label: "Playground", icon: <Baby className="w-4 h-4" /> },
  { label: "Churrasqueira", icon: <Utensils className="w-4 h-4" /> },
];

export default function PropertyInfo({
  property,
  matchPercentage = Math.floor(Math.random() * 30) + 70,
}: Props) {
  return (
    <Card className="max-w-5xl mx-auto border border-gray-200 shadow-md rounded-xl overflow-hidden">
      <CardContent className="px-6 py-8">
        {/* Bloco de compatibilidade */}
        <section className="mb-10 bg-white border border-gray-200 rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="flex items-center gap-2 text-xl font-bold text-gray-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Por que este imóvel é ideal para você?
            </h3>
            <span className="px-2 py-1 text-sm font-bold rounded-full bg-green-600 text-white">
              {matchPercentage}% compatível
            </span>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Nosso sistema identificou que este imóvel combina com seu perfil, oferecendo{" "}
            <strong className="font-semibold text-gray-900">conforto</strong>,{" "}
            <strong className="font-semibold text-gray-900">segurança</strong> e{" "}
            <strong className="font-semibold text-gray-900">praticidade</strong>.{" "}
            <strong className="font-semibold text-gray-900">Espaços amplos</strong>,{" "}
            ambiente <strong className="font-semibold text-gray-900">pet-friendly</strong> e{" "}
            <strong className="font-semibold text-gray-900">localização estratégica</strong>{" "}
            garantem <strong className="font-semibold text-gray-900">qualidade de vida</strong>{" "}
            para você e sua família.
          </p>
        </section>

        {/* Características e Amenidades */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Características */}
          <div>
            <h4 className="text-base font-semibold text-blue-800 border-b border-blue-200 pb-2 mb-4">
              Características
            </h4>
            <div className="flex flex-wrap gap-3">
              {features.map((item, idx) => (
                <span
                  key={`feature-${idx}`}
                  className="inline-flex items-center gap-2 bg-blue-50 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                >
                  {item.icon}
                  {item.label}
                </span>
              ))}
            </div>
          </div>

          {/* Amenidades */}
          <div>
            <h4 className="text-base font-semibold text-green-800 border-b border-green-200 pb-2 mb-4">
              Amenidades
            </h4>
            <div className="flex flex-wrap gap-3">
              {amenities.map((item, idx) => (
                <span
                  key={`amenity-${idx}`}
                  className="inline-flex items-center gap-2 bg-green-50 text-green-800 px-3 py-1 rounded-full text-sm font-medium"
                >
                  {item.icon}
                  {item.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
