// calculatorStyles.js

import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 80,
    justifyContent: 'top',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 50,
  },
  input: {
    width: '80%',
    height: 40,
    fontSize: 23,
    borderColor: 'green',
    borderWidth: 1,
    marginBottom: 25,
    paddingHorizontal: 10,
  },
  buttonContainer: {
    marginTop: 30,
  },
  button: {
    backgroundColor: 'green',
    padding: 20,
    borderRadius: 10,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  resultText: {
    fontSize: 30,
    marginTop: 20,
  },
  result: {
    marginTop: 30,
    fontSize: 20,
  }
});

export const pickerStyles = StyleSheet.create({
    inputIOS: {
      fontSize: 16,
      paddingVertical: 12,
      paddingHorizontal: 10,
      borderWidth: 1,
      borderColor: 'gray',
      borderRadius: 4,
      color: 'black',
      paddingRight: 30, 
    },
    inputAndroid: {
      fontSize: 16,
      paddingHorizontal: 10,
      paddingVertical: 8,
      borderWidth: 0.5,
      borderColor: 'purple',
      borderRadius: 8,
      color: 'black',
      paddingRight: 30, 
    },
    iconContainer: {
      top: 10,
      right: 12,
    },
  });