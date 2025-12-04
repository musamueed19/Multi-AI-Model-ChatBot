export interface ChatMessage {
    role: "user" | "assistant" | "system";
    content: string;
}

export interface ChatMessagesProps {
    messages: ChatMessage[];
} 