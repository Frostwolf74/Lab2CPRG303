/**
 * My To Do List App
 *
 * @format
 */

import React from 'react';
import {View} from 'react-native';
import TodoForm from "../TodoForm";
import TodoList from "../TodoList";



export default function App() {
  return (
    <View>
      <TodoList />
      <TodoForm />
    </View>
  );
}