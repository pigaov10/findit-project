import { useState } from "react";
import PropertyCard from "./PropertyCard";
import { Button } from "@/components/ui/button";
import { Search, SlidersHorizontal, List, Grid, Map, Lightbulb } from "lucide-react";
import property1 from "@/assets/property1.jpg";
import property2 from "@/assets/property2.jpg";
import property3 from "@/assets/property3.jpg";

const generateMockProperties = () => {
  const titles = [
    "Apartamento Moderno", "Cobertura Luxuosa", "Casa com Piscina", "Studio Compacto",
    "Loft Industrial", "Apartamento Garden", "Casa Térrea", "Duplex Reformado",
    "Apartamento na Praia", "Casa de Campo"
  ];
  const locations = [
    "Porto", "Lisboa", "Braga", "Coimbra", "Faro", "Setúbal", "Cascais", "Sintra"
  ];
  const statuses = ["Novo", "Patrocinado", "Destaque"] as const;
  const images = [property1, property2, property3];

  return Array.from({ length: 30 }, (_, i) => ({
    title: `${titles[i % titles.length]} #${i + 1}`,
    price: `€ ${(200000 + Math.floor(Math.random() * 800000)).toLocaleString()}`,
    location: locations[Math.floor(Math.random() * locations.length)],
    bedrooms: Math.floor(Math.random() * 4) + 1,
    bathrooms: Math.floor(Math.random() * 3) + 1,
    area: Math.floor(Math.random() * 200) + 50,
    image: images[i % images.length],
    status: statuses[i % statuses.length],
  }));
};

const PropertiesSection = () => {
  const allProperties = generateMockProperties();
  const [visibleCount, setVisibleCount] = useState(9);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 9);
  };

  const visibleProperties = allProperties.slice(0, visibleCount);

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8 sm:mb-12">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">Resultados</h2>
            <p className="text-sm sm:text-base text-muted-foreground">
              <span className="font-semibold text-primary">{allProperties.length} encontrados</span> – 
              Veja os imóveis com base nas suas preferências.
            </p>
          </div>
          <div className="flex items-center space-x-2 sm:space-x-4 mt-4 lg:mt-0">
            <div className="flex items-center space-x-1 sm:space-x-2 bg-background rounded-lg p-1 border">
              <Button variant="ghost" size="sm" className="bg-primary text-primary-foreground p-1.5 sm:p-2">
                <List className="h-3 w-3 sm:h-4 sm:w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="p-1.5 sm:p-2">
                <Grid className="h-3 w-3 sm:h-4 sm:w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="p-1.5 sm:p-2">
                <Map className="h-3 w-3 sm:h-4 sm:w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8">
          <div className="flex-1 min-w-0">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Buscar por localização..."
                className="w-full pl-10 pr-4 py-2.5 sm:py-3 border border-input rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary text-sm sm:text-base"
              />
            </div>
          </div>
          <Button variant="outline" className="flex items-center justify-center space-x-2 text-sm sm:text-base">
            <SlidersHorizontal className="h-4 w-4" />
            <span>Filtros</span>
          </Button>
          <select className="px-3 sm:px-4 py-2.5 sm:py-3 border border-input rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary text-sm sm:text-base min-w-0">
            <option>Mais recentes</option>
            <option>Menor preço</option>
            <option>Maior preço</option>
            <option>Maior área</option>
          </select>
        </div>

        {/* Dica inteligente */}
        <div className="mt-2 flex items-start gap-2 rounded-lg bg-blue-100 text-blue-900 px-4 py-3 text-xs sm:text-sm">
          <Lightbulb className="mt-0.5 h-4 w-4 text-blue-600" />
          <span>
            Estes imóveis foram selecionados por estarem localizados no Porto, próximos a shopping centers e por aceitarem animais de estimação.
          </span>
        </div>

        <br />

        {/* Properties Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {visibleProperties.map((property, index) => (
            <PropertyCard key={index} {...property} />
          ))}
        </div>

        {/* Load More */}
        {visibleCount < allProperties.length && (
          <div className="text-center mt-8 sm:mt-12">
            <Button variant="outline" size="lg" className="text-sm sm:text-base" onClick={handleLoadMore}>
              Carregar mais imóveis
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default PropertiesSection;
