import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function SummaryScreen({ route, navigation }) {
  const { name, age, email, phone, password, hobby, tag } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Summary</Text>
      <View style={styles.summaryBox}>
        <Text style={styles.summaryText}>{`Name: ${name}`}</Text>
        <Text style={styles.summaryText}>{`Age: ${age}`}</Text>
        <Text style={styles.summaryText}>{`Email: ${email}`}</Text>
        <Text style={styles.summaryText}>{`Phone: ${phone}`}</Text>
        <Text style={styles.summaryText}>{`Hobby: ${hobby}`}</Text>
        <Text style={styles.summaryText}>{`Tag Line: ${tag}`}</Text>
      </View>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#E3E0E0',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  summaryBox: {
    backgroundColor: 'white',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    padding: 20,
    width: '100%',
    maxWidth: 400,
  },
  summaryText: {
    fontSize: 16,
    marginBottom: 10,
  },
});
