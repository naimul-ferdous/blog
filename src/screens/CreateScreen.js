import { useContext } from "react";
import { StyleSheet } from "react-native";

import { Context } from "../context/BlogContext";

import BlogPostForm from "../components.js/BlogPostForm";

const CreateScreen = ({navigation}) => {
 
  const { addBlogPost } = useContext(Context);

  return <BlogPostForm onSubmit={(title, content)=> {
    addBlogPost(title, content, ()=> navigation.navigate('Index'));
  }} />
  
};

export default CreateScreen;

const styles = StyleSheet.create({
  
});
