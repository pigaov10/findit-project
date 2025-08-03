import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Bot, Send } from "lucide-react";

const VirtualAssistant = ({ onUserMessage }: { onUserMessage: () => void }) => {
  const [message, setMessage] = useState("");
  const [conversation, setConversation] = useState([
    { sender: "bot", text: "Olá! O que você está buscando hoje?" }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [showQuickReplies, setShowQuickReplies] = useState(false);
  const [quickReplies, setQuickReplies] = useState([]);
  const [placeholder, setPlaceholder] = useState("");

  const messagesEndRef = useRef(null);
  const messagesContainerRef = useRef(null);

  // Lista de respostas do bot para usar no chat
  const suggestions = [
    "Perfeito! E qual seria a faixa de preço que você tem em mente?",
    "Ótima escolha! Quantos quartos você gostaria que o imóvel tivesse?",
    "Excelente! Você tem alguma preferência quanto ao andar ou vista?",
    "Entendido! Você prefere um imóvel mobiliado ou não?",
    "Legal! Em qual bairro você está pensando em morar?",
  ];

  // Lista de possíveis respostas rápidas para mostrar depois do bot responder
  const allQuickReplies = [
    ["R$ 200k - 500k", "2-3 quartos", "Andar alto"],
    ["Mobiliado", "Não mobiliado", "Apartamento"],
    ["Casa", "Próximo ao metrô", "Com varanda"],
    ["1 quarto", "2 quartos", "3 quartos"],
    ["Centro", "Bairro nobre", "Região calma"],
  ];

  // --- Digitação simulada do placeholder ---
  const prompts = [
    "Gostaria de um imóvel perto do metrô?",
    "Qual a faixa de preço ideal para você?",
    "Prefere casa ou apartamento?",
    "Quantos quartos você deseja?",
    "Está buscando imóvel mobiliado?",
  ];

  const promptIndex = useRef(0);
  const charIndex = useRef(0);
  const typingTimeout = useRef(null);
  const waitingTimeout = useRef(null);

  useEffect(() => {
    let typingInterval: NodeJS.Timeout;
    let waitTimeout: NodeJS.Timeout;

    function startTyping() {
      const currentPrompt = prompts[promptIndex.current];
      let typed = "";

      typingInterval = setInterval(() => {
        typed += currentPrompt.charAt(charIndex.current);
        setPlaceholder(typed);
        charIndex.current++;

        if (charIndex.current >= currentPrompt.length) {
          clearInterval(typingInterval);
          waitTimeout = setTimeout(() => {
            charIndex.current = 0;
            promptIndex.current = (promptIndex.current + 1) % prompts.length;
            setPlaceholder("");
            startTyping(); // Começa o próximo ciclo
          }, 2000);
        }
      }, 100);
    }

    startTyping();

    return () => {
      clearInterval(typingInterval);
      clearTimeout(waitTimeout);
    };
  }, []);


  // Função para resposta do bot com delay
  const handleBotResponse = () => {
    setIsTyping(true);
    setShowQuickReplies(false);

    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * suggestions.length);
      const randomResponse = suggestions[randomIndex];

      setConversation((prev) => [
        ...prev,
        { sender: "bot", text: randomResponse },
      ]);

      // Define respostas rápidas baseadas no índice da resposta do bot
      setQuickReplies(allQuickReplies[randomIndex] || []);

      setIsTyping(false);
      setShowQuickReplies(true);
    }, 4000);
  };

  const handleSendMessage = () => {
    if (message.trim() && !isTyping) {
      setConversation((prev) => [...prev, { sender: "user", text: message }]);
      setMessage("");
      handleBotResponse();
      onUserMessage(); // <--- aqui
    }
  };

  // Scroll para o fim sempre que a conversa ou isTyping mudarem
  useEffect(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
    }
  }, [conversation, isTyping]);

  return (
    <Card className="w-full max-w-xl sm:max-w-2xl w-[600px] h-[650px] flex flex-col shadow-xl mx-auto">

      {/* Header */}
      <div className="bg-gradient-primary p-4 text-white rounded-t-lg">
        <div className="flex items-center space-x-3">
          <div className="bg-white/20 p-2 rounded-lg">
            <Bot className="h-5 w-5" />
          </div>
          <div>
            <h3 className="font-semibold">Assistente Virtual Realty</h3>
            <p className="text-xs opacity-90">Pronto para ajudar você</p>
          </div>
        </div>
      </div>

      {/* Messages */}
        <div
        ref={messagesContainerRef}
        className="flex-1 p-4 space-y-4 overflow-y-auto h-[620px]"
        >
        {conversation.map((msg, index) => (
          <div
            key={index}
            className={`flex items-start space-x-3 ${
              msg.sender === "user" ? "justify-end" : "justify-start"
            }`}
          >
            {msg.sender === "bot" && (
              <div className="bg-muted p-2 rounded-lg">
                <Bot className="h-4 w-4 text-primary" />
              </div>
            )}
            <div
              className={`p-3 rounded-lg max-w-[75%] text-sm ${
                msg.sender === "user"
                  ? "bg-primary text-white rounded-tr-none"
                  : "bg-muted/50 text-foreground rounded-tl-none"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="flex items-start space-x-3">
            <div className="bg-muted p-2 rounded-lg">
              <Bot className="h-4 w-4 text-primary" />
            </div>
            <div className="bg-muted/50 p-3 rounded-lg rounded-tl-none flex-1 text-sm">
              <span className="animate-pulse">Digitando...</span>
            </div>
          </div>
        )}
      </div>

      {/* Quick Replies - só aparece depois da primeira resposta do bot */}
      {showQuickReplies && quickReplies.length > 0 && (
        <div className="p-4 border-t space-y-2 flex-shrink-0">
          <p className="text-xs font-medium text-muted-foreground">Respostas rápidas:</p>
          <div className="flex flex-wrap gap-2">
            {quickReplies.map((reply, idx) => (
              <Button
                key={idx}
                variant="outline"
                size="sm"
                className="text-xs"
                onClick={() => setMessage(reply)}
              >
                {reply}
              </Button>
            ))}
          </div>
        </div>
      )}

      {/* Input */}
      <div className="p-4 border-t">
        <div className="flex space-x-2">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
            placeholder={placeholder}
            disabled={isTyping}
            className="flex-1 px-3 py-2 border border-input rounded-lg bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50"
          />
          <Button onClick={handleSendMessage} size="sm" variant="hero" disabled={isTyping}>
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default VirtualAssistant;
