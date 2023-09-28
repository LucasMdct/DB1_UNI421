import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Provider } from 'react-native-paper';
import TodoList from './src/TodoList';

export default function App() {
  return (
    <Provider>
      <StatusBar style="auto" translucent={false} backgroundColor='#fff'/>
      <TodoList />
    </Provider>
  );
}
