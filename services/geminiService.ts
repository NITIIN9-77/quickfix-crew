import { GoogleGenAI, Chat } from "@google/genai";
import type { ChatMessage } from '../types';

let ai: GoogleGenAI | null = null;
let chat: Chat | null = null;

const getAI = () => {
  if (!ai) {
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

const systemInstruction = `You are 'Uno', the smart virtual assistant for 'Fixuno'. We provide premium home services. Our contact number is 8423979371 and our email is fixuno628@gmail.com. We are 'All Day Open'. Our official Instagram is @fixunmultiservice. Your role is to help users with service info and guide them to 'Book Now'. Keep answers professional and concise. Available services: AC, Fan, Wiring, Switchboards, General Appliances, Plumbing, Pumps, and Parts. Represent the brand: Reliable, Fast, and #1.`;

const initializeChat = (): Chat => {
    const aiInstance = getAI();
    return aiInstance.chats.create({
      model: 'gemini-3-flash-preview',
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
    return "I'm sorry, I'm having trouble connecting right now.";
  }
};

export const getServiceExplanation = async (serviceName: string, subServiceName: string, price: number): Promise<string> => {
  try {
    const aiInstance = getAI();
    const prompt = `As 'Uno', explain the service "${subServiceName}" (Part of ${serviceName}, Cost: ₹${price}). Keep it concise and professional for a homeowner. Explain benefits. No CTA.`;

    const response = await aiInstance.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: `You are 'Uno', a helpful assistant for 'Fixuno'.`,
      },
    });

    return response.text || "Service details currently unavailable.";
  } catch (error) {
    console.error("Gemini API error:", error);
    throw new Error("Failed to get explanation.");
  }
};