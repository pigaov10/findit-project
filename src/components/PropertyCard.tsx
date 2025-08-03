import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, MapPin, Bed, Bath, Square, Eye } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

interface PropertyCardProps {
  title: string;
  price: string;
  location: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  image: string;
  status: "Novo" | "Patrocinado" | "Destaque";
}

const PropertyCard = ({ title, price, location, bedrooms, bathrooms, area, image, status }: PropertyCardProps) => {
  const [isFavorited, setIsFavorited] = useState(false);

  const statusColors = {
    "Novo": "bg-success",
    "Patrocinado": "bg-warning",
    "Destaque": "bg-primary",
  };
  const encodedId = encodeURIComponent(title);

  return (
    <Link to={`/property/${encodedId}`}>
      <Card className="group overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02] bg-background">
        <div className="relative overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <Badge
            className={`
              absolute top-3 left-3
              ${statusColors[status]} text-white border-0
              ${status === "Novo" ? "animate-pulse-soft" : ""}
            `}
          >
            {status}
          </Badge>
          <Badge className="absolute bottom-3 left-3 bg-green-600 text-white font-semibold border-0 shadow">
            Este Imóvel combina 90% com seu perfil
          </Badge>
          <Button
            variant="ghost"
            size="sm"
            className="absolute top-3 right-3 bg-white/90 hover:bg-white text-foreground rounded-full h-8 w-8 p-0"
            onClick={() => setIsFavorited(!isFavorited)}
          >
            <Heart className={`h-4 w-4 ${isFavorited ? 'fill-red-500 text-red-500' : ''}`} />
          </Button>
        </div>
        
        <div className="p-6">
          <div className="flex items-start justify-between mb-3">
            <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
              {title}
            </h3>
          </div>
          
          <div className="flex items-center text-muted-foreground mb-4">
            <MapPin className="h-4 w-4 mr-1" />
            <span className="text-sm">{location}</span>
          </div>
          
          <div className="flex items-center justify-between mb-4 text-sm text-muted-foreground">
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <Bed className="h-4 w-4 mr-1" />
                <span>{bedrooms}</span>
              </div>
              <div className="flex items-center">
                <Bath className="h-4 w-4 mr-1" />
                <span>{bathrooms}</span>
              </div>
              <div className="flex items-center">
                <Square className="h-4 w-4 mr-1" />
                <span>{area}m²</span>
              </div>
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-foreground">
              {price}
            </div>
            <Button variant="outline" size="sm" className="group">
              <Eye className="h-4 w-4 mr-2" />
              Ver Detalhes
            </Button>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default PropertyCard;