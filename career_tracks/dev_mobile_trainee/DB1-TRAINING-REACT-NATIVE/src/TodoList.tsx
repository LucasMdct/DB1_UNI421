import react, { useRef, useState } from 'react';
import { FlatList, Linking, ListRenderItem, SafeAreaView, StyleSheet, View, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-paper';
import { TaskType } from './types';
import TaskItem from './TaskItem';
import TaskForm, { FormValuesType } from './TaskForm';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'whitesmoke',
        alignItems: 'center',
    },
    topo: {
        zIndex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        width: '95%',
        marginTop: 30,
        height: 80,
        borderRadius: 12,
        backgroundColor: 'white',
        shadowColor: "#333",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,

    },
    screenTitle: {
        textAlign: 'left',
        fontSize: 20,
        lineHeight: 26,
        color: 'black',
        fontWeight: 'bold',
    },
    view: {
        marginTop: 10,
        backgroundColor: 'green',
        borderRadius: 10,
        borderColor: 'green',
        borderWidth: 1,
        width: "95%",
        flex: 1,
        textAlign: 'left',

        shadowColor: "whitesmoke",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    flatlist: {
        backgroundColor: "whitesmoke",
        marginTop: 8,
        marginBottom: 8,
        paddingHorizontal: 40,
        paddingBottom: 5,

    },
    footerMessage: {
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
    },
    footerMessageText: {
        fontSize: 12,
        color: "black",
        fontWeight: "bold",
    },
});

const INITIAL_VALUES: TaskType[] = [
    {
        id: 1,
        title: 'Estudar JavaScript'
    },
    {
        id: 2,
        title: 'Estudar React-native'
    }
];

export default function TodoList() {
    const [lastTaskId, setLastTaskId] = useState(3);
    // const [taskList, setTaskList] = useState<TaskType[]>{INITIAL_VALUES} aqui o erro jovem {} no lugar de ();
    const [taskList, setTaskList] = useState<TaskType[]>(INITIAL_VALUES);


    const listRef = useRef<FlatList | null>(null);

    const handleRemovePress = (task: TaskType) => {
        setTaskList(prev => {
            const prevCopy = [...prev];
            const taskIndex = prevCopy.findIndex(t => t.id === task.id);
            prevCopy.splice(taskIndex, 1);
            return prevCopy;
        });
    }

    const renderTask: ListRenderItem<TaskType> = (record) => {
        return <TaskItem task={record.item} onRemovePress={handleRemovePress} />

    }

    const handleSaveTask = (formValues: FormValuesType) => {
        setTaskList(prev => [
            {
                id: lastTaskId,
                title: formValues.title,
            },
            ...prev,
        ]);

        setLastTaskId(prev => prev + 1);

        listRef.current?.scrollToOffset({
            offset: 0,
            animated: true,
        })

    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.topo}>
                <Text style={styles.screenTitle} variant='displaySmall'>
                    Bem Vindo ao Seu gerenciador de tarefas !.
                </Text>


            </View>


            <TaskForm onSave={handleSaveTask} />

            <View style={styles.view}>
                <FlatList
                    ref={listRef}
                    data={taskList}
                    renderItem={renderTask}
                    style={styles.flatlist} />
            </View>

            <View style={styles.footerMessage}>
                <Text style={styles.footerMessageText}>
                    <TouchableOpacity onPress={() => Linking.openURL('http://www.medeirosdev.cloud')}>
                        <Text style={styles.footerMessageText}>www.medeirosdev.cloud</Text>
                    </TouchableOpacity>
                </Text>
            </View>

        </SafeAreaView>
    );

}