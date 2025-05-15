import React from "react";
import { Tabs } from "expo-router";
import TabBar from "@/components/TabBar";

export default function TabLayout() {
  return (
    <Tabs tabBar={(props) => <TabBar {...props} />}>
      <Tabs.Screen
        name="home"
        options={{
          title: "",
          header: () => null,
        }}
      />
      <Tabs.Screen
        name="assistant"
        options={{
          title: "",
          header: () => null,
        }}
      />
      <Tabs.Screen
        name="notifications"
        options={{
          title: "",
          header: () => null,
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          title: "",
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "",
          header: () => null,
        }}
      />
    </Tabs>
  );
}
