"use client";

import React, { useEffect, useState } from "react";
import { ArrowLeft, Heart, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useParams } from "react-router-dom";

// Importando os componentes mockados da pasta property-details
import ImageGallery from "@/components/property-details/ImageGallery";
import PropertyInfo from "@/components/property-details/PropertyInfo";
import BuildingAmenities from "@/components/property-details/BuildingAmenities";
import MapSection from "@/components/property-details/MapSection";
import AgentInfo from "@/components/property-details/AgentInfo";
import TechnicalDetails from "@/components/property-details/TechnicalDetails";
import FinancingCalculator from "@/components/property-details/FinancingCalculator";
import ChatModal from "@/components/property-details/ChatModal";
import VisitModal from "@/components/property-details/VisitModal";

export default function PropertyDetailsPage() {
  const params = useParams();
  const propertyId = Number.parseInt(params.id as string);

  const [property, setProperty] = useState<any>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [showVisitModal, setShowVisitModal] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Dados para o financiamento (mock)
  const [loanAmount, setLoanAmount] = useState(420000);
  const [interestRate, setInterestRate] = useState(3.5);
  const [downPayment, setDownPayment] = useState(84000);
  const [loanTerm, setLoanTerm] = useState(30);
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [calculated, setCalculated] = useState(false);

  // Dados para agendamento de visita (mock)
  const [visitData, setVisitData] = useState({
    date: "",
    time: "",
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  // Mock fetch de dados
  useEffect(() => {
    setIsLoading(true);
    // Simulando fetch
    setTimeout(() => {
      setProperty({
        id: propertyId,
        title: "Apartamento Moderno Mockado",
        price: 420000,
        features: ["Piscina", "Praia"],
        amenities: ["Academia", "Lavanderia"],
        address: "Rua Exemplo, 123, Porto, Portugal",
        lat: 41.1579,
        lng: -8.6291,
        agent: {
          name: "Raphael Iarussi",
          phone: "+351 912 345 678",
          email: "raphael@example.com",
        },
      });
      setIsLoading(false);
    }, 1000);
  }, [propertyId]);

  function calculateLoan() {
    const principal = loanAmount - downPayment;
    const monthlyInterestRate = interestRate / 100 / 12;
    const numberOfPayments = loanTerm * 12;

    if (monthlyInterestRate === 0) {
      setMonthlyPayment(principal / numberOfPayments);
    } else {
      const payment =
        (principal * monthlyInterestRate) /
        (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));
      setMonthlyPayment(payment);
    }
    setCalculated(true);
  }

  useEffect(() => {
    calculateLoan();
  }, [loanAmount, interestRate, downPayment, loanTerm]);

  const handleVisitSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Visita agendada com sucesso!");
    setVisitData({ date: "", time: "", name: "", phone: "", email: "", message: "" });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <p>Carregando imóvel...</p>
      </div>
    );
  }

  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <p>Imóvel não encontrado.</p>
        <Link href="/">
          <Button>Voltar</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Coluna principal */}
          <div className="lg:col-span-2 space-y-6">
            <ImageGallery
              property={property}
              currentImageIndex={currentImageIndex}
              setCurrentImageIndex={setCurrentImageIndex}
              modalOpen={modalOpen}
              setModalOpen={setModalOpen}
            />
            <PropertyInfo property={property} />
            <BuildingAmenities amenities={property.amenities} />
            <MapSection fullAddress={property.address} lat={property.lat} lng={property.lng} />
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <AgentInfo
              property={property}
              currentImageIndex={currentImageIndex}
              setShowChat={setShowChat}
              setShowVisitModal={setShowVisitModal}
            />
            <TechnicalDetails property={property} />
            <FinancingCalculator
              loanAmount={loanAmount}
              setLoanAmount={setLoanAmount}
              downPayment={downPayment}
              setDownPayment={setDownPayment}
              interestRate={interestRate}
              setInterestRate={setInterestRate}
              loanTerm={loanTerm}
              setLoanTerm={setLoanTerm}
              monthlyPayment={monthlyPayment}
              calculated={calculated}
              calculateLoan={calculateLoan}
            />
          </div>
        </div>
      </main>

      <ChatModal show={showChat} setShow={setShowChat} />

      <VisitModal
        showVisitModal={showVisitModal}
        setShowVisitModal={setShowVisitModal}
        visitData={visitData}
        setVisitData={setVisitData}
        handleVisitSubmit={handleVisitSubmit}
      />
    </div>
  );
}
