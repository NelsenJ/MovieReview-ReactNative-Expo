import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Image,
} from "react-native";

const Tugas = () => {
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [pesan, setPesan] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = () => {
    if (nama.trim() === "" || email.trim() === "" || pesan.trim() === "") {
      setSuccessMessage("Harap isi semua field.");
      return;
    }

    const data = {
      nama,
      email,
      pesan,
    };

    console.log("Form terkirim:", data);

    setSuccessMessage(`Halo, ${nama}! Data kamu berhasil dikirim.`);
    setNama("");
    setEmail("");
    setPesan("");
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        style={styles.container}
      >
        <View style={styles.formCard}>
          
          <Image
            source={require("../../assets/images/image.jpeg")}
            style={styles.image}
            resizeMode="cover"
          />

          <Text style={styles.title}>Formulir Kelas Universitas</Text>

          {successMessage !== "" && (
            <View style={styles.alert}>
              <Text style={styles.alertText}>{successMessage}</Text>
            </View>
          )}

          <Text style={styles.label}>Nama:</Text>
          <TextInput
            style={styles.input}
            placeholder="Nama lengkap kamu"
            value={nama}
            onChangeText={setNama}
          />

          <Text style={styles.label}>Email:</Text>
          <TextInput
            style={styles.input}
            placeholder="Email kampus kamu"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />

          <Text style={styles.label}>Pesan atau Kelas:</Text>
          <TextInput
            style={[styles.input, { height: 80 }]}
            placeholder="Contoh: Informatika A, Teknik Sipil 2022, dll"
            value={pesan}
            onChangeText={setPesan}
            multiline
          />

          <View style={styles.buttonContainer}>
            <Button title="Kirim" onPress={handleSubmit} color="#3D5AFE" />
          </View>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: "#f2f4f8",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    padding: 24,
  },
  formCard: {
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    padding: 20,
    borderRadius: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
    alignSelf: "center",
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 24,
    color: "#1e1e1e",
    textAlign: "center",
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    color: "#333",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    borderRadius: 10,
    padding: 12,
    fontSize: 16,
    marginBottom: 20,
  },
  buttonContainer: {
    marginTop: 8,
    borderRadius: 10,
    overflow: "hidden",
  },
  alert: {
    backgroundColor: "#d0f0c0",
    padding: 12,
    borderRadius: 10,
    marginBottom: 16,
  },
  alertText: {
    color: "#2e7d32",
    textAlign: "center",
  },
});

export default Tugas;
