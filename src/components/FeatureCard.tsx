import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  variant?: "primary" | "secondary" | "accent" | "muted";
}

const FeatureCard = ({ icon: Icon, title, description, variant = "primary" }: FeatureCardProps) => {
  const variants = {
    primary: "bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20",
    secondary: "bg-gradient-to-br from-success/10 to-success/5 border-success/20",
    accent: "bg-gradient-to-br from-warning/10 to-warning/5 border-warning/20",
    muted: "bg-gradient-to-br from-muted to-muted/50 border-border",
  };

  const iconVariants = {
    primary: "bg-primary text-primary-foreground",
    secondary: "bg-success text-success-foreground",
    accent: "bg-warning text-warning-foreground",
    muted: "bg-slate text-slate-foreground",
  };

  return (
    <div className={cn(
      "group p-8 rounded-2xl border backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer",
      variants[variant]
    )}>
      <div className={cn(
        "w-12 h-12 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300",
        iconVariants[variant]
      )}>
        <Icon className="h-6 w-6" />
      </div>
      
      <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
        {title}
      </h3>
      
      <p className="text-muted-foreground leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;