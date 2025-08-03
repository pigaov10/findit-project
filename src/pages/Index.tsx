import { useRef, useState } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PropertiesSection from "@/components/PropertiesSection";

const Index = () => {
  const [userMessageCount, setUserMessageCount] = useState(0);
  const [showProperties, setShowProperties] = useState(false);
  const [loadingProperties, setLoadingProperties] = useState(false);
  const propertiesRef = useRef<HTMLDivElement | null>(null);

  const handleUserMessage = () => {
    setUserMessageCount((prev) => {
      const nextCount = prev + 1;
      if (nextCount === 4) {
        setLoadingProperties(true);
        setTimeout(() => {
          setLoadingProperties(false);
          setShowProperties(true);
          setTimeout(() => {
            propertiesRef.current?.scrollIntoView({ behavior: "smooth" });
          }, 100);          
        }, 4000);
      }
      return nextCount;
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <HeroSection onUserMessage={handleUserMessage} />
      {loadingProperties && (
        <div className="text-center py-20 text-muted-foreground text-sm sm:text-base">
          Carregando imóveis...
        </div>
      )}
      {showProperties && (
        <div ref={propertiesRef}>
          <PropertiesSection />
        </div>
      )}
    </div>
  );
};

export default Index;
