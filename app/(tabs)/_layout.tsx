// app/(tabs)/_layout.tsx
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { Text } from "react-native";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          position: "absolute",
          backgroundColor: "rgba(255,255,255,0.6)",
          borderTopWidth: 0.5,
          borderTopColor: "#ccc",
          height: 60,
        },
        tabBarActiveTintColor: "#222",
        tabBarInactiveTintColor: "#999",
        headerStyle: {
          backgroundColor: "rgba(255,255,255,0.8)",
          borderBottomWidth: 0.5,
          borderBottomColor: "#ccc",
        },
        headerTitle: () => (
          <Text style={{ fontWeight: "700", fontSize: 22 }}>✨ MyApp</Text>
        ),
        headerTitleAlign: "center",
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "600",
        },
        tabBarHideOnKeyboard: true,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: "About",
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="information-circle-outline"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="tugas"
        options={{
          title: "Testing",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="flask-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="counter"
        options={{
          title: "Counter",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="flask-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen name="aksi" options={{ title: "Aksi", tabBarIcon: ({ color }) => <Ionicons name="flame" size={22} color={color} /> }} />
      <Tabs.Screen name="comedy" options={{ title: "Comedy", tabBarIcon: ({ color }) => <Ionicons name="happy" size={22} color={color} /> }} />
      <Tabs.Screen name="drama" options={{ title: "Drama", tabBarIcon: ({ color }) => <Ionicons name="theater-masks" size={22} color={color} /> }} />
      <Tabs.Screen name="dokumenter" options={{ title: "Dokumenter", tabBarIcon: ({ color }) => <Ionicons name="book" size={22} color={color} /> }} />
    </Tabs>

  );
}
