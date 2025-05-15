import { Ionicons } from "@expo/vector-icons";
import { Image } from "react-native";
export type IconName = 'home' | 'assistant' | 'notifications' | 'cart' | 'profile';

export const icon: Record<IconName, ({ color }: { color: string }) => JSX.Element> = {
  home: ({ color }) => <Ionicons name="home-outline" size={24} color={color} />,
  assistant: ({ color }) => <Image
    source={{ uri: "https://img.freepik.com/free-vector/chatbot-chat-message-vectorart_78370-4104.jpg" }}
    style={{ width: 30, minHeight: 30, resizeMode: "contain" }}
  />,
  notifications: ({ color }) => <Ionicons name="notifications-outline" size={24} color={color} />,
  cart: ({ color }) => <Ionicons name="cart-outline" size={24} color={color} />,
  profile: ({ color }) => <Ionicons name="person-outline" size={24} color={color} />,
};