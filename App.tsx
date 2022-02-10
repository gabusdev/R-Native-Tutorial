// import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  FlatList,
  View,
} from "react-native";
import Header from "./components/Header";
import TodoItem from "./components/TodoItem";
import TodoForm from "./components/TodoForm";

export default function App() {
  const [todos, setTodos] = useState([
    { text: "buy coffee", key: "1" },
    { text: "create an app", key: "2" },
    { text: "play on the switch", key: "3" },
  ]);

  const handleDelete = (key: string) => {
    setTodos((prev) => prev.filter((t) => t.key != key));
  };

  const submitHandler = (text: string) => {
    const newTodo = { text: text, key: Math.random().toString() };
    setTodos([newTodo, ...todos]);
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <TodoForm handler={submitHandler} />
        <FlatList
          data={todos}
          renderItem={({ item }) => (
            <TodoItem item={item} handler={handleDelete} />
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
  content: {
    padding: 40,
  },
});
