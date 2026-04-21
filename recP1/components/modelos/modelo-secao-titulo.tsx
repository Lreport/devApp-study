import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';

type ModeloSecaoTituloProps = {
  titulo: string;
  acao?: string;
};

export function ModeloSecaoTitulo({
  titulo,
  acao = 'Ver todos',
}: ModeloSecaoTituloProps) {
  return (
    <View style={styles.container}>
      {/* titulo principal */}
      <Text style={styles.titulo}>{titulo}</Text>

      {/* acao secundaria */}
      <View style={styles.acao}>
        <Text style={styles.textoAcao}>{acao}</Text>
        <Ionicons name="chevron-forward" size={16} color="#ff6500" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  titulo: {
    fontSize: 22,
    fontWeight: '700',
    color: '#333333',
  },
  acao: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textoAcao: {
    fontSize: 14,
    fontWeight: '700',
    color: '#ff6500',
  },
});
