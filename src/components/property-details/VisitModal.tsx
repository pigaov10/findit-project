import React from "react";

interface VisitData {
  date: string;
  time: string;
  name: string;
  phone: string;
  email: string;
  message: string;
}

interface Props {
  showVisitModal: boolean;
  setShowVisitModal: React.Dispatch<React.SetStateAction<boolean>>;
  visitData: VisitData;
  setVisitData: React.Dispatch<React.SetStateAction<VisitData>>;
  handleVisitSubmit: (e: React.FormEvent) => void;
}

export default function VisitModal({
  showVisitModal,
  setShowVisitModal,
  visitData,
  setVisitData,
  handleVisitSubmit,
}: Props) {
  if (!showVisitModal) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded p-6 max-w-md w-full overflow-auto max-h-full">
        <h2 className="text-xl font-bold mb-4">Agendar Visita (mock)</h2>

        <form onSubmit={handleVisitSubmit} className="space-y-3">
          <input
            type="date"
            value={visitData.date}
            onChange={(e) => setVisitData({ ...visitData, date: e.target.value })}
            required
            className="border p-2 rounded w-full"
          />
          <input
            type="time"
            value={visitData.time}
            onChange={(e) => setVisitData({ ...visitData, time: e.target.value })}
            required
            className="border p-2 rounded w-full"
          />
          <input
            type="text"
            placeholder="Seu nome"
            value={visitData.name}
            onChange={(e) => setVisitData({ ...visitData, name: e.target.value })}
            required
            className="border p-2 rounded w-full"
          />
          <input
            type="tel"
            placeholder="Telefone"
            value={visitData.phone}
            onChange={(e) => setVisitData({ ...visitData, phone: e.target.value })}
            required
            className="border p-2 rounded w-full"
          />
          <input
            type="email"
            placeholder="Email"
            value={visitData.email}
            onChange={(e) => setVisitData({ ...visitData, email: e.target.value })}
            required
            className="border p-2 rounded w-full"
          />
          <textarea
            placeholder="Mensagem"
            value={visitData.message}
            onChange={(e) => setVisitData({ ...visitData, message: e.target.value })}
            className="border p-2 rounded w-full"
          />
          <div className="flex justify-end space-x-2">
            <button
              type="button"
              className="px-4 py-2 border rounded"
              onClick={() => setShowVisitModal(false)}
            >
              Cancelar
            </button>
            <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
