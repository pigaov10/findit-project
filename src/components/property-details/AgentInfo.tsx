import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, Calendar } from "lucide-react";
import ChatModal from "./ChatModal";

interface Props {
  property: any;
}

export default function AgentInfo({ property }: Props) {
  const [chatOpen, setChatOpen] = useState(false);

  const mockTitle = "Apartamento Moderno com Vista";
  const mockPrice = 350000;
  const mockOwner = {
    name: "Joana Fernandes",
    role: "Corretora",
    company: "Porto Lar",
    email: "joana@portolar.pt",
    phone: "+351 912 345 678",
  };

  return (
    <>
    <section className="bg-white rounded-md shadow-md p-6 max-w-md mx-auto">
      <h1 className="text-xl font-extrabold text-gray-800 mb-1">{mockTitle}</h1>
      <p className="text-lg font-semibold text-green-500 mb-4">€ {mockPrice.toLocaleString()}</p>
      <p className="text-gray-600 mb-4">
        Excelente apartamento com vista para o mar e localização privilegiada no Porto.
      </p>

      <div className="border-t border-gray-300 pt-4 mb-4">
        <h2 className="font-semibold text-gray-800 mb-1">Corretora</h2>
        <p className="text-gray-700">{mockOwner.name} — {mockOwner.role}</p>
        <p className="text-gray-600 text-sm">{mockOwner.company}</p>
        <p className="text-gray-600 text-sm">📧 {mockOwner.email}</p>
        <p className="text-gray-600 text-sm">📞 {mockOwner.phone}</p>
      </div>

      <div className="flex gap-4">
        <Button
          variant="default"
          className="flex-1 bg-green-400 hover:bg-green-500 text-white font-semibold"
          onClick={() => setChatOpen(true)}
        >
          <MessageCircle className="w-5 h-5 mr-2" /> Chat
        </Button>
        <Button
          variant="default"
          className="flex-1 bg-blue-400 hover:bg-blue-500 text-white font-semibold"
          onClick={() => alert("Agendar visita")}
        >
          <Calendar className="w-5 h-5 mr-2" /> Visita
        </Button>
      </div>
    </section>
    <ChatModal show={chatOpen} setShow={setChatOpen} />
    </>
  );
}
