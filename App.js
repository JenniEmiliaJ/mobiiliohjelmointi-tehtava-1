import { StatusBar } from 'expo-status-bar';
import { useRef, useState } from 'react';
import { Button } from 'react-native';
import { SafeAreaView, StyleSheet, Text, TextInput, View, FlatList } from 'react-native';

export default function App() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [sum, setSum] = useState(null);
  const [historia, setHistoria] = useState('');
  const [historiat, setHistoriat] = useState([]);

  const initialFocus = useRef(null);

  function calculateplus() {
    const numA = parseFloat(a) || 0;
    const numB = parseFloat(b) || 0;
    const result = numA + numB;
    setSum(result);
    const entry = `${numA} + ${numB} = ${result}`;
    setHistoriat([...historiat, entry]);
    setA('');
    setB('');
  initialFocus.current.focus();
  }

  function calculateminus() {
    const numA = parseFloat(a) || 0;
    const numB = parseFloat(b) || 0;
    const result = numA - numB;
    setSum(result);
    const entry = `${numA} - ${numB} = ${result}`;
    setHistoriat([...historiat, entry]);
    setA('');
    setB('');
  initialFocus.current.focus();
  }
  
 
  return (
    <SafeAreaView style={styles.container}>
    
    {sum !== null && <Text style={styles.result}>Result: {sum}</Text>}

      <TextInput
      style={styles.input} ref={initialFocus}
      placeholder="Luku 1"
      keyboardType="numeric"
      value={a}
      onChangeText={setA}
      />

      <TextInput
      style={styles.input}
      placeholder="Luku 2"
      keyboardType="numeric"
      value={b}
      onChangeText={setB}
      />

    
      <View style={styles.buttonRow}>
      <Button title="+" onPress={calculateplus} />
      <Button title="-" onPress={calculateminus} />
      </View>

      <Text style={styles.result}>History</Text>
     <FlatList
        data={historiat}
        renderItem={
          ({item}) => <Text style={styles.listItem}>{item}</Text> 
        }
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
    gap: 12 },

  listItem: {
    backgroundColor: '#fff',
    borderRadius: 15,
    fontSize: 15,
    marginTop: 2
  },

  input: {
      width: "80%",
      borderWidth: 1,
      borderColor: "#ccc",
      borderRadius: 8,
      padding: 12,
      marginBottom: 8,
    },
  buttonRow: {
    flexDirection: "row",
    gap: 12,
    marginTop: 8,
  },
  result: { fontSize: 20, fontWeight: "bold", marginTop: 16},
});
