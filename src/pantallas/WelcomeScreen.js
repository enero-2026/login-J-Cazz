import { View, Text, Button, StyleSheet } from "react-native";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/config";

export default function WelcomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>¡Bienvenido!</Text>
      <Text>Estás autenticado como:</Text>
      <Text style={styles.email}>{auth.currentUser?.email}</Text>
      <Button title="Cerrar sesión" onPress={() => signOut(auth)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", padding: 24 },
  title: { fontSize: 28, fontWeight: "bold", marginBottom: 12 },
  email: { color: "#555", marginBottom: 24 },
});