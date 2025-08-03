import React from "react";
import { Button } from "@/components/ui/button";

interface Props {
  loanAmount: number;
  setLoanAmount: React.Dispatch<React.SetStateAction<number>>;
  downPayment: number;
  setDownPayment: React.Dispatch<React.SetStateAction<number>>;
  interestRate: number;
  setInterestRate: React.Dispatch<React.SetStateAction<number>>;
  loanTerm: number;
  setLoanTerm: React.Dispatch<React.SetStateAction<number>>;
  monthlyPayment: number;
  calculated: boolean;
  calculateLoan: () => void;
}

export default function FinancingCalculator({
  loanAmount,
  setLoanAmount,
  downPayment,
  setDownPayment,
  interestRate,
  setInterestRate,
  loanTerm,
  setLoanTerm,
  monthlyPayment,
  calculated,
  calculateLoan,
}: Props) {
  return (
    <section className="bg-white rounded-md shadow-md p-6 max-w-md mx-auto space-y-4">
      <h2 className="text-xl font-semibold text-gray-800">Calculadora de Financiamento</h2>

      <div className="space-y-2">
        <label className="block font-medium text-gray-700">Valor do Empréstimo (€)</label>
        <input
          type="number"
          value={loanAmount}
          onChange={(e) => setLoanAmount(Number(e.target.value))}
          className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          min={0}
        />
      </div>

      <div className="space-y-2">
        <label className="block font-medium text-gray-700">Entrada (€)</label>
        <input
          type="number"
          value={downPayment}
          onChange={(e) => setDownPayment(Number(e.target.value))}
          className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          min={0}
        />
      </div>

      <div className="space-y-2">
        <label className="block font-medium text-gray-700">Taxa de Juros (% ao ano)</label>
        <input
          type="number"
          step="0.1"
          value={interestRate}
          onChange={(e) => setInterestRate(Number(e.target.value))}
          className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          min={0}
          max={100}
        />
      </div>

      <div className="space-y-2">
        <label className="block font-medium text-gray-700">Prazo (anos)</label>
        <input
          type="number"
          value={loanTerm}
          onChange={(e) => setLoanTerm(Number(e.target.value))}
          className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          min={1}
          max={50}
        />
      </div>

      <Button
        onClick={calculateLoan}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md py-2"
      >
        Calcular
      </Button>

      {calculated && (
        <p className="mt-4 text-lg font-semibold text-gray-900 bg-green-100 p-3 rounded-md shadow">
          Pagamento mensal estimado: € {monthlyPayment.toFixed(2)}
        </p>
      )}
    </section>
  );
}
