
import { GoogleGenAI, Chat } from "@google/genai";
import type { ChatMessage } from '../types';

let ai: GoogleGenAI | null = null;
let chat: Chat | null = null;

const getAI = () => {
  if (!ai) {
    if (!process.env.API_KEY) {
      throw new Error("API_KEY environment variable not set");
    }
    ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  }
  return ai;
};

const systemInstruction = `You are 'Techie', a friendly and knowledgeable virtual assistant for 'QuickFix Crew'. Your role is to help users understand our services, answer basic appliance questions, and guide them on how to book a service. Keep your answers concise, helpful, and professional. Do not perform the booking yourself, but direct them to the 'Book Now' buttons or suggest they explore the services section. Available services are AC, Fan, Wiring, Switchboards, General Appliances, and Plumbing.`;

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
    return response.text;
  } catch (error) {
    console.error("Gemini API error:", error);
    return "I'm sorry, I'm having trouble connecting right now. Please try again later.";
  }
};

// Fix: Add and export getServiceExplanation function to resolve the import error.
export const getServiceExplanation = async (serviceName: string, subServiceName: string, price: number): Promise<string> => {
  try {
    const aiInstance = getAI();
    const prompt = `As 'Techie', the friendly virtual assistant for 'QuickFix Crew', explain the service "${subServiceName}" which is part of our "${serviceName}" category and costs ₹${price}. Keep it simple, clear, and concise for a typical homeowner. Explain what it includes and why it's beneficial. Be reassuring and professional. Do not prompt for action or try to sell other services.`;

    const response = await aiInstance.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        systemInstruction: `You are 'Techie', a friendly and knowledgeable virtual assistant for 'QuickFix Crew'. Your goal is to provide helpful explanations.`,
      },
    });

    return response.text;
  } catch (error) {
    console.error("Gemini API error (getServiceExplanation):", error);
    // The component catching this error will display a user-friendly message.
    throw new Error("Failed to get service explanation from Gemini API.");
  }
};