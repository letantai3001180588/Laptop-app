import { Ionicons } from "@expo/vector-icons";
export type IconName = 'index' | 'explore' | 'notifications' | 'cart' | 'profile';

export const icon: Record<IconName, ({ color }: { color: string }) => JSX.Element> = {
  index: ({ color }) => <Ionicons name="home-outline" size={22} color={color} />,
  explore: ({ color }) => <Ionicons name="search-outline" size={22} color={color} />,
  notifications: ({ color }) => <Ionicons name="notifications-outline" size={22} color={color} />,
  cart: ({ color }) => <Ionicons name="cart-outline" size={22} color={color} />,
  profile: ({ color }) => <Ionicons name="person-outline" size={22} color={color} />,
};