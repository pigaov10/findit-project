import { Button } from "@/components/ui/button";
import { Building, Globe, Home, Receipt, UserPlus, LogIn } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-background border-b border-border sticky top-0 z-50 backdrop-blur-md bg-background/80">
      <div className="container mx-auto px-4 py-3 sm:py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="bg-gradient-primary p-1.5 sm:p-2 rounded-lg">
            <Building className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
          </div>
          <span className="text-lg sm:text-xl font-bold text-foreground">Realty Pro</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors">
            <Home className="h-4 w-4" />
            <span>Home</span>
          </a>
          <a href="#" className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors">
            <Receipt className="h-4 w-4" />
            <span>Preços</span>
          </a>
          <a href="#" className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors">
            <Building className="h-4 w-4" />
            <span>Imóveis</span>
          </a>
        </nav>
        
        <div className="flex items-center space-x-2 sm:space-x-4">
          <div className="hidden sm:flex items-center space-x-2 text-sm text-muted-foreground">
            <Globe className="h-4 w-4" />
            <span>PT</span>
          </div>
          <Button variant="ghost" size="sm" className="hidden sm:flex">
            <LogIn className="h-4 w-4" />
            <span className="hidden lg:inline ml-1">Entrar</span>
          </Button>
          <Button variant="hero" size="sm" className="text-xs sm:text-sm">
            <UserPlus className="h-3 w-3 sm:h-4 sm:w-4" />
            <span className="ml-1">Criar Conta</span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;