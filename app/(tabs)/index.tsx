/**
 * My To Do List App
 *
 * @format
 */

import React from 'react';
import {View} from 'react-native';
import TodoForm from "../TodoForm";
import TodoList from "../TodoList";
import {useState} from "react";


export default function App() {
  const [tasks, setTasks] = useState(
    ['Do laundry', 'Go to gym', 'Walk dog']
  );

  return (
    <View>
      <TodoList tasks={tasks} />
      <TodoForm />
    </View>
  );
}