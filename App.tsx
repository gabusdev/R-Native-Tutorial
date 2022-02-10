import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Text, ScrollView, View } from "react-native";

export default function App() {
  const [people, setPeople] = useState([
    { name: "Mario", key: 1 },
    { name: "Luigi", key: 2 },
    { name: "Bowser", key: 3 },
    { name: "Peach", key: 4 },
    { name: "DK", key: 5 },
    { name: "Yoshi", key: 6 },
  ]);

  return (
    <View style={styles.container}>
      <ScrollView>
        {people.map((item) => (
          <View>
            <Text style={styles.item}>{item.name}</Text>
          </View>
        ))}
      </ScrollView>
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 40,
    paddingHorizontal: 20,
    // alignItems: "center",
    // justifyContent: "center",
  },
  item: {
    padding: 30,
    marginTop: 24,
    backgroundColor: "pink",
    fontSize: 24,
  },
});
