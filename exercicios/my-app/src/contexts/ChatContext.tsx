import { Message } from "@/types/Message";
import { createContext, ReactNode } from "react";

type ChatContext = {
    chat: Message[];
    addMessage: (user: string, text: string) => void;
}

export const ChatContext = createContext<ChatContext | null>(null);

export const ChatProvider = ({ children }: { children: ReactNode }) => {
    

    return (
        <ChatContext.Provider value={}>{children}</ChatContext.Provider>
    );
}