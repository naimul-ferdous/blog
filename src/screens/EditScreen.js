import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Context } from '../context/BlogContext';

import BlogPostForm from '../components.js/BlogPostForm';

const EditScreen = ({navigation}) => {

  const {state} = useContext(Context);

  const blogPost= state.find((blogPost)=> blogPost.id === navigation.getParam('id'));

  return <BlogPostForm
  initialValues= {{title: blogPost.title, content: blogPost.content}}
   onSubmit={(title, content)=> {
    console.log(title);
  }} />;
}

export default EditScreen

const styles = StyleSheet.create({})