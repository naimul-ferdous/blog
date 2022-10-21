import { StyleSheet, Text, View } from "react-native";
import React, { useState, useReducer } from "react";

import createDataContext from "./createDataContext";

const blogReducer = (state, action) => {
  switch (action.type) {
    case "add_blogpost":
      return [...state, { title: `Blog Post #${state.length + 1}` }];

    default:
      return state;
  }
};

const addBlogPost = (dispatch) => {
  return () => {
    dispatch({ type: "add_blogpost" });
  };
};

const editBlogPost = () => {};

const deleteBlogPost = () => {};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost },
  []
);
