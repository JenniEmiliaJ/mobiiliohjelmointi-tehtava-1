import { SafeAreaView, StyleSheet, Text, FlatList } from 'react-native';

export default function HistoryScreen({ route }) {
  const history = route.params.history || [];

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>History</Text>
      <FlatList
        data={history}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Text style={styles.listItem}>{item}</Text>}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    gap: 12,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  listItem: {
    backgroundColor: '#fff',
    borderRadius: 15,
    fontSize: 15,
    marginTop: 2,
  },
});
