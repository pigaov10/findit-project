import React, { useState } from "react";

interface Props {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

type Message = {
  text: string;
  fromUser: boolean;
};

export default function ChatModal({ show, setShow }: Props) {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    { text: "Olá! Como posso ajudar você hoje?", fromUser: false },
  ]);

  if (!show) return null;

  function handleSend() {
    if (input.trim() === "") return;
    setMessages((msgs) => [...msgs, { text: input.trim(), fromUser: true }]);
    setInput("");
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSend();
    }
  }

  return (
    <div
      className="fixed bottom-6 right-6 w-96 max-w-full bg-white rounded-lg
                 shadow-lg flex flex-col"
      style={{ height: "400px" }}
    >
      {/* Header */}
      <header className="flex justify-between items-center border-b border-gray-300 px-4 py-3">
        <h2 className="text-lg font-semibold text-gray-800">Chat com o agente</h2>
        <button
          onClick={() => setShow(false)}
          className="text-gray-600 hover:text-gray-900 text-2xl font-bold leading-none"
          aria-label="Fechar chat"
        >
          &times;
        </button>
      </header>

      {/* Messages area */}
      <main className="flex-1 overflow-y-auto px-4 py-3 bg-gray-50 flex flex-col gap-2">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`mb-1 max-w-[75%] rounded-lg p-2 ${
              msg.fromUser
                ? "bg-blue-600 text-white self-end"
                : "bg-gray-200 text-gray-800 self-start"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </main>

      {/* Input area */}
      <footer className="border-t border-gray-300 px-4 py-3 flex items-center gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Digite sua mensagem..."
          className="flex-1 rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleSend}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
          aria-label="Enviar mensagem"
        >
          Enviar
        </button>
      </footer>
    </div>
  );
}
