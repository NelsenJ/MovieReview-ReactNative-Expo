// styles/globalStyle.ts
import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const isSmallScreen = width < 768; // breakpoint tablet

export default StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  container2: {
    flexDirection: isSmallScreen ? "column" : "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    flexWrap: "wrap",
    gap: 12,
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 20,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    marginBottom: 20,
    textAlign: "center",
  },
  card: {
    backgroundColor: "#f9f9f9",
    padding: 20,
    borderRadius: 16,
    width: isSmallScreen ? "100%" : "32%",
    marginVertical: 10,
    shadowColor: "#ccc",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    elevation: 2,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 5,
  },
  cardText: {
    fontSize: 14,
    color: "#666",
  },
  button: {
    marginTop: 20,
    backgroundColor: "#000",
    padding: 12,
    borderRadius: 12,
    width: "100%",
    alignItems: "center",
  },
  buttonSecondary: {
    marginTop: 10,
    backgroundColor: "#444",
    padding: 12,
    borderRadius: 12,
    width: "100%",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },
});
