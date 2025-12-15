
import { GoogleGenAI, Chat } from "@google/genai";
import type { ChatMessage } from '../types';

let ai: GoogleGenAI | null = null;
let chat: Chat | null = null;

const getAI = () => {
  if (!ai) {
    // Safe check for process.env to prevent "process is not defined" error in some browser environments
    let apiKey: string | undefined;
    try {
        if (typeof process !== 'undefined' && process.env) {
            apiKey = process.env.API_KEY;
        }
    } catch (e) {
        console.warn("Could not access process.env");
    }

    if (!apiKey) {
      throw new Error("API_KEY environment variable not set or not accessible");
    }
    ai = new GoogleGenAI({ apiKey });
  }
  return ai;
};

const systemInstruction = `You are 'Uno', a smart and efficient virtual assistant for 'Fixuno', a premium home service provider. Your role is to help users understand our services, answer basic appliance and cleaning questions, and guide them on how to book a service or buy parts. Keep your answers concise, helpful, and professional. Do not perform the booking yourself, but direct them to the 'Book Now' buttons or suggest they explore the services section. Available services are AC, Fan, Wiring, Switchboards, General Appliances, Plumbing, and Appliance Parts. Represents the brand 'Fixuno' - fast, reliable, and number one in quality.`;

const initializeChat = (): Chat => {
    const aiInstance = getAI();
    return aiInstance.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: systemInstruction,
      },
    });
};

export const getChatResponse = async (message: string): Promise<string> => {
  try {
    if (!chat) {
      chat = initializeChat();
    }
    const response = await chat.sendMessage({ message });
    return response.text || "I didn't get a response. Please try again.";
  } catch (error) {
    console.error("Gemini API error:", error);
    return "I'm sorry, I'm having trouble connecting right now. Please check your internet connection or try again later.";
  }
};

export const getServiceExplanation = async (serviceName: string, subServiceName: string, price: number): Promise<string> => {
  try {
    const aiInstance = getAI();
    const prompt = `As 'Uno', the virtual assistant for 'Fixuno', explain the service or part named "${subServiceName}" which is part of our "${serviceName}" category and costs ₹${price}. Keep it simple, clear, and concise for a typical homeowner. Explain what it includes (or what it's for, if it's a part) and why it's beneficial. Be reassuring and professional. Do not prompt for action or try to sell other services.`;

    const response = await aiInstance.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        systemInstruction: `You are 'Uno', a helpful virtual assistant for 'Fixuno'. Your goal is to provide helpful explanations.`,
      },
    });

    return response.text || "Service details currently unavailable.";
  } catch (error) {
    console.error("Gemini API error (getServiceExplanation):", error);
    throw new Error("Failed to get service explanation from Gemini API.");
  }
};
