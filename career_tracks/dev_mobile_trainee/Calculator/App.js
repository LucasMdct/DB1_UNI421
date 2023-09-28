import { StyleSheet, View } from 'react-native';
import Calculator from './src/Calculator';

export default function App() {
  return (
    <View style={styles.container}>
     <Calculator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },

});
