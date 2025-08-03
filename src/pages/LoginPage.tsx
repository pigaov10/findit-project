// src/pages/LoginPage.tsx
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import bgImage from "../assets/hero-bg.jpg";


export default function LoginPage() {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 bg-gray-900">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      />

      {/* Overlay content */}
      <div className="relative z-10 w-full max-w-md">
        <div className="flex justify-center mb-4">
            <svg width="200" height="80" viewBox="0 0 200 80" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Logo ImoGO">
                <path d="M35 65 L35 35 L50 20 L65 35 L65 65 H50 V55 H45 V65 H35 Z" fill="#1E3A8A"/>
                <rect x="40" y="40" width="5" height="5" fill="#D1D5DB"/>
                <rect x="55" y="40" width="5" height="5" fill="#D1D5DB"/>
                <rect x="40" y="50" width="5" height="5" fill="#D1D5DB"/>
                <rect x="55" y="50" width="5" height="5" fill="#D1D5DB"/>
                <text x="75" y="55" font-family="Arial, sans-serif" font-size="32" font-weight="600" fill="#1E3A8A">FindIT</text>
            </svg>
        </div>
        <Card className="p-6 shadow-xl bg-white/90 backdrop-blur-md border border-gray-200 rounded-xl">
          <CardHeader>
            <CardTitle className="text-2xl text-center text-gray-800">
              Entrar na sua conta
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <Button variant="outline" className="w-full gap-2">
              <FaGoogle className="w-5 h-5" />
              Entrar com Google
            </Button>
            <Button variant="outline" className="w-full gap-2">
              <FaFacebook className="w-5 h-5 text-blue-600" />
              Entrar com Facebook
            </Button>

            <div className="relative text-center text-sm text-muted-foreground mt-4">
              <span className="absolute inset-x-0 top-1/2 border-t border-gray-300" />
              <span className="bg-white px-2 relative z-10">ou</span>
            </div>

            <input
              type="email"
              placeholder="E-mail"
              className="w-full border rounded px-4 py-2 text-sm"
            />
            <input
              type="password"
              placeholder="Senha"
              className="w-full border rounded px-4 py-2 text-sm"
            />
            <Button className="w-full">Entrar</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
