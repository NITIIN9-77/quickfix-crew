import React, { useState, useRef, useEffect } from 'react';
import { getChatResponse } from '../services/geminiService';
import type { ChatMessage } from '../types';

interface ChatModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
}

const ChatModal: React.FC<ChatModalProps> = ({ isOpen, onClose, onOpen }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "Hello! I'm Techie, your virtual assistant. How can I help you with our services today?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: ChatMessage = { role: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const responseText = await getChatResponse(input);
      const modelMessage: ChatMessage = { role: 'model', text: responseText };
      setMessages(prev => [...prev, modelMessage]);
    } catch (error) {
      const errorMessage: ChatMessage = { role: 'model', text: "Sorry, I'm having some trouble right now. Please try again later." };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {!isOpen && (
        <button onClick={onOpen} className="fixed bottom-4 right-4 bg-primary text-slate-900 rounded-full p-4 shadow-lg hover:brightness-110 transition-transform transform hover:scale-110 z-50 animate-glow">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </button>
      )}

      {isOpen && (
        <div className="fixed bottom-4 right-4 md:bottom-8 md:right-8 w-[calc(100%-2rem)] md:w-96 h-[70vh] max-h-[600px] bg-surface rounded-lg shadow-2xl flex flex-col z-50 animate-slide-in-up">
          <header className="bg-primary text-slate-900 p-4 flex justify-between items-center rounded-t-lg">
            <h3 className="font-bold text-lg">Chat with a Technician</h3>
            <button onClick={onClose} className="text-slate-900 hover:opacity-75">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </header>

          <div className="flex-1 p-4 overflow-y-auto bg-background">
            {messages.map((msg, index) => (
              <div key={index} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} mb-4`}>
                <div className={`max-w-[80%] rounded-lg px-4 py-2 ${msg.role === 'user' ? 'bg-gradient-to-br from-cyan-500 to-primary text-slate-900' : 'bg-slate-600 text-textPrimary'}`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start mb-4">
                  <div className="max-w-[80%] rounded-lg px-4 py-2 bg-slate-600 text-textPrimary">
                      <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-slate-400 rounded-full animate-pulse"></div>
                          <div className="w-2 h-2 bg-slate-400 rounded-full animate-pulse [animation-delay:0.2s]"></div>
                          <div className="w-2 h-2 bg-slate-400 rounded-full animate-pulse [animation-delay:0.4s]"></div>
                      </div>
                  </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={handleSendMessage} className="p-4 border-t border-slate-700">
            <div className="flex items-center">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask a question..."
                className="flex-1 px-3 py-2 bg-background border border-slate-600 rounded-l-md focus:outline-none focus:ring-primary focus:border-primary text-textPrimary"
                disabled={isLoading}
              />
              <button type="submit" className="bg-primary text-slate-900 px-4 py-2 rounded-r-md hover:brightness-110 disabled:bg-slate-500 transition-all" disabled={isLoading}>
                Send
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default ChatModal;