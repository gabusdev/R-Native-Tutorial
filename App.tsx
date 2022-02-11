import { useState } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  FlatList,
  View,
  TouchableWithoutFeedback,
  Keyboard,
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
    if (text.length == 0) {
      Alert.alert("OOPS!", "Todo can't be empty.", [{ text: "Ok" }]);
      // console.log("Empty invalid");
      return;
    }

    const newTodo = { text: text, key: Math.random().toString() };
    setTodos([newTodo, ...todos]);
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
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
    </TouchableWithoutFeedback>
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
