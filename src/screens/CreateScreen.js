import { StyleSheet, Text, View, TextInput, useState } from "react-native";
import React from "react";

const CreateScreen = () => {
  const [title, setTitle] = useState([]);
  const [content, setContent] = useState([]);
  return (
    <View>
      <Text>Enter Title</Text>
      <TextInput value={title} onChangeText={(text) => setTitle(text)} />
      <Text>Enter Content</Text>
      <TextInput
        value={content}
        onChangeText={(content) => setContent(content)}
      />
    </View>
  );
};

export default CreateScreen;

const styles = StyleSheet.create({});
