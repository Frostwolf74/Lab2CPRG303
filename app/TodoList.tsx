import React from 'react';
import {ScrollView, Pressable, View, Text, StyleSheet} from "react-native";
// SafeAreaView (react-native) is deprecated
import { SafeAreaView } from 'react-native-safe-area-context';

export default function TodoList({ tasks }: { tasks: string[] }) {
  return (
    <SafeAreaView>
      <ScrollView>
        {tasks.map((task, index) => (
          <Pressable key={index}>
            <View style={styles.task}>
              <Text style={styles.taskText}>{task}</Text>
            </View>
          </Pressable>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  task: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  completed: {
    backgroundColor: '#e0e0e0',
  },
  taskText: {
    fontSize: 16,
  }
});