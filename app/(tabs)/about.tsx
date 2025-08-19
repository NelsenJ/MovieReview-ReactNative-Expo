import { View, Text, StyleSheet } from "react-native";

const About = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card1}>
        <Text style={styles.cardTitle}>About This App</Text>
        <Text style={styles.cardText}>This app is built with Expo Router and React Native to showcase smooth navigation and elegant UI.</Text>
      </View>
      <View style={styles.card2}>
        <Text style={styles.cardTitle}>Developer</Text>
        <Text style={styles.cardText}>Created by a passionate developer who loves clean design and performance.</Text>
      </View>
      <View style={styles.card3}>
        <Text style={styles.cardTitle}>Version</Text>
        <Text style={styles.cardText}>Current version: 1.0.0 — updated regularly for improvements and new features.</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    justifyContent: "center",
    gap: 20,
  },
  card1: {
    backgroundColor: "#E0F7FA",
    padding: 20,
    borderRadius: 16,
  },
  card2: {
    backgroundColor: "#FFF3E0",
    padding: 20,
    borderRadius: 16,
  },
  card3: {
    backgroundColor: "#E8F5E9", // light green
    padding: 20,
    borderRadius: 16,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#333",
  },
  cardText: {
    fontSize: 14,
    color: "#555",
    lineHeight: 20,
  },
});

export default About;
