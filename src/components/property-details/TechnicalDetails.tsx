import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import {
  BedDouble,
  Bath,
  CarFront,
  Ruler,
  Building2,
  Sun,
  Calendar,
  ArrowUpFromLine
} from "lucide-react";

interface Props {
  property: any;
}

export default function TechnicalDetails({ property }: Props) {
  const technicalInfo = [
    { icon: <Ruler className="w-4 h-4 mr-2" />, label: "Área", value: "120 m²" },
    { icon: <BedDouble className="w-4 h-4 mr-2" />, label: "Quartos", value: "3" },
    { icon: <Bath className="w-4 h-4 mr-2" />, label: "Banheiros", value: "2" },
    { icon: <CarFront className="w-4 h-4 mr-2" />, label: "Vagas", value: "1" },
    { icon: <Building2 className="w-4 h-4 mr-2" />, label: "Suítes", value: "1" },
    { icon: <Calendar className="w-4 h-4 mr-2" />, label: "Ano", value: "2015" },
    { icon: <ArrowUpFromLine className="w-4 h-4 mr-2" />, label: "Andar", value: "4º" },
    { icon: <Sun className="w-4 h-4 mr-2" />, label: "Orientação", value: "Norte" }
  ];

  return (
    <Card className="mt-6">
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-foreground">
          Detalhes Técnicos
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-muted-foreground">
          {technicalInfo.map((item, idx) => (
            <div key={idx} className="flex items-center">
              {item.icon}
              <span className="font-medium text-foreground mr-1">{item.label}:</span>
              {item.value}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
