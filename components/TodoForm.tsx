import { FunctionComponent, useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

interface TodoFormProps {
  handler: Function;
}

const TodoForm: FunctionComponent<TodoFormProps> = ({ handler }) => {
  const [todo, setTodo] = useState("");

  const changeHandler = (text: string) => {
    setTodo(text);
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder='New Todo...'
        onChangeText={changeHandler}
      />
      <Button onPress={() => handler(todo)} color='coral' title='Add Todo' />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
});

export default TodoForm;
