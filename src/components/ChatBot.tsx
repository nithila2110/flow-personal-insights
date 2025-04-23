
import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: "Hi! I'm CycleMate, your personal assistant. How can I help you today?", isBot: true },
    { id: 2, text: "Can you tell me what to eat during my luteal phase?", isBot: false },
    { id: 3, text: "During your luteal phase, I recommend magnesium-rich foods like spinach and dark chocolate. Want me to show you some recipes?", isBot: true },
    { id: 4, text: "I'm feeling tired on my period.", isBot: false },
    { id: 5, text: "It's totally normal to feel low energy during your period. I suggest gentle exercises like yoga or a light walk. Need a workout routine?", isBot: true },
    { id: 6, text: "How do I track my cycle?", isBot: false },
    { id: 7, text: "You can track your cycle right from your dashboard! Just enter the first day of your period and cycle length. Let me know if you need help with that.", isBot: true }
  ]);
  const [input, setInput] = useState("");

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSend = () => {
    if (!input.trim()) return;
    
    // Add user message
    setMessages(prev => [...prev, { id: Date.now(), text: input, isBot: false }]);
    setInput("");
    
    // Simulate bot response
    setTimeout(() => {
      let response = "I'm sorry, I don't have information about that yet.";
      
      if (input.toLowerCase().includes("luteal") && input.toLowerCase().includes("eat")) {
        response = "During your luteal phase, I recommend magnesium-rich foods like spinach and dark chocolate. Want me to show you some recipes?";
      } else if (input.toLowerCase().includes("tired") && input.toLowerCase().includes("period")) {
        response = "It's totally normal to feel low energy during your period. I suggest gentle exercises like yoga or a light walk. Need a workout routine?";
      } else if (input.toLowerCase().includes("track") && input.toLowerCase().includes("cycle")) {
        response = "You can track your cycle right from your dashboard! Just enter the first day of your period and cycle length. Let me know if you need help with that.";
      }

      setMessages(prev => [...prev, { id: Date.now(), text: response, isBot: true }]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen && (
        <Card className="w-80 sm:w-96 h-96 mb-4 flex flex-col shadow-lg border-2 border-cycleflow-darkpurple">
          <div className="p-3 bg-cycleflow-purple rounded-t-lg border-b">
            <h3 className="font-semibold text-primary">CycleMate Chat</h3>
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map(message => (
              <div 
                key={message.id} 
                className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div 
                  className={`max-w-[80%] rounded-lg p-3 ${
                    message.isBot 
                      ? 'bg-cycleflow-lavender text-gray-800' 
                      : 'bg-cycleflow-darkpurple text-white'
                  }`}
                >
                  {message.isBot && (
                    <div className="flex items-center gap-2 mb-1">
                      <Avatar className="h-6 w-6">
                        <div className="bg-cycleflow-purple flex items-center justify-center h-full w-full text-xs font-bold">CM</div>
                      </Avatar>
                      <span className="text-xs font-medium">CycleMate</span>
                    </div>
                  )}
                  <p className="text-sm">{message.text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="p-3 border-t flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask me anything..."
              className="flex-1 px-3 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-cycleflow-darkpurple"
            />
            <Button size="sm" onClick={handleSend} className="bg-cycleflow-darkpurple hover:bg-primary">
              Send
            </Button>
          </div>
        </Card>
      )}
      
      <Button 
        onClick={toggleChat} 
        size="icon" 
        className={`h-14 w-14 rounded-full shadow-lg ${isOpen ? 'bg-red-500 hover:bg-red-600' : 'bg-cycleflow-darkpurple hover:bg-primary'}`}
      >
        <MessageCircle className="h-6 w-6" />
      </Button>
    </div>
  );
}

