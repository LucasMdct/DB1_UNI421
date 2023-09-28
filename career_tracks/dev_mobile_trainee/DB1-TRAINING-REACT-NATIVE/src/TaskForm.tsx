import React, {memo,useState} from "react";
import { StyleSheet, View} from "react-native"
import { Button , TextInput, DefaultTheme} from "react-native-paper";

const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: 'green', // Cor da borda quando o TextInput está focado
      accent: 'black', // Cor da borda quando o TextInput não está focado
    },
  };
  
const styles = StyleSheet.create({
    form: {
        zIndex: 0,
        marginTop: 100,
        flexDirection: "row",
        position: "relative",
        alignItems: "center",
        paddingHorizontal: 10,
        backgroundColor: "whitesmoke",
        padding: 10,
        width: '95%',
        shadowColor: "violet",
        borderRadius: 12,


        //sombra
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    formInput: {
        flex: 1,
        alignItems: "center",
        color: "#000",
        borderWidth: 0.2,
    },
    formSaveButton: {
        marginLeft: 15,
        padding: 5,
        backgroundColor: "green",
    }
});

export type FormValuesType = {
    title: string;
}

type TaskFormPropsType = {
    onSave: (values: FormValuesType) => void;
}

const TaskForm = ({ onSave }: TaskFormPropsType) => {
    const [title, setTitle ] = useState('');

    const handleSaveTask = () => {
        if (!title) return;

        setTitle(() => '');

        onSave({
            title
        });
    }

    return (
        <View style={styles.form}>
            <TextInput
            placeholder="Escreva sua tarefa"
            style={styles.formInput}
            mode="outlined"
            value={title}
            onChangeText={setTitle}
            autoFocus
            returnKeyType="done"
            enablesReturnKeyAutomatically
            onSubmitEditing={handleSaveTask}
            blurOnSubmit={false}
            theme={theme} 
            />
            <Button
            disabled={!title}
            style={styles.formSaveButton}
            mode='contained'
            onPress={handleSaveTask}>
                Salvar
            </Button>
        </View>
    );
}

export default memo(TaskForm);
