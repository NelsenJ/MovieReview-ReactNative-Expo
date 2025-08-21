// app/aksi.tsx
import { useState } from "react";
import { View, Text, Image, TextInput, Button, ScrollView, StyleSheet } from "react-native";

type MovieCardProps = {
  title: string;
  description: string;
  poster: string;
};

function MovieCard({ title, description, poster }: MovieCardProps) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: poster }} style={styles.poster} />
      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.cardDesc}>{description}</Text>
    </View>
  );
}

export default function Aksi() {
  const [search, setSearch] = useState("");
  const [liked, setLiked] = useState(false);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>🔥 Film Aksi</Text>
      <TextInput
        style={styles.input}
        placeholder="Cari film aksi..."
        value={search}
        onChangeText={setSearch}
      />

      <MovieCard
        title="John Wick"
        description="Seorang mantan pembunuh bayaran kembali beraksi."
        poster="https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjYxNl5BMl5BanBnXkFtZTgwODU2NzE2MzE@._V1_FMjpg_UX1000_.jpg"
      />

      <View style={styles.buttonContainer}>
        <Button
          title={liked ? "💔 Unlike" : "❤️ Like"}
          onPress={() => setLiked(!liked)}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 12,
  },
  input: {
    width: "100%",
    padding: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#ddd",
    marginBottom: 20,
  },
  card: {
    backgroundColor: "#f9f9f9",
    borderRadius: 16,
    padding: 16,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 4,
    elevation: 3,
    width: "100%",
  },
  poster: {
    width: "100%",
    height: 180,
    borderRadius: 12,
    marginBottom: 12,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 6,
  },
  cardDesc: {
    fontSize: 14,
    color: "#666",
  },
  buttonContainer: {
    marginTop: 10,
    width: "100%",
  },
});
