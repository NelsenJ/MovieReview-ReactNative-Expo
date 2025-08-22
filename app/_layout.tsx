import React from "react";
import { Stack } from "expo-router";
import { useWindowDimensions } from "react-native";

export default function RootLayout() {
  const { width } = useWindowDimensions();
  const isDesktop = width >= 875;

  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: "#0f0f23",
        },
        animation: isDesktop ? "fade" : "slide_from_right",
      }}
    />
  );
}
