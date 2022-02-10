import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Text, FlatList, View } from "react-native";

export default function App() {
  const [people, setPeople] = useState([
    { name: "Mario", id: 1 },
    { name: "Luigi", id: 2 },
    { name: "Bowser", id: 3 },
    { name: "Peach", id: 4 },
    { name: "DK", id: 5 },
    { name: "Yoshi", id: 6 },
  ]);

  return (
    <View style={styles.container}>
      <FlatList
        // keyExtractor={(item) => String(item.id)} // Somehow not necesari
        numColumns={2}
        data={people}
        renderItem={({ item }) => <Text style={styles.item}>{item.name}</Text>}
      />

      {/* <ScrollView>
        {people.map((item) => (
          <View>
            <Text style={styles.item}>{item.name}</Text>
          </View>
        ))}
      </ScrollView> */}

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
    marginHorizontal: 10,
  },
});
