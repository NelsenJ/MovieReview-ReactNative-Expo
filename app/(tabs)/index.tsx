// app/index.tsx
import { View, Text, StyleSheet, Pressable, ScrollView } from "react-native";
import globalStyle from "@/styles/globalStyle";
export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={globalStyle.container}>
      <Text style={globalStyle.title}>Welcome to MyApp</Text>
      <Text style={globalStyle.subtitle}>Your elegant white-mode interface</Text>

      <View style={globalStyle.container2}>
        <View style={globalStyle.card}>
          <Text style={globalStyle.cardTitle}>🧠 Learn</Text>
          <Text style={globalStyle.cardText}>Explore useful resources and tools</Text>
        </View>
        <View style={globalStyle.card}>
          <Text style={globalStyle.cardTitle}>📖 Study</Text>
          <Text style={globalStyle.cardText}>Explore useful resources and tools</Text>
        </View>
        <View style={globalStyle.card}>
          <Text style={globalStyle.cardTitle}>💵 Manage</Text>
          <Text style={globalStyle.cardText}>Explore useful resources and tools</Text>
        </View>
      </View>

      

      <Pressable style={globalStyle.button}>
        <Text style={globalStyle.buttonText}>Start Now</Text>
      </Pressable>

      <Pressable style={globalStyle.buttonSecondary}>
        <Text style={globalStyle.buttonText}>More Info</Text>
      </Pressable>
    </ScrollView>
  );
}
