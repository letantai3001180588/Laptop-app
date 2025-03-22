import React from "react";
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import TabBar from "@/components/TabBar";

export default function TabLayout() {
  return (
    <Tabs tabBar={(props) => <TabBar {...props} />}>
      <Tabs.Screen
        name="index"
        options={{
          title: "",
          headerShown: false,
          header: () => null,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "",
          headerShown: false,
          header: () => null,
        }}
      />
      <Tabs.Screen
        name="notifications"
        options={{
          title: "",
          headerShown: false,
          header: () => null,
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          title: "",
          headerShown: false,
          header: () => null,
          tabBarBadge: 3,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "",
          headerShown: false,
          header: () => null,
        }}
      />
    </Tabs>
  );
}
