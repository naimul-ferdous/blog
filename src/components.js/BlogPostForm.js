import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

const BlogPostForm = ({onSubmit}) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    return (
        <View>
          <Text style={styles.label}>Enter Title</Text>
          <TextInput style={styles.input} value={title} onChangeText={(text) => setTitle(text)} />
          <Text style={styles.label}>Enter Content</Text>
          <TextInput
            style={styles.input}
            value={content}
            onChangeText={(content) => setContent(content)}
          />
          <Button
            title="Add Blog Post"
            onPress={()=> onSubmit(title, content)}
            />
        </View>
      );
}

export default BlogPostForm

const styles = StyleSheet.create({
    input: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 15,
        padding: 5,
        margin: 5
      },
    
      label: {
        fontSize: 20,
        marginBottom: 5,
        marginLeft: 5
      }
})