import React, { useState } from 'react';
import { View, Text, TextInput, Alert, TouchableOpacity } from 'react-native';
import { pickerStyles, styles } from './styles';
import RNPickerSelect from 'react-native-picker-select';

const Calculator: React.FC = () => {
  const [num1, setNum1] = useState<string>('');
  const [num2, setNum2] = useState<string>('');
  const [selectedOperation, setSelectedOperation] = useState<string>('');
  const [result, setResult] = useState<string>('');

  const calculate = () => {
    if (!num1 || !num2 || !selectedOperation) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return;
    }

    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);
    let calculatedResult: number;

    switch (selectedOperation) {
      case '+':
        calculatedResult = number1 + number2;
        break;
      case '-':
        calculatedResult = number1 - number2;
        break;
      case '*':
        calculatedResult = number1 * number2;
        break;
      case '/':
        if (number2 === 0) {
          Alert.alert('Erro', 'Não é possível dividir por zero.');
          return;
        }
        calculatedResult = number1 / number2;
        break;
      default:
        Alert.alert('Erro', 'Operação inválida.');
        return;
    }

    setResult(calculatedResult.toString());
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora</Text>
      <TextInput
        placeholder="Número 1"
        keyboardType="numeric"
        onChangeText={(text) => setNum1(text)}
        value={num1}
        style={styles.input}
      />
      <TextInput
        placeholder="Número 2"
        keyboardType="numeric"
        onChangeText={(text) => setNum2(text)}
        value={num2}
        style={styles.input}
      />
      <View style={{marginTop: 15,}}>
         <RNPickerSelect
        placeholder={{ label: 'Selecione uma operação', value: null }}
        onValueChange={(value) => setSelectedOperation(value)}
        items={[
          { label: 'Somar', value: '+' },
          { label: 'Diminuir', value: '-' },
          { label: 'Multiplicar', value: '*' },
          { label: 'Dividir', value: '/' },
        ]}
        style={pickerStyles}
      />
      </View>
     
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={calculate} style={styles.button}>
          <Text style={styles.buttonText}>Calcular</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.result}> Resultado: </Text>
      <Text style={styles.resultText}> {result}</Text>
    </View>
  );
};

export default Calculator;
