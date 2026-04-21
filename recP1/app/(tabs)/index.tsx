import { Link, type Href } from "expo-router";
import { StyleSheet, Text, View, Pressable } from "react-native";

const telas = [
  { nome: "Kabum", rota: "/kabum" },
  { nome: "Mercado Livre", rota: "/mercado-livre" },
] satisfies readonly { nome: string; rota: Href }[];

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Guia da Prova</Text>
      <Text style={styles.subtitulo}>Escolha uma tela para abrir</Text>

      <View style={styles.lista}>
        {telas.map((tela) => (
          <Link key={tela.rota} href={tela.rota} asChild>
            <Pressable style={styles.botao}>
              <Text style={styles.textoBotao}>{tela.nome}</Text>
            </Pressable>
          </Link>
        ))}
      </View>
    </View>
  );
}
    
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f4f4",
    padding: 24,
    justifyContent: "center",
  },
  titulo: {
    fontSize: 28,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 8,
  },
  subtitulo: {
    fontSize: 16,
    textAlign: "center",
    color: "#666",
    marginBottom: 32,
  },
  lista: {
    gap: 12,
  },
  botao: {
    backgroundColor: "#111827",
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 12,
  },
  textoBotao: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
});