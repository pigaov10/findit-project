import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Básico",
    price: 29,
    features: [
      "1 propriedade listada",
      "Suporte por e-mail",
      "Acesso ao painel básico",
    ],
  },
  {
    name: "Profissional",
    price: 79,
    features: [
      "Até 10 propriedades listadas",
      "Suporte prioritário",
      "Acesso ao painel avançado",
      "Relatórios mensais",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: 199,
    features: [
      "Propriedades ilimitadas",
      "Gerente de conta dedicado",
      "Integrações personalizadas",
      "Suporte 24/7",
    ],
  },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-16 px-4">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
        Planos de Preços
      </h1>
      <p className="text-gray-600 max-w-xl text-center mb-12">
        Escolha o plano ideal para o seu negócio imobiliário e cresça com a gente.
      </p>

      <div className="grid gap-8 max-w-5xl w-full md:grid-cols-3">
        {plans.map(({ name, price, features, popular }, idx) => (
          <Card
            key={idx}
            className={`
              p-6 rounded-xl shadow-lg
              ${popular ? "border-4 border-blue-600" : "border border-gray-200"}
              flex flex-col
            `}
          >
            {popular && (
              <div className="self-center bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold mb-4">
                Mais popular
              </div>
            )}
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900 text-center mb-4">
                {name}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col flex-grow">
              <p className="text-center text-4xl font-extrabold text-blue-600 mb-6">
                €{price}
                <span className="text-base font-normal text-gray-600">/mês</span>
              </p>
              <ul className="mb-6 flex-grow space-y-3 text-gray-700">
                {features.map((feature, i) => (
                  <li key={i} className="before:content-['✓'] before:text-blue-600 before:mr-2">
                    {feature}
                  </li>
                ))}
              </ul>
              <Button
                variant={popular ? "default" : "outline"}
                className="w-full mt-auto"
              >
                Escolher Plano
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
